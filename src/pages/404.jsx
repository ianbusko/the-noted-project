import React from 'react';
import Layout from '../components/layout';
import withMetaData from '../layouts/withMetadata';

const LayoutWithMetaData = withMetaData(Layout);

const NotFoundPage = () => (
  <LayoutWithMetaData isPlain>
    <section>
      {/* eslint-disable-next-line */}
      Whoops! It looks like the page you searched for doesn't exist.
    </section>
  </LayoutWithMetaData>
);

export default NotFoundPage;
