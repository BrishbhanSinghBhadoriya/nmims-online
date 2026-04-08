'use client'

import Image from 'next/image'
import styles from '@/styles/nmimsacc.module.css'

export default function NmimsAcc() {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundWrap}>
        <Image
          src="/nmimsacc.webp"
          alt="NMIMS Accreditation Background"
          width={1600}
          height={520}
          sizes="100vw"
          className={styles.backgroundImage}
          priority
        />
      </div>

      <div className={styles.overlayCard}>
        <div className={styles.leftSide}>
          <div className={styles.accentCircle} />
          <div className={styles.leftImageWrap}>
            <Image
              src="/nmelevate.webp"
              alt="NMIMS Campus"
              width={240}
              height={160}
              sizes="(max-width: 900px) 200px, 240px"
              className={styles.leftImage}
            />
          </div>
        </div>

        <div className={styles.rightSide}>
          <h2>
            <span className={styles.underlined}>Elevate</span> Your Career
          </h2>
          <h3>An MBA program to launch your career to the next level!</h3>
          <p>
            Get ready to take your career to the next level with NMIMS CDOE&apos;s MBA program. Our five
            contemporary specialisations are designed for working professionals like you, offering flexible
            learning options from expert faculty. Gain the skills and knowledge needed to succeed in today&apos;s
            competitive business landscape. Enrol now to transform your future.
          </p>
        </div>
      </div>
    </section>
  )
}

