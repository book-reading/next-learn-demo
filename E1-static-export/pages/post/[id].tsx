import React from 'react';
import { NextPage, NextPageContext } from 'next';
import fetch from 'isomorphic-unfetch';

import { Show } from '../../models/Show';
import { Layout } from '../../components/Layout';

interface PostPageProps {
  show: Show;
}


const PostPage: NextPage<PostPageProps> = (props: PostPageProps) => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} />
  </Layout>
);

PostPage.getInitialProps = async function (ctx: NextPageContext): Promise<PostPageProps> {
  const { id } = ctx.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
}

export default PostPage;
