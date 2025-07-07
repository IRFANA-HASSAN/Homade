
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/products');
  };


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Kerala theme */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/hero-bg.jpg')`,
        }}
      />

       {/* Black transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-fade-up">
          Bringing Authentic{' '}
          <span className="text-primary">Kerala Homemade</span>{' '}
          Goodness to Your Doorstep
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 opacity-90 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Experience the warmth of Kerala village life in every bite of our carefully crafted traditional homemade products
        </p>
        
        <Button
          onClick={handleClick}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 animate-fade-up group"
          style={{ animationDelay: '0.4s' }}
        >
          Shop Now
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>

      {/* Kerala-inspired decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-green-600 to-primary"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
