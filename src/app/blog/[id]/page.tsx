type Props = { params: { id: string } };

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

export default async function BlogPost({ params }: Props) {
  const post = await getPost(params.id);

  return (
    <div style={{ padding: 24 }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
