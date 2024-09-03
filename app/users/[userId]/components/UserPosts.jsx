export default async function UserPosts({ promise }) {
  const posts = await promise; //wait for the 'userPostsData' promise to resolve

  const content = posts.map((post) => {
    return (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <br />
      </article>
    );
  });

  return content;
}
