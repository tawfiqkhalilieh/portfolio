import Link from 'next/link'
import styles from './menubar.module.scss'

type MenuBarProps = {
  activeTab: "Home" | "Work"
}

export function VMenuBar(props: MenuBarProps) {
  return (
    <nav className={styles.menuBar}>
      <Link href={`/`}>
        <a className={styles.title}>
          <div className={styles.squareInitials}>
            taw
          </div>
          <h3 className={styles.name}>
            Tawfiq Khalilieh
          </h3>
        </a>
      </Link>
      <Link href={`/`}>
        <a className={styles.tab}>
          <h3 style={props.activeTab === "Home" ? {color: "#00FF00"} : {color: "#E76161"}}>
            Home
          </h3>
        </a>
      </Link>
      <Link href={`/work`}>
        <a className={styles.tab}>
          <h3 style={props.activeTab === "Work" ? {color: "#00FF00"} : {color: "#E76161"}}>
            Work
          </h3>
        </a>
      </Link>
    </nav>
  )
}