'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/navbar.module.css'
import { useModal } from '@/context/ModalContext'

export default function Navbar() {
  const { openModal } = useModal()
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 36,
    seconds: 50,
  })

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds

        if (totalSeconds <= 0) {
          return prev
        }

        const nextTotal = totalSeconds - 1

        return {
          hours: Math.floor(nextTotal / 3600),
          minutes: Math.floor((nextTotal % 3600) / 60),
          seconds: nextTotal % 60,
        }
      })
    }, 1000)

    return () => clearInterval(timerId)
  }, [])

  const pad = (value: number) => String(value).padStart(2, '0')

  return (
    <>
      {/* 📱 MOBILE TOP BAR */}
      <div className={styles.mobileTopBar}>
        <div className={styles.offerWrap}>
          <p className={styles.offerText}>Offer ends in</p>
          <div className={styles.timer}>
            <span className={styles.timeChip}>
              <strong>{pad(timeLeft.hours)}</strong>
              <small>Hrs</small>
            </span>
            <span className={styles.timeChip}>
              <strong>{pad(timeLeft.minutes)}</strong>
              <small>Min</small>
            </span>
            <span className={styles.timeChip}>
              <strong>{pad(timeLeft.seconds)}</strong>
              <small>Sec</small>
            </span>
          </div>
        </div>

        <button className={styles.applyBtn} onClick={openModal}>
          Apply Now
        </button>
      </div>

      {/* 🔴 RED HEADER (ONLY IMAGE) */}
      <div className={styles.topHeader}>
        <div className={styles.topContainer}>
          
          {/* 👉 CENTER IMAGE */}
          <Image
            src="/nmims_logo.png"   
            alt="NMIMS Header"
            width={720}
            height={92}
            sizes="(max-width: 768px) 440px, 720px"
            className={styles.headerImage}
            priority
          />

        </div>
      </div>
    </>
  )
}