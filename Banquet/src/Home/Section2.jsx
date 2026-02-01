import { useState } from "react"

export default function DreamWeddingSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="bg-white py-16 px-6 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1
                className="font-cormorant text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight"
                style={{ color: "#B38B59" }}
              >
                {/* A wedding destination of your dreams */}
                A Perfect Banquet Venue for Every Celebration
              </h1>
              <p
                className="font-cormorant text-gray-600 text-base lg:text-2xl leading-relaxed max-w-md"
                style={{ color: "#555555" }}
              >
                {/* Wedding agencies, photography and personal wedding pages can be built with the help of this responsive
                Wedding Venues Website Template. Refreshing and uplifting color scheme featuring Tiffany blue combined
                with pure white is ideal for wedding-related sites. Thanks to transparent elements, ghost buttons and
                neat typography the theme */}
                Host unforgettable events with our elegant and fully customizable banquet hall services. Whether you're planning a wedding, engagement, birthday party, corporate event, or any special occasion, this responsive Banquet Venue Website Template helps you showcase your space beautifully. The sophisticated color palette, featuring warm gold accents paired with crisp white, creates a luxurious and welcoming atmosphere. With modern transparent elements, refined buttons, and clean typography, the design ensures your banquet hall stands out with style and professionalism.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                className="group relative font-cormorant font-bold text-black text-lg tracking-wider uppercase transition-all duration-300"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* PLAN WITH US */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r transition-all duration-300 ease-out"
                  style={{
                    background: "#B38B59",
                    width: isHovered ? "100%" : "0%",
                  }}
                ></div>
              </button>
            </div>
          </div>

          {/* Right Column - Image with Diamond Frame */}
          <div className="relative flex justify-center items-center">
            {/* Background SVG Diamonds */}
            <div className="absolute inset-0 flex justify-center items-center animate-fade-in"></div>

            {/* Diamond-shaped image container */}
            <div
              className="relative w-80 h-80 lg:w-[600px] lg:h-[600px] overflow-hidden translate-x-0 sm:translate-x-0 md:translate-x-0 lg:translate-x-[1rem] /* only large screens use your original offset */"
              style={{
                transform: "rotate(45deg)",
              }}
            >
              <img
                src="https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967082/238A1255_rs4a2i.jpg"
                alt="Elegant banquet hall interior"
                className="w-full h-full object-cover"
                style={{ transform: "rotate(-45deg)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
