import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

class Box extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {kc} = this.props;
    return (
      <div className="box row">
          <button className="btn btn-success" onClick={kc.logout}>Logout</button>
          <br/>
          <textarea rows="100" cols="100" readOnly={true} value={JSON.stringify(kc.tokenParsed.cx.userData, null, 2)}/>
        <hr/>
      </div>
    );
  }
}

Box.defaultProps = {
  books: [],
};

const mapStateToProps = state => ({
  kc: state.keycloak,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Box)
