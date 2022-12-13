import { Fragment } from 'react';

import FeaturedPosts from '../components/home-page/featured-posts/FeaturedPosts';
import Hero from '../components/home-page/hero/Hero';

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
}

export default HomePage;
