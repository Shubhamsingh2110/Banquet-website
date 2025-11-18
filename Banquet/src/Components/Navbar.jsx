import { Instagram, Phone, Menu as MenuIcon, X } from "lucide-react"
import { useState } from "react"

export default function NavigationHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogoClick = (e) => {
    e.preventDefault()
    // Scroll to top/hero section
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav className="w-full bg-white px-4 py-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Left Section - Social Media */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-xs font-medium tracking-widest text-gray-700 uppercase">
            Follow us
          </span>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/_theroyalsapphire?igsh=Y3ZhaDh0aGptNmlw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Center Logo - visible only when hamburger is NOT visible (lg and up) */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
          <a
            href="#"
            onClick={handleLogoClick}
            className="flex flex-col items-center"
          >
            <img
              src="https://i.postimg.cc/C1ySmFFT/IMG-2980.png"
              alt="The Royal Sapphire"
              className="h-12 w-12 rounded-full border-2 border-[#B38B59]"
            />
          </a>
        </div>

        {/* Right Section - Contact Icons */}
        <div className="flex items-center gap-4">
          {/* Desktop contact icons (md and up) */}
          <div className="hidden md:flex items-center gap-3">
            {/* WhatsApp icon (desktop) */}
            <a
              href="https://wa.me/918884008000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600 transition-colors"
              aria-label="Contact us on WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 23 23"
                width="22"
                height="20"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>

            {/* Phone icon with phone number */}
            <a
              href="tel:+918884008000"
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="Call us at 8884008000"
            >
              <Phone size={18} />
            </a>
          </div>

          {/* Mobile: Hamburger + WhatsApp to its RIGHT (visible < lg) */}
          {/* LEFT SIDE — Hamburger only (mobile) */}
          <div className="lg:hidden flex items-center">
            <button
              className="text-black hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* RIGHT SIDE — WhatsApp Icon (mobile) */}
          <div className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2">
            <a
              href="https://wa.me/918884008000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600 transition-colors md:hidden"
              aria-label="Contact us on WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 23"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
          ? "max-h-96 opacity-100"
          : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <div className="mt-4 pt-4 border-t border-gray-300">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-4 pt-4 mt-4">
              {/* Follow us in mobile menu */}
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium tracking-widest text-gray-700 uppercase">
                  Follow us
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/_theroyalsapphire?igsh=Y3ZhaDh0aGptNmlw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-600 transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>

              {/* Contact in mobile menu (only Phone now) */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium tracking-widest text-gray-700 uppercase">
                  Contact
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="tel:+918884008000"
                    className="text-black hover:text-gray-600 transition-colors"
                  >
                    <Phone size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
