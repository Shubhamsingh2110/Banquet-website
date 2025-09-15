import { Droplet, Pill } from "lucide-react"

export function HealthcareSection() {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] max-w-7xl mx-auto bg-[#1d1f4f] rounded-[30px] sm:rounded-[30px] md:rounded-[50px] p-4 sm:p-6 md:p-8 lg:p-16 overflow-hidden">
      {/* Main Healthcare Heading - positioned behind doctor */}
      <div className="absolute top-2 sm:top-4 md:top-8 left-2 sm:left-8 md:left-40 z-10">
        <h1 className="text-7xl sm:text-4xl md:text-[150px] lg:text-[200px] font-extrabold text-[#e1ebff] leading-none tracking-tight text-center translate-x-6  translate-y-16 sm:translate-x-0 md:translate-y-14 lg:translate-x-0">
          Healthcare
        </h1>
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col md:flex-row min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
        {/* Left Content - Supporting Text */}
        <div className="flex-1 max-w-md order-2 md:order-1">
          {/* Supporting Text */}
          <div className="text-left mb-4 sm:mb-6 md:mb-8 mt-16 sm:mt-20 md:mt-0 md:translate-y-96 lg:translate-y-96 ">
            <p className="text-white/70 text-sm sm:text-base md:text-sm font-medium uppercase leading-relaxed">
              If you're looking for a creative and easy <br className="hidden sm:block" />
              way to build a website, wow! is <br className="hidden sm:block" />
              the perfect solution.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-3 sm:gap-4 justify-start">
            {/* Reduce HbA1c Feature */}
            <div className="flex items-center gap-3 ml-4 sm:ml-8 md:ml-0 lg:translate-x-[250px] lg:translate-y-[90px] md:translate-x-32 md:translate-y-24">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#f3cce2] rounded-full flex items-center justify-center">
                <Droplet className="w-4 h-4 sm:w-5 sm:h-5 text-[#1d1f4f]" />
              </div>
              <span className="text-[#b3b3c7] text-lg sm:text-xl font-light">Reduce HbA1c</span>
            </div>

            {/* No More Medications Feature */}
            <div className="flex items-center gap-3 ml-8 sm:ml-16 md:ml-0 lg:translate-x-[730px] lg:translate-y-9  md:translate-x-[600px] md:translate-y-10 ">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#b2f1d3] rounded-full flex items-center justify-center">
                <Pill className="w-4 h-4 sm:w-5 sm:h-5 text-[#1d1f4f]" />
              </div>
              <span className="text-[#b3b3c7] text-lg sm:text-xl font-light">No more medications</span>
            </div>
          </div>
        </div>

        {/* Doctor Image - now on the right side */}
        <div className="relative z-30 flex-shrink-0 order-1 md:order-2 flex justify-center md:justify-end">
          <img
            src="https://i.postimg.cc/xjpY6DBv/Screenshot-2025-08-21-at-12-26-32-PM-Photoroom.png"
            alt="Professional healthcare doctor"
            className="w-[200px] sm:w-[220px] md:w-[300px] lg:w-[300px] h-[320px] sm:h-[280px] md:h-[450px] lg:h-[450px] translate-y-20 sm:translate-y-8 md:translate-y-20 lg:translate-y-11 object-contain translate-x-0 sm:translate-x-0 md:-translate-x-32 lg:translate-x-0"
          />
        </div>
      </div>

      {/* Book Consultation Button - Bottom Right */}
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-16 md:right-16 z-20">
        <button className="bg-[#f3cce2] hover:bg-[#e8b8d1] text-[#1d1f4f] font-semibold px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 md:gap-3 transition-colors text-xs sm:text-sm md:text-base">
          Book Consultation
          <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-9 md:h-9 rounded-full flex items-center justify-center ml-1 md:ml-2 translate-x-1 sm:translate-x-2 md:translate-x-3 bg-white">
            <img
              src="https://i.postimg.cc/C1VtvJ4p/right-up.png"
              className="w-2 h-2 sm:w-3 sm:h-3 md:w-8 md:h-8 text-[#1d1f4f] bg-white rounded-full"
            />
          </div>
        </button>
      </div>
    </section>
  )
}

export default HealthcareSection
