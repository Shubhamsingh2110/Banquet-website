import { useState } from "react"
import { Menu, X, CheckCircle } from "lucide-react"

// ---------------- HEADER ----------------
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationLinks = [
    { name: "Companies", href: "/companies" },
    { name: "Members", href: "/members" },
    { name: "Society", href: "/society" },
    { name: "About", href: "/about" },
    { name: "Login", href: "/login" },
  ]

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              src="https://i.postimg.cc/m2Sx5hPM/image-removebg-preview-5.png"
              className="w-16 h-16"
            />
            <span className="ml-2 text-3xl font-bold text-gray-900">Teamway</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 font-medium font-sulphur text-lg hover:text-gray-900 transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Hire Talent Button */}
          <div className="hidden md:block">
            <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-normal font-sulphur hover:bg-gray-800 active:bg-gray-950 transition-colors duration-200">
              Hire talent
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 font-medium hover:text-gray-900 transition-colors duration-200 px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <button className="w-full bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 active:bg-gray-950 transition-colors duration-200 shadow-sm">
                  Hire talent
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

// ---------------- HOME PAGE ----------------
function HomePage() {
  return (
    <div className="min-h-fit bg-white p-4 sm:p-6 md:p-10 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 lg:gap-12 items-start">
          {/* Left Section */}
          <div className="max-w-full sm:max-w-lg md:max-w-xl lg:max-w-md">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-normal font-sulphur text-gray-900 mb-8 sm:mb-16 md:mb-32 lg:mb-48">
              Build your dream team today.
            </h1>

            <p className="text-base md:text-lg lg:text-base text-gray-600 leading-relaxed mb-6 md:mb-10 lg:mb-8">
              Unlock success with our handpicked dream team of experts. Hire now for unparalleled results.
            </p>

            <button className="bg-black hover:bg-gray-800 text-white rounded-full px-6 py-3 h-14 md:h-16 lg:h-14 w-full sm:w-56 md:w-64 lg:w-56 mb-6 md:mb-10 lg:mb-6 transition-all hover:scale-105 flex items-center justify-center">
              <span className="md:text-lg lg:text-base">Book a call</span>
              <img
                src="https://i.postimg.cc/65hPWSLG/right-1.png"
                className="ml-2 h-9 w-9 md:h-10 md:w-10 lg:h-9 lg:w-9 bg-white translate-x-2 sm:translate-x-10 md:translate-x-12 lg:translate-x-10 rounded-full"
              />
            </button>

            {/* Avatar Row */}
            <div className="flex items-center justify-center sm:justify-start sm:translate-x-32 md:translate-x-56 lg:translate-x-64 -translate-y-4 sm:-translate-y-12 md:-translate-y-20 lg:-translate-y-20">
              <div className="flex -space-x-2">
                <img
                  src="https://i.pinimg.com/736x/1c/b4/2c/1cb42cae55c972b2185ba0e651826802.jpg"
                  alt="Team member"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-14 lg:h-14 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://i.pinimg.com/1200x/e9/db/41/e9db412913329a73d075409fc894f22b.jpg"
                  alt="Team member"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-14 lg:h-14 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://i.pinimg.com/1200x/a3/97/89/a3978996f3f8e1a469730ce0c0691f0f.jpg"
                  alt="Team member"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-14 lg:h-14 rounded-full border-2 border-white object-cover"
                />
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-14 lg:h-14 rounded-full bg-amber-100 border-2 border-white flex items-center justify-center">
                  <span className="text-xs md:text-sm lg:text-xs font-medium text-amber-800">
                    +728
                  </span>
                </div>
              </div>
            </div>
          </div>

 {/* Right Section - Grid of Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-6 lg:gap-4 mt-8 lg:mt-0">
            {/* Mike - Portrait Card */}
            <div className="relative overflow-hidden rounded-2xl h-48 sm:h-64 md:h-80 lg:h-80 w-full sm:w-48 md:w-56 lg:w-60 md:-translate-x-8 lg:-translate-x-12 bg-white">
              <img
                src="https://i.pinimg.com/736x/ed/97/17/ed97179b1a21251a1b4f3c2f03cd9273.jpg"
                alt="Mike - Frontend Developer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 md:p-5 lg:p-4">
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium text-sm md:text-lg lg:text-base">
                    Mike
                  </span>
                  <CheckCircle className="w-3 h-3 md:w-5 md:h-5 lg:w-4 lg:h-4 text-blue-400" />
                </div>
                <p className="text-white/80 text-xs md:text-base lg:text-sm">
                  Frontend Dev.
                </p>
              </div>
            </div>

            {/* Quick & Adaptable */}
            <div className="bg-green-200 p-3 md:p-6 lg:p-4 rounded-2xl h-48 sm:h-56 md:h-72 lg:h-[270px] w-full sm:w-40 md:w-48 lg:w-48">
              <h3 className="font-medium font-sulphur text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-900 mb-4 sm:mb-8 md:mb-16 lg:mb-20">
                Quick and adaptable
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-sm text-gray-600 leading-relaxed">
                Hire within a mere 72 hours. Easily adjust your team size from
                month to month as required.
              </p>
            </div>

            {/* Latisha */}
            <div className="relative overflow-hidden rounded-2xl h-40 sm:h-48 md:h-56 lg:h-56 w-full sm:w-32 md:w-40 lg:w-40 bg-white col-span-2 md:col-span-1">
              <img
                src="https://i.pinimg.com/1200x/1c/9a/f2/1c9af20e150ee3a659354c9d328d0284.jpg"
                alt="Latisha - Mobile Developer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 md:p-5 lg:p-4">
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium text-sm md:text-lg lg:text-base">
                    Latisha
                  </span>
                  <CheckCircle className="w-3 h-3 md:w-5 md:h-5 lg:w-4 lg:h-4 text-blue-400" />
                </div>
                <p className="text-white/80 text-xs md:text-base lg:text-sm">
                  Mobile Dev.
                </p>
              </div>
            </div>

            {/* Remote Talent Pool */}
            <div className="bg-purple-200 p-3 md:p-6 lg:p-4 rounded-2xl h-44 sm:h-48 md:h-56 lg:h-52 w-full sm:w-48 md:w-56 lg:w-60 group md:-translate-x-8 lg:-translate-x-12">
              <h3 className="font-medium font-sulphur text-base sm:text-lg md:text-xl lg:text-xl text-gray-900 mb-4 sm:mb-6 md:mb-10 lg:mb-9">
                Remote Talent Pool
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-sm text-gray-600 leading-relaxed">
                Pre-vetted remote developers, designers, and product managers
                with world-class technical and communication skills.
              </p>
            </div>

            {/* Asger */}
            <div className="relative overflow-hidden rounded-2xl h-44 sm:h-56 md:h-68 lg:h-64 w-full sm:w-40 md:w-48 lg:w-48 bg-white md:-translate-y-8 lg:-translate-y-12">
              <img
                src="https://i.pinimg.com/736x/25/33/8f/25338f488af2c45912c15ebab325e363.jpg"
                alt="Asger - UI/UX Designer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 md:p-5 lg:p-4">
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium text-sm md:text-lg lg:text-base">
                    Asger
                  </span>
                  <CheckCircle className="w-3 h-3 md:w-5 md:h-5 lg:w-4 lg:h-4 text-blue-400" />
                </div>
                <p className="text-white/80 text-xs md:text-base lg:text-sm">
                  UI/UX Designer
                </p>
              </div>
            </div>

            {/* Rest Assured */}
            <div className="bg-orange-200 p-3 md:p-6 lg:p-4 rounded-2xl h-56 sm:h-64 md:h-80 lg:h-[300px] w-[340px] sm:w-32 md:w-40 lg:w-40 group md:-translate-y-16 lg:-translate-y-24">
              <h3 className="font-medium text-sm sm:text-base md:text-xl lg:text-xl font-sulphur text-gray-900 mt-8 sm:mt-12 md:mt-20 lg:mt-24">
                Rest assured, there are no crazy fees or legal hassle to worry
                about.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ---------------- SOCIAL PROOF ----------------
const companies = [
  { name: "Open", logo: "https://i.postimg.cc/j2NNvGvq/Screenshot-2025-08-20-at-11-54-53-PM-removebg-preview.png" },
  { name: "Unisport", logo: "https://i.postimg.cc/j53vG0zz/Screenshot-2025-08-20-at-11-59-59-PM-removebg-preview.png" },
  { name: "Aller", logo: "https://i.postimg.cc/6pzHdvyj/Screenshot-2025-08-21-at-12-00-48-AM-removebg-preview.png" },
  { name: "Verisure", logo: "https://i.postimg.cc/mgdwcW5K/Screenshot-2025-08-21-at-12-01-40-AM-removebg-preview.png" },
  { name: "Layerise", logo: "https://i.postimg.cc/sX574kTj/Screenshot-2025-08-21-at-12-02-29-AM-removebg-preview.png" },
  { name: "GamerPay", logo: "https://i.postimg.cc/d3t3ZpXS/Screenshot-2025-08-21-at-12-03-04-AM-removebg-preview.png" },
  { name: "Better Collective", logo: "https://i.postimg.cc/J72MQsBh/Screenshot-2025-08-21-at-12-03-56-AM-removebg-preview-1.png" },
]

function SocialProof() {
  return (
    <section className="py-5 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500 text-lg mb-12 font-medium">
          Join 150+ companies trusting Teamway for their remote engineering needs.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((company) => (
            <div key={company.name} className="flex items-center justify-center">
              <img
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                width={120}
                height={40}
                className="opacity-60 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------- APP ----------------
export default function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <SocialProof />
    </div>
  )
}
