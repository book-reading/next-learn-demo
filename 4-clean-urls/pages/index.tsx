import React from 'react';
import Link from 'next/link';

import { Layout } from '../components/Layout';

interface PostLinkProps {
  id: string;
}

const PostLink: React.FunctionComponent<PostLinkProps> = (props: PostLinkProps) => (
  <li>
    <Link href="/post/[id]" as={`/post/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="Hello Next.js" />
      <PostLink id="Learn Next.js is awesome" />
      <PostLink id="Deploy apps with Zeit" />
    </ul>
  </Layout>
);

export default IndexPage;
