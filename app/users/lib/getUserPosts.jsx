export default async function getUserPosts(userId) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
      { next: { revalidate: 60 } } // Revalidates the cache every 60 seconds
    );
  
    if (!res.ok) throw new Error("failed to fetch user");
    return res.json();
  }