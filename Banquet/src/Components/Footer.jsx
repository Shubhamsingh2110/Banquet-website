import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Title Section */}
        <div className="text-center mb-12">
          {/* Ornate Logo */}
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6">
            <div className="relative">
              {/* Diamond-shaped ornate frame */}
              <svg width="80" height="80" viewBox="0 0 80 80" className="text-yellow-600">
                <path
                  d="M40 8 L60 20 L72 40 L60 60 L40 72 L20 60 L8 40 L20 20 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M40 12 L56 22 L68 40 L56 58 L40 68 L24 58 L12 40 L24 22 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
              {/* Center circle with M */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-gray-700 font-bold text-lg">M</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hotel Name */}
          <h2 className="text-4xl font-serif text-yellow-600 mb-8">The Maison Palaza</h2>
        </div>

        {/* Navigation Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Column 1 */}
          <div className="space-y-3">
            <a href="#" className="block hover:text-yellow-600 transition-colors">
              HOME
            </a>
            <a href="#" className="block hover:text-yellow-600 transition-colors">
              RESSORT
            </a>
            <a href="#" className="block hover:text-yellow-600 transition-colors">
              ACCOMODATION
            </a>
            <a href="#" className="block hover:text-yellow-600 transition-colors">
              PACKAGE
            </a>
            <a href="#" className="block hover:text-yellow-600 transition-colors">
              CONTACT
            </a>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <a href="#" className="block hover:text-yellow-600 transition-colors">
              RESSORT
            </a>
            <a href="#" className="block hover:text-yellow-600 transition-colors">
              LOCATION
            </a>
            <a href="#" className="block hover:text-yellow-600 transition-colors">
              SUSTAINABILITY
            </a>
            <a href="#" className="block hover:text-yellow-600 transition-colors">
              GALLERY
            </a>
            <a href="#" className="block hover:text-yellow-600 transition-colors">
              TEAM
            </a>
            <a href="#" className="block hover:text-yellow-600 transition-colors">
              BLOGS
            </a>
          </div>

          {/* Column 3 */}
          <div className="space-y-3">
            <a href="#" className="block hover:text-yellow-600 transition-colors">
              TRANSPORT
            </a>
            <a href="#" className="block hover:text-yellow-600 transition-colors">
              PRINTING
            </a>
            <a href="#" className="block hover:text-yellow-600 transition-colors">
              PHOTO AND VIDEO
            </a>
          </div>

          {/* Column 4 - Contact Information */}
          <div className="space-y-3">
            <div className="font-semibold">The Maison Palace</div>
            <div className="space-y-1 text-gray-300">
              <div>Choriner Strabe 49</div>
              <div>10435 Zirakpur, Punjab</div>
              <div>E-Mail: info@themaisonpalace.com</div>
            </div>

            <div className="pt-4 space-y-1">
              <div>Call Us: 0172 - 0148233</div>
              <div className="text-gray-300">We are open all days a week.</div>
            </div>

            <div className="pt-4">
              <div className="text-gray-300 mb-3">Follow us on</div>
              <div className="flex space-x-3">
                <Facebook className="w-5 h-5 hover:text-yellow-600 cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 hover:text-yellow-600 cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 hover:text-yellow-600 cursor-pointer transition-colors" />
                <Youtube className="w-5 h-5 hover:text-yellow-600 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
