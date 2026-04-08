'use client'

import Link from 'next/link'
import styles from '@/styles/cta.module.css'

export default function CTAWithFooter() {
  return (
    <>
      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaLeft}>
              <h2 className={styles.ctaTitle}>NMIMS Mumbai Campus Address:</h2>
              <p className={styles.ctaAddress}>
                NMIMS CDOE, 2nd Floor, NMIMS Building, V. L., Pherozeshah Mehta Rd, Vile Parle West, Mumbai, Maharashtra 400056
              </p>
            </div>
            <div className={styles.ctaRight}>
              <img 
                src="/nmims_ofc.png" 
                alt="NMIMS University" 
                className={styles.ctaImage}
              />
            </div>
          </div>

          <div className={styles.disclaimerBox}>
            <p className={styles.disclaimerSmall}>
              Disclaimer: As an Affiliate Enquiry Partner (AEP) of NMIMS CDOE, we display and showcase program information of NMIMS CDOE. Counselling, Admission, Program delivery and examination is solely managed by NMIMS CDOE and as an AEP, we have no role to play in it.
            </p>
          </div>

          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>NMIMS Online MBA</h3>
            <p className={styles.infoContent}>
              narsee monjee distance mba fees, nmims mba distance learning, nmims executive mba online, nmims online mba brochure, nmims university mba online, nmims online mba online fees, nmims online mba programme, nmims distance mba courses, nmims mumbai online mba, nmims online mba admission, mba from nmims distance, narsee monjee online mba fees, online mba nmims, nmims online mba courses, nmims online mba degree, nmims distance bba, nmims online mba review, nmims mba online, nmims distance learning mba fees, online nmims mba, nmims mumbai distance mba, nmims online mba certificate, narsee monjee online mba, nmims online mba fee structure, nmims online mba placements, nmims online mba application, online mba in nmims, nmims online mba, nmims online mba fees, narsee monjee distance mba, online mba narsee monjee, nmims online mba placement, nmims online mba eligibility, narsee monjee mba distance fees, nmims online mba marketing, mba online nmims, nmims university distance mba, online mba at nmims, nmims mba fees online, online mba nmims fees, nmims distance mba, online mba courses nmims, online mba from nmims, nmims mumbai online mba fees, nmims online mba 2025, nmims distance mba fees, nmims distance mba course fees
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.disclaimerSection}>
            <p className={styles.disclaimerText}>
              <strong>Disclaimer:</strong> We are an Authorized Enrollment Partner (AEP) for NMIMS CDOE. Our role is limited to providing verified program information and assisting students with the application process. All admissions, academic decisions, program delivery, examinations, and certifications are solely handled and governed by NMIMS CDOE.
            </p>

            <p className={styles.disclaimerText}>
              We do not claim to represent the university beyond our AEP scope. NMIMS CDOE reserves the right to request modification or removal of any content they deem inaccurate or non-compliant. All images and visuals used are for illustrative purposes only and may not depict actual university property, faculty, or students.
            </p>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.copyrightSection}>
            <p className={styles.copyrightText}>
              © 2026 (Enrollment Partner - NMIMS CDOE)
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}