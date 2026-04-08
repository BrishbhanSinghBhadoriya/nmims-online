'use client'

import Link from 'next/link'
import styles from '@/styles/thankyou.module.css'

export default function ThankYou() {
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
          <h2 className={styles.cardTitle}>Next Steps</h2>
          <p className={styles.stepDescription}>
            Our team will verify your submitted details and confirm your eligibility for the program.
            A dedicated counsellor will contact you within 24-48 hours to discuss your academic goals and program options.
          </p>
        </div>

        {/* Next Steps List */}
        <div className={styles.nextStepsSection}>
          <h2 className={styles.sectionTitle}>What Happens Next?</h2>

          <div className={styles.stepsList}>
            <div className={styles.stepItem}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Verification</h3>
                <p className={styles.stepDescription}>
                  Details verification and eligibility check.
                </p>
              </div>
            </div>

            <div className={styles.stepItem}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Counselling Call</h3>
                <p className={styles.stepDescription}>
                  Expert guidance call within 24-48 hours.
                </p>
              </div>
            </div>

            <div className={styles.stepItem}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Program Details</h3>
                <p className={styles.stepDescription}>
                  Info about fees, curriculum, and placements.
                </p>
              </div>
            </div>

            <div className={styles.stepItem}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Admission Support</h3>
                <p className={styles.stepDescription}>
                  End-to-end guidance for the admission process.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className={styles.infoBox}>
          <h3 className={styles.infoTitle}>Quick Tips</h3>
          <ul className={styles.infoList}>
            <li>Check your email (including spam) for confirmation.</li>
            <li>Keep your phone handy for the counsellor's call.</li>
            <li>Download the program brochure for more info.</li>
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
