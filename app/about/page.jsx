import Link from "next/link";
import { error } from "console";

export const metadata = {
  title: "About Page",
  description: "about page description",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function About() {
  //throw new Error("Not Today");
  return (
    <>
      <h1>About</h1>
      <Link href="/">Link To Home Page</Link>
    </>
  );
}
