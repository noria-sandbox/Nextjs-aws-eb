import Head from "next/head";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>NextJS Sanbox - AWS EB</title>
        <meta
          name="description"
          content="Deployment of NextJS App in AWS through ElasticBeanstalk"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <main className="w-screen h-screen">
        <Dashboard />
      </main>
    </div>
  );
}
