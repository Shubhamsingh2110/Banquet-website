import { ArrowRight } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Instant Video Consultation",
    subtitle: "Connect within 60 secs",
    bgColor: "bg-[#F3E06C]",
    image: "https://i.postimg.cc/wxQ0Fpvw/Screenshot-2025-08-21-at-1-25-51-PM-Photoroom.png",
  },
  {
    id: 2,
    title: "Find Doctors near you",
    subtitle: "Confirmed appointments",
    bgColor: "bg-[#A8E6CF]",
    image: "https://i.postimg.cc/sX61Dxmn/Screenshot-2025-08-21-at-1-28-59-PM-Photoroom.png",
  },
  {
    id: 3,
    title: "24/7 Medicines",
    subtitle: "Essentials at your doorstep",
    bgColor: "bg-[#F5C6E0]",
    image: "https://i.postimg.cc/d0nV43bq/Screenshot-2025-08-21-at-1-29-50-PM-Photoroom.png",
  },
  {
    id: 4,
    title: "Lab Tests",
    subtitle: "Sample pickup at your home",
    bgColor: "bg-[#AED4F9]",
    image: "https://i.postimg.cc/s232Y706/Screenshot-2025-08-21-at-1-30-10-PM-Photoroom.png",
  },
]

export function HealthcareServices() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-7xl mx-auto my-3 px-4 sm:px-6">
      {services.map((service) => {
        return (
          <div
            key={service.id}
            className={`
              ${service.bgColor} 
              rounded-2xl sm:rounded-3xl
              p-4 sm:p-6
              relative 
              overflow-hidden
              min-h-[280px] sm:min-h-[300px]
              flex
              flex-col
              justify-between
            `}
          >
            {/* Content at top */}
            <div>
              <h3 className="text-[#1B1F3B] font-bold text-xl sm:text-2xl mb-2 leading-tight">{service.title}</h3>
              <p className="text-[#444] text-xs sm:text-sm">{service.subtitle}</p>
            </div>

            {/* Bottom section with image and arrow button */}
            <div className="relative">
              <div className="flex justify-center mb-4">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-24 h-28 sm:w-32 sm:h-36 translate-x-8 sm:translate-x-14 object-cover"
                />
              </div>

              {/* Arrow button */}
              <button
                className="
                absolute 
                bottom-0 
                left-0 
                w-8 h-8 sm:w-10 sm:h-10
                bg-[#1B1F3B] 
                hover:bg-[#2A2F4F] 
                rounded-full 
                flex 
                items-center 
                justify-center 
                transition-all 
                duration-200 
                hover:scale-110
                group
              "
              >
                <ArrowRight
                  size={14}
                  className="sm:w-4 sm:h-4 text-white group-hover:translate-x-0.5 transition-transform duration-200 -rotate-45"
                />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default HealthcareServices
