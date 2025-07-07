
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';


const socialLinks = [
  {
    src: "/lovable-uploads/Facebook.svg",
    alt: "Facebook",
    href: "#",
    color: "hover:bg-blue-600",
  },
  {
    src: "/lovable-uploads/instagram.svg",
    alt: "Instagram",
    href: "https://www.instagram.com/homade.kerala?igsh=MW00aGQ4czMwems4Mw==",
    color: "hover:bg-pink-600",
  },
  {
    src: "/lovable-uploads/twitter.svg",
    alt: "Twitter / X",
    href: "#",
    color: "hover:bg-black",
  },
];


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/30 via-yellow-50/20 to-white leaf-pattern">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 kerala-pattern opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mt-10 font-bold text-black mb-6 animate-fade-up">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Connect with the heart of Kerala. Send us a message and experience our warm hospitality.
            </p>
            {/* Kerala-inspired decorative line */}
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-primary via-green-600 to-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form Card */}
            <div className="animate-slide-in-left">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-primary relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-500/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-black mb-2">Send us a Message</h2>
                  <p className="text-gray-600 mb-8">Share your thoughts, feedback, or inquiries with us</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full border-2 border-gray-200 focus:border-primary focus:ring-primary rounded-xl py-3 transition-all duration-300 hover:border-gray-300"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full border-2 border-gray-200 focus:border-primary focus:ring-primary rounded-xl py-3 transition-all duration-300 hover:border-gray-300"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full border-2 border-gray-200 focus:border-primary focus:ring-primary rounded-xl py-3 transition-all duration-300 hover:border-gray-300"
                        placeholder="What can we help you with?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full border-2 border-gray-200 focus:border-primary focus:ring-primary rounded-xl py-3 resize-none transition-all duration-300 hover:border-gray-300"
                        placeholder="Tell us about your inquiry..."
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90 text-black font-bold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
                    >
                      <Send className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold text-black mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-yellow-500 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Mail className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Email Us</h3>
                    <p className="text-gray-600 hover:text-primary transition-colors duration-300 cursor-pointer"><a href="https://mail.google.com/mail/?view=cm&to=homadekerala@gmail.com&su">homadekerala@gmail.com</a></p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-500 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Call Us</h3>
                    <p className="text-gray-600 hover:text-green-600 transition-colors duration-300 cursor-pointer">+91 9946411243</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</p>
                    <p className="text-gray-600 text-sm mt-1 text-green-600">Kerala time (IST)</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12 p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl">
                <h3 className="font-bold text-primary mb-6 text-xl">Connect with Kerala Homade</h3>
                 {/* Social Media Icons */}
                <div className="mt-8">
                  <h5 className="text-sm font-bold text-primary mb-4">Follow Our Startup Journey</h5>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-300 ${social.color} hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={social.src} alt={social.alt} className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
