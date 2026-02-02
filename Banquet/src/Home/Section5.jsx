export default function WeddingServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative z-10">
        {/* Header */}
        <header className="text-center py-16">
          <h1 className="font-playfair text-6xl md:text-7xl font-medium text-[#B38B59] mb-4">Services</h1>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 pb-20">
          {/* First Section */}
          <section className="grid lg:grid-cols-2 gap-12 items-center mb-32">
            <div className="space-y-6">
              <h2 className="font-cormorant text-4xl md:text-6xl text-[#B38B59] leading-tight">
                Celebrate Your Special Moments With Us
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-md font-playfair">
                Experience elegance and comfort at our modern banquet hall—designed to make your celebrations truly unforgettable. Our spacious venue, customizable décor, and high-quality facilities make it perfect for weddings, engagements, parties, and corporate functions. With dedicated support and seamless event coordination, we ensure your special day is everything you envision.
              </p>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl">
                <img
                  src="https://i.pinimg.com/1200x/67/41/ce/6741ce164960e005d6845df253c803e9.jpg"
                  alt="Elegant wedding table setting with wine bottles and glasses"
                  className="w-full h-80 object-cover rounded-3xl"
                />
              </div>
            </div>
          </section>

          {/* Second Section */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 space-y-6">
              <h2 className="font-cormorant font-medium text-4xl md:text-5xl text-[#B38B59] leading-tight">
                A Perfect Venue for Every Occasion
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-md font-playfair">
                Whether you're planning a birthday celebration or business event our banquet hall offers the perfect environment. With a refreshing and premium color palette, elegant interiors, and flexible seating arrangements, we bring your event to life with style and sophistication.
              </p>
              {/* <button className="inline-flex font-cormorant items-center justify-center  bg-[#B38B59] text-white px-8 py-3 text-lg font-normal tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 disabled:pointer-events-none rounded-full ">
                PLAN WITH US
              </button> */}
            </div>

            <div className="lg:order-1 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative">
                  <div className="relative rounded-3xl shadow-2xl">
                    <img
                      src="https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967082/238A1255_rs4a2i.jpg"
                      alt="Elegant banquet hall setup"
                      className="w-full h-48 object-cover rounded-3xl"
                    />
                  </div>
                </div>
                <div className="relative rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967084/238A1247_z4braw.jpg"
                    alt="Beautiful venue decoration"
                    className="w-full h-52 object-cover rounded-3xl"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="relative rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967082/238A1259_y3azz1.jpg"
                    alt="Royal banquet setting"
                    className="w-full h-24 object-cover rounded-3xl"
                  />
                </div>
                <div className="relative">
                  <div className="relative rounded-3xl shadow-2xl">
                    <img
                      src="https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967072/238A1268_oerhhb.jpg"
                      alt="Premium event space"
                      className="w-full h-40 object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
