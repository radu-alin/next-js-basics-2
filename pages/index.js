import { Fragment } from 'react';
import { getFeaturedPosts } from '../lib/posts-util';

import FeaturedPosts from '../components/home-page/featured-posts/FeaturedPosts';
import Hero from '../components/home-page/hero/Hero';

function HomePage(props) {
  const { posts } = props;

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export default HomePage;

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
