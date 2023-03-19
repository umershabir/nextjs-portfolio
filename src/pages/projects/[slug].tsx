import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import CodeBlock from "@/components/CodeBlock";
import Image from "next/image";
import styles from "../../styles/Blogs.module.scss";
import Link from "next/link";
// post page
export default function PostPage(props: any) {
  return (
    <>
      <Head>
        <title>{props.slug}</title>
      </Head>
      <div className={styles.postPage}>
        <Link href="/projects" className={styles.postLink}>
          {"<-back"}
        </Link>

        <div className={styles.postIntro}>
          <Image
            src={props.frontmatter.cover_image}
            alt="blog-image"
            width={500}
            height={250}
          />
          <h1>{props.frontmatter.title}</h1>
          <small>{props.frontmatter.date}</small>
          <small>{props.frontmatter.tags}</small>
        </div>
        <ReactMarkdown components={CodeBlock}>{props.content}</ReactMarkdown>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("src", "projects"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
// getstatic props
export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const markdownWithMeta = fs.readFileSync(
    path.join("src", "projects", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
