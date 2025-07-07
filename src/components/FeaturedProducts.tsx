
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart } from 'lucide-react';

const FeaturedProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const product = {
    id: 1,
    name: "Authentic Kerala Homade Snacks",
    price: "₹300",
    image: "/lovable-uploads/3561c024-8993-4bff-acba-ce90e52663c7.png",
    description: "Traditional Kerala snacks including Banana Chips, Tapioca Chips, Tomato Murukku, Pakkavada & Kerala Mixture"
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : ''}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Featured <span className="text-primary">Product</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our authentic Kerala homemade snacks, crafted with traditional recipes and the finest ingredients
          </p>
        </div>

        <div className="flex justify-center">
          <div
            className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 max-w-md w-full ${
              isVisible ? 'animate-scale-in' : ''
            }`}
          >
            <div className="relative overflow-hidden group">
              <a href="/products">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </a>
              <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors duration-300">
                <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">{product.price}</span>
                <Button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
