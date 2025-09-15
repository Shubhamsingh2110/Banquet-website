import { useState } from "react"

export default function NFTXLandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [sliderValue, setSliderValue] = useState(50)

  return (
    <div className={`min-h-screen flex flex-col`}>
      {/* Header */}
<header className="w-full">
  <div className="mx-auto flex h-16 md:h-24 max-w-7xl items-center justify-between px-4 md:px-6">
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <img
        src="https://i.postimg.cc/PxBtc83M/Screenshot-2025-08-21-at-9-19-51-PM-Photoroom.png"
        className="flex h-8 w-10 md:h-12 md:w-14 rounded-lg"
        alt="NFTX Logo"
      />
      <span className="text-xl md:text-3xl font-bold">NFTX</span>
    </div>

    {/* Desktop Navigation */}
    <nav className="hidden md:flex items-center space-x-8">
      <a href="#" className="text-sm font-medium hover:text-muted-foreground transition-colors">TRADE</a>
      <a href="#" className="text-sm font-medium hover:text-muted-foreground transition-colors">COLLECTIONS</a>
      <a href="#" className="text-sm font-medium hover:text-muted-foreground transition-colors">TUTORIALS</a>
    </nav>

    {/* Right actions */}
    <div className="flex items-center space-x-2 md:space-x-4">
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 md:px-6 md:py-2 rounded-full text-sm md:text-base font-medium transition-colors">
        GET STARTED
      </button>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>
  </div>

  {isMobileMenuOpen && (
    <div className="md:hidden border-t bg-background">
      <nav className="px-4 py-4 space-y-3">
        {["TRADE", "COLLECTIONS", "TUTORIALS"].map((item) => (
          <a
            key={item}
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-medium py-2"
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  )}
</header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-20 lg:py-20 -translate-y-10">
      <div className="text-center max-w-6xl mx-auto">
        {/* Main heading with user stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
          <h1 className="font-serif italic text-4xl sm:text-6xl md:text-8xl lg:text-[115px] font-medium leading-tight">
            Revolutionise
          </h1>
          <div className="flex items-center gap-2 sm:mt-7">
            <div className="flex -space-x-2 sm:-space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-2 border-white rounded-full overflow-hidden bg-gray-200">
                <img src="https://i.postimg.cc/GmX1d9vB/1M.png" alt="User 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-2 border-white rounded-full overflow-hidden bg-gray-200">
                <img
                  src="https://i.pinimg.com/736x/a5/12/52/a512525b41e4875854d7a09735a8aaf8.jpg"
                  alt="User 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-2 border-white rounded-full overflow-hidden bg-gray-200">
                <img
                  src="https://i.pinimg.com/1200x/ae/0a/40/ae0a4055c40faca934b51b84fd180665.jpg"
                  alt="User 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle with JOIN button */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-2xl sm:text-4xl md:text-6xl lg:text-[135px] font-bold leading-tight mt-4 sm:mt-0">
          <span className="font-sans">the</span>
          <div className="text-white px-4 py-2 sm:px-8 sm:py-4 h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 shadow-2xl rounded-lg transition-colors duration-200 cursor-pointer rotate-6 flex items-center justify-center">
            <img
              src="https://i.postimg.cc/zvSqVTLN/Screenshot-2025-08-22-at-12-12-42-AM-Photoroom.png"
              alt=""
              className="h-10 w-12 sm:h-16 sm:w-20 md:h-20 md:w-24 object-contain"
            />
          </div>
          <span className="font-sans">way you buy</span>
        </div>

        {/* Second line of subtitle */}
        <div className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-light leading-tight mt-2 sm:mt-0">
          <span className="font-sans font-bold text-3xl sm:text-5xl md:text-7xl lg:text-[100px]">& </span>
          <span className="font-serif font-medium italic text-3xl sm:text-5xl md:text-7xl lg:text-[100px]">
            sell nft{" "}
          </span>
          <span className="font-sans font-bold text-3xl sm:text-5xl md:text-7xl lg:text-[100px]">art</span>
        </div>
      </div>
    </main>

      {/* Three Card Section */}
          <div className="max-w-7xl mx-auto bg-gray-50 py-5">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full ">
      {/* Community Card */}
      <div className="bg-gray-300 rounded-3xl p-6 relative overflow-hidden shadow-2xl">
        <div className="flex justify-between items-start mb-52">
          <div className="flex items-center gap-7 bg-gray-300 border border-black rounded-full px-3 py-1 text-base h-10 w-40">
            <div className="w-3 h-3 bg-gray-800 rounded-full">
                <div className="w-3 h-3 bg-gray-800 translate-x-2 rounded-full"></div>
            </div>
            Community
          </div>
          <span className="text-base font-semibold text-black">/ 2023</span>
        </div>

        <div className="translate-x-5">
          <h2 className="text-2xl font-bold text-black">JOIN COMMUNITY</h2>
          <div className="text-2xl font-bold">
            <span className="text-orange-500">GET </span><span className="text-orange-500 ml-16">ZERO FEES</span>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-60 right-8 lg:right-8 w-14 h-16 bg-white rounded-xl shadow-2xl flex items-center justify-center rotate-12">
            <img src="https://i.postimg.cc/PJpvWPkN/image-Photoroom-1.png" alt="" className="object-cover h-10 w-10" />
        </div>

        <div className="absolute bottom-1 lg:bottom-7 lg:right-[200px] right-[200px] w-14 h-16 bg-white rounded-xl shadow-2xl flex items-center justify-center -rotate-12">
            <img src="https://i.postimg.cc/bvbhtnrs/image-Photoroom-2.png" alt="" className="pb-3 object-cover h-16 w-10" />
        </div>
      </div>

      {/* NFT Buyers Stats Card */}
      <div className="bg-violet-400 rounded-3xl p-6 relative shadow-2xl">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-3xl font-bold text-black">NFT Buyers</h2>
          <div className="flex items-center gap-3">
            <span className="text-8xl italic font-bold font-Domine text-black">3</span>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-Domine">↑</span>
              <span className="text-3xl font-Domine">%</span>
            </div>
          </div>
        </div>

        {/* Speech bubble */}
        <div className="relative mb-4">
          <div className="bg-white rounded-full px-3 py-2 text-sm font-medium text-center inline-block translate-x-24">
            300K
            <div className="text-xs text-gray-600">primary market</div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
            </div>
          </div>
        </div>

        {/* Chart blocks */}
        <div className="flex items-end justify-center gap-1 mb-2 h-20">
          <div className="w-10 bg-slate-300 rounded-sm" style={{ height: "100%" }}></div>
          <div className="w-10 bg-slate-400 rounded-sm" style={{ height: "60%" }}></div>
          <div className="w-10 bg-slate-300 rounded-sm" style={{ height: "30%" }}></div>
          <div className="w-10 bg-slate-400 rounded-sm" style={{ height: "100%" }}></div>
          <div className="w-10 bg-slate-500 rounded-sm" style={{ height: "80%" }}></div>
          <div className="w-10 bg-slate-400 rounded-sm" style={{ height: "45%" }}></div>
          <div className="w-10 bg-slate-300 rounded-sm" style={{ height: "70%" }}></div>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="w-full h-0.5 bg-violet-600 rounded-full"></div>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="absolute top-0 left-0 w-full h-0.5 bg-transparent appearance-none cursor-pointer slider"
            style={{
              background: "transparent",
            }}
          />
          <style jsx>{`
            .slider::-webkit-slider-thumb {
              appearance: none;
              width: 16px;
              height: 16px;
              border-radius: 50%;
              background: #1f2937;
              cursor: pointer;
              border: 2px solid white;
              box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            }
            .slider::-moz-range-thumb {
              width: 16px;
              height: 16px;
              border-radius: 50%;
              background: #1f2937;
              cursor: pointer;
              border: 2px solid white;
              box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            }
          `}</style>
        </div>
      </div>

      {/* Tutorials Card */}
      <div className="bg-stone-200 rounded-3xl relative overflow-hidden shadow-2xl">
        {/* Header indicators */}
        <div className="absolute top-4 left-4 flex gap-1 z-10">
          <div className="w-3 h-3 bg-black rounded-full"></div>
          <div className="w-3 h-3 border border-black rounded-full"></div>
        </div>

        <div className="absolute top-4 right-4 z-10">
          <img src="https://i.postimg.cc/fbj7JjvH/arrow-right.png" className="w-12 h-12 rounded-full -rotate-45 flex items-center justify-center"/>
        </div>

        {/* Person image */}
        <div className="h-full min-h-96 relative">
          <img
            src="https://i.pinimg.com/736x/65/7c/e1/657ce19e18e65061190c7927400947cf.jpg"
            alt="Person wearing glasses and denim jacket"
            className="w-full h-96 object-cover object-center"
          />

          {/* Tutorials button */}
          <div className="absolute bottom-4 right-4">
            <button className="bg-white text-black rounded-full px-4 py-2 flex items-center gap-2 hover:scale-105 transition-transform duration-200 text-sm font-medium">
              <img src="https://i.postimg.cc/nVvxMs8X/play-9694582.png" className="w-4 h-4" />
              Tutorials
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}
