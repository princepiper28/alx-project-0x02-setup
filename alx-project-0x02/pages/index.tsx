import Head from 'next/head';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to ALX Next.js Project</title>
      </Head>
      <Header />
      <main className="p-8 text-center">
        <h2 className="text-xl font-semibold">Welcome to ALX Project 0x02 🚀</h2>
        <p className="mt-4 text-gray-700">This is a basic Next.js + TypeScript + Tailwind CSS setup.</p>
      </main>
    </>
  );
}
