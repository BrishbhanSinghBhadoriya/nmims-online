'use client'

import styles from '@/styles/hero.module.css'
import EnquiryForm from './enquiryform'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.mobileBanner} />
      
      <div className={styles.container}>
        
        {/* Empty space (image already has content) */}
        <div className={styles.leftSpace}></div>

        {/* Enquiry Form */}
        <EnquiryForm />

      </div>

    </section>
  )
}