import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Layout from '../../components/Layout';
import { getRandomJoke } from '../../libs/joke';
import Link from 'next/link';

export default function Joke({ joke: { id, value } }) {
  return (
    <Layout>
      <Card className='my-3 shadow'>
        <Card.Body>
          <Card.Title>{id}</Card.Title>
          <Card.Text>{value}</Card.Text>
          <Link href='/'>
            <Button variant='dark'>Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const joke = await getRandomJoke();

  return {
    props: { joke },
  };
};
