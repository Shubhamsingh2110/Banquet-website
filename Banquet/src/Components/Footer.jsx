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
              <img src="https://i.postimg.cc/C1ySmFFT/IMG-2980.png" alt="" className="rounded-full" />
            </div>
          </div>

          {/* Hotel Name */}
          <h2 className="text-4xl font-serif text-yellow-600 mb-8">THE ROYAL SAPPHIRE</h2>
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
            <div className="font-semibold">THE ROYAL SAPPHIRE</div>
            <div className="space-y-1 text-gray-300">
             <p>Choriner Straße 49</p>
                <p>10435 Zirakpur, Punjab</p>
                <p>E-Mail: info@themaisonpalace.com</p>
            </div>

            <div className="pt-4 space-y-1">
              <p className="font-semibold">Call Us: 9911205000/8884008000</p>
              <div className="text-gray-300">We are open all days a week.</div>
            </div>

            <div className="pt-4">

              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
