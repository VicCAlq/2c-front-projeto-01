import styles from "../styles/main.js";

export default function Menu({ children }) {
  return <div style={styles.menu.container}>{children}</div>;
}