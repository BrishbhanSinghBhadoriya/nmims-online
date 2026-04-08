'use client'

import Image from 'next/image'
import styles from '@/styles/leadthefuture.module.css'

const leads = [
  {
    id: 1,
    title1: 'Best-in-class',
    title2: 'Student Services',
    description: 'Multiple touchpoints; email, toll free no. and live chat Dedicated student support team',
    icon: '/student.png',
  },
  {
    id: 2,
    title1: 'Career Services',
    title2: '',
    description: 'Unique services offering career development & assistance Right mentoring and guidance',
    icon: '/growth.png',
  },
  {
    id: 3,
    title1: 'Live Interactive &',
    title2: 'Recorded Lectures',
    description: '24/7 access to all content, including recorded sessions of lectures',
    icon: '/book.png',
  },
  {
    id: 4,
    title1: 'High Focus on',
    title2: 'Academic Excellence',
    description: '600+ faculty members, including academicians and industry experts Globally curated curriculum',
    icon: '/presentation.png',
  },
  {
    id: 5,
    title1: 'Dynamic, Application',
    title2: 'Oriented Assessment',
    description: 'Computer-based exams at designated centres all over India',
    icon: '/latest_tech.png',
  },
]

export default function LeadTheFuture() {
  return (
    <section className={styles.leadSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Lead the Future</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.grid}>
          {leads.map((lead) => (
            <div key={lead.id} className={styles.card}>
              <div className={styles.cardTop}>
                <h3>
                  {lead.title1}
                  <br />
                  {lead.title2}
                </h3>
                <div className={styles.iconWrapper}>
                  <Image
                    src={lead.icon}
                    alt={lead.title1}
                    width={40}
                    height={40}
                    className={styles.icon}
                  />
                </div>
              </div>
              <div className={styles.cardBottom}>
                <p>{lead.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.responsiveImageWrapper}>
          <Image
            src="/About.png"
            alt="NMIMS Specializations Desktop"
            width={1280}
            height={400}
            className={styles.desktopImage}
            priority
          />
          <Image
            src="/about-mobile.png"
            alt="NMIMS Specializations Mobile"
            width={600}
            height={800}
            className={styles.mobileImage}
          />
        </div>
      </div>
    </section>
  )
}
