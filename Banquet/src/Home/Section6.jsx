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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // 1. Send data to Google Sheets
      await submitToGoogleSheets()

      // 2. Redirect to WhatsApp with form data
      redirectToWhatsApp()

      // 3. Reset form and show success message
      setFormData({
        name: "",
        email: "",
        city: "",
        contact: "",
        message: "",
      })
      setSubmitStatus('success')
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const submitToGoogleSheets = async () => {
    // REPLACE THIS WITH YOUR ACTUAL WEB APP URL FROM STEP 2
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxGFmVbs_lDIRkLKlfCVEVSXd6ZBSuBbbIlyCM0oqFVGQBPzQRP-acz3czYSr_cQNQ_VQ/exec'

    // Create URLSearchParams instead of FormData for better compatibility
    const params = new URLSearchParams()
    params.append('name', formData.name)
    params.append('email', formData.email)
    params.append('city', formData.city)
    params.append('contact', formData.contact)
    params.append('message', formData.message)
    params.append('timestamp', new Date().toISOString())

    // Send data to Google Sheets via Google Apps Script
    const response = await fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors', // Important for Google Apps Script
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString()
    })

    // Note: With no-cors mode, we can't check response status
    // We'll assume success if no error is thrown
    return response
  }

  const redirectToWhatsApp = () => {
    // Format WhatsApp message with form data
    const phoneNumber = "919049090974" // Business WhatsApp number (without + sign)

    // Create formatted message for WhatsApp
    const message = `*New Inquiry from Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*City:* ${formData.city}
*Contact:* ${formData.contact}
*Message:* ${formData.message}

_Sent from The Royal Sapphire Contact Form_`

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message)

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    // Open WhatsApp in new tab/app
    window.open(whatsappURL, '_blank')
  }

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto" id="contact">
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
            {/* Form Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                Something went wrong. Please try again or contact us directly.
              </div>
            )}

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
                    className="w-full bg-transparent border-0 border-b-2 text-gray-800 placeholder-gray-500 border-[#B38728] focus:outline-none transition-colors duration-300 pb-2 font-sans"
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
                    className="w-full bg-transparent border-0 border-b-2 text-gray-800 placeholder-gray-500 border-[#B38728] focus:outline-none transition-colors duration-300 pb-2 font-sans"
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
                    className="w-full bg-transparent border-0 border-b-2 text-gray-800 placeholder-gray-500 border-[#B38728] focus:outline-none transition-colors duration-300 pb-2 font-cormorant"
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
                    className="w-full bg-transparent border-0 border-b-2 text-gray-800 placeholder-gray-500 border-[#B38728] focus:outline-none transition-colors duration-300 pb-2 font-cormorant"
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
                  className="w-full bg-transparent border-0 border-b-2 text-gray-800 placeholder-gray-500 border-[#B38728] focus:outline-none transition-colors duration-300 pb-2 resize-none font-sans"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-[#B38728] text-white px-12 py-3 font-playfair font-semibold uppercase tracking-wider hover:bg-[#9a7322] rounded-3xl hover:shadow-lg transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
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
                <p>Gurugram, Haryana 122012</p>
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
                  <a
                    href="https://wa.me/918884008000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-600 transition-colors"
                    aria-label="Contact us on WhatsApp"
                  >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="3 3 19 19"
                    fill="currentColor"
                    className="text-white group-hover:scale-110 transition-all duration-300"
                  >
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path>
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


