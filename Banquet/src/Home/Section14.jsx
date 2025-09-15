"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Search, ShoppingBag, Play, Plus, X, ArrowRight } from "lucide-react"

// ---------------- Header ----------------
function Header() {
  return (
    <header className="w-full bg-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-4xl font-semibold text-foreground">TrendZone</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "New Arrival", "Shop", "Contact", "About Us"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-foreground hover:text-muted-foreground transition-colors">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </button>
          <button className="p-2 text-foreground hover:text-muted-foreground transition-colors">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Shopping cart</span>
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-10 px-6">
            Sign In
          </button>
        </div>
      </div>
    </header>
  )
}

// ---------------- Hero Section ----------------
const CircularBadgeSVG = ({ onClick }) => (
  <motion.button
    onClick={onClick}
    aria-label="Play intro video"
    className="relative w-[72px] h-[72px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    whileHover={{ rotate: 180, scale: 1.03 }}
    transition={{ duration: 0.5 }}
  >
    <Play className="w-10 h-10 text-black absolute inset-0 m-auto" />
  </motion.button>
)

const StarburstSVG = () => (
  <svg viewBox="0 0 24 24" className="w-3 h-3">
    <path
      d="M12 2 L13 8 L19 6 L15 11 L22 12 L16 13 L18 19 L13 15 L12 22 L11 16 L5 18 L9 13 L2 12 L8 11 L6 5 L11 9 Z"
      fill="none"
      stroke="#0B0B0B"
      strokeWidth="1"
      strokeLinejoin="round"
    />
  </svg>
)

const AvatarStack = () => {
  const [showSignIn, setShowSignIn] = useState(false)
  const avatars = [
    {
      name: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
    },
    {
      name: "Marcus Johnson",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    },
    {
      name: "Elena Rodriguez",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    },
  ]

  return (
    <div className="flex items-center -space-x-2">
      {avatars.map((avatar) => (
        <motion.div key={avatar.name} className="relative group" whileHover={{ scale: 1.1, zIndex: 10 }}>
          <img src={avatar.image} alt={avatar.name} className="w-10 h-10 rounded-full border-2 border-white" />
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {avatar.name}
          </div>
        </motion.div>
      ))}

      {/* SignIn Modal */}
      {showSignIn && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowSignIn(false)}>
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Sign In</h3>
              <button onClick={() => setShowSignIn(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-600">Sign in functionality would be implemented here.</p>
          </div>
        </div>
      )}
    </div>
  )
}

const Tile = ({ bg, shape, aspect, image, alt, style }) => (
  <motion.div
    className={`${bg} ${shape} ${aspect} overflow-hidden shadow-lg`}
    style={style}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <img src={image || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />
  </motion.div>
)

const CTAButton = () => (
  <motion.a
    href="#collections"
    className="inline-flex items-center justify-center w-[260px] h-14 bg-[#0B0B0B] text-white font-medium rounded-full hover:shadow-lg transition-shadow"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    Explore Collections ↗
  </motion.a>
)

const CollageGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-7 xl:gap-7 max-w-[1240px] mx-auto">
    {/* Column 1 */}
    <div className="flex flex-col gap-7">
      <Tile
        bg="bg-[#FF7A1A]"
        shape="rounded-[20px]"
        aspect="aspect-[260/380]"
        image="https://i.pinimg.com/736x/9e/4b/3d/9e4b3d7f5168a155944ebc2e846f761f.jpg"
        alt="Person in orange outfit"
      />
      <Tile
        bg="bg-[#FF7A1A]"
        shape="rounded-[20px]"
        aspect="aspect-[260/150]"
        image="https://i.pinimg.com/1200x/3d/08/00/3d0800e25e3dbe790e201bf5676dc711.jpg"
        alt="Fashion accessories in orange"
      />
    </div>

    {/* Column 2 */}
    <Tile
      bg="bg-[#CFE9D4]"
      shape="rounded-[20px]"
      aspect="aspect-[300/600]"
      image="https://i.pinimg.com/736x/df/7f/51/df7f51baf5d6c7e5ec3d83afcca89e7f.jpg"
      alt="Person in green coat"
      style={{ transform: "translateY(-20px)" }}
    />

    {/* Column 3 */}
    <div className="flex flex-col items-center">
      
      <Tile
        bg="bg-[#F4C430]"
        shape="rounded-[20px]"
        aspect="aspect-[300/400]"
        image="https://i.pinimg.com/736x/62/85/7b/62857b21327da63c6ea4d5379f6621ab.jpg"
        alt="Person in yellow outfit"
      />
      <div className="mt-4">
        <CTAButton />
      </div>
    </div>

    {/* Column 4 */}
    <Tile
      bg="bg-[#CFE9D4]"
      shape="rounded-[20px]"
      aspect="aspect-[300/600]"
      image="https://i.pinimg.com/1200x/9a/ed/8d/9aed8dc76bb9c145b86c83deb28f01c6.jpg"
      alt="Person in green coat"
      style={{ transform: "translateY(-20px)" }}
    />

    {/* Column 5 */}
    <div className="flex flex-col gap-7">
      <Tile
        bg="bg-[#CFE9D4]"
        shape="rounded-[20px]"
        aspect="aspect-[300/460]"
        image="https://i.pinimg.com/736x/6f/2e/13/6f2e13efa2bbdaf318967ece2314ee6f.jpg"
        alt="Person in mint green outfit"
      />
      <Tile
        bg="bg-[#0DA39A]"
        shape="rounded-[20px]"
        aspect="aspect-[300/160]"
        image="https://i.pinimg.com/1200x/7d/88/de/7d88de21febc7689ad81f353732355fb.jpg"
        alt="Fashion detail in teal"
      />
    </div>
  </div>
)

const Headline = ({ onVideoClick }) => (
  <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 max-w-[1240px] mx-auto">
    <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 order-1 md:order-none">
      <CircularBadgeSVG onClick={onVideoClick} />
    </div>
    <div className="text-center order-2 md:order-none">
      <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#0B0B0B] leading-tight">
        <div>Elevate Your Style With</div>
        <div>Bold Fashion</div>
      </h1>
    </div>
    <div className="md:absolute md:right-0 md:top-4 order-3 md:order-none">
      <AvatarStack />
    </div>
  </div>
)

function FashionHero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  return (
    <section className="min-h-fit bg-white py-12 md:py-16">
      <div className="space-y-10 md:space-y-16">
        <Headline onVideoClick={() => setIsVideoOpen(true)} />
        <CollageGrid />
      </div>
    </section>
  )
}

// ---------------- Testimonial ----------------
function Testimonial() {
  return (
    <section className="bg-white flex items-center justify-center py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-80 items-center">
        {/* Left - Quote */}
        <div className="space-y-8">
          <div className="text-6xl text-gray-300 font-serif leading-none">"</div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              TrendZone's styles are fresh, bold, and exactly what I needed to upgrade my wardrobe. Loved the quality
              and vibe!
            </p>
            <div className="font-serif text-xl text-gray-600 italic">Rafi H.</div>
          </div>
        </div>

        {/* Right - Content */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-6xl font-light text-gray-900">01</span>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Lifestyle</span>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400" />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Set Up Your Fashion With The Latest Trends
          </h1>
        </div>
      </div>
    </section>
  )
}

// ---------------- Final Combined Page ----------------
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FashionHero />
      <Testimonial />
    </div>
  )
}
