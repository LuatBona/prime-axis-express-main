import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Image src="/logo.png" alt="Prime Axis Express" width={200} height={50} className="h-10 w-auto" />
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for fast, reliable, and secure express delivery services worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/express" className="text-gray-400 hover:text-white transition-colors">
                  Express Delivery
                </Link>
              </li>
              <li>
                <Link href="/ground" className="text-gray-400 hover:text-white transition-colors">
                  Ground Shipping
                </Link>
              </li>
              <li>
                <Link href="/international" className="text-gray-400 hover:text-white transition-colors">
                  International
                </Link>
              </li>
              <li>
                <Link href="/freight" className="text-gray-400 hover:text-white transition-colors">
                  Freight Services
                </Link>
              </li>
              <li>
                <Link href="/logistics" className="text-gray-400 hover:text-white transition-colors">
                  Supply Chain
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/track" className="text-gray-400 hover:text-white transition-colors">
                  Track Package
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/claims" className="text-gray-400 hover:text-white transition-colors">
                  File a Claim
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-gray-400 hover:text-white transition-colors">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-400">1-800-PRIME-AX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-400">support@primeaxis.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-cyan-400 mt-0.5" />
                <span className="text-gray-400">
                  123 Express Way
                  <br />
                  Logistics City, LC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2024 Prime Axis Express. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
