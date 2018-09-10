import React from 'react';


class BookInfoEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.book.id,
      title: props.book.title,
      authors: props.book.authors,
      year: props.book.year,
    };
  }

  changeTitle = ({ target }) => this.setState({
    title: target.value,
  })

  changeAuthors = ({ target }) => this.setState({
    authors: target.value.split(/,\s*/),
  });

  changeYear = ({ target }) => this.setState({
    year: +target.value,
  });

  handleSubmit = event => {
    event.preventDefault();
    const { onChange, onViewModeClick } = this.props;
    if (typeof onChange === 'function') {
      onChange(this.state);
    }
    onViewModeClick();
  }

  render() {
    const { title, authors, year } = this.state;
    const { onViewModeClick } = this.props;
    return (
      <div className="col-md-4">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter book title"
              onChange={this.changeTitle}
              value={title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Authors</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter enter authors (split with comma)"
              onChange={this.changeAuthors}
              value={authors.join(', ')}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Year</label>
            <input
              type="number"
              min={1900}
              max={2018}
              className="form-control"
              placeholder="Enter publishing year"
              onChange={this.changeYear}
              value={year}
              onKeyDown={
                event => event.preventDefault()
              }
            />
          </div>
          <button
            type="reset"
            className="btn btn-secondary mb-2"
            onClick={onViewModeClick}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary mb-2">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BookInfoEditor;
