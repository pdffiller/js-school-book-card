export const createBook = () => ({
  id: null,
  title: '',
  authors: [],
  thumbnail: '',
  year: new Date().getFullYear(),
});

export const getBookInfo = ({ id, volumeInfo }) => ({
  id,
  title: volumeInfo.title,
  authors: volumeInfo.authors,
  thumbnail: volumeInfo.imageLinks.thumbnail,
  year: +volumeInfo.publishedDate.slice(0, 4),
});

export const updateBookInfo = withData => ({ book }) => ({
  book: { ...book, ...withData },
});

export const fetchBook = url => fetch(url)
  .then(res => res.json())
  .then(getBookInfo);