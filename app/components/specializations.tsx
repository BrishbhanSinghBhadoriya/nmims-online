'use client'

import Image from 'next/image'
import styles from '@/styles/specializations.module.css'

export default function Specializations() {
  return (
    <section id="specializations" className={styles.specializations}>
      <Image
        src="/nmims-specilization-desktop.png"
        alt="NMIMS Specialization Desktop"
        width={1600}
        height={900}
        sizes="(max-width: 768px) 0px, 100vw"
        className={styles.desktopImage}
        priority
      />

      <Image
        src="/nmims-specilization-phone.png"
        alt="NMIMS Specialization Mobile"
        width={480}
        height={1800}
        sizes="(max-width: 768px) 100vw, 0px"
        className={styles.mobileImage}
        priority
      />
    </section>
  )
}