import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../utils/posts";
import Date from "../../components/date";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="space-y-4">
        <h2 className="text-2xl">{postData.title}</h2>
        <div className="text-neutral-400">
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false, // any paths not returned by getStaticPaths will result in a 404 page.
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
