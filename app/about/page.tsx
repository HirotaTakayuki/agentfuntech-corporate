import ButtonLink from '@/app/_components/ButtonLink';
import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
      <p className={styles.mission}>
        「テクノロジーの力で世界を変える」をミッションに掲げ、日々活動をしています。
      </p>
      <dl className={styles.info}>
        <dt className={styles.infoTitle}>社名</dt>
        <dd className={styles.infoDescription}>AgentFunTech</dd>
      </dl>
      <dl className={styles.info}>
        <dt className={styles.infoTitle}>設立</dt>
        <dd className={styles.infoDescription}>2021年9月</dd>
      </dl>
      <dl className={styles.info}>
        <dt className={styles.infoTitle}>所在地</dt>
        <dd className={styles.infoDescription}>
          〒140-0014
          <br />
          東京都品川区大井7-18-1
        </dd>
      </dl>
      <dl className={styles.info}>
        <dt className={styles.infoTitle}>代表者</dt>
        <dd className={styles.infoDescription}>廣田 峻之</dd>
      </dl>
      <dl className={styles.info}>
        <dt className={styles.infoTitle}>資本金</dt>
        <dd className={styles.infoDescription}>100万円</dd>
      </dl>
      <dl className={styles.info}>
        <dt className={styles.infoTitle}>沿革</dt>
        <dd className={styles.infoDescription}>2021年9月 会社設立</dd>
      </dl>
      <div className={styles.footer}>
        <h2 className={styles.message}>Members</h2>
        <p>私たちと共に働くメンバーをご紹介します。</p>
        <ButtonLink href="/members">メンバー紹介へ</ButtonLink>
      </div>
    </div>
  );
}
