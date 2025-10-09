import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Menu, X, Search, User, Mail, Phone, MapPin, Award, Shield, Gem, Clock } from 'lucide-react';
import princess_cut from "../assets/princess_cut.png";
import cushion_cut from "../assets/cushion_cut.png";
import emrald_cut from "../assets/emrald_cut.png";
import asscher_cut from "../assets/asscher_cut.png";
import round_cut from "../assets/round_cut.png";
import baguette_cut from "../assets/baguette_cut.png";
import tapers_cut from "../assets/tapers_cut.png";
import marquise_cut from "../assets/marquise_cut.png";
import pear_cut from "../assets/pear_cut.png";
import main_diamond from "../assets/main_daimond.png";
import diamond_ring from "../assets/diamond_ring.png";
import diamond_main from "../assets/daimond_main.png";
import princess_cut_collection from "../assets/princess_cut_collection.png";
import diamond_ring_banner from "../assets/diamond_ring_banner.png";
import ring_banner from "../assets/ring_banner.png";

export default function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const heroSlides = [
    {
        // image: diamond_main,
        image:ring_banner,
      title: "THE FINEST DIAMONDS",
      subtitle: "Exceptional quality, unparalleled craftsmanship",
      cta: "Explore Collection"
    },
    {
      // image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=2400&q=80",
      image:"https://images.pexels.com/photos/15467658/pexels-photo-15467658.jpeg",
      title: "DIAMONDS OF DISTINCTION",
      subtitle: "Manufacturing excellence since 1991",
      cta: "Explore Collection"
    },
    // {
    //   // image: "https://images.pexels.com/photos/33140532/pexels-photo-33140532.jpeg",
    //   image:diamond_ring_banner,
    //   title: "PRINCESS CUT PERFECTION",
    //   subtitle: "Precision cut diamonds from our master craftsmen",
    //   cta: "View Princess Cuts"
    // },
    {
      
      // image:"https://images.pexels.com/photos/30541179/pexels-photo-30541179.jpeg",
      // image:diamond_ring,
      image:"https://images.pexels.com/photos/5370644/pexels-photo-5370644.jpeg",
      title: "GIA CERTIFIED EXCELLENCE",
      subtitle: "Authenticity and quality guaranteed",
      cta: "Certified Stones"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className=" bg-white text-gray-900">
  
      {/* Hero Slider */}
    <section className="relative h-screen overflow-hidden bg-gray-50">
  <AnimatePresence mode="wait">
    <motion.div
      key={currentSlide}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="absolute inset-0"
    >
      {/* Banner Image */}
      <motion.img 
        src={heroSlides[currentSlide].image}
        alt={heroSlides[currentSlide].title}
        className="w-full h-full object-cover"
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Text Positioned at Bottom */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center text-white px-6">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl text-nowrap md:text-4xl font-light mb-4 tracking-tight leading-tight"
        >
          {heroSlides[currentSlide].title}
        </motion.h1>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-base md:text-xl font-light mb-6 tracking-wide max-w-2xl mx-auto"
        >
          {heroSlides[currentSlide].subtitle}
        </motion.p>
        <motion.button
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white text-gray-900 px-8 py-3 text-sm tracking-widest hover:bg-gray-100  ease-in-out"
        >
          {heroSlides[currentSlide].cta}
        </motion.button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all flex items-center justify-center"
      >
        <ChevronLeft className="md:w-6 md:h-6 w-3 h-3 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all flex items-center justify-center"
      >
        <ChevronRight className="md:w-6 md:h-6 w-3 h-3 text-white" />
      </button>
    </motion.div>
  </AnimatePresence>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1 transition-all duration-300 ${
              idx === currentSlide ? 'bg-white w-12' : 'bg-white/50 w-8'
            }`}
          />
        ))}
      </div>
    </section>

      {/* Trust Indicators */}
      <section className="py-16 px-6 md:px-12 border-b">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Award, title: "ESTABLISHED 1991", desc: "Over 30 years of diamond expertise" },
            { icon: Shield, title: "CONSISTENCY", desc: "Reliable quality in every stone" },
            { icon: Clock, title: "ON TIME DELIVERY", desc: "Prompt and dependable service" },
            { icon: Gem, title: "AUTHENTICITY", desc: "GIA certified diamonds guaranteed" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-medium mb-2 tracking-widest uppercase">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section> 

      {/* Three Feature Cards */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/5] mb-6 overflow-hidden bg-gray-100">
              <img 
                src={princess_cut_collection}
                alt="Princess Cut Diamonds"
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300 ease-in-out"
              />
            </div>
            <h3 className="text-lg font-medium mb-2 tracking-wide">PRINCESS CUT COLLECTION</h3>
            <p className="text-sm text-gray-600 mb-4">Leading manufacturer of princess cut diamonds</p>
            <a href="#" className="text-sm underline hover:opacity-60 transition-opacity">Explore shapes</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/5] mb-6 overflow-hidden bg-gray-100">
              <img 
                src="https://images.pexels.com/photos/5442450/pexels-photo-5442450.jpeg"
                alt="Parcels and Layouts"
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300 ease-in-out"
              />
            </div>
            <h3 className="text-lg font-medium mb-2 tracking-wide">PARCELS & LAYOUTS</h3>
            <p className="text-sm text-gray-600 mb-4">Wide range of matched diamond sets</p>
            <a href="#" className="text-sm underline hover:opacity-60 transition-opacity">View parcels</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/5] mb-6 overflow-hidden bg-gray-100">
              <img 
                src="https://images.pexels.com/photos/11504786/pexels-photo-11504786.jpeg"
                alt="GIA Certified"
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300  ease-in-out"
              />
            </div>
            <h3 className="text-lg font-medium mb-2 tracking-wide">GIA CERTIFIED STONES</h3>
            <p className="text-sm text-gray-600 mb-4">Premium certified diamonds</p>
            <a href="#" className="text-sm underline hover:opacity-60 transition-opacity">View certified</a>
          </motion.div>
        </div>
      </section>

      {/* Wide Range Section */}
      <section className="relative h-[85vh] overflow-hidden">
        <img 
          // src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2400&q=80"
          src="https://images.pexels.com/photos/15777259/pexels-photo-15777259.jpeg"
          alt="Diamond Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-start px-6 md:px-20"
        >
          <div className="text-white max-w-2xl">
            <h2 className="text-5xl md:text-4xl font-light mb-6 tracking-tight leading-tight">
              WIDE RANGE OF PARCELS, PAIRS<br />& LAYOUTS
            </h2>
            <p className="text-lg md:text-xl font-light mb-8 leading-relaxed">
              Comprehensive selection for every requirement
            </p>
            <button className="border-2 border-white px-10 py-4 text-sm tracking-widest hover:bg-white hover:text-gray-900 transition-all">
              View Collection
            </button>
          </div>
        </motion.div>
      </section>

      {/* Diamond Shapes */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-md tracking-[0.1em] mb-12 uppercase text-gray-900"
          >
            DIAMOND SHAPES
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { name: 'Princess Cut', img:princess_cut },
              { name: 'Emerald Cut', img: emrald_cut },
              { name: 'Asscher Cut', img: asscher_cut },
              { name: 'Cushion Cut', img: cushion_cut }
            ].map((shape, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square mb-4 overflow-hidden bg-white">
                  <img 
                    src={shape.img}
                    alt={shape.name}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <h3 className="text-base   text-center">{shape.name}</h3>
              </motion.div>
            ))}
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-md tracking-[0.1em] mb-12 uppercase text-gray-900"
          >
            ADDITIONAL SHAPES
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: 'Round Brilliant', img: round_cut },
              { name: 'Baguettes', img:baguette_cut },
              { name: 'Marquise', img:  marquise_cut },
              { name: 'Tapers', img: tapers_cut },
              { name: 'Pear Shape', img: pear_cut }
            ].map((shape, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square mb-4 overflow-hidden bg-white">
                  <img 
                    src={shape.img}
                    alt={shape.name}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <h4 className="text-base   text-center">{shape.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Connected to Ours */}
      <section className="pb-20 pt-4 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-center mb-4 tracking-wide"
          >
            STORIES CONNECTED TO OURS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-gray-600 mb-14 max-w-2xl mx-auto"
          >
            Every diamond tells a story. Discover the moments our gems have been part of.
          </motion.p>

          {/* Stories Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: 'https://images.pexels.com/photos/29385557/pexels-photo-29385557.jpeg',
                title: 'A Promise Forever',
                story: 'When James chose a princess cut diamond for Emma, he knew it had to be perfect.',
                tag: 'Wedding'
              },
              {
                img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80',
                title: 'Three Generations',
                story: 'The Chen family has trusted Presto Trade for three generations.',
                tag: 'Family Heritage'
              },
              {
                img: 'https://images.pexels.com/photos/16491613/pexels-photo-16491613.jpeg',
                title: 'Milestone Moments',
                story: 'Celebrating 25 years together, Sarah surprised Michael with a stunning bracelet.',
                tag: 'Anniversary'
              }
            ].map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 cursor-pointer"
              >
                {/* Image */}
                <img
                  src={story.img}
                  alt={story.title}
                  className="w-full h-[450px] object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Text Inside Image */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block text-xs tracking-widest uppercase mb-2 opacity-80">{story.tag}</span>
                  <h3 className="text-xl font-light mb-2">{story.title}</h3>
                  <p className="text-sm text-gray-200 line-clamp-2">{story.story}</p>
                  <a
                    href="#"
                    className="mt-3 inline-block text-xs font-medium underline underline-offset-4 hover:opacity-75 transition-opacity"
                  >
                    Read Story →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a href="#" className="text-sm underline hover:opacity-60 transition-opacity">
              Read more stories
            </a>
          </motion.div>
        </div>
      </section>

      {/* Jewelry Collection */}
      <section className="pb-24 pt-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-4xl font-light mb-4 tracking-wide">FINE JEWELRY COLLECTION</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From elegant necklaces to stunning earrings, discover pieces that showcase our diamond expertise
            </p>
          </motion.div>

          {/* Featured Jewelry Category */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[70vh] overflow-hidden group cursor-pointer"
            >
              <img 
                // src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80"
                src="https://images.pexels.com/photos/8891953/pexels-photo-8891953.jpeg"
                alt="Necklaces"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
                <h3 className="text-4xl md:text-4xl font-light mb-4">Necklaces</h3>
                <p className="text-lg font-light mb-6">Timeless elegance for every occasion</p>
                <button className="border-2 border-white px-8 py-3 text-xs tracking-widest hover:bg-white hover:text-gray-900 transition-all">
                  Explore Collection
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[70vh] overflow-hidden group cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&q=80"
                alt="Earrings"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
                <h3 className="text-4xl md:text-4xl font-light mb-4">Earrings</h3>
                <p className="text-lg font-light mb-6">Brilliant designs that captivate</p>
                <button className="border-2 border-white px-8 py-3 text-xs tracking-widest hover:bg-white hover:text-gray-900 transition-all">
                  Explore Collection
                </button>
              </div>
            </motion.div>
          </div>

          {/* Jewelry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Tennis Bracelets', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80' },
              { name: 'Statement Rings', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80' },
              { name: 'Pendant Necklaces', img: 'https://images.pexels.com/photos/32797482/pexels-photo-32797482.jpeg' },
              { name: 'Stud Earrings', img: 'https://images.pexels.com/photos/5737290/pexels-photo-5737290.jpeg' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square mb-4 overflow-hidden bg-gray-100">
                  <img 
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-center text-sm tracking-wide font-light">{item.name}</h4>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="bg-gray-900 text-white px-10 py-4 text-sm tracking-widest hover:bg-gray-800 transition-all">
              View All Jewelry
            </button>
          </motion.div>
        </div>
      </section>

      {/* News & Events */}
      <section className="pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-light tracking-wide"
            >
              NEWS & EVENTS
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
              className="group cursor-pointer"
            >
                
              <div className="aspect-[16/9] mb-6 overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80"
                  alt="Trade Show"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-light mb-3 tracking-wide">Hong Kong International Diamond Show</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Visit us at Asia World Expo, Hall 5 - E 11
              </p>
              <a href="#" className="text-sm underline hover:opacity-60 transition-opacity">View details</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/9] mb-6 overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80"
                  alt="Gem & Pearl Show"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-light mb-3 tracking-wide">Gem & Pearl Show 2025</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Showcasing our latest collections and innovations
              </p>
              <a href="#" className="text-sm underline hover:opacity-60 transition-opacity">Learn more</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Us Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2400&q=80"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6"
        >
          <h2 className="text-4xl md:text-4xl font-light mb-6 tracking-tight">CONNECT WITH US</h2>
          <p className="text-lg md:text-xl font-light mb-8 max-w-2xl">
            Partner with a trusted diamond manufacturer since 1991
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="border-2 border-white px-8 py-4 text-sm tracking-widest hover:bg-white hover:text-gray-900 transition-all">
              Request Catalog
            </button>
            <button className="border-2 border-white px-8 py-4 text-sm tracking-widest hover:bg-white hover:text-gray-900 transition-all">
              Schedule Appointment
            </button>
          </div>
        </motion.div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light mb-4 tracking-wide"
          >
            Stay Informed
          </motion.h2>
          <p className="text-gray-600 mb-8">Subscribe to receive updates on new inventory and events</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input 
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 md:px-4 md:py-2 px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
            />
            <button 
              onClick={() => console.log('Subscribed:', email)}
              className="md:px-4 md:py-2 px-4 py-2 bg-gray-900 text-white text-sm tracking-widest hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>

      </section>

    </div>
  );
}