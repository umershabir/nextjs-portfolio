import { useState } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { ContextConsumer, Context } from "../ContextAPI";
export default function Navbar() {
  // const [theme, setTheme] = useState("Dark");
  const pathname = usePathname();
  const { themeUpdate, theme } = useContext(Context);
  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <Link
          href={"/"}
          style={{
            fontWeight: "600",
            fontSize: "30px",
            color: theme == "Dark" ? "#000" : "#fff",
          }}
        >
          Umer Shabir
        </Link>
        <button onClick={() => themeUpdate()}>{theme}</button>
      </div>
      <div className={styles.navLinks}>
        <ul>
          <li>
            <Link
              href={"/blogs"}
              className={pathname.match(/blogs/) ? styles.active : undefined}
            >
              Blogs
            </Link>
          </li>
          <li>
            {/* <Link
              href={"/projects"}
              className={pathname.match(/projects/) ? styles.active : undefined}
            >
              Projects
            </Link> */}
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
              href="https://www.youtube.com/channel/UCz0rlgMITw0J6B53ImeGSQQ"
              target={"_blank"}
            >
              Youtube
            </a>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .active {
          color: #000 !important;
        }
      `}</style>
    </nav>
  );
}
