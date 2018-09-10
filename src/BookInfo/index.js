import React from 'react';
import BookCard from './BookCard';
import BookInfoEditor from './BookIndoEditor';

export const BI_MODE_VIEW = 'view';
export const BI_MODE_EDIT = 'edit';

class BookInfo extends React.Component {
  state = {
    mode: BI_MODE_VIEW
  }

  toggleMode = () => this.setState(
    ({ mode }) => ({
      mode: mode === BI_MODE_VIEW
        ? BI_MODE_EDIT
        : BI_MODE_VIEW,
    }),
  )

  render() {
    const { mode } = this.state;
    const { book, onChange } = this.props;
    return (
      mode === BI_MODE_VIEW
        ? <BookCard {...book} onViewModeClick={this.toggleMode} />
        : <BookInfoEditor
            book={book}
            onViewModeClick={this.toggleMode}
            onChange={onChange}
          />
    );
  }
}

export default BookInfo;
