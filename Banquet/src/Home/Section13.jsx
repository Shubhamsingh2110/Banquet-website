const Landing = () => {
  return (
    <>
      <div className="relative min-h-screen flex flex-col gap-5 justify-center items-center overflow-hidden">
        {/* Dot Pattern Background */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#c4c4c4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="h-10">Navbar</div>
        {/* Main Content */}
        <div className="relative z-10 flex flex-col gap-5 justify-center items-center">
          {/* Ping intro tag */}
          <span className="relative bg-[#eeeeee] py-1 text-gray-600 px-4 dm-sans rounded-2xl border-2 border-[#d1d1d1] flex items-center gap-2 text-xs sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="sm:hidden">Clear doubts, Achieve dreams</span>
            <span className="hidden sm:inline">Clear your doubts, Achieve your dreams</span>
          </span>

          {/* Hero Section */}
          <div className="flex flex-col gap-3 sm:gap-5 px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl dm-sans text-center">
              Get your study abroad doubts
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl dm-sans text-center">
              cleared for{" "}
              <span className="bg-[#fa8c00] text-white px-2 sm:px-4 rounded-xl sm:rounded-2xl">
                FREE by our community 💫
              </span>
            </h1>
            <p className="text-gray-600 text-center text-sm sm:text-base w-[95%] sm:w-3/4 md:w-1/2 mx-auto">
              Don't worry, our study abroad community will help you. And yes, we don't charge you at all for joining our
              supportive study abroad WhatsApp community.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
              {/* Join Us Now button */}
              <button className="flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-[#0f0f0f] text-white font-medium shadow-md hover:opacity-90 transition text-sm sm:text-base w-full sm:w-auto justify-center">
                Join us now
                <span className="text-lg">&#8250;</span>
              </button>

              {/* View Benefits button */}
              <button className="font-medium bg-[#eeeeee] py-2 text-gray-600 px-4 sm:px-6 dm-sans rounded-full border-2 border-[#d1d1d1] hover:opacity-90 transition text-sm sm:text-base w-full sm:w-auto">
                View benefits
              </button>
            </div>
          </div>
          <div className="relative flex items-center justify-center px-4 py-6 sm:py-12">
            <div className="absolute top-2 sm:top-5 -left-12 sm:-left-24 z-50 hidden sm:block">
              <img
                src="https://cdn.playbuzz.com/cdn/c65663c5-1430-4efa-820d-622f73539719/6d7e73e8-6fa8-46fe-8781-48c78aecd581.jpg"
                alt=""
                className="h-20 w-32 sm:h-32 sm:w-48 rounded-full border-gray-400 border-2"
              />
            </div>
            <div className="absolute bottom-8 sm:bottom-16 -left-20 sm:-left-36 hidden sm:block">
              <p className="text-xs sm:text-sm">
                Join our study abroad <br /> community now!
              </p>
            </div>
            {/* Main Student Image */}
            <div className="relative w-[280px] sm:w-[320px] md:w-[400px]">
              <img
                src="https://media.istockphoto.com/id/1360403989/photo/young-student-with-plane-and-book-study-abroad-concept.jpg?s=612x612&w=0&k=20&c=yh4qqhHBIkaA_QP2spr8ITT5xGeJ8Ldb9OwCIafm-iA="
                alt="Student"
                className="rounded-3xl w-full shadow-2xl"
              />

              {/* Overlapping Glassmorphic Chat Box */}
              <div className="absolute -top-6 -right-2 sm:-top-10 sm:-right-30 md:-top-4 md:-right-40 w-[150px] h-40 md:h-64 lg:h-64 sm:w-[260px] md:w-[300px] p-3 sm:p-4 rounded-2xl bg-white/20 backdrop-blur-xl border rotate-6 sm:rotate-12 border-white z-10 hidden sm:block">
                {/* Mentor Image on top-right corner */}
                <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                    alt="Mentor"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-1 sm:space-y-2 md:space-y-2 text-xs sm:text-sm md:text-sm text-white">
                  <div className="bg-green-500 bg-opacity-80 px-2 sm:px-3 md:px-3 py-0 sm:py-2 md:py-2 rounded-xl w-fit max-w-[85%] sm:max-w-[90%] md:max-w-full">
                    Hey! Need help with your SOP?
                  </div>
                  <div className="bg-orange-400 px-2 sm:px-3 md:px-3 py-0 sm:py-2 md:py-2 rounded-xl w-fit ml-auto max-w-[85%] sm:max-w-[90%] md:max-w-full">
                    Yes please 🙏 I'm so confused.
                  </div>
                  <div className="bg-green-500 bg-opacity-80 px-2 sm:px-3 md:px-3 py-0 sm:py-2 md:py-2 rounded-xl w-fit max-w-[85%] sm:max-w-[90%] md:max-w-full">
                    Our mentors guide you step-by-step!
                  </div>
                  <div className="bg-orange-400 px-2 sm:px-3 md:px-3 py-1 sm:py-2 md:py-2 rounded-xl w-fit ml-auto max-w-[85%] sm:max-w-[90%] md:max-w-full hidden sm:block">
                    That's amazing! And it's free?
                  </div>
                  <div className="bg-green-500 bg-opacity-80 px-2 sm:px-3 md:px-3 py-1 sm:py-2 md:py-2 rounded-xl w-fit max-w-[85%] sm:max-w-[90%] md:max-w-full hidden sm:block">
                    Totally FREE. Just join the group 💬
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src="https://cdn-icons-gif.flaticon.com/15944/15944666.gif"
        alt=""
        className="absolute lg:top-24 lg:left-52 md:left-16 h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28 rounded-full hidden sm:block"
      />
      <img
        src="https://cdn-icons-gif.flaticon.com/9448/9448428.gif"
        alt=""
        className="absolute lg:top-40 lg:right-32 md:top-60 md:right-24 h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28 rounded-full hidden sm:block"
      />
      <img
        src="https://cdn-icons-gif.flaticon.com/12525/12525333.gif"
        alt=""
        className="absolute lg:top-80 lg:left-36 md:left-32 h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28 rounded-full hidden sm:block"
      />
    </>
  )
}

export default Landing
