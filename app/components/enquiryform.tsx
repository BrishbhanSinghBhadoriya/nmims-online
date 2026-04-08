'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import styles from '@/styles/enquiryform.module.css'

export default function EnquiryForm({ isModal = false, onClose }: { isModal?: boolean; onClose?: () => void }) {
  const router = useRouter()
  const pathname = usePathname()
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    state: '',
    course: '',
    agreed: true,
    university: 'NMIMS Online',
    campaign: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    // Set campaign based on pathname
    if (pathname === '/') {
      setFormData(prev => ({ ...prev, campaign: 'Google_search' }))
    } else if (pathname.includes('/nmims-online')) {
      setFormData(prev => ({ ...prev, campaign: 'Meta_search' }))
    } else {
      setFormData(prev => ({ ...prev, campaign: 'Google_search' })) // default
    }
  }, [pathname])

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 
    'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 
    'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 
    'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh', 
    'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 
    'Lakshadweep', 'Puducherry'
  ]

  const courses = [
   
    'MBA',
    'BBA',
    'BCom',
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Instant redirect on success
        if (onClose) onClose()
        router.push('/thank-you')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`${styles.formBox} ${isModal ? styles.modalForm : ''}`}>
      {isModal && (
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>
      )}
      <h2>Enquire Now</h2>
      <p className={styles.subtitle}>Hurry Up & Get Free Counselling.ww</p>

      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Mobile Number</label>
          <input
            type="tel"
            placeholder="Enter Mobile"
            required
            pattern="[0-9]{10}"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Email ID</label>
          <input
            type="email"
            placeholder="Enter Email id"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Select State</label>
          <select
            required
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
          >
            <option value="">Select Your State</option>
            {states.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label>Select Course</label>
          <select
            required
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
          >
            <option value="">Select Course</option>
            {courses.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={formData.agreed}
            onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
          />
          I agree to get updates from counsellor
        </label>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>

        {submitStatus === 'success' && <p className={styles.successMsg}>Thank you! We will contact you soon.</p>}
        {submitStatus === 'error' && <p className={styles.errorMsg}>Something went wrong. Please try again.</p>}
      </form>
    </div>
  )
}
