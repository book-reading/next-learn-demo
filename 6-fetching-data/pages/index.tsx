import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import { Show } from '../models/Show';
import { Layout } from '../components/Layout';


interface IndexPageProps {
  shows: Show[];
}

const IndexPage: NextPage<IndexPageProps> = (props: IndexPageProps) => (
  <Layout>
    <h1>Batman TV shows</h1>
    <ul>
      {
        props.shows.map(show => (
          <li key={show.id}>
            <Link href="/post/[id]" as={`/post/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))
      }
    </ul>
  </Layout>
);

IndexPage.getInitialProps = async function (): Promise<IndexPageProps> {
  const res: Response = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data: any[] = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
}

export default IndexPage;
