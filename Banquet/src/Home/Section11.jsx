export default function HomePage() {
  return (
    <div className="relative h-screen bg-black overflow-hidden flex flex-col">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: `url('https://i.postimg.cc/Jz1KCNfK/imagecrypto.png')` }}
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-3 md:p-4 lg:px-12 flex-shrink-0">
        {/* Logo */}
        <img
          src="https://i.postimg.cc/760KS0f2/Screenshot-2025-08-17-at-8-57-19-PM.png"
          alt="Logo"
          className="h-8 md:h-10 w-auto"
        />

        {/* Navigation - Hidden on mobile, visible on desktop */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-8">
          <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
            How it Works?
          </a>
          <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#products" className="text-gray-400 hover:text-white transition-colors">
            Products
          </a>
          <a href="#discover" className="text-gray-400 hover:text-white transition-colors">
            Discover
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          <a href="#login" className="text-gray-300 hover:text-white text-sm">
            Log In
          </a>
          <button className="bg-gray-800/60 text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-700/60 transition-colors">
            Get Started
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 md:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-3 md:mb-4 leading-tight">
          Seamless crypto <br /> distribution for teams
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-gray-300/70 mb-6 md:mb-8 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
          Whether you're managing a DAO, running a token launch, or rewarding your team, our platform handles crypto
          payouts at scale securely in seconds.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-6 justify-center items-center">
          <button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-3 md:py-4 text-sm md:text-base font-semibold transition-colors flex items-center justify-center relative">
            <img
              src="https://i.postimg.cc/GmjHyYSB/right-removebg-preview.png"
              className="w-8 h-8 md:w-10 md:h-10 absolute left-2 -rotate-45"
              alt=""
            />
            <span className="ml-8">Get Started</span>
          </button>
          <button className="bg-gray-800/60 text-white hover:bg-gray-700/60 rounded-full px-6 py-3 md:py-4 text-sm md:text-base font-medium transition-colors">
            7 Day Free Trial
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 pb-4 md:pb-6 px-4 md:px-6 text-center flex-shrink-0">
        <p className="text-gray-400 text-sm mb-3 md:mb-4">
          Trusted by over <span className="text-white font-semibold">40+</span> Companies
        </p>
        <div className="flex justify-center items-center gap-6 md:gap-8 opacity-60 flex-wrap">
          <img
            src="https://i.postimg.cc/K8wW0NFs/Screenshot-2025-08-17-at-11-58-12-PM-removebg-preview.png"
            alt="Company 1"
            className="h-6 md:h-8 w-auto filter brightness-0 invert"
          />
          <img
            src="https://i.postimg.cc/MTKpdqzD/Screenshot-2025-08-17-at-11-54-57-PM-removebg-preview.png"
            alt="Company 2"
            className="h-6 md:h-8 w-auto filter brightness-0 invert"
          />
          <img
            src="https://i.postimg.cc/6Q681d0n/Screenshot-2025-08-17-at-11-55-47-PM-removebg-preview-1.png"
            alt="Company 3"
            className="h-6 md:h-8 w-auto filter brightness-0 invert"
          />
          <img
            src="https://i.postimg.cc/TPPPcTdc/Screenshot-2025-08-17-at-11-56-42-PM-removebg-preview.png"
            alt="Company 4"
            className="h-6 md:h-8 w-auto filter brightness-0 invert"
          />
          <img
            src="https://i.postimg.cc/jjWb52qB/Screenshot-2025-08-17-at-11-57-20-PM-removebg-preview.png"
            alt="Company 5"
            className="h-6 md:h-8 w-auto filter brightness-0 invert"
          />
        </div>
      </footer>
    </div>
  )
}
