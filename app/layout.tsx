import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Home Page description",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav>
          <h1>My Navbar </h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
