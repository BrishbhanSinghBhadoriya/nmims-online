'use client'

import Hero from './components/hero'
import NmimsAcc from './components/nmimsacc'
import Specializations from './components/specializations'
import Features from './components/features'
import LeadTheFuture from './components/leadthefuture'

import CTA from './components/cta'

export default function Home() {
  return (
    <main className="landingPage">
      <Hero />
      <NmimsAcc />
      <Specializations />
      <Features />
      <LeadTheFuture />
      
      <CTA />
    </main>
  )
}