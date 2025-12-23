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
  description: 'Portfolio of Vineet Kumar Loyer.',
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
    description: 'Portfolio of Vineet Kumar Loyer.',
  },
  twitter: {
    card: 'summary',
    title: 'Vineet Kumar Loyer | Software Engineer',
    description: 'Portfolio of Vineet Kumar Loyer.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/public/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
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



