import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const NAME = "Mich";
export const siteTitle = "Mich's Next.js Sample Website";

type LayoutProps = {
  children: React.ReactNode;
  home?: boolean;
};

export default function Layout({ children, home = false }: LayoutProps) {
  return (
    <div className="container flex-1 mx-auto max-w-xl pr-4 mt-12 mr-auto mb-24 space-y-4">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className="rounded-full"
              height={200}
              width={200}
              alt="profile-image"
            />
            <h1>{NAME}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className="rounded-full"
                height={150}
                width={150}
                alt="profile-image"
              />
            </Link>
            <h2>
              <Link href="/" className="text-inherit">
                {NAME}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main className="space-y-4">{children}</main>
      {!home && (
        <div className="mt-12">
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
