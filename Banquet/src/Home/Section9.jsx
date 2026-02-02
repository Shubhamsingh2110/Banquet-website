// import { useState, useEffect } from "react"
// import { X } from "lucide-react"

// const galleryImages = [
//   {
//     id: 1,
//     src: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967082/238A1255_rs4a2i.jpg",
//     alt: "Elegant banquet hall setup",
//     title: "Grand Celebration",
//   },
//   {
//     id: 2,
//     src: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967084/238A1247_z4braw.jpg",
//     alt: "Beautiful venue decoration",
//     title: "Luxury Decor",
//   },
//   {
//     id: 3,
//     src: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967082/238A1259_y3azz1.jpg",
//     alt: "Royal banquet setting",
//     title: "Royal Setting",
//   },
//   {
//     id: 4,
//     src: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967072/238A1268_oerhhb.jpg",
//     alt: "Premium event space",
//     title: "Premium Space",
//   },
//   {
//     id: 5,
//     src: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967068/238A1246_kigd5h.jpg",
//     alt: "Sophisticated venue design",
//     title: "Sophisticated Design",
//   },
//   {
//     id: 6,
//     src: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967078/238A1271_k7p0zs.jpg",
//     alt: "Elegant hall interior",
//     title: "Elegant Interior",
//   },
//   {
//     id: 7,
//     src: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967061/238A1244_rxbwhq.jpg",
//     alt: "Stunning event venue",
//     title: "Stunning Venue",
//   },
//   {
//     id: 8,
//     src: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967069/238A1265_u5vmkm.jpg",
//     alt: "Luxurious banquet hall",
//     title: "Luxurious Hall",
//   },
//   {
//     id: 9,
//     src: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769965840/238A1258_m3xjw2.jpg",
//     alt: "Beautiful event setup",
//     title: "Beautiful Setup",
//   },
  
// ]

// export default function Gallery() {
//   const [translateX, setTranslateX] = useState(0)
//   const [selectedImage, setSelectedImage] = useState(null)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTranslateX((prev) => {
//         const imageWidth = 280 // 256px width + 24px gap
//         const totalWidth = imageWidth * galleryImages.length
//         const newTranslateX = prev - 1

//         if (Math.abs(newTranslateX) >= totalWidth) {
//           return 0
//         }
//         return newTranslateX
//       })
//     }, 50)

//     return () => clearInterval(interval)
//   }, [])

//   const openLightbox = (image) => setSelectedImage(image)
//   const closeLightbox = () => setSelectedImage(null)

//   const nextImage = () => {
//     if (selectedImage) {
//       const currentImageIndex = galleryImages.findIndex((img) => img.id === selectedImage.id)
//       const nextIndex = (currentImageIndex + 1) % galleryImages.length
//       setSelectedImage(galleryImages[nextIndex])
//     }
//   }

//   const prevImage = () => {
//     if (selectedImage) {
//       const currentImageIndex = galleryImages.findIndex((img) => img.id === selectedImage.id)
//       const prevIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1
//       setSelectedImage(galleryImages[prevIndex])
//     }
//   }

//   const infiniteImages = [...galleryImages, ...galleryImages, ...galleryImages]

//   return (
//     <>
//       <div className="container mx-auto px-4 py-16">
//         {/* Gallery Header */}
//         <div className="text-center mb-16">
//           <div className="inline-block">
//             <h1 className="text-6xl md:text-7xl font-playfair text-[#B38728] tracking-wide mb-2">Gallery</h1>
//             <div className="h-1 bg-gradient-to-r from-transparent via-[#B38728] to-transparent"></div>
//           </div>
//           <p className="mt-4 text-gray-600 font-cormorant text-lg">Explore our elegant venue spaces</p>
//         </div>

//         {/* Gallery Container */}
//         <div className="relative max-w-7xl mx-auto overflow-hidden rounded-2xl">
//           {/* Gradient overlays for smooth edges */}
//           <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
//           <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
//           <div
//             className="flex gap-8 transition-none py-4"
//             style={{
//               transform: `translateX(${translateX}px)`,
//               width: `${infiniteImages.length * 320}px`,
//             }}
//           >
//             {infiniteImages.map((image, index) => (
//               <div
//                 key={`${image.id}-${Math.floor(index / galleryImages.length)}`}
//                 className="flex-shrink-0 w-80 h-80 cursor-pointer group"
//                 onClick={() => openLightbox(image)}
//               >
//                 <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border-4 border-[#B38728]/20 transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 group-hover:border-[#B38728]">
//                   <img
//                     src={image.src || "/placeholder.svg"}
//                     alt={image.alt}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
//                   <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
//                     <div className="border-t-2 border-[#B38728] pt-3">
//                       <p className="text-white text-lg font-playfair font-semibold tracking-wide">{image.title}</p>
//                     </div>
//                   </div>
//                   {/* Hover icon */}
//                   <div className="absolute top-4 right-4 w-10 h-10 bg-[#B38728] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
//                     <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Lightbox Modal */}
//       {selectedImage && (
//         <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
//           <div className="relative max-w-5xl max-h-full">
//             {/* Close Button */}
//             <button
//               className="absolute -top-12 right-0 z-10 h-12 w-12 rounded-full bg-[#B38728] hover:bg-[#9a7322] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
//               onClick={closeLightbox}
//             >
//               <X className="h-6 w-6" />
//             </button>

