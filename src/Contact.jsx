import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <div className={styles.contactWrapper}>
        <h1 className={styles.contactTitle}>問い合わせフォーム</h1>
        <form action="">
          <div className={styles.contactItem}>
            <label htmlFor="" className={styles.contactLabel}>
              お名前
            </label>
            <div className={styles.wFull}>
              <input
                type="text"
                className={`${styles.wFull} ${styles.inputItem}`}
              />
            </div>
          </div>
          <div className={styles.contactItem}>
            <label htmlFor="" className={styles.contactLabel}>
              メールアドレス
            </label>
            <div className={styles.wFull}>
              <input
                type="email"
                className={`${styles.wFull} ${styles.inputItem}`}
              />
            </div>
          </div>
          <div className={styles.contactItem}>
            <label htmlFor="" className={styles.contactLabel}>
              本文
            </label>
            <div className={styles.wFull}>
              <textarea
                name=""
                id=""
                rows="8"
                className={`${styles.wFull} ${styles.inputItem} ${styles.contactTextarea}`}
              ></textarea>
            </div>
          </div>
          <div className={styles.contactButtonWrapper}>
            <button
              type="submit"
              className={`${styles.contactButton} ${styles.contactButtonSubmit}`}
            >
              送信
            </button>
            <button
              type="button"
              className={`${styles.contactButton} ${styles.contactButtonClear}`}
            >
              クリア
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
