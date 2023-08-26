import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home({ globalProps }) {
  return (
    <Layout globalProps={globalProps}>
      <div className=""></div>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const globalProps = await response.json();

  const props = {
    globalProps,
  };

  return {
    props,
    revalidate: 1,
  };
}