//             {/* Previous Button */}
//             <button
//               className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-14 w-14 rounded-full bg-[#B38728] hover:bg-[#9a7322] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl"
//               onClick={prevImage}
//             >
//               <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>

//             {/* Next Button */}
//             <button
//               className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-14 w-14 rounded-full bg-[#B38728] hover:bg-[#9a7322] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl"
//               onClick={nextImage}
//             >
//               <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>

//             {/* Main Image */}
//             <img
//               src={selectedImage.src || "/placeholder.svg"}
//               alt={selectedImage.alt}
//               className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
//             />

//             {/* Image Title */}
//             <div className="absolute -bottom-16 left-0 right-0 text-center">
//               <h3 className="text-white text-2xl font-playfair font-semibold bg-[#B38728] rounded-full px-8 py-3 inline-block shadow-lg">
//                 {selectedImage.title}
//               </h3>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }


import { useState, useEffect } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967082/238A1255_rs4a2i.jpg",
    alt: "Elegant banquet hall setup",
    title: "Grand Celebration",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967084/238A1247_z4braw.jpg",
    alt: "Beautiful venue decoration",
    title: "Luxury Decor",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967082/238A1259_y3azz1.jpg",
    alt: "Royal banquet setting",
    title: "Royal Setting",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967072/238A1268_oerhhb.jpg",
    alt: "Premium event space",
    title: "Premium Space",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967068/238A1246_kigd5h.jpg",
    alt: "Sophisticated venue design",
    title: "Sophisticated Design",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967078/238A1271_k7p0zs.jpg",
    alt: "Elegant hall interior",
    title: "Elegant Interior",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967061/238A1244_rxbwhq.jpg",
    alt: "Stunning event venue",
    title: "Stunning Venue",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769967069/238A1265_u5vmkm.jpg",
    alt: "Luxurious banquet hall",
    title: "Luxurious Hall",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1769965840/238A1258_m3xjw2.jpg",
    alt: "Beautiful event setup",
    title: "Beautiful Setup",
  },
  
]

export default function Gallery() {
  const [translateX, setTranslateX] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) => {
        const imageWidth = 352 // 320px width + 32px gap
        const singleSetWidth = imageWidth * galleryImages.length
        const newTranslateX = prev - 1

        // Reset to 0 when one complete set has scrolled
        if (Math.abs(newTranslateX) >= singleSetWidth) {
          return 0
        }
        return newTranslateX
      })
    }, 30)

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

  // Double the images for seamless loop
  const infiniteImages = [...galleryImages, ...galleryImages]

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        {/* Gallery Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h1 className="text-6xl md:text-7xl font-playfair text-[#B38728] tracking-wide mb-2">Gallery</h1>
            <div className="h-1 bg-gradient-to-r from-transparent via-[#B38728] to-transparent"></div>
          </div>
          <p className="mt-4 text-gray-600 font-cormorant text-lg">Explore our elegant venue spaces</p>
        </div>

        {/* Gallery Container */}
        <div className="relative max-w-7xl mx-auto overflow-hidden rounded-2xl">
          <div
            className="flex gap-8 py-4"
            style={{
              transform: `translateX(${translateX}px)`,
              willChange: 'transform',
            }}
          >
            {infiniteImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="flex-shrink-0 w-80 h-80 cursor-pointer group"
                onClick={() => openLightbox(image)}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-[#B38728]/20 transition-all duration-500 group-hover:scale-105 group-hover:border-[#B38728]">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="border-t-2 border-[#B38728] pt-3">
                      <p className="text-white text-lg font-playfair font-semibold tracking-wide">{image.title}</p>
                    </div>
                  </div>
                  {/* Hover icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-[#B38728] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-5xl max-h-full">
            {/* Close Button */}
            <button
              className="absolute -top-12 right-0 z-10 h-12 w-12 rounded-full bg-[#B38728] hover:bg-[#9a7322] text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Previous Button */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-14 w-14 rounded-full bg-[#B38728] hover:bg-[#9a7322] text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              onClick={prevImage}
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-14 w-14 rounded-full bg-[#B38728] hover:bg-[#9a7322] text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              onClick={nextImage}
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Main Image */}
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Image Title */}
            <div className="absolute -bottom-16 left-0 right-0 text-center">
              <h3 className="text-white text-2xl font-playfair font-semibold bg-[#B38728] rounded-full px-8 py-3 inline-block">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  )
}