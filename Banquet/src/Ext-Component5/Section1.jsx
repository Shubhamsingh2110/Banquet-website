import { useState } from "react"

export default function GeeVoltLanding() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://i.postimg.cc/ZKXdSnNQ/Chat-GPT-Image-Aug-24-2025-04-33-45-PM.png')",
        }}
      ></div>

      {/* Header */}
       <header className="relative z-10 w-full px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <img
              src="https://i.postimg.cc/xCMMfqzG/Screenshot-2025-08-24-at-5-00-44-PM-Photoroom.png"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
              alt="GeeVolt Logo"
            />
            <span className="text-white font-inter text-xl sm:text-2xl md:text-3xl lg:text-4xl">Gee</span>
            <span className="text-white font-inter italic text-xl sm:text-2xl md:text-3xl lg:text-4xl">Volt</span>
          </div>

          <button
            className="md:hidden text-white p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <img src="https://i.postimg.cc/nLnb2jF0/Screenshot-2025-08-26-at-1-50-47-PM-Photoroom.png" className="w-5 h-5 sm:w-6 sm:h-6" /> : <img src="https://i.postimg.cc/9FC6Cjhk/Screenshot-2025-08-26-at-1-40-33-PM-Photoroom.png" className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-white/60 hover:text-white text-base lg:text-lg font-inter transition-colors"
                onClick={() => setOpenDropdown(openDropdown === "demos" ? null : "demos")}
              >
                <span>Demos</span>
              </button>
            </div>

            <div className="relative">
              <button
                className="flex items-center space-x-1 text-base lg:text-lg font-inter text-white/60 hover:text-white transition-colors"
                onClick={() => setOpenDropdown(openDropdown === "company" ? null : "company")}
              >
                <span>Company</span>
              </button>
            </div>

            <a
              href="#services"
              className="text-white/60 hover:text-white font-inter text-base lg:text-lg transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-white/60 hover:text-white font-inter text-base lg:text-lg transition-colors"
            >
              Projects
            </a>
          </div>

          <button className="hidden sm:block bg-yellow-300 hover:bg-yellow-400 text-black font-medium px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg text-xs sm:text-sm lg:text-base">
            <span className="hidden lg:inline">Let's Save The World</span>
            <span className="lg:hidden">Get Started</span>
          </button>
        </nav>

{mobileMenuOpen && (
  <div className="md:hidden w-full bg-black/95 backdrop-blur-md border-t border-white/10 shadow-xl">
    <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4 rounded-full">
              <div className="space-y-2">
                <button
                  className="flex items-center justify-between w-full text-white/60 hover:text-white text-base sm:text-lg font-inter py-2 transition-colors"
                  onClick={() => setOpenDropdown(openDropdown === "demos" ? null : "demos")}
                >
                  <span>Demos</span>
                </button>
              </div>

              <div className="space-y-2">
                <button
                  className="flex items-center justify-between w-full text-white/60 hover:text-white text-base sm:text-lg font-inter py-2 transition-colors"
                  onClick={() => setOpenDropdown(openDropdown === "company" ? null : "company")}
                >
                  <span>Company</span>
                </button>
              </div>

              <a
                href="#services"
                className="block text-white/60 hover:text-white font-inter text-base sm:text-lg py-2 transition-colors"
              >
                Services
              </a>
              <a
                href="#projects"
                className="block text-white/60 hover:text-white font-inter text-base sm:text-lg py-2 transition-colors"
              >
                Projects
              </a>
              <button className="w-full bg-yellow-300 hover:bg-yellow-400 text-black font-medium px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg mt-4 text-sm sm:text-base">
                Let's Save The World
              </button>
            </div>
          </div>
        )}
      </header>


      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center">
        <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6 lg:-translate-y-48 -translate-y-60 md:-translate-y-44">
          <h1 className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
            Green solutions and recycling for a <span className="block">sustainable, eco-friendly future.</span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-white/80 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            From cutting-edge green designs to recycling programs, we're dedicated to transforming the world with every
            eco-friendly product.
          </p>

          <button className="bg-yellow-300 text-black font-light px-6 sm:px-8 py-2 rounded-full text-base sm:text-lg group inline-flex items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            Get Started
            <img
              src="https://i.postimg.cc/jSVSQvwX/right.png"
              className="ml-2 sm:ml-3 w-7 h-7 sm:w-9 sm:h-9 lg:translate-x-6 bg-white rounded-full"
            />
          </button>
        </div>

