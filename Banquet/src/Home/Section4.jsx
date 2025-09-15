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
        <h1 className="text-center text-6xl md:text-7xl lg:text-8xl font-medium text-[#B38B59] font-playfair mb-16">
          Restaurant
        </h1>

        {/* Image Container with Decorative Elements */}
        <div className="relative group">

          {/* Main Image Container */}
          <div
            className="relative h-[500px] md:h-[600px] lg:h-[600px] bg-cover bg-center bg-no-repeat overflow-hidden rounded-3xl "
            style={{
              backgroundImage: `url('https://i.pinimg.com/1200x/b4/64/3f/b4643f3b9340ff323c9fc195ff681227.jpg')`,
            }}
          >
            {/* Content Card Overlay */}
            <div
              className={`absolute bottom-8 left-8 bg-white p-6 rounded-3xl max-w-sm shadow-lg transition-all duration-700 ease-out hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Category Label */}
              <div className="text-[#B38B59] text-sm font-semibold tracking-widest uppercase mb-3 font-cormorant">
                RESTAURANT
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 font-cormorant leading-tight">
                Serve a great food on your wedding.
              </h2>

              {/* Description Text */}
              <p className="text-[#555555] text-sm leading-relaxed font-playfair">
                Wedding agencies, photography and personal wedding pages can be built with the help of this responsive
                Wedding Venues Website Template. Refreshing and uplifting color scheme featuring…
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
