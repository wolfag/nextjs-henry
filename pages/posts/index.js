import Link from 'next/link';
import React from 'react';
import { Card } from 'react-bootstrap';
import Layout from '../../components/Layout';
import { getPosts } from '../../libs/post';

export default function Posts({ posts }) {
  return (
    <Layout>
      {posts.map(({ id, title, body }) => {
        return (
          <Card key={id}>
            <Card.Body>
              <Card.Title>{`${id}-${title}`}</Card.Title>
              <Card.Text>{body}</Card.Text>
              <Link href={`/posts/${id}`} passHref>
                <Card.Link>See more</Card.Link>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = await getPosts(15);
  return {
    props: { posts },
  };
};
