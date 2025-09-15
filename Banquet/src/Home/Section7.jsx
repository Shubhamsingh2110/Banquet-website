import { useEffect, useRef } from "react"

export function ReviewSection() {
  const frameRef = useRef(null)

  useEffect(() => {
    // Animate SVG frame on load with draw effect
    const frame = frameRef.current
    if (frame) {
      const path = frame.querySelector("polygon")
      if (path) {
        path.style.strokeDasharray = "1000"
        path.style.strokeDashoffset = "1000"
        path.style.animation = "drawFrame 2s ease-out forwards"
      }
    }
  }, [])

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-bold text-[#B38728] leading-tight">
                Review Us on Google
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed max-w-md font-playfair">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>

            <button className="group bg-[#B38728] hover:bg-[#9A7322] text-white font-playfair px-8 py-4 ">
              Review us on Google
            </button>
          </div>

          {/* Right Column */}
          <div className="relative animate-fade-in-delay">
            {/* Google Street View Iframe */}
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/place//@28.3912853,76.9663363,19z/data=!4m6!1m5!3m4!2zMjjCsDIzJzI4LjAiTiA3NsKwNTgnMDEuMSJF!8m2!3d28.391119!4d76.96698?hl=en&entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Restaurant Interior - Google Street View"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.3s both;
        }
      `}</style>
    </section>
  )
}

export default ReviewSection;
