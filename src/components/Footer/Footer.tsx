import styles from "./footer.module.scss";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="/" className="secondaryText">
        muhammadumershabir@gmail.com
      </a>
      <p className="secondaryText">Theme by Umer Shabir</p>
    </footer>
  );
}
