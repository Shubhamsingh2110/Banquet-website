import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Max Patrick",
    role: "Entrepreneur",
    image: "https://i.pinimg.com/736x/09/a7/88/09a7881646017065009091bbd8b55b35.jpg",
    type: "client",
  },
  {
    id: 2,
    name: "Jobs Gadhzi",
    role: "Glow Co",
    image: "https://i.pinimg.com/1200x/6a/1a/67/6a1a67a1b550349af12bc4d998710f3d.jpg",
    type: "client",
  },
  {
    id: 3,
    name: "Thomas Gala",
    role: "Founder, Zentech Wellness",
    rating: 4.5,
    testimonial:
      "In the fast-paced world of tech, it's crucial to have a creative partner who can keep up with our innovative ideas. Keola not only kept up but exceeded our expectations.\n\nTheir bold designs and fresh perspective gave our marketing campaigns the edge they needed to stand out.",
    avatar: "https://i.pinimg.com/1200x/63/f3/a0/63f3a0fe0c318b623d9a431e2817b515.jpg",
    type: "testimonial",
  },
  {
    id: 4,
    name: "Cassandra Mo",
    role: "Entrepreneur",
    image: "https://i.pinimg.com/736x/05/e4/5f/05e45ff5a79627593870ae0a2acf38f9.jpg",
    type: "client",
  },
  {
    id: 5,
    name: "Cassandra Mo",
    role: "Entrepreneur",
    image: "https://i.pinimg.com/736x/86/0e/4c/860e4c86ae76cd1e21cc168f31b60a07.jpg",
    type: "client",
  },
  {
    id: 6,
    name: "Cassandra Mo",
    role: "Entrepreneur",
    image: "https://i.pinimg.com/1200x/62/08/53/6208533d5e28e105b5808a1993c86ead.jpg",
    type: "client",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getTransformValue = () => {
    // Mobile: 100% per slide (1 item), Tablet: 50% per slide (2 items), Desktop: 25% per slide (4 items)
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        return currentIndex * 100 // Mobile: 1 item per view
      } else if (window.innerWidth < 1024) {
        return currentIndex * 50 // Tablet: 2 items per view
      }
    }
    return currentIndex * 25 // Desktop: 4 items per view (unchanged)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 bg-gray-200 py-10">
      <div className="bg-white rounded-[20px] px-4 py-6 md:px-8 md:py-8 lg:px-[60px] lg:py-[40px]">
        {/* Header Area */}
        <div className="mb-8">
          <p className="text-sm font-medium text-[#555] mb-2">Testimonials</p>
          <div className="w-full h-px bg-black mb-4"></div>
          <h2 className="text-2xl md:text-3xl lg:text-[35px] font-medium text-black">— Our Happy Clients Say</h2>
        </div>

        {/* Content Layout */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-3 md:gap-4 lg:gap-5"
            style={{ transform: `translateX(-${getTransformValue()}%)` }}
          >
            {testimonials.map((item, index) => (
              <div
                key={item.id}
                className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/4 transition-all duration-300 ${
                  index === 2 ? "transform scale-105" : ""
                }`}
              >
                {item.type === "client" ? (
                  <div className="group cursor-pointer">
                    <div className="aspect-[3/4] rounded-lg overflow-hidden mb-4 ">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base text-black mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.role}</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#6B8F71] rounded-lg p-4 md:p-5 lg:p-6 text-white h-full flex flex-col justify-between shadow-lg">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <img src="https://i.postimg.cc/xdNL1RN4/star-2.png" key={i} className="w-4 h-4 fill-white text-white" />
                          ))}
                        </div>
                        <span className="text-sm">({item.rating} Rating)</span>
                      </div>
                      <p className="text-sm leading-relaxed whitespace-pre-line">{item.testimonial}</p>
                    </div>
                    <div className="flex items-center gap-3 mt-6">
                      <img
                        src={item.avatar || "/placeholder.svg"}
                        alt={item.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-sm">{item.name}</p>
                        <p className="text-xs opacity-90">{item.role}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="flex items-center justify-center mt-8 gap-4">
          <button
            onClick={prevSlide}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Previous testimonial"
          >
            <img src="https://i.postimg.cc/RCgxvQ1m/left.png" className="w-5 h-5 text-gray-600" />
          </button>
          <div className="w-20 h-px bg-gray-300 relative">
            <div
              className="absolute top-0 left-0 h-full bg-gray-600 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
            />
          </div>
          <button
            onClick={nextSlide}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Next testimonial"
          >
            <img src="https://i.postimg.cc/RCgxvQ1m/left.png" className="w-5 h-5 text-gray-600 rotate-180" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default TestimonialsSection
