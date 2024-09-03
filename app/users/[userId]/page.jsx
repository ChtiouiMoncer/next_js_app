import getUser from "../lib/getUser";
import getUserPosts from "../lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts"

//dynamic metadata
export async function generateMetadata({ params: { userId } }) {
  const userData = getUser(userId);
  const user = await userData;

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

export default async function UserPage({ params: { userId } }) {
  //Fetch data in Parallel
  const userData = getUser(userId);
  const userPostsData = getUserPosts(userId);

  //const [user, userPosts] = await Promise.all([userData, userPostsData]);
  const user = await userData
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} /> {/*promise prop passed to the UserPosts comp*/}
      </Suspense>
    </>
  );
}