<div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {/* Card 1 */}
          <div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 transition-all duration-300 hover:bg-white/15 hover:scale-105 cursor-pointer sm:col-span-2 md:col-span-2 lg:w-[575px] lg:h-64 lg:col-span-1"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex sm:grid sm:grid-cols-2 gap-4 md:gap-6 h-full">
              <div className="w-20 h-20 sm:w-full sm:h-32 md:w-full md:h-40 lg:w-64 lg:h-60 rounded-xl overflow-hidden flex-shrink-0 lg:-translate-y-4 lg:-translate-x-4">
                <img
                  src="https://i.pinimg.com/1200x/a5/19/08/a51908b255af1bef6923133cc1e9747c.jpg"
                  alt="Green sustainable farmland"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 sm:flex sm:flex-col sm:justify-center text-left space-y-1 sm:space-y-2 lg:-translate-y-14">
                <h3 className="text-white font-normal text-lg sm:text-xl md:text-2xl">
                  Where Sustainability meets Style.
                </h3>
                <p className="text-white/80 text-sm">
                  With green designs and recycling, we're making the world eco-friendly.
                </p>
                <a href="#services" className="text-white/60 text-sm md:text-base underline">
                  Discover Our Services
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 transition-all duration-300 hover:bg-white/15 hover:scale-105 cursor-pointer md:col-span-1 lg:w-64 lg:h-64 lg:ml-40"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="text-center space-y-3 sm:space-y-4 h-full flex flex-col justify-center lg:translate-y-7">
              <div className="flex justify-center">
                <div className="flex -space-x-2 sm:-space-x-3 md:-space-x-4">
                  <img
                    src="https://i.pinimg.com/736x/0f/37/44/0f37449ce43858738a05f56e82ac6398.jpg"
                    alt=""
                    className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-cover border-2 border-white/20"
                  />
                  <img
                    src="https://i.pinimg.com/1200x/2a/0b/22/2a0b2216788c4e596c594d27dfae3139.jpg"
                    alt=""
                    className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-cover border-2 border-white/20"
                  />
                  <img
                    src="https://i.pinimg.com/1200x/23/b6/31/23b631a3e21f6d88cfae17dd9269f67e.jpg"
                    alt=""
                    className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-cover border-2 border-white/20"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-white font-normal font-inter text-2xl sm:text-3xl md:text-4xl">10M+</h3>
                <h4 className="text-white font-thin text-lg sm:text-xl md:text-2xl">Customers</h4>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 transition-all duration-300 hover:bg-white/15 hover:scale-105 cursor-pointer sm:col-span-2 md:col-span-3 lg:col-span-1 lg:w-96 lg:h-64"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex sm:block md:flex lg:block items-center sm:items-start md:items-center lg:items-start gap-4 sm:gap-0 sm:space-y-4 md:space-y-0 md:gap-6 lg:space-y-4 lg:gap-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0 sm:mx-auto md:mx-0 lg:mx-auto lg:mr-64">
                <img
                  src="https://i.postimg.cc/Jz3Z2W6Y/Screenshot-2025-08-25-at-12-19-54-PM-Photoroom.png"
                  alt=""
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-10 lg:h-10"
                />
              </div>
              <div className="text-left sm:text-center md:text-left lg:text-left space-y-1 sm:space-y-2">
                <h3 className="text-white font-light font-inter text-xl sm:text-2xl md:text-3xl lg:text-2xl">
                  Efficient solar panels
                </h3>
                <p className="text-white/60 text-sm md:text-base lg:text-sm">
                  Our solar panels deliver maximum efficiency, ensuring you get the most out of every ray of sunshine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </main>
    </div>
  )
}
