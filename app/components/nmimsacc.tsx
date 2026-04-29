'use client'

import Image from 'next/image'
import styles from '@/styles/nmimsacc.module.css'

export default function NmimsAcc() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Side: Orange background with woman */}
        <div className={styles.leftSide}>
          <div className={styles.whiteBox} />
          <div className={styles.purpleBox} />
          <div className={styles.womanWrapper}>
            <Image
              src="/bfr_img1.jpg"
              alt="Professional Woman"
              width={400}
              height={500}
              className={styles.womanImage}
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className={styles.rightSide}>
          <div className={styles.content}>
            <h2 className={styles.heading}>
              Elevate Your Career
              <span className={styles.underline} />
            </h2>
            
            <h3 className={styles.boldText}>
              An MBA program to launch your career to the next level!
            </h3>
            
            <p className={styles.description}>
              Get ready to take your career to the next level with NMIMS CDOE&apos;s MBA program. 
              Our five contemporary specialisations are designed for working professionals like you, 
              offering flexible learning options from expert faculty.
            </p>
          </div>
          
          {/* Background Icons/Graphics */}
          
        </div>

      </div>
    </section>
  )
}