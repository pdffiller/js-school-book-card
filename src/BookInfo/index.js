import React from 'react';
import BookCard from './BookCard';
import BookInfoForm from './BookInfoForm';
import { updateBook, fetchBook } from './book';

const BI_MODE_VIEW = 'view';
const BI_MODE_EDIT = 'edit';
const BI_MODE_LOAD = 'load';

const isView = mode => (
  mode === BI_MODE_VIEW
);

const isEdit = mode => (
  mode === BI_MODE_EDIT
);

const isLoad = mode => (
  mode === BI_MODE_LOAD
);

class BookInfo extends React.Component {
  state = {
    mode: BI_MODE_LOAD,
    book: null
  }

  toggleView = () => this.setState(
    ({ mode }) => ({
      mode: mode === BI_MODE_VIEW
        ? BI_MODE_EDIT
        : BI_MODE_VIEW
    })
  );

  handleBookChange = data => {
    this.setState(
      updateBook(data)
    );
  }

  loadBook() {
    const { url } = this.props;
    fetchBook(url)
      .then(this.handleBookChange)
      .then(
        () => this.setState({
          mode: BI_MODE_VIEW
        })
      )
  }

  componentDidMount() {
    this.loadBook();
  }

  render() {
    const { book, mode } = this.state;
    const handlers = {
      toggleView: this.toggleView,
      onChange: this.handleBookChange,
    }
    return (
      isView(mode) ? <BookCard {...book} {...handlers} /> :
      isEdit(mode) ? <BookInfoForm {...book} {...handlers} /> :
      isLoad(mode) ? 'Loading ...' :
      null
    );
  }
}

export default BookInfo;
