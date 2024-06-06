import styles from "./footer.module.scss";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="mail:muhammadumershabir@gmail.com" className="secondaryText">
        muhammadumershabir@gmail.com
      </a>
      <a href="https://wa.me/+923093961696" className="secondaryText">
        wa +923093961696
      </a>
      {/* <p className="secondaryText">Theme by Umer Shabir</p> */}
    </footer>
  );
}
