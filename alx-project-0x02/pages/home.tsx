import Head from 'next/head';
import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [cards, setCards] = useState([
    {
      title: 'First Card',
      content: 'This is the first card showcasing how reusable components work in Next.js.',
    },
    {
      title: 'Another Card',
      content: "We can use the same Card component with different content. That's the beauty of reusable UI.",
    },
  ]);

  const handleNewPost = (data: { title: string; content: string }) => {
    setCards((prev) => [...prev, data]);
  };

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <main className="p-8 space-y-8 text-center">
        <h1 className="text-2xl font-bold">Welcome to the Home Page 🏠</h1>

        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Post
        </button>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>

        <PostModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleNewPost}
        />
      </main>
    </>
  );
}

