import Logo from "../assets/Logo.png";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        className={styles.headerImage}
        src={Logo}
        alt="Logo da aplicação todo"
      />
    </header>
  );
}
