import styles from "./footer.module.scss";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className="secondaryText">© 2023</p>
      <p className="secondaryText">Theme by Umer Shabir</p>
    </footer>
  );
}
