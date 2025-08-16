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
                className="font-serif text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight"
                style={{ color: "#B38B59" }}
              >
                A wedding destination of your dreams
              </h1>

              {/* Decorative line */}
              <div className="w-16 h-px bg-gray-300"></div>

              <p
                className="font-sans text-gray-600 text-base lg:text-lg leading-relaxed max-w-md"
                style={{ color: "#555555" }}
              >
                Wedding agencies, photography and personal wedding pages can be built with the help of this responsive
                Wedding Venues Website Template. Refreshing and uplifting color scheme featuring Tiffany blue combined
                with pure white is ideal for wedding-related sites. Thanks to transparent elements, ghost buttons and
                neat typography the theme
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                className="group relative font-sans font-bold text-black text-sm tracking-wider uppercase transition-all duration-300"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                PLAN WITH US
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
            <div className="absolute inset-0 flex justify-center items-center animate-fade-in">
              {/* Larger diamond outline */}
              <svg
                width="900"
                height="900"
                viewBox="0 0 400 400"
                className="absolute opacity-30"
                style={{ transform: "rotate(45deg)" }}
              >
                <rect x="50" y="50" width="300" height="300" fill="none" stroke="#B38B59" strokeWidth="1" />
              </svg>

              {/* Smaller diamond outline */}
              <svg
                width="800"
                height="800"
                viewBox="0 0 350 350"
                className="absolute opacity-20"
                style={{ transform: "rotate(45deg)" }}
              >
                <rect x="50" y="50" width="250" height="250" fill="none" stroke="#B38B59" strokeWidth="1" />
              </svg>
            </div>

            {/* Diamond-shaped image container */}
            <div
              className="relative w-80 h-80 lg:w-[600px] lg:h-[600px] overflow-hidden"
              style={{
                transform: "rotate(45deg) translateY(4rem) translateX(1rem)",
              }}
            >
              <img
                src="https://i.pinimg.com/1200x/f8/46/ad/f846adb79157afef0f67ff94e5db767b.jpg"
                alt="Wedding bouquet with white and pink flowers "
                className="w-full h-full object-cover "
                style={{ transform: "rotate(-45deg) scale(1.4)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
