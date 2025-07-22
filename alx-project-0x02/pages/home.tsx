import Head from 'next/head';
import Card from '@/components/common/Card'; // Adjust path if alias not set
import React from 'react';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main className="p-8 space-y-8 text-center">
        <h1 className="text-2xl font-bold">Welcome to the Home Page 🏠</h1>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          <Card 
            title="First Card"
            content="This is the first card showcasing how reusable components work in Next.js."
          />

          <Card 
            title="Another Card"
            content="We can use the same Card component with different content. That's the beauty of reusable UI."
          />
        </div>
      </main>
    </>
  );
}
