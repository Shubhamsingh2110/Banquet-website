import { useState, useEffect } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "https://i.pinimg.com/1200x/8e/50/0d/8e500dc7b5de5ed678269ba1a5b7dbbf.jpg",
    alt: "Elegant plated salad with microgreens",
    title: "Gourmet Salad",
  },
  {
    id: 2,
    src: "https://i.pinimg.com/736x/5a/9c/35/5a9c35d420164e2a7e97d1a8d849f0c0.jpg",
    alt: "Pink and white flower bouquet",
    title: "Floral Arrangement",
  },
  {
    id: 3,
    src: "https://i.pinimg.com/736x/95/42/9d/95429d5a14c3605592d87b6adb5545ba.jpg",
    alt: "Coastal Mediterranean town",
    title: "Coastal View",
  },
  {
    id: 4,
    src: "https://i.pinimg.com/736x/eb/f6/55/ebf6551762a3214b9302bdd0ba21d2b6.jpg",
    alt: "Elegant table setting",
    title: "Table Setting",
  },
  {
    id: 5,
    src: "https://i.pinimg.com/736x/b7/2b/5c/b72b5cf82a550c0368942c2d89dee11d.jpg",
    alt: "Modern bar interior",
    title: "Bar Interior",
  },
  {
    id: 6,
    src: "https://i.pinimg.com/1200x/93/e2/ac/93e2ac6354e6771a033ac72fbb22cac7.jpg",
    alt: "Artisanal coffee setup",
    title: "Coffee Art",
  },
  {
    id: 7,
    src: "https://i.pinimg.com/1200x/1f/50/d8/1f50d83d7fb9875be2dc8e9cba1c89d0.jpg",
    alt: "Minimalist dessert plating",
    title: "Dessert Art",
  },
  {
    id: 8,
    src: "https://i.pinimg.com/736x/19/0e/61/190e61f4912934f1d25dc8108125bb48.jpg",
    alt: "Rustic bread and cheese board",
    title: "Charcuterie",
  },
]

export default function Gallery() {
  const [translateX, setTranslateX] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) => {
        const imageWidth = 280 // 256px width + 24px gap
        const totalWidth = imageWidth * galleryImages.length
        const newTranslateX = prev - 1

        if (Math.abs(newTranslateX) >= totalWidth) {
          return 0
        }
        return newTranslateX
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const openLightbox = (image) => setSelectedImage(image)
  const closeLightbox = () => setSelectedImage(null)

  const nextImage = () => {
    if (selectedImage) {
      const currentImageIndex = galleryImages.findIndex((img) => img.id === selectedImage.id)
      const nextIndex = (currentImageIndex + 1) % galleryImages.length
      setSelectedImage(galleryImages[nextIndex])
    }
  }

  const prevImage = () => {
    if (selectedImage) {
      const currentImageIndex = galleryImages.findIndex((img) => img.id === selectedImage.id)
      const prevIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1
      setSelectedImage(galleryImages[prevIndex])
    }
  }

  const infiniteImages = [...galleryImages, ...galleryImages, ...galleryImages]

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        {/* Gallery Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-serif text-stone-700 tracking-wide">Gallery</h1>
        </div>

        {/* Gallery Container */}
        <div className="relative max-w-7xl mx-auto overflow-hidden">
          <div
            className="flex gap-6 transition-none"
            style={{
              transform: `translateX(${translateX}px)`,
              width: `${infiniteImages.length * 280}px`,
            }}
          >
            {infiniteImages.map((image, index) => (
              <div
                key={`${image.id}-${Math.floor(index / galleryImages.length)}`}
                className="flex-shrink-0 w-64 h-64 cursor-pointer group"
                onClick={() => openLightbox(image)}
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Previous Button */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
              onClick={prevImage}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
              onClick={nextImage}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Main Image */}
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain "
            />

            {/* Image Title */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="text-white text-xl font-medium bg-black/50 rounded-lg px-4 py-2 inline-block">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
