"use client"

const PlayIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
)

const ArrowIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
)

export function ThreeCardSection() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-300 rounded-2xl p-6">
          <div className="mb-4">
            <span className="text-sm bg-white px-3 py-1 rounded-full">Community</span>
          </div>
          <h2 className="text-xl font-bold mb-2">JOIN COMMUNITY</h2>
          <p className="text-orange-500 font-bold">GET ZERO FEES</p>
        </div>

        <div className="bg-violet-400 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">NFT Buyers</h2>
          <div className="text-4xl font-bold mb-4">3%</div>
          <div className="bg-white rounded-lg px-3 py-2 text-sm text-center">300K primary market</div>
        </div>

        <div className="bg-stone-200 rounded-2xl p-6 flex flex-col justify-between min-h-48">
          <div className="flex justify-end">
            <ArrowIcon />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Tutorials</span>
            <PlayIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThreeCardSection
