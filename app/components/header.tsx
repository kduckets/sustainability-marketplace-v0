"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-green-600">
            SustainExchange
          </Link>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-green-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <nav
            className={`${isMenuOpen ? "block" : "hidden"} md:block absolute md:relative top-16 left-0 right-0 bg-white md:top-0 z-20 shadow-md md:shadow-none`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0">
              <li>
                <Link href="/for-seekers" className="text-gray-600 hover:text-green-600 block md:inline">
                  For Seekers
                </Link>
              </li>
              <li>
                <Link href="/for-providers" className="text-gray-600 hover:text-green-600 block md:inline">
                  For Providers
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-green-600 block md:inline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-green-600 block md:inline">
                  Contact
                </Link>
              </li>
              <li className="md:hidden pt-2">
                <Button asChild variant="outline" className="w-full mb-2">
                  <Link href="/login">Log In</Link>
                </Button>
              </li>
              <li className="md:hidden">
                <Button asChild className="w-full">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </li>
            </ul>
          </nav>
          <div className="hidden md:flex space-x-2">
            <Button asChild variant="outline">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

