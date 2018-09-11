const getBookInfo = ({ id, volumeInfo }) => ({
  id,
  title: volumeInfo.title,
  authors: volumeInfo.authors,
  thumbnail: volumeInfo.imageLinks.thumbnail,
  year: +volumeInfo.publishedDate.slice(0, 4),
});

export const updateBook = data => ({ book }) => ({ 
  book: { ...book, ...data }
});

export const fetchBook = url => (
  fetch(url)
    .then(res => res.json())
    .then(getBookInfo)
);
