import React from "react";

export default class BookForm extends React.Component {

  handleSubmit = event => {
    event.preventDefault();
    const author = this.refs.author.value.trim();
    if (!author) {
      return;
    }
    this.props.onBookSubmit({author: author});
    this.refs.author.value = '';
  };

  render() {
    return (
      <div className="col-sm-6">
        <form className="bookForm" onSubmit={this.handleSubmit}>
          <h3>Call operation:</h3>
          <div className="form-group">
            <label htmlFor="author">Parameter A</label>
            <input type="text" id="author" ref="author" className="form-control" placeholder="Path"/>
          </div>
          <button type="submit" className="btn btn-primary">Go</button>
        </form>
      </div>
    );
  }
}
