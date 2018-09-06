import React from 'react';
import renderer from 'react-test-renderer';
import BookCard from './BookCard';

describe('<BookCard>', () => {
  it('should renders without crashing', () => {
    const bookCardElement = renderer.create(
      <BookCard
        title="Happy"
        thumbnail="img.jpg"
        authors={['Dima']}
        year={2018}
      />
    );
  });

  it.skip('should renders without crashing if no props are passed', () => {
    const bookCardElement = renderer.create(
      <BookCard />
    );
  });

  it('should renders correctly for new books', () => {
    const bookCardElement = renderer.create(
      <BookCard
        title="Happy"
        thumbnail="img.jpg"
        authors={['Dima']}
        year={2018}
      />
    );

    expect(
      bookCardElement
    ).toMatchSnapshot();
  });

  it('should renders correctly for old books', () => {
    const bookCardElement = renderer.create(
      <BookCard
        title="Happy"
        thumbnail="img.jpg"
        authors={['Dima']}
        year={2000}
      />
    );

    expect(
      bookCardElement
    ).toMatchSnapshot();
  });
});