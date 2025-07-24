import { GetStaticProps } from "next";
import { PostProps } from "@/interfaces";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
      <Header />
      <main className="p-6 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Our Posts</h1>
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
              id={post.id}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 60, // Optional: regenerate every 60 seconds
  };
};
