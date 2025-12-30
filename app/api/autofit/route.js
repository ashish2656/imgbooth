import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    // Get FormData from frontend
    const formData = await request.formData()
    
    // Extract files
    const template = formData.get("template")
    const photo = formData.get("photo")

    // Validate inputs
    if (!template || !photo) {
      return NextResponse.json(
        { error: "Missing template or photo" },
        { status: 400 }
      )
    }

    // Forward to Python backend
    const pythonFormData = new FormData()
    pythonFormData.append("template", template)
    pythonFormData.append("photo", photo)

    const response = await fetch("http://localhost:8001/autofit", {
      method: "POST",
      body: pythonFormData,
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Python backend error:", errorText)
      return NextResponse.json(
        { error: "Failed to process autofit" },
        { status: 500 }
      )
    }

    const result = await response.json()
    
    // Return result to frontend
    return NextResponse.json(result)

  } catch (error) {
    console.error("Autofit API error:", error)
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    )
  }
}