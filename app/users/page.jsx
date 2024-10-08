import getAllUsers from "./lib/getAllUsers";
import Link from "next/link";

export const metadata = {
  title: "Users List",
};

//server component the data will be requested as we build the app
export default async function UsersPage() {
  const usersData = getAllUsers();

  const users = await usersData;

  const content = (
    <section>
      <h2>
        <Link href="/">Back To Home</Link>
      </h2>
      <br />
      {users?.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );

  return content;
}
