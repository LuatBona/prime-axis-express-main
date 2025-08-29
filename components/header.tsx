"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#0a0a0a] border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Prime Axis Express" width={200} height={50} className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div>
              <button
                onClick={() => document.getElementById("shipping-form")?.scrollIntoView({ behavior: "smooth" })}
                className="text-white hover:text-cyan-400 font-medium"
              >
                Ship
              </button>
            </div>
            <div>
              <button
                onClick={() => document.getElementById("tracking")?.scrollIntoView({ behavior: "smooth" })}
                className="text-white hover:text-cyan-400 font-medium"
              >
                Track
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-white hover:text-cyan-400 font-medium">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                <div className="py-1">
                  <Link href="/#our-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Ground Express</Link>
                  <Link href="/#our-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Air Express</Link>
                  <Link href="/#our-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Ocean Freight</Link>
                  <Link href="/#our-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Time Critical</Link>
                  <Link href="/#our-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Secure Transport</Link>
                  <Link href="/#our-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Last Mile</Link>
                </div>
              </div>
            </div>
            <Link href="/about" className="text-white hover:text-cyan-400 font-medium">
              About
            </Link>
            <button
              onClick={() => document.getElementById("shipping-form")?.scrollIntoView({ behavior: "smooth" })}
              className="text-white hover:text-cyan-400 font-medium"
            >
              Get Quote
            </button>
                      </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50" onClick={() => document.getElementById("shipping-form")?.scrollIntoView({ behavior: "smooth" })}>
     
     
     
     
     
     
              ship now
            </Button>
                      </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-cyan-400">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 bg-[#0a0a0a]">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  setTimeout(() => document.getElementById("shipping-form")?.scrollIntoView({ behavior: "smooth" }), 50)
                }}
                className="text-left text-white hover:text-cyan-400 font-medium"
              >
                Ship
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  setTimeout(() => document.getElementById("tracking")?.scrollIntoView({ behavior: "smooth" }), 50)
                }}
                className="text-left text-white hover:text-cyan-400 font-medium"
              >
                Track
              </button>
              <Link href="/#our-services" className="text-white hover:text-cyan-400 font-medium">
                Services
              </Link>
              <Link href="/about" className="text-white hover:text-cyan-400 font-medium">
                About
              </Link>
                            <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="bg-white text-gray-700 border-gray-300" onClick={() => { setIsMenuOpen(false); setTimeout(() => document.getElementById("shipping-form")?.scrollIntoView({ behavior: "smooth" }), 50) }}>
                  ship now
                </Button>
                              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
