import { useState, useEffect } from "react"
import { ChevronDown, MapPin, Leaf, Star, Grid3X3 } from "lucide-react"

export default function HomePage() {
  const [hoveredIsland, setHoveredIsland] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2000,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="min-h-screen bg-white/95 backdrop-blur-sm overflow-hidden relative">
      <div
        className="fixed w-4 h-4 bg-green-400 rounded-full pointer-events-none z-50 opacity-30 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${hoveredIsland ? 2 : 1})`,
        }}
      />
       <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://i.postimg.cc/fWJK5H6R/Chat-GPT-Image-Aug-26-2025-09-31-43-PM.png')",
        }}
      />
        <header className="flex items-center max-w-7xl mx-auto justify-between p-6 md:p-8 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:rotate-180 transition-transform duration-500">
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <span className="text-3xl font-light text-[#1c1c1c] hover:text-[#2e6b3a] transition-colors cursor-pointer">
              Green-de
            </span>
            <div className="hidden md:flex items-center gap-2 ml-4"></div>
          </div>

          <nav className="hidden lg:flex items-center gap-3 ">
            <button className="px-4 py-2 text-gray-700 rounded-full text-sm font-medium hover:bg-[#2e6b3a] hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-200">
              GreenEnergy
            </button>
            <button className="px-4 py-2 text-gray-700 rounded-full text-sm font-medium hover:bg-[#2e6b3a] hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-200">
              Consulting
            </button>
            <button className="px-4 py-2 text-gray-700 rounded-full text-sm font-medium hover:bg-[#2e6b3a] hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-200">
              Solar Power
            </button>
            <button className="px-4 py-2 text-gray-700 rounded-full text-sm font-medium hover:bg-[#2e6b3a] hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-200">
              Wind Turbine
            </button>
            <button className="px-4 py-2 text-gray-700 rounded-full text-sm font-medium hover:bg-[#2e6b3a] hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-200">
              Pricing
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 hover:scale-105 hover:shadow-md bg-transparent transition-all duration-200">
              Join us
            </button>
            <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-200">
              GreenPower
            </button>
          </div>
        </header>

        <main className="px-6 md:px-8 pb-8 relative z-10 min-h-screen">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm bg-white/95 border border-slate-200">
              <span className="">🌱</span>
              <span>→</span>
              <span className="">🌍</span>
              <span>Providing energy solutions</span>
              <span>→</span>
              <span className="">🚀</span>
            </div>
          </div>

          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-7xl font-light text-[#2e6b3a] mb-4 leading-tight transition-colors duration-500 cursor-default">
              Visit Us At Central Green–Park
            </h1>
            <p className="text-gray-600/50 text-lg max-w-2xl mx-auto hover:text-gray-800 transition-colors duration-300">
              Any ongoing maintenance costs associated with the energy-saving measures.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="bg-[#2e6b3a] text-white rounded-full px-8 py-3 hover:bg-[#245530] hover:scale-110 hover:shadow-2xl transition-all duration-300 flex items-center gap-2 group border hover:border-white">
              Contact Us
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
            <button className="rounded-full px-5 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 hover:shadow-xl hover:scale-105 hover:border-[#2e6b3a] transition-all duration-300 flex items-center gap-2 bg-transparent group">
              About Green-de
              <img className="https://i.postimg.cc/QNqWgqwv/arrow-right.png" />
            </button>
          </div>



          <div className="flex items-end justify-between pt-96 max-w-7xl mx-auto">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-8 bg-[#2e6b3a] rounded-full flex items-center justify-center  group-hover:scale-110 transition-all duration-200">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div className="text-sm text-gray-600 group-hover:text-[#2e6b3a] transition-colors duration-200">
                <div>2689 Greenland,</div>
                <div>Sp9, UEA</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#2e6b3a] hover:text-white hover:shadow-2xl hover:rotate-12 hover:scale-110 transition-all duration-300 group">
                <Leaf className="w-5 h-5 text-[#2e6b3a] group-hover:text-white " />
              </button>
              <button className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#2e6b3a] hover:text-white hover:shadow-2xl hover:rotate-12 hover:scale-110 transition-all duration-300 group">
                <Star className="w-5 h-5 text-[#2e6b3a] group-hover:text-white " />
              </button>
              <button className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#2e6b3a] hover:text-white hover:shadow-2xl hover:rotate-12 hover:scale-110 transition-all duration-300 group">
                <Grid3X3 className="w-5 h-5 text-[#2e6b3a] group-hover:text-white " />
              </button>
            </div>
          </div>
        </main>
      </div>
  )
}
