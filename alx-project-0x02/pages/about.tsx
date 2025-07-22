import Head from 'next/head';
import Button from '@/components/common/Button';
import React from 'react';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <main className="p-8 text-center">
        <h1 className="text-2xl font-bold">About Us 👨‍💻</h1>
        <p className="mt-4 text-gray-700">This project is part of the ALX Software Engineering program.</p>
      
        <div className="space-x-4">
          <Button label="Small Btn" size="small" shape="rounded-sm" />
          <Button label="Medium Btn" size="medium" shape="rounded-md" />
          <Button label="Large Btn" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  );
}
