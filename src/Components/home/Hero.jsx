import { useState, useEffect } from "react"
import { FiArrowRight, FiArrowLeft } from "react-icons/fi"

const slides = [
  {
    image: "hero1.jpg",
    title: "Startup IT Solutions",
    subtext:
      "Accelerating startups with innovative IT solutions for rapid growth where speed meets strategy",
    ctaPrimary: "Get a Free Consultation",
    ctaSecondary: "Explore Our Services",
  },
  {
    image: "hero2.jpg",
    title: "Digital Marketing ",
    subtext:
      "Scaling startups with data-driven, ROI-focused strategies and flawless execution",
    ctaPrimary: "Start Your Journey",
    ctaSecondary: "Learn More",
  },
  {
    image: "hero3.jpg",
    title: "E-commerce Solutions",
    subtext:
      "Empowering e-commerce startups to launch, scale, and dominate the market",
    ctaPrimary: "Book a Demo",
    ctaSecondary: "View Services",
  },
  {
    image: "hero4.jpg",
    title: "App Development",
    subtext:
      "Transforming Ideas into High-Performance Apps, Built for Speed and Scale  Ideation to MVP delivery in 4 months",
    ctaPrimary: "Book a Demo",
    ctaSecondary: "View Services",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [currentSlide])

  // New useEffect for auto-sliding
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(autoSlideInterval)
  }, [currentSlide]) // Re-run effect when currentSlide changes to ensure consistent timing

  return (
    <div className="relative overflow-hidden h-[90vh]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                {/* Title with animation */}
                <h1
                  className={`text-4xl md:text-6xl font-bold mb-6 text-white font-serif transform transition-all duration-1000 ${
                    currentSlide === index && !isAnimating
                      ? "translate-y-0 opacity-100 scale-100"
                      : "translate-y-10 opacity-0 scale-95"
                  }`}
                >
                  {slide.title}
                </h1>

                {/* Subtext with animation */}
                <p
                  className={`text-lg md:text-xl text-gray-200 mb-8 transition-all duration-1000 delay-300 ${
                    currentSlide === index && !isAnimating
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-10 opacity-0"
                  }`}
                >
                  {slide.subtext}
                </p>

                {/* CTA Buttons with animation */}
                <div
                  className={`space-x-4 transition-all duration-1000 delay-500 ${
                    currentSlide === index && !isAnimating
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    {slide.ctaPrimary}
                  </button>
                  <button className="px-8 py-3 bg-gray-800/50 text-white rounded-lg font-semibold hover:bg-gray-800/70 transition-colors">
                    {slide.ctaSecondary}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <FiArrowLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <FiArrowRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
