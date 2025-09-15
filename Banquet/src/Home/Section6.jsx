import { useState } from "react"

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
        <h1 className="text-5xl md:text-6xl font-playfair text-[#B38728] font-semibold">Services</h1>
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column - Contact Form with Custom SVG Background */}
        <div className="relative">
          <svg viewBox="0 0 400 500" className="w-full h-full absolute inset-0" preserveAspectRatio="none">
            {/* Custom angled shape with gold border */}
            <polygon points="30,0 400,0 400,470 0,500 0,30" fill="#999999" stroke="#B38728" strokeWidth="2" />
          </svg>

          {/* Form Content */}
          <div className="relative z-10 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name and City Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-white font-bold text-base uppercase tracking-wider font-cormorant">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-0 border-b-2 border-white text-white placeholder-gray-300 focus:border-[#B38728] focus:outline-none transition-colors duration-300 pb-2 font-sans"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-white font-bold text-sm uppercase tracking-wider font-cormorant">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-0 border-b-2 border-white text-white placeholder-gray-300 focus:border-[#B38728] focus:outline-none transition-colors duration-300 pb-2 font-sans"
                    required
                  />
                </div>
              </div>

              {/* Email and Contact Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-white font-bold text-sm uppercase tracking-wider font-cormorant">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-0 border-b-2 border-white text-white placeholder-gray-300 focus:border-[#B38728] focus:outline-none transition-colors duration-300 pb-2 font-cormorant"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-white font-bold text-sm uppercase tracking-wider font-cormorant">
                    Contact
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-0 border-b-2 border-white text-white placeholder-gray-300 focus:border-[#B38728] focus:outline-none transition-colors duration-300 pb-2 font-cormorant"
                    required
                  />
                </div>
              </div>

              {/* Message Row */}
              <div className="space-y-2">
                <label className="block text-white font-bold text-sm uppercase tracking-wider font-cormorant">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-transparent border-0 border-b-2 border-white text-white placeholder-gray-300 focus:border-[#B38728] focus:outline-none transition-colors duration-300 pb-2 resize-none font-sans"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="bg-[#B38728] text-white px-12 py-3 font-playfair font-semibold uppercase tracking-wider hover:bg-[#9a7322] hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column - Business Information */}
        <div className="relative">
          {/* Gold border outline */}
          <div className="absolute inset-0 border-2 border-[#B38728] rotate-[1deg]"></div>
          

          <div className="relative z-10 p-8 md:p-12 bg-white">
            <div className="space-y-6">
              {/* Business Name */}
              <h2 className="text-2xl md:text-3xl font-cormorant font-semibold text-gray-800">The Maison Palace</h2>

              {/* Address */}
              <div className="space-y-1 text-gray-600 font-playfair">
                <p>Choriner Straße 49</p>
                <p>10435 Zirakpur, Punjab</p>
                <p>E-Mail: info@themaisonpalace.com</p>
              </div>

              {/* Phone and Hours */}
              <div className="space-y-2 text-gray-600 font-playfair">
                <p className="font-semibold">Call Us: 9911205000/8884008000</p>
                <p>We are open all days a week.</p>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <p className="text-gray-800 font-playfair font-semibold mb-4">Follow us on</p>
                <div className="flex space-x-4">
                  {/* Facebook */}
                  <a href="#" className="group">
                    <svg
                      className="w-6 h-6 text-gray-600 group-hover:text-[#B38728] group-hover:scale-110 transition-all duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a href="#" className="group">
                    <svg
                      className="w-6 h-6 text-gray-600 group-hover:text-[#B38728] group-hover:scale-110 transition-all duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.897-.875-1.387-2.026-1.387-3.323s.49-2.448 1.297-3.323c.875-.897 2.026-1.387 3.323-1.387s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387z" />
                    </svg>
                  </a>

                  {/* Twitter */}
                  <a href="#" className="group">
                    <svg
                      className="w-6 h-6 text-gray-600 group-hover:text-[#B38728] group-hover:scale-110 transition-all duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a href="#" className="group">
                    <svg
                      className="w-6 h-6 text-gray-600 group-hover:text-[#B38728] group-hover:scale-110 transition-all duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
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
