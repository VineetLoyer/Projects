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
  title: "Projects Portfolio",
  description: "Explore my portfolio of projects",
    generator: 'v0.dev'
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



