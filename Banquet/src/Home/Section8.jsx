import { Star } from "lucide-react"
import { Quote } from "lucide-react"

function TestimonialCard({ rating, text, name, role, avatar }) {
  return (
    <div className="relative p-6 bg-white shadow-sm border border-[#B38728] rounded-3xl max-w-sm">
      <div className="absolute top-4 right-4">
        <Quote className="w-5 h-5 text-[#B38728]" />
      </div>

      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? " text-[#B38728]" : "fill-gray-200 text-gray-200"}`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 text-sm leading-relaxed mb-6">{text}</p>

      {/* Profile Section */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
          <span className="text-white text-sm font-bold">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{name}</p>
          <p className="text-gray-500 text-xs">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialSection() {
  const testimonials = [
    {
      rating: 5,
      text: "Amazing product! It completely transformed the way I work. Highly recommended.",
      name: "John Doe",
      role: "",
      avatar: "/professional-man.png",
    },
    {
      rating: 4,
      text: "Exceptional service! The support team is responsive and goes above and beyond.",
      name: "Jane Smith",
      role: "",
      avatar: "/professional-woman-diverse.png",
    },
    {
      rating: 5,
      text: "Saw immediate results after implementing. A game-changer for our business!",
      name: "Alex Johnson",
      role: "",
      avatar: "/professional-person.png",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              rating={testimonial.rating}
              text={testimonial.text}
              name={testimonial.name}
              role={testimonial.role}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
