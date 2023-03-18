import Link from "next/link";
import styles from "@/styles/Blogs.module.scss";
export default function Projects() {
  return (
    <section className={styles.blogSec}>
      <div className={styles.blogs}>
        <h2>Projects</h2>
        <div className={styles.posts}>
          <ul>
            {["a", "b"].map((item, index) => (
              <li key={index}>
                <Link href={"/"} className="primaryText">
                  some project
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
