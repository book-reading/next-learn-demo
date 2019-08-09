import React from 'react';
import Link from 'next/link';

const linkStyle: React.CSSProperties = {
  marginRight: 15
};

export const Header: React.FunctionComponent = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);
