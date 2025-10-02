import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function BlogList() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    {
      next: { revalidate: 60 },
    }
  );
  const posts: Post[] = await res.json();
  return (
    <div>
      <h1>Blog list</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
