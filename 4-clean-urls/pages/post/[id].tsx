import React from 'react';
import { useRouter, NextRouter } from 'next/router';

import { Layout } from '../../components/Layout';

const PostPage: React.FunctionComponent = () => {
  const router: NextRouter = useRouter();

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
}

export default PostPage;
