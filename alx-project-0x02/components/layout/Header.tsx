import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold text-center mb-4">ALX Next.js Project</h1>
      <nav className="flex justify-center space-x-6">
        <Link href="/">
          <span className="hover:underline cursor-pointer">Home</span>
        </Link>
        <Link href="/home">
          <span className="hover:underline cursor-pointer">/home</span>
        </Link>
        <Link href="/about">
          <span className="hover:underline cursor-pointer">/about</span>
        </Link>
        <Link href="/posts">
          <span className="hover:underline cursor-pointer">/posts</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

