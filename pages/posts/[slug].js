import PostContent from '../../components/posts/post-detail/post-content/PostContent';
import { getPostData, getPostsFiles, removeFileExtension } from '../../lib/posts-util';

function PostDetailPage(props) {
  const { post } = props;

  return <PostContent post={post} />;
}

export default PostDetailPage;

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => removeFileExtension(fileName));

  const pathsArr = slugs.map((slug) => ({
    params: {
      slug: slug,
    },
  }));

  return {
    paths: pathsArr,
    fallback: false,
  };
}
