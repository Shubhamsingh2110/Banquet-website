import { useState } from "react"
import {
  ChevronDown,
  MapPin,
  Search,
  Settings,
  ShoppingCart,
  User,
  Menu,
  X,
  Droplet,
  Pill,
  ArrowRight,
} from "lucide-react"

// ---------------- HEADER ----------------
function MedicareHeader() {
  const [selectedLocation, setSelectedLocation] = useState("New York")
  const [isLocationOpen, setIsLocationOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
        <header className="bg-gray-100 rounded-3xl min-h-20 max-w-7xl mx-auto my-2 px-4 md:px-0">
      <div className="flex items-center justify-between h-full max-w-6xl mx-auto py-4 md:py-4">
        {/* Left Section */}
        <div className="flex items-center gap-2 md:gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://i.postimg.cc/fbBhGctt/Screenshot-2025-08-21-at-11-40-49-AM-removebg-preview.png"
              className="w-8 h-6 md:w-10 md:h-8 rounded flex items-center justify-center"
            />
            <span className="text-[#2E2E2E] font-bold text-xl md:text-2xl font-sans">Medicare</span>
          </div>

          {/* Location Selector - Hidden on mobile */}
          <div className="relative hidden lg:block">
            <button
              onClick={() => setIsLocationOpen(!isLocationOpen)}
              className="flex items-center gap-2 text-[#7A7A7A] transition-colors px-3 py-2"
            >
              <MapPin className="w-4 h-4" />
              <div className="flex flex-col items-start">
                <span className="text-sm">Select Location</span>
                <span className="text-[#2E2E2E] font-semibold text-sm">{selectedLocation}</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </button>
            {isLocationOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white rounded-2xl shadow-lg z-50 min-w-[150px]">
                <button
                  onClick={() => {
                    setSelectedLocation("New York")
                    setIsLocationOpen(false)
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 text-sm first:rounded-t-2xl"
                >
                  New York
                </button>
                <button
                  onClick={() => {
                    setSelectedLocation("Los Angeles")
                    setIsLocationOpen(false)
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 text-sm"
                >
                  Los Angeles
                </button>
                <button
                  onClick={() => {
                    setSelectedLocation("Chicago")
                    setIsLocationOpen(false)
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 text-sm last:rounded-b-2xl"
                >
                  Chicago
                </button>
              </div>
            )}
          </div>

          {/* Search Bar - Responsive */}
          <div className="relative hidden md:flex flex-1 max-w-xs lg:max-w-md">
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center">
              <Search className="w-4 h-4 text-gray-700" />
            </div>
            <input
              type="text"
              placeholder="Medicine and healthcare items"
              className="pl-14 pr-4 py-2 h-11 w-full rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
            />
          </div>
        </div>

        {/* Right Section - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          {/* Healthcare Services */}
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center gap-2 text-[#2E2E2E] transition-colors px-3 py-2 rounded-full relative"
            >
              <span className="font-medium text-sm lg:text-base">Healthcare Services</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {isServicesOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white rounded-2xl shadow-2xl z-50 min-w-[200px]">
                <button
                  onClick={() => setIsServicesOpen(false)}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 text-sm first:rounded-t-2xl"
                >
                  Telemedicine
                </button>
                <button
                  onClick={() => setIsServicesOpen(false)}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 text-sm"
                >
                  Lab Tests
                </button>
                <button
                  onClick={() => setIsServicesOpen(false)}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 text-sm"
                >
                  Pharmacy
                </button>
                <button
                  onClick={() => setIsServicesOpen(false)}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 text-sm last:rounded-b-2xl"
                >
                  Health Checkups
                </button>
              </div>
            )}
          </div>

          {/* Offers */}
          <button className="flex items-center gap-2 text-black transition-all px-3 py-2 rounded-full">
            <Settings className="w-4 h-4" />
            <span className="font-medium text-sm lg:text-base">Offers</span>
          </button>

          {/* Cart */}
          <button className="text-[#2E2E2E] p-2">
            <ShoppingCart className="w-5 h-5" />
          </button>

          {/* Login */}
          <button className="flex items-center gap-2 text-[#2E2E2E] px-3 py-2">
            <User className="w-5 h-5 lg:w-6 lg:h-6" />
            <span className="font-medium text-sm lg:text-base">Login</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button className="text-[#2E2E2E] p-2">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#2E2E2E] p-2">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white rounded-2xl mt-2 shadow-lg overflow-hidden">
          {/* Mobile Search */}
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center">
                <Search className="w-3 h-3 text-gray-700" />
              </div>
              <input
                type="text"
                placeholder="Medicine and healthcare items"
                className="pl-12 pr-4 py-3 w-full rounded-full border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
              />
            </div>
          </div>

          {/* Mobile Location */}
          <div className="p-4 border-b border-gray-100">
            <button
              onClick={() => setIsLocationOpen(!isLocationOpen)}
              className="flex items-center justify-between w-full text-left"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#7A7A7A]" />
                <div>
                  <div className="text-sm text-[#7A7A7A]">Select Location</div>
                  <div className="text-[#2E2E2E] font-semibold">{selectedLocation}</div>
                </div>
              </div>
              <ChevronDown className="w-4 h-4" />
            </button>
            {isLocationOpen && (
              <div className="mt-3 space-y-1">
                <button
                  onClick={() => {
                    setSelectedLocation("New York")
                    setIsLocationOpen(false)
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg text-sm"
                >
                  New York
                </button>
                <button
                  onClick={() => {
                    setSelectedLocation("Los Angeles")
                    setIsLocationOpen(false)
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg text-sm"
                >
                  Los Angeles
                </button>
                <button
                  onClick={() => {
                    setSelectedLocation("Chicago")
                    setIsLocationOpen(false)
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg text-sm"
                >
                  Chicago
                </button>
              </div>
            )}
          </div>

          {/* Mobile Healthcare Services */}
          <div className="p-4 border-b border-gray-100">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center justify-between w-full text-left"
            >
              <span className="font-medium text-[#2E2E2E]">Healthcare Services</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {isServicesOpen && (
              <div className="mt-3 space-y-1">
                <button
                  onClick={() => setIsServicesOpen(false)}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg text-sm"
                >
                  Telemedicine
                </button>
                <button
                  onClick={() => setIsServicesOpen(false)}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg text-sm"
                >
                  Lab Tests
                </button>
                <button
                  onClick={() => setIsServicesOpen(false)}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg text-sm"
                >
                  Pharmacy
                </button>
                <button
                  onClick={() => setIsServicesOpen(false)}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg text-sm"
                >
                  Health Checkups
                </button>
              </div>
            )}
          </div>

          {/* Mobile Navigation Items */}
          <div className="p-4 space-y-3">
            <button className="flex items-center gap-3 w-full text-left py-2">
              <Settings className="w-5 h-5" />
              <span className="font-medium">Offers</span>
            </button>
            <button className="flex items-center gap-3 w-full text-left py-2">
              <User className="w-5 h-5" />
              <span className="font-medium">Login</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

// ---------------- HERO SECTION ----------------
function HealthcareSection() {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] max-w-7xl mx-auto bg-[#1d1f4f] rounded-[30px] sm:rounded-[30px] md:rounded-[50px] p-4 sm:p-6 md:p-8 lg:p-16 overflow-hidden">
      {/* Main Healthcare Heading - positioned behind doctor */}
      <div className="absolute top-2 sm:top-4 md:top-8 left-2 sm:left-8 md:left-40 z-10">
        <h1 className="text-7xl sm:text-4xl md:text-[150px] lg:text-[200px] font-extrabold text-[#e1ebff] leading-none tracking-tight text-center translate-x-6  translate-y-16 sm:translate-x-0 md:translate-y-14 lg:translate-x-0">
          Healthcare
        </h1>
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col md:flex-row min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
        {/* Left Content - Supporting Text */}
        <div className="flex-1 max-w-md order-2 md:order-1">
          {/* Supporting Text */}
          <div className="text-left mb-4 sm:mb-6 md:mb-8 mt-16 sm:mt-20 md:mt-0 md:translate-y-96 lg:translate-y-96 ">
            <p className="text-white/70 text-sm sm:text-base md:text-sm font-medium uppercase leading-relaxed">
              If you're looking for a creative and easy <br className="hidden sm:block" />
              way to build a website, wow! is <br className="hidden sm:block" />
              the perfect solution.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-3 sm:gap-4 justify-start">
            {/* Reduce HbA1c Feature */}
            <div className="flex items-center gap-3 ml-4 sm:ml-8 md:ml-0 lg:translate-x-[250px] lg:translate-y-[90px] md:translate-x-32 md:translate-y-24">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#f3cce2] rounded-full flex items-center justify-center">
                <Droplet className="w-4 h-4 sm:w-5 sm:h-5 text-[#1d1f4f]" />
              </div>
              <span className="text-[#b3b3c7] text-lg sm:text-xl font-light">Reduce HbA1c</span>
            </div>

            {/* No More Medications Feature */}
            <div className="flex items-center gap-3 ml-8 sm:ml-16 md:ml-0 lg:translate-x-[730px] lg:translate-y-9  md:translate-x-[600px] md:translate-y-10 ">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#b2f1d3] rounded-full flex items-center justify-center">
                <Pill className="w-4 h-4 sm:w-5 sm:h-5 text-[#1d1f4f]" />
              </div>
              <span className="text-[#b3b3c7] text-lg sm:text-xl font-light">No more medications</span>
            </div>
          </div>
        </div>

        {/* Doctor Image - now on the right side */}
        <div className="relative z-30 flex-shrink-0 order-1 md:order-2 flex justify-center md:justify-end">
          <img
            src="https://i.postimg.cc/xjpY6DBv/Screenshot-2025-08-21-at-12-26-32-PM-Photoroom.png"
            alt="Professional healthcare doctor"
            className="w-[200px] sm:w-[220px] md:w-[300px] lg:w-[300px] h-[320px] sm:h-[280px] md:h-[450px] lg:h-[450px] translate-y-20 sm:translate-y-8 md:translate-y-20 lg:translate-y-11 object-contain translate-x-0 sm:translate-x-0 md:-translate-x-32 lg:translate-x-0"
          />
        </div>
      </div>

      {/* Book Consultation Button - Bottom Right */}
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-16 md:right-16 z-20">
        <button className="bg-[#f3cce2] hover:bg-[#e8b8d1] text-[#1d1f4f] font-semibold px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 md:gap-3 transition-colors text-xs sm:text-sm md:text-base">
          Book Consultation
          <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-9 md:h-9 rounded-full flex items-center justify-center ml-1 md:ml-2 translate-x-1 sm:translate-x-2 md:translate-x-3 bg-white">
            <img
              src="https://i.postimg.cc/C1VtvJ4p/right-up.png"
              className="w-2 h-2 sm:w-3 sm:h-3 md:w-8 md:h-8 text-[#1d1f4f] bg-white rounded-full"
            />
          </div>
        </button>
      </div>
    </section>
  )
}

// ---------------- SERVICES GRID ----------------
const services = [
  {
    id: 1,
    title: "Instant Video Consultation",
    subtitle: "Connect within 60 secs",
    bgColor: "bg-[#F3E06C]",
    image: "https://i.postimg.cc/wxQ0Fpvw/Screenshot-2025-08-21-at-1-25-51-PM-Photoroom.png",
  },
  {
    id: 2,
    title: "Find Doctors near you",
    subtitle: "Confirmed appointments",
    bgColor: "bg-[#A8E6CF]",
    image: "https://i.postimg.cc/sX61Dxmn/Screenshot-2025-08-21-at-1-28-59-PM-Photoroom.png",
  },
  {
    id: 3,
    title: "24/7 Medicines",
    subtitle: "Essentials at your doorstep",
    bgColor: "bg-[#F5C6E0]",
    image: "https://i.postimg.cc/d0nV43bq/Screenshot-2025-08-21-at-1-29-50-PM-Photoroom.png",
  },
  {
    id: 4,
    title: "Lab Tests",
    subtitle: "Sample pickup at your home",
    bgColor: "bg-[#AED4F9]",
    image: "https://i.postimg.cc/s232Y706/Screenshot-2025-08-21-at-1-30-10-PM-Photoroom.png",
  },
]

function HealthcareServices() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto my-6 px-4">
      {services.map((service) => (
        <div
          key={service.id}
          className={`${service.bgColor} rounded-3xl p-6 relative overflow-hidden min-h-[300px] flex flex-col justify-between`}
        >
          {/* Title + Subtitle */}
          <div>
            <h3 className="text-[#1B1F3B] font-bold text-2xl mb-2">{service.title}</h3>
            <p className="text-[#444] text-sm">{service.subtitle}</p>
          </div>

          {/* Image + Arrow */}
          <div className="relative">
            <div className="flex justify-center mb-4">
              <img src={service.image} alt={service.title} className="w-32 h-36 translate-x-14 object-cover" />
            </div>
            <button className="absolute bottom-0 left-0 w-10 h-10 bg-[#1B1F3B] hover:bg-[#2A2F4F] rounded-full flex items-center justify-center transition-all hover:scale-110 group">
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform -rotate-45" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

// ---------------- APP ----------------
export default function App() {
  return (
    <div>
      <MedicareHeader />
      <HealthcareSection />
      <HealthcareServices />
    </div>
  )
}
