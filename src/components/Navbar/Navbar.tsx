import styles from "./Navbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <Link href={"/"} style={{ fontWeight: "600", fontSize: "30px" }}>
          Umer Shabir
        </Link>
        <p>Dark</p>
      </div>
      <div className={styles.navLinks}>
        <ul>
          <li>
            <Link
              href={"/blogs"}
              className={pathname == "/blogs" ? styles.active : undefined}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href={"/projects"}
              className={pathname == "/projects" ? styles.active : undefined}
            >
              Projects
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/umershabir/" target={"_blank"}>
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/umershabir" target={"_blank"}>
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCtnIzSE5BDjABTqmvpbgPCQ"
              target={"_blank"}
            >
              Youtube
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
