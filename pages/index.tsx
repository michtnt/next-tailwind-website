import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { GithubIcon, InstagramIcon, LinkedInIcon } from "../components/icons";
import { getSortedPostsData } from "../utils/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ posts }) {
  return (
    <div className="min-h-screen pr-2 flex flex-col">
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <center>
          <code className="code-block">/三三ᕕ( ᐛ )ᕗ/</code>
        </center>
        <h5>
          Hello, I'm <b>Michelle</b>. Currently Australian-based. Software Engineer. Focused on (not limited to) product design, quality engineering, user experience, distributed systems and solution design.
        </h5>

        <h5>
          I love to experience new things, travel, videography, writing and I try my best to go exercise regularly.
        </h5>

         <center>
           <h5>📍🇦🇺🇹🇭🇮🇩🇳🇿🇲🇾🇸🇬🇭🇰</h5>
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
            href="https://instagram.com/tnt.mich"
            className="social-icons bg-pink-600 hover:bg-pink-800"
            target="_blank"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/michelletanoto/"
            className="social-icons bg-sky-700 hover:bg-sky-800"
            target="_blank"
          >
            <LinkedInIcon />
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
      <footer className="flex justify-center items-center no-underline text-inherit">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center no-underline text-inherit dark:text-white"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" className="ml-2 h-4" />
        </a>
      </footer>
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
