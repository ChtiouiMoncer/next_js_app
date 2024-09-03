import styles from "./styles.module.css";

export default function AboutLayout({ children }) { //layout will be applied to the page childrens
  return (
    <>
      <nav>About Navbar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
