export const certificateTemplates = [
  {
    id: "classic",
    name: "Classic Certificate",
    preview: "/templates/classic-preview.jpg",
    background: "/templates/classic-bg.jpg",
    photoArea: {
      x: 50,
      y: 80,
      width: 120,
      height: 150
    },
    textFields: [
      {
        id: "title",
        label: "Certificate Title",
        defaultValue: "Certificate of Achievement",
        x: 50,
        y: 30,
        fontSize: 24,
        fontWeight: "bold",
        color: "#1a1a1a"
      },
      {
        id: "recipient",
        label: "Recipient Name",
        defaultValue: "John Doe",
        x: 50,
        y: 250,
        fontSize: 20,
        fontWeight: "normal",
        color: "#333333"
      },
      {
        id: "description",
        label: "Description",
        defaultValue: "Has successfully completed the course",
        x: 50,
        y: 290,
        fontSize: 16,
        fontWeight: "normal",
        color: "#666666"
      },
      {
        id: "date",
        label: "Date",
        defaultValue: new Date().toLocaleDateString(),
        x: 50,
        y: 350,
        fontSize: 14,
        fontWeight: "normal",
        color: "#666666"
      }
    ]
  },
  {
    id: "modern",
    name: "Modern Certificate",
    preview: "/templates/modern-preview.jpg",
    background: "/templates/modern-bg.jpg",
    photoArea: {
      x: 200,
      y: 100,
      width: 100,
      height: 120
    },
    textFields: [
      {
        id: "title",
        label: "Certificate Title",
        defaultValue: "Certificate of Completion",
        x: 50,
        y: 50,
        fontSize: 28,
        fontWeight: "bold",
        color: "#2c3e50"
      },
      {
        id: "recipient",
        label: "Recipient Name",
        defaultValue: "Jane Smith",
        x: 50,
        y: 250,
        fontSize: 22,
        fontWeight: "normal",
        color: "#34495e"
      },
      {
        id: "course",
        label: "Course Name",
        defaultValue: "Advanced Web Development",
        x: 50,
        y: 290,
        fontSize: 18,
        fontWeight: "normal",
        color: "#7f8c8d"
      },
      {
        id: "date",
        label: "Date",
        defaultValue: new Date().toLocaleDateString(),
        x: 50,
        y: 350,
        fontSize: 14,
        fontWeight: "normal",
        color: "#95a5a6"
      }
    ]
  },
  {
    id: "elegant",
    name: "Elegant Certificate",
    preview: "/templates/elegant-preview.jpg",
    background: "/templates/elegant-bg.jpg",
    photoArea: {
      x: 250,
      y: 120,
      width: 90,
      height: 110
    },
    textFields: [
      {
        id: "title",
        label: "Certificate Title",
        defaultValue: "Certificate of Excellence",
        x: 50,
        y: 40,
        fontSize: 26,
        fontWeight: "bold",
        color: "#8b4513"
      },
      {
        id: "recipient",
        label: "Recipient Name",
        defaultValue: "Michael Johnson",
        x: 50,
        y: 260,
        fontSize: 20,
        fontWeight: "normal",
        color: "#654321"
      },
      {
        id: "achievement",
        label: "Achievement",
        defaultValue: "Outstanding Performance",
        x: 50,
        y: 300,
        fontSize: 16,
        fontWeight: "italic",
        color: "#8b4513"
      },
      {
        id: "date",
        label: "Date",
        defaultValue: new Date().toLocaleDateString(),
        x: 50,
        y: 360,
        fontSize: 14,
        fontWeight: "normal",
        color: "#8b4513"
      }
    ]
  }
]
