'use client'

import Image from 'next/image'
import styles from '@/styles/features.module.css'
import { useModal } from '@/context/ModalContext'

const courses = [
  {
    id: 1,
    title: 'NMIMS Online MBA',
    fullName: 'Master of Business Administration',
    duration: '24 Months',
    specializations: '5+ Specialisations',
    accreditation: 'NAAC A+',
    icon: '/book.png',
  },
  {
    id: 2,
    title: 'NMIMS Online BBA',
    fullName: 'Bachelor of Business Administration',
    duration: '36 Months',
    specializations: '5+ Specialisations',
    accreditation: 'NAAC A+',
    icon: '/presentation.png',
  },
  {
    id: 3,
    title: 'NMIMS Executive MBA',
    fullName: 'Executive Master of Business Administration',
    duration: '24 Months',
    specializations: '3+ Specialisations',
    accreditation: 'NAAC A+',
    icon: '/growth.png',
  },
]

export default function Features() {
  const { openModal } = useModal()

  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>
            NMIMS Online <span className={styles.italicOrange}>Courses</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {courses.map((course) => (
            <article key={course.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3>{course.title}</h3>
                <div className={styles.iconWrapper}>
                  <Image
                    src={course.icon}
                    alt={course.title}
                    width={32}
                    height={32}
                    className={styles.icon}
                  />
                </div>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.courseFullName}>{course.fullName}</p>
                <div className={styles.courseDetails}>
                  <p>
                    <strong>Duration:</strong> {course.duration}
                  </p>
                  <p>
                    <strong>Specializations:</strong> {course.specializations}
                  </p>
                  <p>
                    <strong>Accreditation:</strong> {course.accreditation}
                  </p>
                </div>
                <button type="button" className={styles.btn} onClick={openModal}>
                  Download Brochure
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
