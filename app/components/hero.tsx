'use client'

import styles from '@/styles/hero.module.css'
import EnquiryForm from './enquiryform'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Center Image and Text Content */}
        <div className={styles.imageContent}>
          <div className={styles.textContent}>
            <h1 className={styles.mainTitle}>MBA Online</h1>
            <p className={styles.subTitle}>One Degree, Unlimited opportunities</p>
            <p className={styles.feeInfo}>Fee: 55,000/- Semester wise</p>
          </div>
          <img src="/banner4.jpg" alt="Student" className={styles.womanImage} />
        </div>

        {/* Right Side Enquiry Form */}
        <div className={styles.formContent}>
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}