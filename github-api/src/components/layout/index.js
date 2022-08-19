import React, { Children } from 'react'
import Header from '../header';

function Layout({children}) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}

export default Layout
