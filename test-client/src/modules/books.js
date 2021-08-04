import axios from 'axios/index';

const LIST_BOOKS = 'LIST_BOOKS';

export default (state = [], action) => {
  switch (action.type) {
    case LIST_BOOKS:
      return  action.payload;

    default:
      return state;
  }
};

export const allBooks = () => (
  dispatch => {
//    axios.get('http://localhost:5600/demo/books')
//      axios.get('http://localhost:7531/demo/books')
//      .then(response => {
        //dispatch({
      //    type: LIST_BOOKS,
        //  payload: response.data
        //})
//      })
  }
);

export const addBook = book => (
  (dispatch, getState) => {
    console.log(`${getState().keycloak.tokenParsed.preferred_username} added the book ${book.title}`);
//    axios.get('http://localhost:5600/demo/books')
//    axios.get('http://localhost:7531/demo/books/' + book.title)
//    axios.get('http://localhost:8080/api/'+ book.author)
    axios.get('https://bo.dev.carlsbergwebservices.com/'+ book.author)
//    axios.get('http://localhost:8080/api/users?searchExpression=juan')
      .then(() => {
        //dispatch(allBooks());
      })
  }
);

export const deleteBook = book => (
  (dispatch, getState) => {
    console.log(`${getState().keycloak.tokenParsed.preferred_username} deletes the book ${book.title}`);
//    axios.delete('http://localhost:5600/demo/books' + book.id)
    axios.delete('http://localhost:7531/demo/books' + book.id)
      .then(() => {
        //dispatch(allBooks());
      })
  }
);
