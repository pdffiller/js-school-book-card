import React from 'react';
import { fetchBook, updateBook } from './book';

const initialState = {
  book: null,
  status: 'not-ready',
};

const { Provider, Consumer } = React.createContext(initialState);

const idX = x => x;

export const connect = (selector = idX) => Component => {
  const Connected = props => (
    <Consumer>
      { context => <Component {...props} {...selector(context)} />}
    </Consumer>
  );

  Connected.displayName = `connected(${Component.displayName || Component.name})`;

  return Connected;
}

class BookInfoProvider extends React.Component {
  static Consumer = Consumer

  state = initialState

  loadBook() {
    const { url } = this.props;

    this.setState({
      status: 'loading'
    });

    fetchBook(url)
      .then(
        book => this.setState({
          book,
          status: 'ready',
        })
      )
  }

  componentDidMount() {
    this.loadBook()
  }

  componentDidUpdate(prevProps) {
    const { url } = this.props;
    if (url !== prevProps.url) {
      this.loadBook();
    }
  }

  updateBook = data => {
    this.setState(updateBook(data));
  }

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          updateBook: this.updateBook
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default BookInfoProvider;
