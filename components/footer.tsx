import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-2xl font-medium mb-4">Mansio</h3>
            <p className="text-neutral-400 mb-6">
              Luxury properties for the discerning individual. Experience exceptional living spaces curated for your
              lifestyle.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/properties" className="text-neutral-400 hover:text-white transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutral-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/property-management"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Property Management
                </Link>
              </li>
              <li>
                <Link href="/services/rental" className="text-neutral-400 hover:text-white transition-colors">
                  Rental Services
                </Link>
              </li>
              <li>
                <Link href="/services/concierge" className="text-neutral-400 hover:text-white transition-colors">
                  Concierge Services
                </Link>
              </li>
              <li>
                <Link href="/services/insurance" className="text-neutral-400 hover:text-white transition-colors">
                  Property Insurance
                </Link>
              </li>
              <li>
                <Link href="/services/investment" className="text-neutral-400 hover:text-white transition-colors">
                  Investment Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-neutral-400 mt-0.5" />
                <span className="text-neutral-400">
                  123 Luxury Lane
                  <br />
                  Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-neutral-400" />
                <Link href="tel:+1234567890" className="text-neutral-400 hover:text-white transition-colors">
                  +1 (234) 567-890
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-neutral-400" />
                <Link href="mailto:info@mansio.com" className="text-neutral-400 hover:text-white transition-colors">
                  info@mansio.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">&copy; {new Date().getFullYear()} Mansio. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-neutral-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-neutral-400 hover:text-white transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

