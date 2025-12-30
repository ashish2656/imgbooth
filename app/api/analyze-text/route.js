import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const formData = await request.formData()
    
    // Forward to Python backend
    const response = await fetch('http://localhost:8001/analyze-text', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error(`Backend error: ${response.statusText}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
    
  } catch (error) {
    console.error('Analyze text error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
