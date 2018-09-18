import React from 'react';
import BookCard from './BookCard';
import BookInfoForm from './BookInfoForm';
import BookInfoProvider from './BookInfoProvider';

const BI_MODE_VIEW = 'view';
const BI_MODE_EDIT = 'edit';

const isView = (status, mode) => (
  status === 'ready' &&
  mode === BI_MODE_VIEW
);

const isEdit = (status, mode) => (
  status === 'ready' &&
  mode === BI_MODE_EDIT
);

class BookInfo extends React.Component {
  state = {
    mode: BI_MODE_VIEW,
  }

  toggleView = () => this.setState(
    ({ mode }) => ({
      mode: mode === BI_MODE_VIEW
        ? BI_MODE_EDIT
        : BI_MODE_VIEW
    })
  );

  render() {
    const { mode } = this.state;
    const { id } = this.props;
    const url = `https://www.googleapis.com/books/v1/volumes/${id}`;
    return (
      <BookInfoProvider url={url}>
        <BookInfoProvider.Consumer>
          {({ status }) => (
            isView(status, mode) ? <BookCard toggleView={this.toggleView} /> :
            isEdit(status, mode) ? <BookInfoForm toggleView={this.toggleView} /> :
            status === 'loading' ? 'Loading ...' :
            null
          )}
        </BookInfoProvider.Consumer>
      </BookInfoProvider>
    );
  }
}

export default BookInfo;
