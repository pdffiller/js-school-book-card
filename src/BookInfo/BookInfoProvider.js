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
      { context => <Component {...selector(context)} {...props} /> }
    </Consumer>
  );

  if (process.env.NODE_ENV !== 'production') {
    Connected.displayName = `connected(${
      Component.displayName || Component.name
    })`;
  }

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
    this.loadBook();
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

  getContext() {
    return {
      ...this.state,
      updateBook: this.updateBook
    };
  }

  render() {
    return (
      <Provider value={this.getContext()}>
        {this.props.children}
      </Provider>
    );
  }
}

export default BookInfoProvider;
