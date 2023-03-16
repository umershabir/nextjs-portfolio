import styles from "./Navbar.module.scss";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <h1 style={{ fontWeight: "600", fontSize: "30px" }}>Umer Shabir</h1>
        <p>Dark</p>
      </div>
      <div className={styles.navLinks}>
        <ul>
          <li>
            <Link href={"/blog"}>Blogs</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">GitHub</a>
          </li>
          <li>
            <a href="/">Youtube</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
