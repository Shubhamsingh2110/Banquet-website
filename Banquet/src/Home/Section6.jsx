import { useState } from "react"
import { Instagram } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    contact: "",
    message: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Services Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-playfair text-[#B38728] font-semibold">Contact</h1>
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column - Contact Form with Custom SVG Background */}
        <div className="relative">
        
          {/* Form Content */}
          <div className="relative z-10 p-8 md:p-12 border-2 border-[#B38728] rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name and City Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[#B38728] font-bold text-base uppercase tracking-wider font-cormorant">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-0 border-b-2  text-white placeholder-gray-300 border-[#B38728] focus:outline-none transition-colors duration-300 pb-2 font-sans"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[#B38728] font-bold text-sm uppercase tracking-wider font-cormorant">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-0 border-b-2  text-white placeholder-gray-300 border-[#B38728] focus:outline-none transition-colors duration-300 pb-2 font-sans"
                    required
                  />
                </div>
              </div>

              {/* Email and Contact Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[#B38728] font-bold text-sm uppercase tracking-wider font-cormorant">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-0 border-b-2  text-white placeholder-gray-300 border-[#B38728] focus:outline-none transition-colors duration-300 pb-2 font-cormorant"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[#B38728] font-bold text-sm uppercase tracking-wider font-cormorant">
                    Contact
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-0 border-b-2  text-white placeholder-gray-300 border-[#B38728] focus:outline-none transition-colors duration-300 pb-2 font-cormorant"
                    required
                  />
                </div>
              </div>

              {/* Message Row */}
              <div className="space-y-2">
                <label className="block text-[#B38728] font-bold text-sm uppercase tracking-wider font-cormorant">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-transparent  border-0 border-b-2  text-white placeholder-gray-300 border-[#B38728] focus:outline-none transition-colors duration-300 pb-2 resize-none font-sans"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="bg-[#B38728] text-white px-12 py-3 font-playfair font-semibold uppercase tracking-wider hover:bg-[#9a7322] rounded-3xl hover:shadow-lg transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column - Business Information */}
        <div className="relative border-8 border-[#B38728] bg-[#674d15] rounded-3xl">
          <div className="relative z-10 p-8 md:p-12 bg-[#674d15] rounded-3xl">
            <div className="space-y-6">
              {/* Business Name */}
              <h2 className="text-2xl md:text-4xl font-cormorant font-semibold text-white">The Royal Sapphire</h2>

              {/* Address */}
              <div className="space-y-1 text-white font-playfair">
                <p>Street no. B-1, VATIKA INDIA NEXT, Plot 29 B,</p>
                <p>Vatika Sector Rd, City, Sector 82A,</p>
                <p>Gurugram, Haryana 122012</p>
              </div>

              {/* Phone and Hours */}
              <div className="space-y-2 text-white font-playfair">
                <p className="font-semibold">Call Us: 9911205000/8884008000</p>
                <p>We are open all days a week.</p>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <p className="text-white font-playfair font-semibold mb-4">Follow us</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/_theroyalsapphire?igsh=Y3ZhaDh0aGptNmlw"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="group"
                  >
                    <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-all duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
                   