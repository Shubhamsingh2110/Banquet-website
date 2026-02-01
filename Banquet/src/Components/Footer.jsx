import { Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12 px-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Logo and Title Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <img 
                src="https://i.postimg.cc/C1ySmFFT/IMG-2980.png" 
                alt="The Royal Sapphire Logo" 
                className="relative w-20 h-20 rounded-full border-4 border-yellow-500 shadow-2xl group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-500"></div>
            <h2 className="text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 tracking-wider">
              THE ROYAL SAPPHIRE
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-500"></div>
          </div>
          <p className="text-gray-400 text-xs tracking-widest">LUXURY HOSPITALITY</p>
        </div>

        {/* Navigation Grid */}
        <div className="flex justify-center mb-8">
          <div className="max-w-2xl w-full">
            {/* Get In Touch */}
            <div className="text-center">
              <h3 className="text-yellow-500 font-semibold mb-4 text-base tracking-wide">GET IN TOUCH</h3>
              <div className="space-y-3 text-sm">

                {/* Address */}
                <div className="text-gray-300 leading-relaxed">
                  <p className="font-semibold text-white mb-1">THE ROYAL SAPPHIRE</p>
                  <p>Street no. B-1, VATIKA INDIA NEXT</p>
                  <p>Plot 29 B, Vatika Sector Rd</p>
                  <p>Sector 82A, Gurugram, Haryana 122012</p>
                </div>

                {/* Phone */}
                <div>
                  <p className="text-white font-semibold">Call Us</p>
                  <p className="text-gray-300">9911205000 / 8884008000</p>
                </div>

                {/* Social Icons */}
                <div>
                  <p className="text-white font-semibold mb-2">Follow Us</p>

                  <div className="flex items-center justify-center gap-4">

                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/_theroyalsapphire?igsh=Y3ZhaDh0aGptNmlw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <Instagram className="w-4 h-4" />
                      <span className="text-xs font-medium">Instagram</span>
                    </a>

                    {/* WhatsApp Right Side */}
                    <a
                      href="https://wa.me/918884008000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-xs font-medium">WhatsApp</span>
                    </a>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-700">
          <div className="flex flex-col items-center gap-3 text-xs text-gray-400">
            <p>© 2025 The Royal Sapphire. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
