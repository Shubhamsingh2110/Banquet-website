import { useState } from "react"
import { Scan, Download, ExternalLink, ChevronRight } from "lucide-react"

export function FeaturedMeals() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-gradient-to-b from-white to-amber-50 py-16 px-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-[#B38B59]/20"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-[#B38B59]/10"></div>
        <div className="absolute -bottom-20 left-1/4 w-48 h-48 rounded-full bg-[#B38B59]/15"></div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <div className="inline-block mb-3">
            <span className="bg-[#B38B59]/10 text-[#B38B59] text-sm px-4 py-2 rounded-full font-medium">Our Culinary Experience</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-cormorant font-bold text-[#B38B59] mb-6">
            Discover Our Menu
          </h1>
          <p className="text-center text-lg font-playfair text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in our exquisite selection of gourmet dishes, crafted with passion and the finest ingredients
          </p>
        </div>
        
        {/* QR Menu Card */}
        <div className="flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto border border-[#B38B59]/10">
          {/* Left Side - QR Code */}
          <div 
            className="relative w-full lg:w-2/5 bg-gradient-to-br from-[#B38B59] to-[#8A6642] p-10 flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Animated QR Frame */}
            <div className={`relative bg-white p-4 rounded-xl shadow-lg transition-all duration-500 ${isHovered ? 'scale-105' : ''}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#B38B59]/20 to-[#B38B59]/30 rounded-xl blur-md -m-1"></div>
              <div className="relative bg-white p-2 rounded-lg">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://drive.google.com/drive/folders/1hKZObkTgwO2DMkghdQTIHvfgUJhYNevO&color=8A6642" 
                  alt="Royal Sapphire Menu QR Code" 
                  className="w-52 h-52 md:w-64 md:h-64"
                />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#B38B59] rounded-full flex items-center justify-center text-white">
                  <Scan className="w-6 h-6" />
                </div>
              </div>
            </div>
            
            {/* Decorative Floating Elements */}
            <div className="absolute top-10 left-10 w-16 h-16 rounded-full border-4 border-white/10 pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-8 h-8 rounded-full border-2 border-white/20 pointer-events-none"></div>
            <div className="absolute top-1/2 right-16 w-4 h-4 rounded-full bg-white/30 pointer-events-none"></div>
          </div>
          
          {/* Right Side - Content */}
          <div className="w-full lg:w-3/5 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold text-[#B38B59] mb-4">
              Scan to View Our Complete Menu
            </h2>
            
            <p className="text-gray-600 mb-8">
              Experience our diverse range of culinary delights. Our menu features gourmet appetizers, signature main courses, 
              delectable desserts, and a curated selection of fine beverages. Simply scan the QR code with your smartphone 
              camera to access our full menu.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://drive.google.com/drive/folders/1hKZObkTgwO2DMkghdQTIHvfgUJhYNevO"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#B38B59] text-white py-3 px-6 rounded-full hover:bg-[#8A6642] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <ExternalLink size={18} />
                <span>View Online Menu</span>
              </a>
              
              <button 
                className="flex items-center justify-center gap-2 bg-transparent text-[#B38B59] border border-[#B38B59] py-3 px-6 rounded-full hover:bg-[#B38B59]/5 transition-colors"
              >
                <Download size={18} />
                <span>Download PDF</span>
              </button>
            </div>
            
            {/* Additional Information */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center text-gray-500 text-sm">
                <span className="w-6 h-6 rounded-full bg-[#B38B59]/10 flex items-center justify-center mr-2">
                  <ChevronRight size={14} className="text-[#B38B59]" />
                </span>
                <span>Menu updated seasonally with fresh, locally-sourced ingredients</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Text */}
        <div className="text-center mt-10 text-gray-500 text-sm">
          <p>Special dietary requirements? Please contact us in advance and our chef will be happy to accommodate.</p>
        </div>
      </div>
    </section>
  )
}

export default FeaturedMeals
