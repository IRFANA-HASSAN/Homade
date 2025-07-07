
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart, Star, Check, Minus, Plus } from 'lucide-react';

const NaaturuchiShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const productImages = [
    "/lovable-uploads/3561c024-8993-4bff-acba-ce90e52663c7.png"
  ];

  const keyHighlights = [
    "Made with traditional Kerala recipes",
    "100% natural ingredients",
    "No artificial preservatives",
    "Handcrafted with love",
    "Authentic village taste",
    "Fresh from Kerala kitchens"
  ];

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <section ref={sectionRef} className="pt-20 pb-16 bg-gradient-to-b from-white via-yellow-50/30 to-green-50/20 kerala-pattern relative overflow-hidden">
      <div className="absolute inset-0 leaf-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Section */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center mb-20 ${isVisible ? 'animate-fade-up' : ''}`}>
          
          {/* Product Images */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img
                src={productImages[currentImageIndex]}
                alt="Naaturuchi - Authentic Kerala Homemade Snacks"
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button className="absolute top-4 right-4 p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-300 shadow-lg">
                <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
              </button>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="flex gap-3 justify-center">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'border-primary shadow-lg scale-105'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                Naaturuchi
              </h1>
              <p className="text-xl text-kerala-green font-medium mb-6">
                Authentic Kerala Flavors, Packed with Love
              </p>
            </div>

            <div className="prose prose-lg text-gray-700">
              <p>
                Experience the authentic taste of Kerala with our Naaturuchi collection. 
                This carefully curated selection includes traditional Banana Chips, crispy 
                Tapioca Chips, flavorful Tomato Murukku, classic Pakkavada, and our signature 
                Kerala Mixture - all made using time-honored recipes passed down through generations.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {keyHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white/60 rounded-lg border border-green-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Check className="w-5 h-5 text-kerala-green flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Price and Purchase */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-3xl font-bold text-black">₹300</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90 text-black font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105 group"
                >
                  <ShoppingCart className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 border-2 border-black text-black hover:bg-black hover:text-white py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Product Story Section */}
        <div className={`bg-gradient-to-r from-kerala-green/10 to-primary/10 rounded-2xl p-8 ${isVisible ? 'animate-fade-up' : ''}`}>
          <h3 className="text-2xl font-bold text-black mb-4">The Story Behind Naaturuchi</h3>
          <p className="text-gray-700 leading-relaxed">
            Naaturuchi represents the essence of Kerala's culinary heritage. Each product in this collection 
            is crafted in traditional village kitchens using methods that have been perfected over centuries. 
            From the selection of raw materials to the final packaging, every step is done with care and 
            dedication to preserve the authentic flavors that make Kerala cuisine so special. When you taste 
            Naaturuchi, you're not just enjoying a snack - you're experiencing a piece of Kerala's rich 
            cultural tradition.
          </p>
        </div>
      </div>

      {/* Decorative Kerala-inspired border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-kerala-green to-primary opacity-30"></div>
    </section>
  );
};

export default NaaturuchiShowcase;
