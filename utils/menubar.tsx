import Link from "next/link";
import styles from "./menubar.module.scss";
type MenuBarProps = {
  activeTab: "Home" | "Work" | "Showcase" | "Contact" | undefined;
};

export function VMenuBar(props: MenuBarProps) {
  const main_color = "rgb(109, 226, 237)";
  const secondary_color = "rgb(161, 230, 161)";
  return (
    <>
      <nav className={styles.menuBar}>
        <Link href={`/`}>
          <a className={styles.title}>
            <h3 className={styles.name}>Tawfiq Khalilieh</h3>
          </a>
        </Link>

        <Link href={`/`}>
          <a className={styles.tab}>
            <h3
              style={
                props.activeTab === "Home"
                  ? { color: main_color }
                  : { color: secondary_color }
              }
            >
              Home
            </h3>
          </a>
        </Link>
        <Link href={`/work`}>
          <a className={styles.tab}>
            <h3
              style={
                props.activeTab === "Work"
                  ? { color: main_color }
                  : { color: secondary_color }
              }
            >
              Work
            </h3>
          </a>
        </Link>
        <Link href={`/showcase`}>
          <a className={styles.tab}>
            <h3
              style={
                props.activeTab === "Showcase"
                  ? { color: main_color }
                  : { color: secondary_color }
              }
            >
              Showcase
            </h3>
          </a>
        </Link>
        <Link href={`/contact`}>
          <a className={styles.tab}>
            <h3
              style={
                props.activeTab === "Contact"
                  ? { color: main_color }
                  : { color: secondary_color }
              }
            >
              Contact
            </h3>
          </a>
        </Link>
      </nav>
    </>
  );
}
