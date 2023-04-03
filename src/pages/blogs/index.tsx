import styles from "@/styles/Blogs.module.scss";
import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
export default function Blogs(props: any) {
  return (
    <>
      <Head>
        <title>Umer Shabir-Blogs</title>
      </Head>
      <section className={styles.blogSec}>
        <Link href="/" className={styles.postLink}>
          {"<-back"}
        </Link>
        <div className={styles.blogs}>
          <h2>Blogs</h2>
          <div className={styles.posts}>
            <ul>
              {props.posts
                .sort(
                  (a: any, b: any) =>
                    parseInt(a.frontmatter.date) - parseInt(b.frontmatter.date)
                )
                .map(
                  (
                    item: {
                      slug: string;
                      frontmatter: { title: string; date: string };
                    },
                    index: number
                  ) => (
                    <li key={index}>
                      <Link
                        href={"/blogs/" + item.slug}
                        className="primaryText"
                      >
                        {item.frontmatter.title}
                      </Link>
                      <p className="secondaryText">{item.frontmatter.date}</p>
                    </li>
                  )
                )}
            </ul>
          </div>
        </div>
        {/* <div className={styles.blogs}>
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
      </div> */}
      </section>
    </>
  );
}
export async function getStaticProps() {
  const postFiles = fs.readdirSync(path.join("src", "posts"));
  const posts = postFiles.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("src", "posts", filename),
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
      posts: posts,
    },
  };
}
