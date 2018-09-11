import React from 'react';

class BookInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      authors: props.authors,
      year: props.year,
    }
  }

  changeTitle = ({ target }) => this.setState({
    title: target.value,
  })

  changeYear = ({ target }) => this.setState({
    year: +target.value,
  })

  changeAuthors = ({ target }) => this.setState({
    authors: target.value.split(/\s*,\s*/),
  })

  handleSubmit(event) {
    const { onChange, toggleView } = this.props;
    event.preventDefault();
    if (typeof onChange !== 'function') return;
    onChange(this.state);
    toggleView();
  }

  render() {
    const { title, authors, year } = this.state;
    const { toggleView } = this.props;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="bookTitle">Book Title</label>
          <input
            type="text"
            className="form-control"
            id="bookTitle" 
            placeholder="Enter a book title"
            value={title}
            onChange={this.changeTitle}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookAuthors">Authors</label>
          <input
            type="text"
            className="form-control"
            id="bookAuthors" 
            placeholder="Authors (separate with comma)"
            value={authors.join(', ')}
            onChange={this.changeAuthors}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookYear">Year</label>
          <input
            type="number"
            className="form-control"
            id="bookYear" 
            value={year}
            onChange={this.changeYear}
          />
        </div>
        <div className="form-group">
          <button
            type="reset"
            onClick={toggleView}
            className="btn btn-danger"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-success">
            Save
          </button>
        </div>
      </form>
    );
  }
}

export default BookInfoForm;
