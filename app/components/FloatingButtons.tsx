'use client'

import Image from 'next/image'
import { useModal } from '@/context/ModalContext'
import styles from '@/styles/floating-buttons.module.css'

export default function FloatingButtons() {
  const { openModal } = useModal()

  return (
    <div className={styles.floatingContainer}>
      {/* Apply Now Button - Bottom Left */}
      <button 
        className={styles.applyNowBtn} 
        onClick={openModal}
      >
        Apply Now
      </button>

      {/* Chat Button - Bottom Right Circle */}
      <button 
        className={styles.chatCircleBtn} 
        onClick={openModal}
        aria-label="Chat with us"
      >
        <div className={styles.logoWrapper}>
          <Image 
            src="/fev.png" 
            alt="NMIMS Icon" 
            width={40} 
            height={40}
            className={styles.chatLogo}
          />
        </div>
      </button>
    </div>
  )
}
