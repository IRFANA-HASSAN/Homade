
import React, { useEffect, useRef, useState } from 'react';

const Story = () => {
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
        threshold: 0.3,
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

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-green-50/30 leaf-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? 'animate-slide-in-left' : ''}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
              Our Kerala <span className="text-primary">Story</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Born from the heart of Kerala's traditional villages, where generations have preserved 
              the authentic recipes and cooking methods passed down through families. Our story begins 
              in the spice gardens and coconut groves of God's Own Country.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Every product tells a tale of Kerala's rich culinary heritage - from the crackling sounds 
              of banana chips frying in coconut oil to the aromatic blend of traditional spices that 
              make each bite a journey back to Kerala's village kitchens.
            </p>
          </div>
          
          <div className={`${isVisible ? 'animate-slide-in-right' : ''}`}>
            <div className="relative">
              <img
                src="/lovable-uploads/story-img.jpeg"
                alt="Traditional Kerala kitchen"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-sm text-center">Kerala<br/>Pride</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
