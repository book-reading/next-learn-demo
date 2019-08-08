import React, { PropsWithChildren } from 'react';
import { Header } from './Header';

const layoutStyle: React.CSSProperties = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

export const Layout: React.FunctionComponent = (props: PropsWithChildren<any>) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);
