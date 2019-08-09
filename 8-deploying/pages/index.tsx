import React from 'react';
import Link from 'next/link';

import { Post } from '../models/Post';
import { Layout } from '../components/Layout';

function getPosts(): Post[] {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ];
}

interface PostLinkProps {
  post: Post;
}

const PostLink: React.FunctionComponent<PostLinkProps> = (props: PostLinkProps) => (
  <li>
    <Link href="/post/[id]" as={`/post/${props.post.id}`}>
      <a>{props.post.title}</a>
    </Link>

    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {
        getPosts().map(p => (
          <PostLink key={p.id} post={p} />
        ))
      }
    </ul>

    <style jsx>{`
      h1,
      a {
        font-family: 'Arial';
      }

      ul {
        padding: 0;
      }
    `}</style>
  </Layout>
);

export default IndexPage;
