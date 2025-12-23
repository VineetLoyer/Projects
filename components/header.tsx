"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="absolute top-0 left-0 w-full bg-transparent z-[1000] p-4">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto px-4">
          {/* Logo */}
          <div className="text-white">
            <h1 className="text-lg md:text-xl lg:text-2xl m-0">
              <Link href="https://vineetloyer.github.io" className="text-white no-underline hover:text-white">
                Vineet Kumar Loyer
              </Link>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link 
              href="https://vineetloyer.github.io" 
              className="text-white no-underline text-base lg:text-lg transition-colors duration-300 hover:text-[#4A90E2]"
            >
              Home
            </Link>
            <Link 
              href="https://vineet-loyer-about-me.vercel.app" 
              className="text-white no-underline text-base lg:text-lg transition-colors duration-300 hover:text-[#4A90E2]"
            >
              About Me
            </Link>
            <Link 
              href="https://vineet-loyer-blogs.vercel.app" 
              className="text-white no-underline text-base lg:text-lg transition-colors duration-300 hover:text-[#4A90E2]"
            >
              Blogs
            </Link>
            <Link 
              href="/" 
              className="text-[#4A90E2] no-underline text-base lg:text-lg transition-colors duration-300 hover:text-[#4A90E2]"
            >
              Projects
            </Link>
          </nav>

          {/* Hamburger Menu Button */}
          <button 
            className="md:hidden bg-transparent border-none p-2 cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="text-white w-6 h-6" />
            ) : (
              <Menu className="text-white w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav 
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:hidden absolute top-full left-0 w-full bg-black/90 py-4 flex-col items-center gap-4`}
        >
          <Link 
            href="https://vineetloyer.github.io" 
            className="text-white no-underline text-base py-2 transition-colors duration-300 hover:text-[#4A90E2]"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="https://vineet-loyer-about-me.vercel.app" 
            className="text-white no-underline text-base py-2 transition-colors duration-300 hover:text-[#4A90E2]"
            onClick={() => setIsMenuOpen(false)}
          >
            About Me
          </Link>
          <Link 
            href="https://vineet-loyer-blogs.vercel.app" 
            className="text-white no-underline text-base py-2 transition-colors duration-300 hover:text-[#4A90E2]"
            onClick={() => setIsMenuOpen(false)}
          >
            Blogs
          </Link>
          <Link 
            href="/" 
            className="text-[#4A90E2] no-underline text-base py-2 transition-colors duration-300 hover:text-[#4A90E2]"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
        </nav>
      </header>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  )
}
