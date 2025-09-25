const testimonials = [
  {
    id: 1,
    brandLogo: "/spark-media-logo.jpg",
    brandName: "SparkMedia",
    headline: "Exceeded All Expectations!",
    body: "“From start to finish, the team delivered exceptional service. The animations brought our vision to life and surpassed anything we imagined.”",
    authorName: "Vidhran K.",
    authorTitle: "CEO",
    authorImage: "/man-in-classic-suit.png",
  },
  {
    id: 2,
    brandLogo: "/vivid-world-logo.jpg",
    brandName: "Vivid World",
    headline: "Reliable and Innovative Partner",
    body: "“They understood our needs perfectly and executed everything seamlessly. We couldn't be happier with the results.”",
    authorName: "Tim S.",
    authorTitle: "Marketing Manager",
    authorImage: "/man-in-classic-suit.png",
  },
  {
    id: 3,
    brandLogo: "/global-solutions-logo.png",
    brandName: "Global Solutions",
    headline: "Exceptional Service and Results",
    body: "“The team at Global Solutions consistently delivers outstanding results. Their dedication and expertise are truly commendable.”",
    authorName: "Sarah L.",
    authorTitle: "Director of Operations",
    authorImage: "/business-woman-professional.png",
  },
]

export function TestimonialCarousel() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#17191C] text-white mx-auto max-w-7xl">
      <div className="container flex flex-col items-center justify-center space-y-8 px-4 md:px-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
            Hear from Brands
            <br />
            That Trust Us
          </h2>
          <p className="max-w-[700px] text-gray-400 md:text-xl text-pretty">
            Our clients’ success stories showcase the value we bring to every project. Here’s what they have to say
            about working with us.
          </p>
        </div>
        <div className="w-full max-w-5xl relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth -ml-4">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 pl-4 snap-center">
                <div className="p-1">
                  <div
                    className={`bg-[#2A2D31] border-none rounded-[18px] ${index === 0 ? "opacity-100" : "opacity-50"}`}
                  >
                    <div className="flex flex-col md:flex-row items-center md:items-start p-6 gap-6">
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-2">
                          {/* Using img tag directly */}
                          <img
                            src={testimonial.brandLogo || "/placeholder.svg"}
                            alt={`${testimonial.brandName} logo`}
                            width={24}
                            height={24}
                            className="invert"
                          />
                          <span className="text-gray-400 text-sm uppercase tracking-wider">
                            {testimonial.brandName}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold">{testimonial.headline}</h3>
                        <p className="text-gray-200 text-sm leading-relaxed">{testimonial.body}</p>
                        <div>
                          <p className="font-bold">{testimonial.authorName}</p>
                          <p className="text-gray-400 text-sm">{testimonial.authorTitle}</p>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        {/* Using img tag directly */}
                        <img
                          src={testimonial.authorImage || "/placeholder.svg"}
                          alt={testimonial.authorName}
                          width={150}
                          height={150}
                          className="rounded-lg object-cover bg-[#3A3D41]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Simplified navigation buttons */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 flex space-x-4">
            <button className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600">{"<"}</button>
            <button className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600">{">"}</button>
          </div>
        </div>
      </div>
    </section>
  )
}


export default TestimonialCarousel