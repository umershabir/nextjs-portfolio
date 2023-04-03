import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import CodeBlock from "@/components/CodeBlock";
import Image from "next/image";
import styles from "../../styles/Blogs.module.scss";
import Link from "next/link";
import authorImage from "public/author.jpg";
// post page
export default function PostPage(props: any) {
  console.log(authorImage);
  return (
    <>
      <Head>
        <title>{props.slug}</title>
      </Head>
      <div className={styles.postPage}>
        <Link href="/blogs" className={styles.postLink}>
          {"<-back"}
        </Link>
        <div className={styles.postIntro}>
          <h2>{props.frontmatter.title}</h2>
          <div className={styles.author}>
            <Image
              src={authorImage.src}
              alt="author-image"
              width={50}
              height={50}
              style={{ borderRadius: 50 }}
            />
            <small>
              by <Link href={"/"}>Umer Shabir</Link>
            </small>
          </div>
          <small>{props.frontmatter.date}</small>
          <small>{props.frontmatter.tags}</small>
          <Image
            src={props.frontmatter.cover_image}
            alt="blog-image"
            width={500}
            height={250}
          />
          <span>
            <h3>Introduction</h3>
            <p className="text2">{props.frontmatter.description}</p>
          </span>
        </div>
        <ReactMarkdown components={CodeBlock}>{props.content}</ReactMarkdown>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("src", "posts"));
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
    path.join("src", "posts", slug + ".md"),
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
