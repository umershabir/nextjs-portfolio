import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>Umer Shabir</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={""}>
        <section className={styles.intro}>
          <h2>Hey!</h2>
          <p className="primaryText">
            I&apos;m Umer, JavaScript developer at Terafort based in Pakistan. I
            work to bring life into ideas. Let&apos;s make something great.{" "}
            <span className={styles.videoBtn}>see video description</span>
          </p>
        </section>
        <section className={styles.latest}>
          <div className={styles.heading}>
            <h3>Latest Blogs</h3>
            <Link href="/blogs" className="secondaryText">
              see all{" "}
            </Link>
          </div>
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
        </section>
        <section className={styles.latest}>
          <div className={styles.heading}>
            <h3>Latest Projects</h3>
            <Link href="/projects" className="secondaryText">
              see all{" "}
            </Link>
          </div>
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
        </section>
      </main>
    </>
  );
}
