import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // 1. Save to MongoDB
    const client = await clientPromise
    const db = client.db(process.env.MONGODB_DB)
    const collection = db.collection(process.env.MONGODB_COLLECTION || 'leads')

    const result = await collection.insertOne({
      ...data,
      createdAt: new Date(),
    })

    // 2. Integrate with Neodove CRM
    if (process.env.API_ENDPOINT) {
      try {
        await fetch(process.env.API_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            mobile: data.mobile,
            email: data.email,
            state: data.state,
            course: data.course,
            university: data.university || 'NMIMS Online',
            campaign: data.campaign || 'Google_search',
            source: 'Website_Enquiry',
          }),
        })
      } catch (crmError) {
        console.error('CRM Integration Error:', crmError)
      }
    }

    return NextResponse.json({ success: true, id: result.insertedId })
  } catch (error) {
    console.error('Lead Submission Error:', error)
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
  }
}
