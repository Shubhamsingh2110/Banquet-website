import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    title: "Great Place",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Singh Doe",
    image: "https://i.pinimg.com/1200x/b4/64/3f/b4643f3b9340ff323c9fc195ff681227.jpg",
  },
  {
    id: 2,
    title: "Spacious and Royal",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Singh Doe",
    image: "https://i.pinimg.com/1200x/b4/64/3f/b4643f3b9340ff323c9fc195ff681227.jpg",
  },
  {
    id: 3,
    title: "Amazing Decor",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Singh Doe",
    image: "https://i.pinimg.com/1200x/b4/64/3f/b4643f3b9340ff323c9fc195ff681227.jpg",
  },
  {
    id: 4,
    title: "Exceptional Service",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Jane Smith",
    image: "https://i.pinimg.com/1200x/b4/64/3f/b4643f3b9340ff323c9fc195ff681227.jpg",
  },
  {
    id: 5,
    title: "Perfect Venue",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Mike Johnson",
    image: "https://i.pinimg.com/1200x/b4/64/3f/b4643f3b9340ff323c9fc195ff681227.jpg",
  },
]

const StarRating = ({ rating, animate = false }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => {
        const isFilled = index < fullStars
        const isHalf = index === fullStars && hasHalfStar

        return (
          <div key={index} className="relative">
            <Star
              className={`w-4 h-4 transition-all duration-300 ${animate ? "animate-in fade-in-0 zoom-in-95" : ""} ${
                isFilled ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
              }`}
              style={animate ? { animationDelay: `${index * 100}ms` } : {}}
            />
            {isHalf && (
              <div className="absolute inset-0 overflow-hidden w-1/2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [visibleCards, setVisibleCards] = useState(3)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const carouselRef = useRef(null)
  const maxDots = testimonials.length - visibleCards + 1

  // Responsive card count
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3)
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2)
      } else {
        setVisibleCards(1)
      }
    }

    updateVisibleCards()
    window.addEventListener("resize", updateVisibleCards)
    return () => window.removeEventListener("resize", updateVisibleCards)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = testimonials.length - visibleCards
        return prev >= maxIndex ? 0 : prev + 1
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, visibleCards])

  // Touch handlers - Removed TypeScript event type annotations
  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  const nextSlide = () => {
    const maxIndex = testimonials.length - visibleCards
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    const maxIndex = testimonials.length - visibleCards
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div
      className="w-full max-w-7xl mx-auto px-4"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out "
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            width: `${(testimonials.length / visibleCards) * 100}%`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`px-3 animate-in fade-in-0 slide-in-from-bottom-4 ${
                visibleCards === 1 ? "w-full" : visibleCards === 2 ? "w-1/2" : "w-1/3"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative group h-72">
                {/* Card */}
                <div className="bg-white p-6 ml-20 relative z-10 max-w-sm mx-auto shadow-2xl h-52">
                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-cormorant font-semibold text-[#B38728] mb-2">{testimonial.title}</h3>
                    </div>

                    <p className="text-gray-600 text-sm font-playfair leading-relaxed">{testimonial.description}</p>

                    <div className="flex justify-end">
                      <p className="text-sm text-gray-500 italic">- {testimonial.author}</p>
                    </div>
                  </div>
                </div>

                {/* Overlapping Image */}
                <div className="absolute left-0 top-1/2 -translate-y-32 -translate-x-4 z-20  transition-transform duration-600">
                  <div className="w-28 h-20 overflow-hidden shadow-2xl ">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  )
}
