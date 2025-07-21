import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <main className="p-8 text-center">
        <h1 className="text-2xl font-bold">About Us 👨‍💻</h1>
        <p className="mt-4 text-gray-700">This project is part of the ALX Software Engineering program.</p>
      </main>
    </>
  );
}
