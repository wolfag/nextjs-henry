import React from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import Layout from '../../components/Layout';
import { getPost, getPostIds } from '../../libs/post';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Post({ post: { id, title, body } = {} }) {
  const route = useRouter();

  if (route.isFallback) {
    return (
      <Spinner animation='border' role='status' variant='dark'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    );
  }

  return (
    <Layout>
      <Card className='my-3 shadow'>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
          <Link href='/posts'>
            <Button variant='dark'>Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const paths = await getPostIds();

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params: { id } }) => {
  const post = await getPost(id);
  return {
    props: { post },
    revalidate: 1,
  };
};
