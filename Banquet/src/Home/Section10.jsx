import { useState } from "react"
import { Menu } from "lucide-react"

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://i.postimg.cc/TPYVZZgg/imgmain.jpg')",
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="w-full px-4 sm:px-6 pt-4 sm:pt-6 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/10 backdrop-blur-sm rounded-2xl px-4 sm:px-3 py-2 sm:py-2 flex items-center justify-between">
              {/* Logo */}
              <em className="text-[#474F35] font-playfair text-xl sm:text-3xl font-semibold translate-x-3 -translate-y-1">nat*</em>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                <a
                  href="/"
                  className="text-gray-600 hover:text-black transition-colors relative group font-sans text-base lg:text-lg"
                >
                  home
                </a>
                <a
                  href="/working"
                  className="text-gray-600 hover:text-black transition-colors relative group font-sans text-base lg:text-lg"
                >
                  working
                </a>
                <a
                  href="/pricing"
                  className="text-gray-600 hover:text-black transition-colors relative group font-sans text-base lg:text-lg"
                >
                  pricing
                </a>
              </div>

              {/* Get Started Button & Mobile Menu */}
              <div className="flex items-center space-x-2 sm:space-x-4 ">
                <button className="bg-[#474F35] text-white px-3 sm:px-6 py-2 sm:py-3 rounded-2xl shadow-lg transition-all font- text-xs sm:text-sm">
                  Get Started
                </button>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden text-gray-600 hover:text-black p-1"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <Menu size={20} />
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden mt-2 bg-white/20 backdrop-blur-sm rounded-2xl p-4 animate-fade-in">
                <div className="flex flex-col space-y-3">
                  <a href="/" className="text-gray-600 hover:text-black transition-colors font-Inter text-sm">
                    home
                  </a>
                  <a href="/working" className="text-gray-600 hover:text-black transition-colors font-Inter text-sm">
                    working
                  </a>
                  <a href="/pricing" className="text-gray-600 hover:text-black transition-colors font-Inter text-sm">
                    pricing
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 text-center py-8 sm:py-12 lg:-translate-y-12">
          <div className="w-full max-w-5xl mx-auto space-y-6 sm:space-y-8">
            {/* Main Headline */}
            <h1 className="animate-fade-in-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans text-gray-800 leading-tight">
              Reconnect in a{" "}
              <span className="block sm:inline">
                <em className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-playfair text-[#474F35] font-extralight">
                  Single Breath
                </em>
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="animate-fade-in-up text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-serif leading-relaxed px-2 sm:px-0"
              style={{ animationDelay: "0.2s" }}
            >
              Lead with purpose, build boldly, and shape the future—your generation's moment is now. Own it. Drive it.
            </p>

            {/* CTA Button */}
            <div className="animate-fade-in-up pt-4 sm:pt-6" style={{ animationDelay: "0.4s" }}>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-lime-900/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-Inter shadow-3xl shadow-[0_0_20px_rgb(54,83,20,0.8)] transition-shadow duration-300 hover:shadow-[#474F35]"
              >
                Unlock What's Next
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full shadow-2xl animate-scale-in mx-4">
            <div className="text-center space-y-4">
              <h2 className="text-xl sm:text-2xl font-serif text-gray-800">Your Journey Begins</h2>
              <p className="text-sm sm:text-base text-gray-600 font-serif leading-relaxed">
                Every great transformation starts with a single breath, a moment of clarity, and the courage to step
                forward. You have everything you need within you.
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-green-800 hover:bg-green-900 text-white px-6 py-2 rounded-full font-sans text-sm sm:text-base transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
