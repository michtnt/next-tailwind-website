import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { GithubIcon, InstagramIcon, LinkedInIcon } from "../components/icons";

export default function Home() {
  return (
    <div className="min-h-screen pr-2 flex flex-col">
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <center>
          <code className="code-block">Software Engineer 👩🏻‍💻</code>
        </center>
        <h5>
          Hello, I'm <b>Mich</b>. I'm experimenting on{" "}
          <a href="https://nextjs.org">Next.js</a> to see what's the hype about
          and also learning <a href="https://tailwindcss.com/">TailwindCSS</a>{" "}
          while on it 👀
        </h5>

        <h5>
          Software Engineer. Love travelling and reading sci-fi books. Currently
          watching Twilight as my guilty pleasure. Team Jacob.
        </h5>

        <section className="space-x-4 flex justify-center">
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="social-icons bg-slate-700 hover:bg-slate-800"
          >
            <GithubIcon />
          </button>
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="social-icons bg-pink-600 hover:bg-pink-800"
          >
            <InstagramIcon />
          </button>
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="social-icons bg-sky-700 hover:bg-sky-800"
          >
            <LinkedInIcon />
          </button>
        </section>
      </Layout>
      <footer className="flex justify-center items-center no-underline text-inherit">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center no-underline text-inherit"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" className="ml-2 h-4" />
        </a>
      </footer>
    </div>
  );
}
