import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'

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

export default function NmimsOnlineLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="nmimsOnlineLayout">
      {children}
    </div>
  )
}