import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Layout from '../../components/Layout';
import { getRandomJoke } from '../../libs/joke';
import Link from 'next/link';
import { getBooks } from '../../libs/book';

export default function Joke({ books }) {
  return (
    <Layout>
      {books.map(({ bookName, bookContent }, index) => {
        return (
          <Card key={index} className='my-3 shadow'>
            <Card.Body>
              <Card.Title>{bookName}</Card.Title>
              <Card.Text>{bookContent}</Card.Text>
              <Link href='/'>
                <Button variant='dark'>Back</Button>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const books = await getBooks();

  return {
    props: { books },
  };
};
