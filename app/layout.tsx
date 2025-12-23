import type React from "react"
import type { Metadata } from "next"
import { Instrument_Serif } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"

const instrumentSerif = Instrument_Serif({ 
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"]
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vineet-loyer-projects.vercel.app'),
  title: 'Vineet Kumar Loyer | Software Engineer',
  description: 'Software Engineer specializing in Data Science, Machine Learning, and Big Data. USC Applied Data Science graduate. Skilled in Python, AWS, Spark, SQL, and ETL pipelines.',
  keywords: [
    'Vineet Kumar Loyer',
    'Vineet Loyer',
    'Loyer',
    'Software Engineer',
    'Data Scientist',
    'Data Engineer',
    'Machine Learning Engineer',
    'ML Engineer',
    'Python Developer',
    'AWS',
    'Spark',
    'SQL',
    'Data Pipeline',
    'ETL',
    'Big Data',
    'USC',
    'Los Angeles',
    'Data Science',
    'Portfolio'
  ],
  authors: [{ name: 'Vineet Kumar Loyer' }],
  creator: 'Vineet Kumar Loyer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vineet-loyer-projects.vercel.app',
    siteName: 'Vineet Kumar Loyer Portfolio',
    title: 'Vineet Kumar Loyer | Software Engineer',
    description: 'Software Engineer specializing in Data Science, Machine Learning, and Big Data. USC Applied Data Science graduate.',
  },
  twitter: {
    card: 'summary',
    title: 'Vineet Kumar Loyer | Software Engineer',
    description: 'Software Engineer specializing in Data Science, Machine Learning, and Big Data. USC Applied Data Science graduate.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vineet Kumar Loyer',
  url: 'https://vineet-loyer-projects.vercel.app',
  jobTitle: 'Software Engineer',
  description: 'Software Engineer specializing in Data Science, Machine Learning, and Big Data technologies. USC Applied Data Science graduate based in Los Angeles.',
  alumniOf: {
    '@type': 'Organization',
    name: 'University of Southern California',
  },
  knowsAbout: ['Python', 'AWS', 'Spark', 'SQL', 'Machine Learning', 'Data Engineering', 'ETL', 'Big Data'],
  sameAs: [
    'https://vineetloyer.github.io/VineetKumarLoyer/',
    'https://www.linkedin.com/in/vineet-loyer/',
    'https://github.com/vineetloyer'
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={instrumentSerif.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



