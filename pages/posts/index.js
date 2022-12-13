import { getAllPosts } from '../../lib/posts-util';

import AllPosts from '../../components/posts/all-posts/AllPosts';

function AllPostsPage(props) {
  const { posts } = props;

  return <AllPosts posts={posts} />;
}

export default AllPostsPage;

export function getStaticProps() {
  const featuredPosts = getAllPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
