import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {Router, Route, Switch} from "react-router-dom";
import {routerMiddleware} from "react-router-redux";
import thunk from "redux-thunk";
import createHistory from 'history/createBrowserHistory';
import rootReducer from "./modules";
import Box from "./components/Box";
import Keycloak from "keycloak-js";
import axios from "axios";

const history = createHistory();
const middleware = [
  thunk,
  routerMiddleware(history),
];
const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

const app = (
  <Provider store={store}>
    <Router history={history}>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Box}/>
        </Switch>
      </div>
    </Router>
  </Provider>
);

const kc = new Keycloak('/keycloak.json');
let kcLogin = kc.login;
kc.login = (options) => {
  options.idpHint = 'x-cx-azure';
  kcLogin(options);
};
kc.init({onLoad: "login-required", promiseType: 'native'})
  .then(authenticated => {
    if (authenticated) {
      store.getState().keycloak = kc;
      ReactDOM.render(app, document.getElementById("app"));
    }
  });

axios.interceptors.request.use(config => (
  kc.updateToken()
    .then(() => {
      config.headers.Authorization = 'Bearer ' + kc.token;
      return Promise.resolve(config)
    })
    .catch(kc.login)
));
