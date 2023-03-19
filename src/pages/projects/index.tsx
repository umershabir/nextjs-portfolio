import Link from "next/link";
import styles from "@/styles/Blogs.module.scss";
import { useContext } from "react";
import { ContextConsumer } from "@/components/ContextAPI";
export default function Projects() {
  let { projects } = useContext(ContextConsumer);

  return (
    <section className={styles.blogSec}>
      <div className={styles.blogs}>
        <h2>Projects</h2>
        <div className={styles.posts}>
          <ul>
            {projects.map(
              (item: { frontmatter: { title: string } }, index: number) => (
                <li key={index}>
                  <Link href={"/"} className="primaryText">
                    {item.frontmatter.title}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
