import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-green-600">
            SustainConnect
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/for-seekers" className="text-gray-600 hover:text-green-600">
                  For Seekers
                </Link>
              </li>
              <li>
                <Link href="/for-providers" className="text-gray-600 hover:text-green-600">
                  For Providers
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-green-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-green-600">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="space-x-2">
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

