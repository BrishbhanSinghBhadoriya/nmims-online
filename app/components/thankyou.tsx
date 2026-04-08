'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import styles from '@/styles/thankyou.module.css'

interface ThankYouPageProps {
  leadName?: string
  leadEmail?: string
  leadPhone?: string
  courseSelected?: string
}

export default function ThankYouPage({
  leadName = 'Student',
  leadEmail = '',
  leadPhone = '',
  courseSelected = 'NMIMS Online MBA'
}: ThankYouPageProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleBackHome = () => {
    setIsLoading(true)
    router.push('/')
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        {/* Success Icon and Message */}
        <div className={styles.successSection}>
          <div className={styles.successIcon}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          <h1 className={styles.mainHeading}>
            Thank You for Your Interest!
          </h1>

          <p className={styles.subHeading}>
            We've received your inquiry and our counselling team will get back to you soon.
          </p>
        </div>

        {/* Confirmation Details Card */}
        <div className={styles.confirmationCard}>
          <h2 className={styles.cardTitle}>Submission Details</h2>

          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <label className={styles.detailLabel}>Name</label>
              <p className={styles.detailValue}>{leadName}</p>
            </div>

            <div className={styles.detailItem}>
              <label className={styles.detailLabel}>Email</label>
              <p className={styles.detailValue}>{leadEmail || 'Not provided'}</p>
            </div>

            <div className={styles.detailItem}>
              <label className={styles.detailLabel}>Phone</label>
              <p className={styles.detailValue}>{leadPhone || 'Not provided'}</p>
            </div>

            <div className={styles.detailItem}>
              <label className={styles.detailLabel}>Course</label>
              <p className={styles.detailValue}>{courseSelected}</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className={styles.nextStepsSection}>
          <h2 className={styles.sectionTitle}>What Happens Next?</h2>

          <div className={styles.stepsList}>
            <div className={styles.stepItem}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Verification</h3>
                <p className={styles.stepDescription}>
                  Our team will verify your submitted details and confirm your eligibility for the program.
                </p>
              </div>
            </div>

            <div className={styles.stepItem}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Counselling Call</h3>
                <p className={styles.stepDescription}>
                  A dedicated counsellor will contact you within 24-48 hours to discuss your academic goals and program options.
                </p>
              </div>
            </div>

            <div className={styles.stepItem}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Program Details</h3>
                <p className={styles.stepDescription}>
                  Receive detailed information about fees, curriculum, placements, and scholarship opportunities.
                </p>
              </div>
            </div>

            <div className={styles.stepItem}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Admission Support</h3>
                <p className={styles.stepDescription}>
                  Complete guidance through the entire admission process with our counselling team.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className={styles.infoBox}>
          <h3 className={styles.infoTitle}>Quick Tips</h3>
          <ul className={styles.infoList}>
            <li>Check your email (including spam folder) for our confirmation message</li>
            <li>Keep your phone handy for the counsellor's call</li>
            <li>Feel free to reach out if you have any immediate questions</li>
            <li>Download the program brochure for detailed information</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className={styles.buttonsContainer}>
          <Link href="/" className={styles.primaryBtn}>
            Back to Home
          </Link>

          <a href="tel:+919876543210" className={styles.secondaryBtn}>
            Call Us Now
          </a>

          <Link href="/programs" className={styles.tertiaryBtn}>
            Explore Programs
          </Link>
        </div>

        {/* Contact Info */}
        <div className={styles.contactSection}>
          <p className={styles.contactText}>
            <strong>Need immediate assistance?</strong>
          </p>
          <p className={styles.contactDetails}>
            Call us at <a href="tel:+919876543210">+91-9876543210</a> or email us at{' '}
            <a href="mailto:admissions@nmims.edu">admissions@nmims.edu</a>
          </p>
        </div>
      </div>
    </div>
  )
}