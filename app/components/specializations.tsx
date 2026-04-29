'use client'

import styles from '@/styles/specializations.module.css'
import { useModal } from '@/context/ModalContext'

export default function Specializations() {
  const { openModal } = useModal()

  const specializationList = [
    'Business Management',
    'Marketing Management',
    'Financial Management',
    'Human Resource Management',
    'Operation & Data Science Management'
  ]

  return (
    <section id="specializations" className={styles.specializations}>
      <div className={styles.overlay} />
      
      <div className={styles.container}>
        <h2 className={styles.heading}>
          MBA Online <span>Specialisations</span>
        </h2>

        <div className={styles.card}>
          <div className={styles.purpleTab}>
            MBA Online Specialisations
            <div className={styles.arrowDown} />
          </div>

          <ul className={styles.list}>
            {specializationList.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <span className={styles.bullet}>▪</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <button className={styles.compareBtn} onClick={openModal}>
          COMPARE TRENDING PROGRAMS
        </button>
      </div>
    </section>
  )
}