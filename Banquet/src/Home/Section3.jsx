import { useEffect, useRef, useState } from "react"

const stats = [
  { number: 412, label: "Weddings\nPlanned" },
  { number: 165, label: "Staff\nMembers" },
  { number: 12, label: "Years\nof Experience" },
  { number: 1821, label: "Happy\nClients" },
]

function AnimatedNumber({ target, isVisible }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = target / steps
    const stepDuration = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      if (step >= steps) {
        setCurrent(target)
        clearInterval(timer)
      } else {
        setCurrent(Math.floor(increment * step))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [target, isVisible])

  return <span>{current.toLocaleString()}</span>
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FFF3E9" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              {/* Number */}
              <div className="mb-4 transition-transform duration-300 group-hover:scale-105">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-bold font-didot text-[#333333] leading-none">
                  <AnimatedNumber target={stat.number} isVisible={isVisible} />
                </span>
              </div>

              {/* Label */}
              <div className="mb-3">
                <h3 className="text-lg sm:text-2xl font-normal text-black font-cormorant leading-tight whitespace-pre-line">
                  {stat.label}
                </h3>
              </div>

              {/* Gold underline */}
              <div className="flex justify-center">
             

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
