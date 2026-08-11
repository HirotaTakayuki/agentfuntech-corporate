import ButtonLink from '@/app/_components/ButtonLink';
import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        AgentFunTechでは、共に挑戦する仲間を募集しています。
        <br />
        募集職種・応募方法などの詳細は、下記お問い合わせよりご連絡ください。
      </p>
      <div className={styles.footer}>
        <ButtonLink href="/contact">お問い合わせへ</ButtonLink>
      </div>
    </div>
  );
}
