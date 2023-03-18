import styles from "@/styles/Blogs.module.scss";
import Link from "next/link";
export default function Blogs() {
  return (
    <section className={styles.blogSec}>
      <div className={styles.blogs}>
        <h2>Blogs</h2>
        <div className={styles.posts}>
          <ul>
            {["a", "b"].map((item, index) => (
              <li key={index}>
                <Link href={"/"} className="primaryText">
                  some project
                </Link>
                <p className="secondaryText">02-03-2023</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.blogs}>
        <h2>Tags(1)</h2>
        <div className={styles.posts}>
          <ul>
            {["a", "b"].map((item, index) => (
              <li key={index}>
                <Link href={"/"} className="primaryText">
                  some project({"1"})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
