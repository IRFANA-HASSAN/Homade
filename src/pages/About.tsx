
import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
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
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-b from-primary/10 to-green-50/30 kerala-pattern">
        <div className="absolute inset-0 leaf-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl mt-10 sm:text-5xl lg:text-6xl font-bold text-black mb-6 animate-fade-up">
              About <span className="text-primary">Kerala Homade</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Rooted in Kerala's rich culinary heritage, we bring you authentic homemade products 
              crafted with love from God's Own Country
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`${isVisible ? 'animate-slide-in-left' : ''}`}>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">
                Our <span className="text-primary">Mission</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Kerala Homade was born from a deep love for authentic Kerala cuisine and 
                  a desire to share the traditional flavors of our homeland with families everywhere. 
                  In the bustling spice gardens and coconut groves of Kerala, generations have 
                  perfected the art of homemade cooking.
                </p>
                <p>
                  Our mission is simple: to preserve and share these time-honored recipes while 
                  maintaining the highest standards of quality and authenticity. Every product 
                  we create tells the story of Kerala's vibrant culinary culture.
                </p>
                <p>
                  From the crackling sounds of banana chips being prepared in traditional coconut oil 
                  to the aromatic blend of freshly ground spices, we ensure that each bite 
                  transports you to the heart of Kerala's village kitchens.
                </p>
              </div>
            </div>
            
            <div className={`${isVisible ? 'animate-slide-in-right' : ''}`}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Kerala spices and traditional cooking"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                  <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-br from-kerala-green to-green-600 rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-center text-sm"><p>Traditional <br /> Kerala <br /> Recipes</p></span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       <section ref={sectionRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`${isVisible ? 'animate-slide-in-right' : ''}`}>
              <div className="relative">
                <img
                  src="/lovable-uploads/instagramjourney.jpg"
                  alt="Kerala spices and traditional cooking"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                  <a href="https://www.instagram.com/homade.kerala?igsh=MW00aGQ4czMwems4Mw==">
                    <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-kerala-green to-green-600 rounded-full flex items-center justify-center shadow-xl">
                      <span className="text-white font-bold text-center text-sm"><img src="/lovable-uploads/play-button.png" alt="playbutton"  className='w-8 h-8'/></span>
                    </div>
                  </a>
              </div>
            </div>
            <div className={`${isVisible ? 'animate-slide-in-left' : ''}`}>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">
                Why  <span className="text-primary">Homade?</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Homade is a startup on a mission to transform India’s local cottage industry products into global brands. We started from Kerala, 
                  working with traditional makers to bring authentic sweets and snacks to the world. Today, we have expanded to every state in India, 
                  celebrating the diversity of flavors and cultures.
                </p>
                <p>
                  Our goal is not just to sell products but to share the deep emotions, stories, and traditions behind them. We turn local, unbranded 
                  treats into beautifully branded experiences — making them as recognizable and loved as global chocolates.
                </p>
                <p>
                  Through Homade, we want people everywhere to taste, feel, and celebrate the true spirit of India. We believe every bite should carry 
                  the warmth and heritage of our country, connecting hearts across the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-20 bg-gray-50 leaf-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Everything we do is guided by the principles that make Kerala's culinary tradition so special
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                description: "Traditional recipes passed down through generations, preserving Kerala's culinary heritage",
                icon: "🏺"
              },
              {
                title: "Quality",
                description: "Premium ingredients sourced directly from Kerala's spice gardens and local farmers",
                icon: "🌿"
              },
              {
                title: "Tradition",
                description: "Time-honored cooking methods that respect the cultural significance of each recipe",
                icon: "👵"
              },
              {
                title: "Freshness",
                description: "Products made in small batches to ensure maximum freshness and flavor",
                icon: "🌱"
              },
              {
                title: "Community",
                description: "Supporting local Kerala communities and traditional cooking practices",
                icon: "🤝"
              },
              {
                title: "Trust",
                description: "Building lasting relationships with families who value authentic homemade quality",
                icon: "❤️"
              }
            ].map((value, index) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-black mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
);
};

export default About;
