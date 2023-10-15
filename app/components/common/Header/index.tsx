import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href={"/"}>
        <Image src="/img/logo.svg" width={60} height={58} alt="PIE Logo" />
      </Link>
    </div>
  );
}
