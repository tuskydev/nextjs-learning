import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Young nigga!</title>
      </Head>

      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <div>
        <img src="/favicon.ico" alt="young pic bruh" />
      </div>
    </Layout>
  );
}

export default FirstPost;
