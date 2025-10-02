interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { cache: "force-cache" }
  );

  const post: Post = await res.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

/*export const getStaticPaths: GetStaticPaths = async () => {
  const paths = posts.map((post) => ({
    params: {
      id: post.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { postId } = context.params!;
  const post = posts.find((p) => p.id === Number(postId));

  return {
    props: {
      post,
    },
  };
};*/

export async function generateStaticParams() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    {
      cache: "force-cache",
    }
  );
  const posts: Post[] = await res.json();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
