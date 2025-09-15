import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Plus, X } from "lucide-react"

const CircularBadgeSVG = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      aria-label="Play intro video"
      className="relative w-[72px] h-[72px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      whileHover={{ rotate: 180, scale: 1.03 }}
      transition={{ duration: 0.5 }}
    >
     
    </motion.button>
  )
}

// StarburstSVG - 12-point decorative ornament
const StarburstSVG = () => {
  return (
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
}

// AvatarStack - Overlapping user avatars with add button
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
      {avatars.map((avatar, index) => (
        <motion.div key={avatar.name} className="relative group" whileHover={{ scale: 1.1, zIndex: 10 }}>
        
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {avatar.name}
          </div>
        </motion.div>
      ))}
 

      {showSignIn && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowSignIn(false)}
        >
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

// Tile component for collage grid items
const Tile = ({ bg, shape, aspect, image, alt, clipPath,style}) => {
  return (
    <motion.div
      className={`${bg} ${shape} ${aspect} overflow-hidden shadow-lg`}
      style={clipPath ? { clipPath } : undefined}
      whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      {image ? (
        <img src={image || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full" />
      )}
    </motion.div>
  )
}

// CTAButton - Main call-to-action button
const CTAButton = () => {
  return (
    <motion.a
      href="#collections"
      className="inline-flex items-center justify-center w-[260px] h-14 bg-[#0B0B0B] text-white font-medium rounded-full hover:shadow-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      aria-label="Explore Collections"
    >
      Explore Collections ↗
    </motion.a>
  )
}



// CollageGrid - Main grid layout for fashion tiles
const CollageGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-7 xl:gap-7 max-w-[1240px] mx-auto">
      {/* Column 1 - Orange tiles */}
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

      {/* Column 2 - Mint green tall */}
      <Tile
        bg="bg-[#CFE9D4]"
        shape="rounded-[20px]"
        aspect="aspect-[300/600]"
        image="https://i.pinimg.com/736x/df/7f/51/df7f51baf5d6c7e5ec3d83afcca89e7f.jpg"
        alt="Person in green coat"
        style={{ transform: "translateY(-20px)" }}
      />

      {/* Column 3 - Center with starburst and CTA */}
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <StarburstSVG />
        </div>
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

      {/* Column 4 - Cyan with special clip path */}
      <Tile
        bg="bg-[#CFE9D4]"
        shape="rounded-[20px]"
        aspect="aspect-[300/600]"
        image="https://i.pinimg.com/1200x/9a/ed/8d/9aed8dc76bb9c145b86c83deb28f01c6.jpg"
        alt="Person in green coat"
        className="transform -translate-y-10 hover:translate-y-0 transition duration-500"
      />

      {/* Column 5 - Mint and teal */}
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
}

// Headline - Main hero headline with badge and avatars
const Headline = ({ onVideoClick }) => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 max-w-[1240px] mx-auto">
      {/* Video badge - left on desktop, top on mobile */}
      <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 order-1 md:order-none">
        <CircularBadgeSVG onClick={onVideoClick} />
      </div>

      {/* Main headline */}
      <div className="text-center order-2 md:order-none">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#0B0B0B] leading-tight">
          <div>Elevate Your Style With</div>
          <div>Bold Fashion</div>
        </h1>
      </div>

      {/* Avatar stack - right on desktop, bottom on mobile */}
      <div className="md:absolute md:right-0 md:top-4 order-3 md:order-none">
        <AvatarStack />
      </div>
    </div>
  )
}

export default function FashionHero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <div className="min-h-fit bg-white">
      <header className="px-4 md:px-6 py-12 md:py-16">
        <div className="space-y-10 md:space-y-16">
          {/* Headline block */}
          <Headline onVideoClick={() => setIsVideoOpen(true)} />

          {/* Collage grid */}
          <CollageGrid />
        </div>
      </header>




    </div>
  )
}
