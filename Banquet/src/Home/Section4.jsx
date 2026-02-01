import { useEffect, useRef, useState } from "react"

export default function RestaurantSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        {/* <h1 className="text-center text-6xl md:text-7xl lg:text-8xl font-medium text-[#B38B59] font-playfair mb-16">
          Restaurant
        </h1> */}

        {/* Image Container with Decorative Elements */}
        <div className="relative group">

          {/* Main Image Container */}
          <div
            className="relative h-[500px] md:h-[600px] lg:h-[600px] bg-cover bg-center bg-no-repeat overflow-hidden rounded-3xl "
            style={{
              backgroundImage: `url('https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769965840/238A1258_m3xjw2.jpg')`,
            }}
          >
            {/* Content Card Overlay */}
            
          </div>
        </div>
      </div>
    </section>
  )
}
