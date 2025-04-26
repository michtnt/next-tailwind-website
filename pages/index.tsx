import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { GithubIcon, LinkedInIcon } from '../components/icons';
import { getSortedPostsData } from '../utils/posts';
import Link from 'next/link';
import Date from '../components/date';
import MediumIcon from '../components/icons/MediumIcon';

export default function Home({ posts }) {
  return (
    <div className="min-h-screen pr-2 flex flex-col">
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        {/* <center>
          <code className="code-block">/三三ᕕ( ᐛ )ᕗ/</code>
        </center> */}
        <h5>
          Hello, I'm <b>Michelle</b>. Australian-based Software Engineer. I
          enjoy building things that helps to make human life easier.
        </h5>

        <h5>
          I love to experience new things, travel, videography, writing and I
          try my best to go exercise regularly.
        </h5>

        <center>
          <h5>📍🇦🇺🇯🇵🇹🇭🇮🇩🇳🇿🇲🇾🇸🇬🇭🇰</h5>
        </center>

        <section className="space-x-6 flex justify-center pt-6">
          <a
            className="social-icons bg-slate-700 hover:bg-slate-800"
            href="https://github.com/michtnt"
            target="_blank"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/michelletanoto/"
            className="social-icons bg-sky-700 hover:bg-sky-800"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://michelletanoto.medium.com/"
            className="social-icons bg-zinc-700 hover:bg-zinc-800"
            target="_blank"
          >
            <MediumIcon />
          </a>
        </section>

        <section className="pt-px space-y-4">
          <h3>Blog</h3>
          <ul className="list-none p-0 m-0">
            {posts.map(({ id, date, title }) => (
              <li className="mb-5 flex flex-col" key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <small className="text-neutral-400">
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
      {/* <footer className="flex justify-center items-center no-underline text-inherit">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center no-underline text-inherit dark:text-white"
        >
          More blogs entry could be found in Medium :)
        </a>
      </footer> */}
    </div>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}
