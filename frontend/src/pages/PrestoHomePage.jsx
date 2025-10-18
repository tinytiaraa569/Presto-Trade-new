import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Award,
  Shield,
  Gem,
} from "lucide-react";


import princess_cut from "../assets/princess_cut_gray.png";
import cushion_cut from "../assets/cushion_cut_gray.png";
import emrald_cut from "../assets/emrald_cut_gray.png";
import asscher_cut from "../assets/asscher_cut_gray.png";
import round_cut from "../assets/round_cut_gray.png";
import baguette_cut from "../assets/baguette_cut_gray.png";
import tapers_cut from "../assets/tapers_cut_gray.png";
import marquise_cut from "../assets/marquise_cut_gray.png";
import pear_cut from "../assets/pear_cut_gray.png";
import fine_jewelry from "../assets/fine_jewelry.png";
import fancy_diamonds from "../assets/fancy_diamonds.png";

export default function PrestoHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState("");

  const heroSlides = [
    {
      image: "https://images.pexels.com/photos/12507511/pexels-photo-12507511.jpeg",
      title: "THE FINEST DIAMONDS",
      subtitle: "Exceptional quality, unparalleled craftsmanship",
      cta: "Explore Collection",
    },
    {
      image: "https://images.pexels.com/photos/17261921/pexels-photo-17261921.jpeg",
      title: "DIAMONDS OF DISTINCTION",
      subtitle: "Manufacturing excellence since 1991",
      cta: "Explore Collection",
    },
    {
      image: "https://images.pexels.com/photos/29483946/pexels-photo-29483946.jpeg",
      title: "GIA CERTIFIED EXCELLENCE",
      subtitle: "Authenticity and quality guaranteed",
      cta: "Certified Stones",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="relative bg-white text-gray-900">
      {/* Hero Slider */}
      <section className="relative h-[680px] overflow-hidden bg-gray-50">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <motion.img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 7, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center text-white px-6 w-full max-w-4xl">
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-4xl font-light mb-4 tracking-wide"
              >
                {heroSlides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg md:text-2xl font-light mb-8 tracking-wide"
              >
                {heroSlides[currentSlide].subtitle}
              </motion.p>
              <motion.button
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white text-gray-900 px-12 py-4 text-sm tracking-widest hover:bg-gray-100 transition-all"
              >
                {heroSlides[currentSlide].cta}
              </motion.button>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all flex items-center justify-center rounded-full"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all flex items-center justify-center rounded-full"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 transition-all duration-300 ${
                idx === currentSlide ? "bg-white w-12" : "bg-white/50 w-8"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Two Main Category Cards */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-4xl font-light mb-4 uppercase tracking-wide">Discover Our World</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our exquisite collections of fine jewelry and certified diamonds
            </p>
          </motion.div>

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
                        // src="https://images.pexels.com/photos/12194350/pexels-photo-12194350.jpeg"
                        src="https://images.pexels.com/photos/7115127/pexels-photo-7115127.jpeg"
                        alt="Necklaces"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/10  transition-all duration-300" />
                      <div className="absolute inset-0 flex flex-col items-center justify-end text-white text-center py-6">
                        {/* <h3 className="text-4xl md:text-4xl font-light mb-4">
                          Fine Jewelry
                        </h3>
                        <p className="text-lg font-light mb-6">
                          Timeless pieces crafted with precision and elegance
                        </p> */}
                        <button className="border-2 border-white px-8 py-3 text-lg tracking-widest hover:bg-white hover:text-gray-900 transition-all">
                          Explore Jewelry
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
                        src="https://images.pexels.com/photos/30541177/pexels-photo-30541177.jpeg"
                        // src={fancy_diamonds}
                        alt="Earrings"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* <div className="absolute inset-0 bg-black/10  transition-all duration-300" /> */}
                      <div className="absolute inset-0 flex flex-col items-center justify-end text-white text-center py-6">
                        {/* <h3 className="text-4xl md:text-4xl font-light mb-4">
                          Diamonds
                        </h3>
                        <p className="text-lg font-light mb-6">
                          GIA certified stones with unmatched brilliance
                        </p> */}
                        <button className="border-2 border-white px-8 py-3 text-lg tracking-widest hover:bg-white hover:text-gray-900 transition-all">
                          Explore Diamonds
                        </button>
                      </div>
                    </motion.div>
                  </div>
        </div>
      </section>

      {/* Fine Jewelry Collection */}
      <FineJewelrySection />

      {/* Diamond Shapes */}
      <DiamondShapesSection />

      {/* Parallax Banner */}
      <ParallaxBanner />

      {/* Natural Diamonds Section */}
      <NaturalDiamondsSection />

      {/* Lab Grown Diamonds Section */}
      <LabGrownDiamondsSection />

      {/* Jewelry Collections Carousel */}
      <JewelryCollectionsCarousel />

      {/* Fancy Color Diamonds */}
      {/* <FancyColorDiamonds /> */}

      {/* Engagement Rings */}
      <EngagementRingsCarousel />

      {/* Final CTA Banner */}
      <FinalCTABanner />

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
          <p className="text-gray-600 mb-8">
            Subscribe to receive updates on new inventory and events
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
            />
            <button className="px-8 py-4 bg-gray-900 text-white text-sm tracking-widest hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Fine Jewelry Section Component
function FineJewelrySection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-4xl font-light mb-4 tracking-wide">
            FINE JEWELRY COLLECTION
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Exquisite pieces that showcase our diamond expertise and craftsmanship
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            {
              name: "Necklaces",
              img: "https://images.pexels.com/photos/15684103/pexels-photo-15684103.jpeg",
            },
            {
              name: "Earrings",
              img: "https://images.pexels.com/photos/6689396/pexels-photo-6689396.jpeg",
            },
            {
              name: "Bracelets",
              img: "https://images.pexels.com/photos/20429596/pexels-photo-20429596.jpeg",
            },
            {
              name: "Rings",
              img: "https://images.pexels.com/photos/30720972/pexels-photo-30720972.jpeg",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-gray-100 rounded-sm">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
              <h4 className="text-center text-lg tracking-wide font-light">{item.name}</h4>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="bg-gray-900 text-white px-12 py-4 text-sm tracking-widest hover:bg-gray-800 transition-all">
            View All Jewelry
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// Diamond Shapes Section
function DiamondShapesSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-md tracking-[0.15em] mb-4 uppercase text-gray-500">Diamond Shapes</h2>
          <h3 className="text-4xl md:text-4xl font-light mb-4 uppercase tracking-wide">Choose Your Perfect Cut</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From classic rounds to unique fancy shapes, each cut is precision-crafted
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { name: "Round Brilliant", img: round_cut },
            { name: "Princess Cut", img: princess_cut },
            { name: "Emerald Cut", img: emrald_cut },
            { name: "Cushion Cut", img: cushion_cut },
          ].map((shape, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-square mb-4 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={shape.img}
                  alt={shape.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-base text-center font-light">{shape.name}</h3>
            </motion.div>
          ))}
        </div>

        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-md tracking-[0.15em] mb-12 uppercase text-gray-500 text-center"
        >
          Fancy Shapes
        </motion.h4>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { name: "Asscher Cut", img: asscher_cut },
            { name: "Marquise", img: marquise_cut },
            { name: "Pear Shape", img: pear_cut },
            { name: "Baguettes", img: baguette_cut },
            { name: "Tapers", img: tapers_cut },
          ].map((shape, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-square mb-4 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={shape.img}
                  alt={shape.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h4 className="text-sm text-center font-light">{shape.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Parallax Banner
function ParallaxBanner() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0"
        // style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img
          src="https://images.pexels.com/photos/12585702/pexels-photo-12585702.jpeg"
          alt="Luxury Banner"
          className="w-full h-[120vh] object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/40 flex items-center justify-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left text-white px-6"
        >
          <h2 className="text-5xl md:text-7xl font-light mb-6">Luxury Beyond Time</h2>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Discover fine craftsmanship and timeless beauty in every piece
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Natural Diamonds Section
function NaturalDiamondsSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[625px] "
          >
            <img
              src="https://images.pexels.com/photos/31437865/pexels-photo-31437865.jpeg"
              alt="Natural Diamonds"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-light mb-2">Natural Diamonds</h3>
              <p className="text-lg font-light mb-4">Earth's rarest treasures</p>
              <button className="border-2 border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-gray-900 transition-all">
                Explore Collection
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-2">
            {[
              {
                title: "GIA Certified",
                img: "https://images.pexels.com/photos/19569249/pexels-photo-19569249.jpeg",
              },
              {
                title: "Premium Cuts",
                img: "https://images.pexels.com/photos/32988601/pexels-photo-32988601.jpeg",
              },
              {
                title: "Rare Colors",
                img: "https://images.pexels.com/photos/12026052/pexels-photo-12026052.jpeg",
              },
              {
                title: "Large Stones",
                img: "https://images.pexels.com/photos/15684127/pexels-photo-15684127.jpeg",
              },
            ].map((item, idx) => (
             <motion.div
  key={idx}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: idx * 0.1 }}
  className="group cursor-pointer"
>
  <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
    <img
      src={item.img}
      alt={item.title}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    />
    {/* Overlay for hover effect */}
    {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" /> */}
    
    {/* Title text inside image */}
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
      <h4 className="text-center text-white text-base font-light opacity-90 tracking-wide">
        {item.title}
      </h4>
    </div>
  </div>
</motion.div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Lab Grown Diamonds Section
function LabGrownDiamondsSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-2 order-2 md:order-1">
            {[
              {
                title: "Eco-Friendly",
                img: "https://images.pexels.com/photos/34225099/pexels-photo-34225099.jpeg",
              },
              {
                title: "Certified Quality",
                img: "https://images.pexels.com/photos/7093761/pexels-photo-7093761.jpeg",
              },
              {
                title: "Perfect Clarity",
                img: "https://images.pexels.com/photos/5737277/pexels-photo-5737277.jpeg",
              },
              {
                title: "Modern Choice",
                img: "https://images.pexels.com/photos/32988536/pexels-photo-32988536.jpeg",
              },
            ].map((item, idx) => (
              <motion.div
  key={idx}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: idx * 0.1 }}
  className="group cursor-pointer"
>
  <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
    <img
      src={item.img}
      alt={item.title}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    />
    {/* Overlay for hover effect */}
    {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" /> */}
    
    {/* Title text inside image */}
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
      <h4 className="text-center text-white text-base font-light opacity-90 tracking-wide">
        {item.title}
      </h4>
    </div>
  </div>
</motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[625px]  order-1 md:order-2"
          >
            <img
              src="https://images.pexels.com/photos/16219489/pexels-photo-16219489.jpeg"
              alt="Lab Grown Diamonds"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-light mb-2">Lab Grown Diamonds</h3>
              <p className="text-lg font-light mb-4">Sustainable brilliance</p>
              <button className="border-2 border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-gray-900 transition-all">
                Explore Collection
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Jewelry Collections Carousel
function JewelryCollectionsCarousel() {
  const containerRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const collections = [
    {
      title: "Princess Cut Collection",
      desc: "Signature shapes in all sizes",
      img: "https://images.pexels.com/photos/31437865/pexels-photo-31437865.jpeg",
      tag: "Specialty",
    },
    {
      title: "GIA Certified Stones",
      desc: "Authenticated diamonds with complete documentation",
      img: "https://images.pexels.com/photos/2876036/pexels-photo-2876036.jpeg",
      tag: "Certified",
    },
    {
      title: "Parcels & Layouts",
      desc: "Perfectly matched diamond sets",
      img: "https://images.pexels.com/photos/19569249/pexels-photo-19569249.jpeg",
      tag: "Collections",
    },
    {
      title: "Fancy Shapes",
      desc: "Unique cuts for distinctive designs",
      img: "https://images.pexels.com/photos/32988601/pexels-photo-32988601.jpeg",
      tag: "Exclusive",
    },
    {
      title: "Fine Jewelry",
      desc: "Ready-to-wear diamond pieces",
      img: "https://images.pexels.com/photos/12026052/pexels-photo-12026052.jpeg",
      tag: "Premium",
    },
    {
      title: "Engagement Collection",
      desc: "Perfect stones for life's special moments",
      img: "https://images.pexels.com/photos/15684127/pexels-photo-15684127.jpeg",
      tag: "Romance",
    },
    {
      title: "Eternity Rings",
      desc: "Celebrate infinite love with elegant designs",
      img: "https://images.pexels.com/photos/34225099/pexels-photo-34225099.jpeg",
      tag: "Classic",
    },
    {
      title: "Luxury Bracelets",
      desc: "Crafted with exquisite precision and timeless appeal",
      img: "https://images.pexels.com/photos/7093761/pexels-photo-7093761.jpeg",
      tag: "Elite",
    },
  ];

  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth - 5);
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-4xl uppercase font-light mb-4 tracking-wide">
            Explore Our Collections
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From princess cut masterpieces to certified excellence, discover diamonds crafted with precision and passion
          </p>
        </motion.div>

        <div className="relative">
          {showLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth md:px-12 no-scrollbar"
          >
            {collections.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="flex-shrink-0 w-80 group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-xl shadow-lg">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 text-xs font-medium rounded-full">
                    {item.tag}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-light mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200 mb-4 line-clamp-2">{item.desc}</p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                    >
                      Explore <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {showRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

// Fancy Color Diamonds
function FancyColorDiamonds() {
  const [activeColor, setActiveColor] = useState(0);

  const colors = [
    {
      name: "Pink Diamonds",
      color: "from-pink-200 to-pink-400",
      img: "https://images.pexels.com/photos/25403219/pexels-photo-25403219.jpeg",
      desc: "Rare and romantic hues",
    },
    {
      name: "Blue Diamonds",
      color: "from-blue-200 to-blue-400",
      img: "https://images.pexels.com/photos/27552423/pexels-photo-27552423.jpeg",
      desc: "Ocean-inspired elegance",
    },
    {
      name: "Yellow Diamonds",
      color: "from-yellow-200 to-yellow-400",
      img: "https://images.pexels.com/photos/9080072/pexels-photo-9080072.jpeg",
      desc: "Sunny brilliance",
    },
    {
      name: "Green Diamonds",
      color: "from-green-200 to-green-400",
      img: "https://images.pexels.com/photos/27686743/pexels-photo-27686743.jpeg",
      desc: "Nature's treasure",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-wide">
            Fancy Color Diamonds
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the extraordinary beauty of nature's rarest colored diamonds
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-xl overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeColor}
                src={colors[activeColor].img}
                alt={colors[activeColor].name}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-light mb-2">{colors[activeColor].name}</h3>
              <p className="text-lg font-light">{colors[activeColor].desc}</p>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center gap-4">
            {colors.map((color, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveColor(idx)}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeColor === idx
                    ? "bg-gradient-to-r " + color.color + " shadow-xl scale-105"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <h4 className={`text-xl font-light mb-2 ${activeColor === idx ? "text-white" : "text-gray-900"}`}>
                  {color.name}
                </h4>
                <p className={`text-sm ${activeColor === idx ? "text-white/90" : "text-gray-600"}`}>
                  {color.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="bg-gray-900 text-white px-12 py-4 text-sm tracking-widest hover:bg-gray-800 transition-all">
            View Fancy Colors
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// Engagement Rings Carousel
function EngagementRingsCarousel() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const rings = [
    {
      title: "Classic Solitaire",
      img: "https://images.pexels.com/photos/16219489/pexels-photo-16219489.jpeg",
      desc: "Timeless elegance",
    },
    {
      title: "Halo Setting",
      img: "https://images.pexels.com/photos/9080072/pexels-photo-9080072.jpeg",
      desc: "Surrounded by brilliance",
    },
    {
      title: "Three-Stone",
      img: "https://images.pexels.com/photos/27686743/pexels-photo-27686743.jpeg",
      desc: "Past, present, future",
    },
    {
      title: "Vintage Design",
      img: "https://images.pexels.com/photos/5737277/pexels-photo-5737277.jpeg",
      desc: "Romantic heritage",
    },
    {
      title: "Modern Twist",
      img: "https://images.pexels.com/photos/32988536/pexels-photo-32988536.jpeg",
      desc: "Contemporary sophistication",
    },
    {
      title: "Pave Band",
      img: "https://images.pexels.com/photos/30206324/pexels-photo-30206324.jpeg",
      desc: "Sparkling accents",
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(rings.length / itemsPerSlide);

  const next = () => setIndex((prev) => (prev + 1) % totalSlides);
  const prev = () => setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-4xl capitalize font-light mb-4 tracking-wide">
            Engagement Ring Collection
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Celebrate your love story with rings designed to capture timeless elegance and eternal commitment
          </p>
        </motion.div>

        <div className="relative h-[450px] flex items-center justify-center">
          {/* <AnimatePresence mode="wait"> */}
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex gap-6 w-full justify-center"
            >
              {rings
                .slice(index * itemsPerSlide, index * itemsPerSlide + itemsPerSlide)
                .map((ring, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -10 }}
                    className="flex-1 max-w-sm relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                  >
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={ring.img}
                        alt={ring.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-xl font-light mb-1">{ring.title}</h3>
                      <p className="text-sm text-gray-200">{ring.desc}</p>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          {/* </AnimatePresence> */}

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-xl rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-50 z-20 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-xl rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-50 z-20 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === index ? "bg-gray-900 w-8" : "bg-gray-300 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA Banner
function FinalCTABanner() {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <img
        src="https://images.pexels.com/photos/6098253/pexels-photo-6098253.jpeg"
        alt="Contact Us"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6"
      >
        <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
          CONNECT WITH US
        </h2>
        <p className="text-lg md:text-xl font-light mb-10 max-w-2xl">
          Partner with a trusted diamond manufacturer since 1991. Experience excellence in every stone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="border-2 border-white px-10 py-4 text-sm tracking-widest hover:bg-white hover:text-gray-900 transition-all">
            Request Catalog
          </button>
          <button className="bg-white text-gray-900 px-10 py-4 text-sm tracking-widest hover:bg-gray-100 transition-all">
            Schedule Appointment
          </button>
        </div>
      </motion.div>
    </section>
  );
}