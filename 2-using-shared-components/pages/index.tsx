import React from 'react';
import { withLayout } from '../components/Layout';

const IndexPage: React.FunctionComponent = () => (
  <p>Hello Next.js</p>
);

export default withLayout(IndexPage);
