import { Button, Jumbotron } from 'react-bootstrap';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <Jumbotron>
        <h1>My app</h1>
        <p>This is my next app</p>
        <p>
          <Link href='/posts'>
            <Button variant='primary'>Posts</Button>
          </Link>
        </p>
      </Jumbotron>
    </Layout>
  );
}
