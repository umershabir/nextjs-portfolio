import { useState } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { ContextConsumer, Context } from "../ContextAPI";
import Image from "next/image";
import umer from "../../../public/author.png";
export default function Navbar() {
  // const [theme, setTheme] = useState("Dark");
  const pathname = usePathname();
  const { themeUpdate, theme } = useContext(Context);
  return (
    <nav className={styles.nav}>
      <div className={styles.introSec}>
        <Image
          src={umer}
          width={50}
          className={styles.authAvatar}
          height={50}
          alt="Author Avatar"
        />
        <Link href={"/"} className={styles.authName}>
          Umer Shabir
        </Link>
        {/* <h1 className={styles.authName}>UMER SHABIR</h1> */}
        <p className={styles.infoText}>
          Served in the police for 5 years, learned programming, and now working
          as a full-stack developer at <a href="terafort.com">Terafort</a>,
          Worked on <a href="eshaafi.com">eShaafi</a> &{" "}
          <a href="aspireai.app">AspireAI</a> . Proficient in ReactJS, Python,
          Django, and AWS
          <div style={{ marginTop: "5px" }}>
            <a href="https://www.linkedin.com/in/umershabir/">Linkedin</a>{" "}
            <a href="https://github.com/umershabir" target={"_blank"}>
              GitHub
            </a>{" "}
            <a
              href="https://www.youtube.com/channel/UCz0rlgMITw0J6B53ImeGSQQ"
              target={"_blank"}
            >
              Youtube
            </a>
          </div>
          <div>
            <Link
              href={"/blogs"}
              className={pathname.match(/blogs/) ? styles.active : undefined}
            >
              Blogs
            </Link>{" "}
            {/* <a href="https://www.linkedin.com/in/umershabir/">Resume</a> */}
          </div>
          {/* <button onClick={() => themeUpdate()}>{theme}</button> */}
        </p>
      </div>
      {/* <div className={styles.title}>
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
          </li> */}
      {/* <li> */}
      {/* <Link
              href={"/projects"}
              className={pathname.match(/projects/) ? styles.active : undefined}
            >
              Projects
            </Link> */}
      {/* </li> */}
      {/* </ul>
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
          </li> */}
      {/* </ul> */}
      {/* // </div> */}
      {/* // <style jsx>{`
      //   .active {
      //     color: #000 !important;
      //   }
      // `}</style> */}
    </nav>
  );
}
