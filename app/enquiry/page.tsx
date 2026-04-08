'use client'

import EnquiryForm from '../components/enquiryform'
import styles from '@/styles/enquiry.module.css'

export default function EnquiryPage() {
  return (
    <div className={styles.enquiryPage}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h1>Start Your MBA Journey</h1>
            <p>
              Get in touch with our admissions team to learn more about NMIMS Online MBA programs. Our counselors
              are here to guide you through the application process and answer all your questions.
            </p>

            <div className={styles.benefits}>
              <div className={styles.benefit}>
                <span className={styles.icon}>✓</span>
                <p><strong>Live Interactive Lectures</strong> - Engage with faculty in real-time sessions</p>
              </div>
              <div className={styles.benefit}>
                <span className={styles.icon}>✓</span>
                <p><strong>Digital Campus Experience</strong> - Access unique digital learning environment</p>
              </div>
              <div className={styles.benefit}>
                <span className={styles.icon}>✓</span>
                <p><strong>Study Anywhere, Anytime</strong> - Learn at your own pace</p>
              </div>
              <div className={styles.benefit}>
                <span className={styles.icon}>✓</span>
                <p><strong>NAAC 3.67 A++ Grade</strong> - 4th consecutive accreditation</p>
              </div>
              <div className={styles.benefit}>
                <span className={styles.icon}>✓</span>
                <p><strong>Expert Faculty</strong> - Learn from industry leaders</p>
              </div>
              <div className={styles.benefit}>
                <span className={styles.icon}>✓</span>
                <p><strong>Career Support</strong> - Placement assistance & mentoring</p>
              </div>
            </div>

            <div className={styles.contactInfo}>
              <h3>Quick Contact</h3>
              <p>📞 +91-98765-43210</p>
              <p>📧 admissions@nmims.edu</p>
              <p>🕒 Mon-Fri: 9 AM - 6 PM IST</p>
            </div>
          </div>

          <div className={styles.formSection}>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  )
}

