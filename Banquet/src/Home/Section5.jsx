export default function WeddingServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">


      <div className="relative z-10">
        {/* Header */}
        <header className="text-center py-16">
          <h1 className="font-serif text-6xl md:text-7xl text-amber-700 mb-4">Services</h1>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 pb-20">
          {/* First Section */}
          <section className="grid lg:grid-cols-2 gap-12 items-center mb-32">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl text-amber-800 leading-tight">
                Plan your Wedding party with us.
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-md">
                Wedding agencies, photography and personal wedding pages can be built with the help of this responsive
                Wedding Venues Website Template. Refreshing and uplifting color scheme featuring Tiffany blue combined.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg transform rotate-3"></div>
              <div className="relative bg-white p-4 rounded-lg shadow-lg">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Elegant wedding table setting with wine bottles and glasses"
                  className="w-full h-80 object-cover rounded"
                />
              </div>
            </div>
          </section>

          {/* Second Section */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl text-amber-800 leading-tight">
                A wedding destination of your dreams
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-md">
                Wedding agencies, photography and personal wedding pages can be built with the help of this responsive
                Wedding Venues Website Template. Refreshing and uplifting color scheme featuring Tiffany blue combined.
              </p>
              <button className="inline-flex items-center justify-center  bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 text-lg font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 disabled:pointer-events-none disabled:opacity-50">
                PLAN WITH US
              </button>
            </div>

            <div className="lg:order-1 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg transform -rotate-2"></div>
                  <div className="relative bg-white p-3 rounded-lg shadow-lg">
                    <img
                      src="/placeholder.svg?height=300&width=250"
                      alt="Gourmet plated dish"
                      className="w-full h-48 object-cover rounded"
                    />
                  </div>
                </div>
                <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg"></div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="w-full h-24 bg-gradient-to-br from-orange-300 to-amber-300 rounded-lg"></div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg transform rotate-1"></div>
                  <div className="relative bg-white p-3 rounded-lg shadow-lg">
                    <img
                      src="/placeholder.svg?height=250&width=200"
                      alt="Elegant plated salad"
                      className="w-full h-40 object-cover rounded"
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
