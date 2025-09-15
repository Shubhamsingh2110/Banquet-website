import React from "react";

const LandingSection = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 text-black flex flex-col items-center px-4 md:px-12 lg:px-20">
      {/* Header */}
      <header className="w-full flex justify-between items-center py-6">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl">LOGO</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm border rounded-full hover:bg-gray-100 transition">
            Log In
          </button>
          <button className="px-4 py-2 text-sm bg-black text-white rounded-full hover:bg-gray-800 transition">
            Get Started
          </button>
          {/* Menu Icon */}
          <button className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center max-w-3xl mt-10">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
          Life Planning, Making
          <br /> Easy to Turn Dreams a Reality.
        </h1>
        <p className="text-gray-500 mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium,
          perferendis atque inventore commodi veniam deleniti aperiam, esse
          ratione nostrum non, debitis asperiores dicta repudiandae ab unde iure
          quaerat. Accusamus, asperiores.{" "}
        </p>

        {/* Email Signup */}
        <div className="mt-6 flex items-center justify-center gap-6 max-w-md mx-auto">
          <button className="relative font-bold text-base cursor-pointer rounded-full bg-stone-800 text-stone-800 p-[1px] transform -translate-x-1 -translate-y-1 transition-all duration-150 ease-in-out outline-2 outline-transparent outline-offset-[5px] shadow-[0.5px_0.5px_0_0_#292524,1px_1px_0_0_#292524,1.5px_1.5px_0_0_#292524,2px_2px_0_0_#292524,2.5px_2.5px_0_0_#292524,3px_3px_0_0_#292524,0_0_0_2px_#fafaf9,0.5px_0.5px_0_2px_#fafaf9,1px_1px_0_2px_#fafaf9,1.5px_1.5px_0_2px_#fafaf9,2px_2px_0_2px_#fafaf9,2.5px_2.5px_0_2px_#fafaf9,3px_3px_0_2px_#fafaf9,3.5px_3.5px_0_2px_#fafaf9,4px_4px_0_2px_#fafaf9] hover:translate-x-0 hover:translate-y-0 hover:shadow-[0_0_0_2px_#fafaf9] focus-visible:outline-yellow-400 focus-visible:outline-dashed">
            <div className="relative bg-yellow-400 rounded-full border-2 border-white/30 pointer-events-none before:content-[''] before:absolute before:inset-0 before:rounded-full before:opacity-50 before:bg-[radial-gradient(rgb(255_255_255/_0.8)_20%,transparent_20%),radial-gradient(rgb(255_255_255)_20%,transparent_20%)] before:bg-[0_0,4px_4px] before:[background-size:8px_8px] before:[mix-blend-mode:hard-light] animate-[dots_0.5s_linear_infinite]">
              <span className="relative flex items-center justify-center px-5 py-3 filter drop-shadow-[0_-1px_0_rgba(255,255,255,0.25)] active:translate-y-[2px]">
                Get Started
              </span>
            </div>
          </button>
          <button className="relative font-bold text-base cursor-pointer rounded-full bg-stone-800 text-stone-800 p-[1px] transform -translate-x-1 -translate-y-1 transition-all duration-150 ease-in-out outline-2 outline-transparent outline-offset-[5px] shadow-[0.5px_0.5px_0_0_#292524,1px_1px_0_0_#292524,1.5px_1.5px_0_0_#292524,2px_2px_0_0_#292524,2.5px_2.5px_0_0_#292524,3px_3px_0_0_#292524,0_0_0_2px_#fafaf9,0.5px_0.5px_0_2px_#fafaf9,1px_1px_0_2px_#fafaf9,1.5px_1.5px_0_2px_#fafaf9,2px_2px_0_2px_#fafaf9,2.5px_2.5px_0_2px_#fafaf9,3px_3px_0_2px_#fafaf9,3.5px_3.5px_0_2px_#fafaf9,4px_4px_0_2px_#fafaf9] hover:translate-x-0 hover:translate-y-0 hover:shadow-[0_0_0_2px_#fafaf9] focus-visible:outline-yellow-400 focus-visible:outline-dashed">
            <div className="relative bg-yellow-400 rounded-full border-2 border-white/30 pointer-events-none before:content-[''] before:absolute before:inset-0 before:rounded-full before:opacity-50 before:bg-[radial-gradient(rgb(255_255_255/_0.8)_20%,transparent_20%),radial-gradient(rgb(255_255_255)_20%,transparent_20%)] before:bg-[0_0,4px_4px] before:[background-size:8px_8px] before:[mix-blend-mode:hard-light] animate-[dots_0.5s_linear_infinite]">
              <span className="relative flex items-center justify-center px-5 py-3 filter drop-shadow-[0_-1px_0_rgba(255,255,255,0.25)] active:translate-y-[2px]">
                Sign Up
              </span>
            </div>
          </button>
        </div>
      </section>

      {/* Featured Plans */}
      <section className="w-full mt-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Featured Plans</h2>
          <button className="text-gray-500 hover:text-black transition">
            Explore All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-green-400 p-6 rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold uppercase">Strategy</h3>
              <h2 className="text-lg font-semibold mt-2">Money Momentum</h2>
              <p className="text-sm text-gray-700 mt-2">
                Tract Premium helps you start saver investments insights
                covering.
              </p>
            </div>
            <div className="flex justify-between items-center mt-6">
              <span className="font-bold">7.20%</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
            <span className="text-xs text-gray-600 mt-1">3 yrs CAGR</span>
          </div>

          {/* Card 2 */}
          <div className="bg-black text-white p-6 rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold uppercase">Plans</h3>
              <h2 className="text-lg font-semibold mt-2">Long-Term</h2>
              <p className="text-sm text-gray-300 mt-2">
                Create a vision. To get started, imagine your dream life.
              </p>
            </div>
            <div className="flex justify-between items-center mt-6">
              <span className="font-bold">14.20%</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
            <span className="text-xs text-gray-400 mt-1">25 yrs CAGR</span>
          </div>

          {/* Card 3 */}
          <div className="bg-purple-400 p-6 rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold uppercase">Strategy</h3>
              <h2 className="text-lg font-semibold mt-2">Focussed</h2>
              <p className="text-sm text-gray-700 mt-2">
                Be focused. Life planning, however, can serve as roadmap or
                guide.
              </p>
            </div>
            <div className="flex justify-between items-center mt-6">
              <span className="font-bold">11.20%</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
            <span className="text-xs text-gray-600 mt-1">1 yr returns</span>
          </div>

          {/* Card 4 */}
          <div className="bg-yellow-400 p-6 rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold uppercase">Plans</h3>
              <h2 className="text-lg font-semibold mt-2">Fixed Income</h2>
              <p className="text-sm text-gray-700 mt-2">
                Get multiple benefits, and lumpsum option & Guaranteed Returns.
              </p>
            </div>
            <div className="flex justify-between items-center mt-6">
              <span className="font-bold">8.20%</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
            <span className="text-xs text-gray-600 mt-1">5 yrs CAGR</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingSection;
