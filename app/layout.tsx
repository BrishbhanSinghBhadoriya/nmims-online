import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import '../styles/globals.css'
import Navbar from './components/navbar'
import { ModalProvider } from '@/context/ModalContext'
import EnquiryModal from './components/modal'
import FloatingButtons from './components/FloatingButtons'

export const metadata: Metadata = {
  title: 'NMIMS Online MBA | Premium Business Education',
  description:
    "SVKM's NMIMS Online MBA Programs with specializations in Finance, Marketing, Business Management, Operations, and Human Resources. Live interactive lectures, flexible learning, NAAC A++ accredited.",
  keywords: 'MBA, Online MBA, NMIMS, Business Education, Finance, Marketing, Operations',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </head>
      <body>
        <ModalProvider>
          <Navbar />
          {children}
          <EnquiryModal />
          <FloatingButtons />
        </ModalProvider>
      </body>
    </html>
  )
}