import Link from "next/link";
import styles from "@/styles/Blogs.module.scss";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
export default function Projects(props: any) {
  const { projects } = props;
  return (
    <>
      <Head>
        <title>Umer Shabir-Projects</title>
      </Head>
      <section className={styles.blogSec}>
        <Link href="/" className={styles.postLink}>
          {"<-back"}
        </Link>
        <div className={styles.blogs}>
          <h2>Projects</h2>
          <div className={styles.posts}>
            <ul>
              {projects.map(
                (
                  item: { slug: string; frontmatter: { title: string } },
                  index: number
                ) => (
                  <li key={index}>
                    <Link
                      href={"/projects/" + item.slug}
                      className="primaryText"
                    >
                      {item.frontmatter.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const projectFiles = fs.readdirSync(path.join("src", "projects"));
  const projects = projectFiles.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("src", "projects", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      projects: projects,
    },
  };
}
