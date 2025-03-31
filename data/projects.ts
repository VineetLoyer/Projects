import type { Project } from "@/types/project"

// All available tags for filtering
export const allTags = [
  "Python",
  "Computer Vision",
  "Machine Learning",
  "Flask",
  "NLP",
  "SQL",
  "React",
  "Node.js",
  "Apache Kafka",
  "PySpark",
  "Stream Processing",
  "Data Visualization",
  "TypeScript",
  "D3.js",
  "Collaborative Filtering",
  "AWS",
  "Blockchain",
  "Graph Analytics",
  "Neo4j",
]

// Sample project data
export const projects: Project[] = [
  {
    id: "1",
    title: "NutriVision",
    description:
      "An AI-powered food label analyzer that extracts nutritional information from images of food packaging.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Python", "Computer Vision", "Machine Learning", "Flask"],
    demoUrl: "/demo/nutrivision",
    codeUrl: "/code/nutrivision",
    featured: true,
  },
  {
    id: "2",
    title: "Chat-DB",
    description:
      "A natural language interface for databases that allows users to query data using conversational language.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["NLP", "SQL", "React", "Node.js"],
    demoUrl: "/demo/chat-db",
    codeUrl: "/code/chat-db",
    featured: true,
  },
  {
    id: "3",
    title: "Real-Time Twitter Sentiment Analysis Pipeline",
    description:
      "A streaming data pipeline that analyzes Twitter sentiment in real-time using Apache Kafka and PySpark.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Apache Kafka", "PySpark", "NLP", "Stream Processing"],
    demoUrl: "/demo/twitter-sentiment",
    codeUrl: "/code/twitter-sentiment",
    featured: true,
  },
  {
    id: "4",
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets with customizable charts and filters.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["D3.js", "React", "TypeScript", "Data Visualization"],
    demoUrl: "/demo/data-viz",
    codeUrl: "/code/data-viz",
    featured: false,
  },
  {
    id: "5",
    title: "Recommendation Engine",
    description: "A collaborative filtering recommendation system for e-commerce products.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Python", "Machine Learning", "Collaborative Filtering", "AWS"],
    demoUrl: "/demo/recommendation-engine",
    codeUrl: "/code/recommendation-engine",
    featured: false,
  },
  {
    id: "6",
    title: "Blockchain Analytics Platform",
    description: "A platform for analyzing blockchain transactions and visualizing network patterns.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Blockchain", "Graph Analytics", "Python", "Neo4j"],
    demoUrl: "/demo/blockchain-analytics",
    codeUrl: "/code/blockchain-analytics",
    featured: false,
  },
]

