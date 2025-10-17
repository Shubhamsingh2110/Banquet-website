import { Star, Quote, Camera } from "lucide-react"
import { useState } from "react"

function TestimonialCard({ rating, text, name, role, avatar, image }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative p-6 bg-white shadow-md border border-[#B38728]/20 rounded-3xl max-w-sm transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-4 right-4">
        <Quote className="w-5 h-5 text-[#B38728]" />
      </div>

      {/* Food Image - Updated */}
      {image && (
        <div className="mb-6 -mx-6 -mt-6">
          <div className="relative h-48 overflow-hidden rounded-t-3xl">
            <img
              src={image}
              alt={`${name}'s dining experience`}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                isHovered ? "scale-105" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-1.5">
              <Camera size={16} className="text-white" />
            </div>
          </div>
        </div>
      )}

      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            fill={i < rating ? "#B38728" : "none"}
            className={`w-4 h-4 ${
              i < rating ? "text-[#B38728]" : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 text-sm leading-relaxed mb-6">{text}</p>

      {/* Profile Section */}
      <div className="flex items-center gap-3">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B38728] to-amber-500 flex items-center justify-center">
            <span className="text-white text-sm font-bold">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-900 text-sm">{name}</p>
          <p className="text-gray-500 text-xs">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialSection() {
  // Updated testimonials focused on vegetarian dishes
  const testimonials = [
    {
      rating: 5,
      text: "The Paneer Tikka Masala at Royal Sapphire is outstanding! The paneer was perfectly soft with a smoky flavor from the tandoor, and the rich tomato gravy had just the right balance of spices. Their freshly baked garlic naan complemented it beautifully.",
      name: "Meera & Anil",
      role: "Vegetarian Cuisine Lovers",
      image: "https://i.pinimg.com/1200x/22/90/59/22905909c24dd0d1cfa8695de86b57cb.jpg", // Paneer Tikka Masala image
    },
    {
      rating: 5,
      text: "Their Dal Makhani is absolutely divine! Slow-cooked to perfection with a velvety texture and rich buttery flavor. You can taste the time and care put into this traditional dish. The best I've had outside of Punjab!",
      name: "Sanjay Gupta",
      role: "Food Critic",
      image: "https://i.pinimg.com/736x/85/18/10/8518104b416671b76ab0cea57abc771d.jpg", // Dal Makhani image
    },
    {
      rating: 5,
      text: "The vegetable biryani here is exceptional! Each grain of rice is infused with aromatic spices, and the mix of seasonal vegetables adds wonderful texture and flavor. The raita served alongside was the perfect cooling complement.",
      name: "Priya Sharma",
      role: "Biryani Enthusiast",
      image: "https://i.pinimg.com/736x/9e/9b/cb/9e9bcbd898d3442abdb916db5e62b465.jpg", // Vegetable Biryani image
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-[#B38728] mb-4">
            Culinary Experiences
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what our guests have to say about our award-winning cuisine at The Royal Sapphire
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              rating={testimonial.rating}
              text={testimonial.text}
              name={testimonial.name}
              role={testimonial.role}
              avatar={testimonial.avatar}
              image={testimonial.image}
            />
          ))}
        </div>

        {/* Call to Action - Updated with Google Drive link */}
        <div className="mt-12 text-center">
          <a
            href="https://drive.google.com/drive/folders/1hKZObkTgwO2DMkghdQTIHvfgUJhYNevO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#B38728] hover:bg-amber-700 text-white px-6 py-3 rounded-full transition-colors shadow-md"
          >
            Explore Our Menu
            <svg
              className="ml-2 w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
