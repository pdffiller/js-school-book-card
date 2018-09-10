import React from 'react';
import BookInfo from './BookInfo';
import { updateBookInfo, fetchBook } from './books';


class App extends React.Component {
  state = {
    book: null,
    loading: true,
  }

  changeBook = data => {
    this.setState(
      updateBookInfo(data)
    );
    this.setState({ loading: false });
  }

  loadBook() {
    const { bookUrl } = this.props;
    if (bookUrl == null) return;
    fetchBook(bookUrl).then(this.changeBook);
  }

  componentDidMount() {
    this.loadBook();
  }

  componentDidUpdate(prevProps) {
    const { bookUrl } = this.props;
    if (prevProps.bookUrl !== bookUrl) {
      this.loadBook();
    }
  }

  render() {
    const { book, loading } = this.state;
    return (
      <div className="container">
        <div className="row">
          { book && 
            <BookInfo
              book={book}
              onChange={this.changeBook}
            />
          }
          { loading && 'Loading ....' }
        </div>
      </div>
    );
  }
}

export default App;
