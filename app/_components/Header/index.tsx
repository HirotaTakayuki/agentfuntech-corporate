import Menu from '@/app/_components/Menu';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/agentfuntech_cor.png"
          alt="AgentFunTech"
          className={styles.logo}
          width={1457}
          height={248}
          priority
        />
      </Link>
      <Menu />
    </header>
  );
}
