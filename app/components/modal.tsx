'use client'

import React from 'react'
import { useModal } from '@/context/ModalContext'
import EnquiryForm from './enquiryform'
import styles from '@/styles/modal.module.css'

export default function EnquiryModal() {
  const { isModalOpen, closeModal } = useModal()

  if (!isModalOpen) return null

  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <EnquiryForm isModal={true} onClose={closeModal} />
      </div>
    </div>
  )
}
