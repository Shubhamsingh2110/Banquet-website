import { useState, useEffect } from "react"
import { Calendar, Users, MapPin, ChevronDown } from "lucide-react"

const backgroundImages = [
  "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967084/238A1247_z4braw.jpg",
  "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967082/238A1259_y3azz1.jpg",
  "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967072/238A1268_oerhhb.jpg",
  "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967068/238A1246_kigd5h.jpg"
]

const destinations = ["Grand Plaza, Zirakpur", "Maison Palace, Mohali", "Orient Destination, Panchkula"]

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [checkInDate, setCheckInDate] = useState("")
  const [checkOutDate, setCheckOutDate] = useState("")
  const [guestCount, setGuestCount] = useState("0200")
  const [destination, setDestination] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const formatGuestCount = (value) => {
    const num = Number.parseInt(value) || 0
    return num.toString().padStart(4, "0")
  }

  const handleGuestCountChange = (e) => {
    const value = e.target.value.replace(/\D/g, "")
    if (value.length <= 4) {
      setGuestCount(formatGuestCount(value))
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Wedding venue background ${index + 1}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <div className="mb-16 text-center fade-in">
          <div className="mb-8 flex justify-center">
            <div className="relative h-24 w-24">
              <img src="https://i.postimg.cc/C1ySmFFT/IMG-2980.png" alt="" className="rounded-full border-4 border-[#B38B59]" />
            </div>
          </div>

          <h1 className="mb-4 font-cormorant text-6xl font-black text-white md:text-8xl">THE ROYAL SAPPHIRE</h1>

          {/* <p className="font-cormorant text-lg text-gray-200 md:text-3xl">
            Choose your best marriage destination with us
          </p> */}
        </div>

        {/* <div className="w-full max-w-6xl slide-up">
          <div className="rounded-3xl bg-white/95 p-6 shadow-2xl backdrop-blur-sm md:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-6">
              <div className="flex-1 space-y-2">
                <label className="block font-cormorant text-lg font-medium text-gray-700">
                 DESTINATION
                </label>
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex h-12 w-full items-center justify-between rounded-full border border-[#B38B59] bg-white px-3 py-2 text-sm font-montserrat hover:border-[#B38B59] focus:border-[#B38B59] focus:outline-none focus:ring-2 focus:ring-[#B38B59] focus:ring-offset-2"
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#B38B59]" />
                      <span className={destination ? "text-gray-900" : "text-gray-500"}>
                        {destination || "Choose destination"}
                      </span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 text-gray-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-3xl border border-gray-200 bg-white shadow-lg">
                      {destinations.map((dest) => (
                        <button
                          key={dest}
                          onClick={() => {
                            setDestination(dest)
                            setIsDropdownOpen(false)
                          }}
                          className="block w-full px-3 py-2 text-left text-sm font-montserrat hover:bg-gray-50 focus:bg-gray-50 focus:outline-none rounded-3xl"
                        >
                          {dest}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1 space-y-2">
                <label className="block font-cormorant text-lg font-medium text-gray-700">NUMBER OF PEOPLE</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#B38B59]" />
                  <input
                    type="text"
                    value={guestCount}
                    onChange={handleGuestCountChange}
                    className="h-12 w-full rounded-3xl border bg-white pl-10 pr-3 py-2 text-sm font-montserrat font-medium placeholder-gray-500 border-[#B38B59] focus:border-[#B38B59] focus:outline-none focus:ring-2 focus:ring-[#B38B59] focus:ring-offset-2"
                    placeholder="0000"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-2">
                <label className="block font-cormorant text-lg font-medium text-gray-700">CHECK IN</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#B38B59]" />
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="h-12 w-full rounded-3xl border  bg-white pl-10 pr-3 py-2 text-sm font-montserrat border-[#B38B59] focus:border-[#B38B59] focus:outline-none focus:ring-2 focus:ring-[#B38B59] focus:ring-offset-2"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-2">
                <label className="block font-cormorant text-lg font-medium text-gray-700">CHECK OUT</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#B38B59]" />
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="h-12 w-full rounded-3xl border  bg-white pl-10 pr-3 py-2 text-sm font-montserrat border-[#B38B59] focus:border-[#B38B59] focus:outline-none focus:ring-2 focus:ring-[#B38B59] focus:ring-offset-2"
                  />
                </div>
              </div>

              <div className="space-y-2 lg:space-y-0">
                <label className="block font-cormorant text-sm font-medium text-gray-700 lg:invisible">Action</label>
                <button className="h-12 w-full rounded-full bg-[#B38B59] px-8 py-2 font-cormorant font-semibold text-white transition-all duration-300 hover:bg-[#9A7A4A] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B38B59] focus:ring-offset-2 lg:w-auto">
                  CHECK AVAILABILITY
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
