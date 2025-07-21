import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main className="p-8 text-center">
        <h1 className="text-2xl font-bold">Welcome to the Home Page 🏠</h1>
      </main>
    </>
  );
}
