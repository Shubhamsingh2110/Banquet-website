import { Facebook, Instagram, Twitter, Youtube, Bell, Phone, Mail, Menu, X } from "lucide-react"
import { useState } from "react"

export default function NavigationHeader() {
  const [activeItem, setActiveItem] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = ["HOME", "ACCOMMODATIONS", "RESTAURANT", "WEDDING & EVENTS", "PACKAGES"]

  return (
    <nav className="w-full bg-white px-4 py-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Section - Social Media */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-xs font-medium tracking-widest text-gray-700 uppercase">Follow us on</span>
          <div className="flex items-center gap-3">
            <Facebook size={18} className="text-black hover:text-gray-600 transition-colors cursor-pointer" />
            <Instagram size={18} className="text-black hover:text-gray-600 transition-colors cursor-pointer" />
            <Twitter size={18} className="text-black hover:text-gray-600 transition-colors cursor-pointer" />
            <Youtube size={18} className="text-black hover:text-gray-600 transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item}
              className="relative group"
              onMouseEnter={() => setActiveItem(item)}
              onMouseLeave={() => setActiveItem("")}
            >
              <a
                href="#"
                className="text-sm font-semibold tracking-wide text-black hover:text-gray-600 transition-colors duration-300 uppercase"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {item}
              </a>
              {/* Gold underline slider */}
              <div
                className={`absolute bottom-0 left-1/2 h-0.5 bg-yellow-600 transition-all duration-300 ease-out transform -translate-x-1/2 ${
                  activeItem === item ? "w-full" : "w-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Right Section - Offers and Icons */}
        <div className="flex items-center gap-4">
          <div
            className="relative group"
            onMouseEnter={() => setActiveItem("OFFERS")}
            onMouseLeave={() => setActiveItem("")}
          >
            <a
              href="#"
              className="text-sm font-bold tracking-wide text-black hover:text-gray-600 transition-colors duration-300 uppercase"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Offers
            </a>
            {/* Gold underline slider for offers */}
            <div
              className={`absolute bottom-0 left-1/2 h-0.5 bg-yellow-600 transition-all duration-300 ease-out transform -translate-x-1/2 ${
                activeItem === "OFFERS" ? "w-full" : "w-0"
              }`}
            />
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Bell size={18} className="text-red-600 hover:text-red-700 transition-colors cursor-pointer" />
            <Phone size={18} className="text-black hover:text-gray-600 transition-colors cursor-pointer" />
            <Mail size={18} className="text-black hover:text-gray-600 transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="text-black hover:text-gray-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="mt-4 pt-4 border-t border-gray-300">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-bold tracking-wide text-black hover:text-gray-600 transition-colors uppercase py-2"
                style={{ fontFamily: "var(--font-montserrat)" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col gap-4 pt-4 border-t border-gray-200 mt-4">
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium tracking-widest text-gray-700 uppercase">Follow us</span>
                <div className="flex items-center gap-3">
                  <Facebook size={18} className="text-black hover:text-gray-600 transition-colors cursor-pointer" />
                  <Instagram size={18} className="text-black hover:text-gray-600 transition-colors cursor-pointer" />
                  <Twitter size={18} className="text-black hover:text-gray-600 transition-colors cursor-pointer" />
                  <Youtube size={18} className="text-black hover:text-gray-600 transition-colors cursor-pointer" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium tracking-widest text-gray-700 uppercase">Contact</span>
                <div className="flex items-center gap-3">
                  <Bell size={18} className="text-red-600 hover:text-red-700 transition-colors cursor-pointer" />
                  <Phone size={18} className="text-black hover:text-gray-600 transition-colors cursor-pointer" />
                  <Mail size={18} className="text-black hover:text-gray-600 transition-colors cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
