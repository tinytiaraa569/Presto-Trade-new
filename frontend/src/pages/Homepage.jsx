import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  Search,
  User,
  Mail,
  Phone,
  MapPin,
  Award,
  Shield,
  Gem,
  Clock,
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
import main_diamond from "../assets/main_daimond.png";
import diamond_ring from "../assets/diamond_ring.png";
import diamond_main from "../assets/daimond_main.png";
import princess_cut_collection from "../assets/princess_cut_collection.png";
import diamond_ring_banner from "../assets/diamond_ring_banner.png";
import ring_banner from "../assets/ring_banner.png";

import { useRef } from "react";

const ExploreCollections = () => {
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

  // Scroll function
  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Track scroll position to toggle arrow visibility
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth - 5);
    };

    handleScroll(); // initialize
    container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="py-12 px-6 md:px-12 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl uppercase font-light mb-4">
            Explore Our Collections
          </h2>
          <p className="text-gray-600 font-normal max-w-2xl mx-auto">
            From princess cut masterpieces to certified excellence, discover
            diamonds crafted with precision and passion.
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative">
          {/* Left Chevron */}
          {showLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block bg-white/80 hover:bg-white shadow-md rounded-full p-2 transition-opacity duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Scrollable content */}
          <div
            ref={containerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto overflow-y-hidden scroll-smooth md:px-10 no-scrollbar"
          >
            {collections.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 w-72 md:w-80 group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-2xl shadow-md">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 text-xs font-medium rounded-md">
                    {item.tag}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-lg md:text-xl font-medium mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-200 mb-4 line-clamp-2">
                      {item.desc}
                    </p>
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

          {/* Right Chevron */}
          {showRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block bg-white/80 hover:bg-white shadow-md rounded-full p-2 transition-opacity duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>

      {/* Hide scrollbar for all browsers */}
      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }
      `}</style>
    </section>
  );
};

const EngagementRingsCarousel = () => {
  const [index, setIndex] = useState(0);

  const rings = [
    {
      title: "Vintage Design",
      img: "https://images.pexels.com/photos/5737277/pexels-photo-5737277.jpeg",
    },
    {
      title: "Modern Twist",
      img: "https://images.pexels.com/photos/32988536/pexels-photo-32988536.jpeg",
    },
    {
      title: "Classic Solitaire",
      img: "https://images.pexels.com/photos/16219489/pexels-photo-16219489.jpeg",
    },
    {
      title: "Halo Setting",
      img: "https://images.pexels.com/photos/9080072/pexels-photo-9080072.jpeg",
    },
    {
      title: "Three-Stone",
      img: "https://images.pexels.com/photos/27686743/pexels-photo-27686743.jpeg",
    },
    {
      title: "Pave Band",
      img: "https://images.pexels.com/photos/30206324/pexels-photo-30206324.jpeg",
    },
  ];

  // Detect if mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerSlide = isMobile ? 1 : 2;
  const totalSlides = Math.ceil(rings.length / itemsPerSlide);

  const next = () => setIndex((prev) => (prev + 1) % totalSlides);
  const prev = () => setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  // Auto slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <section className="py-12 h-[600px] md:h-[550px] px-6 md:px-12 relative bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-light uppercase mb-4">
          Engagement Ring Collection
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Explore our exquisite engagement rings, each designed to capture
          timeless elegance.
        </p>
      </div>

      <div className="w-full h-[320px] relative flex items-center justify-center">
        {/* <AnimatePresence mode="wait"> */}
        <motion.div
          key={index}
          className={`flex gap-6 absolute top-0 left-0 w-full h-full ${
            isMobile ? "justify-center" : "justify-between"
          }`}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
        >
          {rings
            .slice(index * itemsPerSlide, index * itemsPerSlide + itemsPerSlide)
            .map((ring, idx) => (
              <motion.div
                key={idx}
                className="flex-1 relative overflow-hidden shadow-lg cursor-pointer rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <img
                  src={ring.img}
                  alt={ring.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Overlay Box */}
                <motion.div
                  className="absolute bottom-4 left-4 bg-black/60 p-3 rounded-md text-white w-max"
                  initial={{ y: 30, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-lg font-semibold">{ring.title}</h3>
                </motion.div>
              </motion.div>
            ))}
        </motion.div>
        {/* </AnimatePresence> */}

        {/* Navigation buttons */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-50 z-20"
        >
          &lt;
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-50 z-20"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [email, setEmail] = useState("");
  const [hideBanner, setHideBanner] = useState(false);

  useEffect(() => {
    const target = document.getElementById("diamond-shapes");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If user has reached the section (scrolls to or past it)
        if (entry.boundingClientRect.top <= 0 || entry.isIntersecting) {
          setHideBanner(true);
        } else {
          setHideBanner(false);
        }
      },
      { threshold: 0 } // triggers right when the top of the section hits viewport
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      // image:ring_banner,
      image:
        "https://images.pexels.com/photos/12507511/pexels-photo-12507511.jpeg",
      title: "THE FINEST DIAMONDS",
      subtitle: "Exceptional quality, unparalleled craftsmanship",
      cta: "Explore Collection",
    },
    {
      image:
        "https://images.pexels.com/photos/17261921/pexels-photo-17261921.jpeg",
      // image:"https://images.pexels.com/photos/15467658/pexels-photo-15467658.jpeg",
      title: "DIAMONDS OF DISTINCTION",
      subtitle: "Manufacturing excellence since 1991",
      cta: "Explore Collection",
    },
    // {
    //   // image: "https://images.pexels.com/photos/33140532/pexels-photo-33140532.jpeg",
    //   image:diamond_ring_banner,
    //   title: "PRINCESS CUT PERFECTION",
    //   subtitle: "Precision cut diamonds from our master craftsmen",
    //   cta: "View Princess Cuts"
    // },
    {
      image:
        "https://images.pexels.com/photos/29483946/pexels-photo-29483946.jpeg",
      // image:diamond_ring,
      // image:"https://images.pexels.com/photos/5370644/pexels-photo-5370644.jpeg",
      title: "GIA CERTIFIED EXCELLENCE",
      subtitle: "Authenticity and quality guaranteed",
      cta: "Certified Stones",
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );

  return (
    <div className="relative bg-white text-gray-900">
      {/* Hero Slider */}
      <section className="relative h-[750px] overflow-hidden bg-gray-50">
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
                {/* {heroSlides[currentSlide].title} */}
              </motion.h1>
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-base md:text-xl font-light mb-6 tracking-wide max-w-2xl mx-auto"
              >
                {/* {heroSlides[currentSlide].subtitle} */}
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
                idx === currentSlide ? "bg-white w-12" : "bg-white/50 w-8"
              }`}
            />
          ))}
        </div>
      </section>
      {/* Trust Indicators */}
      {/* <section className="py-8 px-6 md:px-12 border-b">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            {
              icon: Award,
              title: "ESTABLISHED 1991",
              desc: "Over 30 years of diamond expertise",
            },
            {
              icon: Shield,
              title: "CONSISTENCY",
              desc: "Reliable quality in every stone",
            },
            {
              icon: Clock,
              title: "ON TIME DELIVERY",
              desc: "Prompt and dependable service",
            },
            {
              icon: Gem,
              title: "AUTHENTICITY",
              desc: "GIA certified diamonds guaranteed",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex justify-start items-start gap-4"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <div className="justify-end text-left">
                <h3 className="text-sm font-medium mb-2 tracking-widest uppercase">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}
      {/* Three Feature Cards */}
      {/* <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl uppercase font-light mb-4">Explore Our Collections</h2>
            <p className="text-gray-600 font-normal max-w-2xl mx-auto">
              From princess cut masterpieces to certified excellence, discover diamonds crafted with precision and passion
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden">
              <motion.div 
                className="flex gap-2 md:gap-6"
                animate={{ x: [0, -20, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {[
                  {
                    title: "Princess Cut Collection",
                    desc: "Signature shapes in all sizes",
                    img: "https://images.pexels.com/photos/5442450/pexels-photo-5442450.jpeg",
                    tag: "Specialty"
                  },
                  {
                    title: "GIA Certified Stones",
                    desc: "Authenticated diamonds with complete documentation",
                    img: "https://images.pexels.com/photos/11504786/pexels-photo-11504786.jpeg",
                    tag: "Certified"
                  },
                  {
                    title: "Parcels & Layouts",
                    desc: "Perfectly matched diamond sets",
                    img: "https://images.pexels.com/photos/8891953/pexels-photo-8891953.jpeg",
                    tag: "Collections"
                  },
                  {
                    title: "Fancy Shapes",
                    desc: "Unique cuts for distinctive designs",
                    img: "https://images.pexels.com/photos/15777259/pexels-photo-15777259.jpeg",
                    tag: "Exclusive"
                  },
                  {
                    title: "Fine Jewelry",
                    desc: "Ready-to-wear diamond pieces",
                    img: "https://images.pexels.com/photos/29385557/pexels-photo-29385557.jpeg",
                    tag: "Premium"
                  },
                  {
                    title: "Engagement Collection",
                    desc: "Perfect stones for life's special moments",
                    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
                    tag: "Romance"
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group cursor-pointer flex-shrink-0 w-80"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                      <img 
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                      
             
                      <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 text-xs font-medium">
                        {item.tag}
                      </div>

                 
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-medium mb-2 group-hover:text-gray-100 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-200 mb-4 line-clamp-2">
                          {item.desc}
                        </p>
                        <a href="#" className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                          Explore <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
               <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white shadow-lg hover:bg-gray-50 transition-colors flex items-center justify-center z-10">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white shadow-lg hover:bg-gray-50 transition-colors flex items-center justify-center z-10">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section> */}
      <ExploreCollections />
      {/* Jewelry Collection */}
      <section id="jewelry-collection" className="pb-24 pt-10 px-6 md:px-12">
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
            <p className="text-gray-600 max-w-2xl mx-auto">
              From elegant necklaces to stunning earrings, discover pieces that
              showcase our diamond expertise
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
                src="https://images.pexels.com/photos/9393224/pexels-photo-9393224.jpeg"
                alt="Necklaces"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
                <h3 className="text-4xl md:text-4xl font-light mb-4">
                  Necklaces
                </h3>
                <p className="text-lg font-light mb-6">
                  Timeless elegance for every occasion
                </p>
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
                src="https://images.pexels.com/photos/6689396/pexels-photo-6689396.jpeg"
                alt="Earrings"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
                <h3 className="text-4xl md:text-4xl font-light mb-4">
                  Earrings
                </h3>
                <p className="text-lg font-light mb-6">
                  Brilliant designs that captivate
                </p>
                <button className="border-2 border-white px-8 py-3 text-xs tracking-widest hover:bg-white hover:text-gray-900 transition-all">
                  Explore Collection
                </button>
              </div>
            </motion.div>
          </div>

          {/* Jewelry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Tennis Bracelets",
                img: "https://images.pexels.com/photos/20429596/pexels-photo-20429596.jpeg",
              },
              {
                name: "Statement Rings",
                img: "https://images.pexels.com/photos/30720972/pexels-photo-30720972.jpeg",
              },
              {
                name: "Pendant Necklaces",
                img: "https://images.pexels.com/photos/15684103/pexels-photo-15684103.jpeg",
              },
              {
                name: "Stud Earrings",
                img: "https://images.pexels.com/photos/32450646/pexels-photo-32450646.jpeg",
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
                <div className="aspect-[4/5] mb-4 overflow-hidden bg-gray-100">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-125 ease-in-out transition-transform duration-300"
                  />
                </div>
                <h4 className="text-center text-md tracking-wide font-normal">
                  {item.name}
                </h4>
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

      {/* Sticky Scroll Banner */}
      {/* --- In-between fixed banner section --- */}
      {/* <section className="relative h-[200vh] bg-white"> */}
      {/* Fixed / sticky banner inside */}
      {/* <div className="sticky top-0 h-screen overflow-hidden"> */}
      <div
        className={`sticky top-0 h-screen overflow-hidden transition-opacity duration-700 ${
          hideBanner ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <img
          // src="https://images.pexels.com/photos/25403219/pexels-photo-25403219.jpeg"
          src="https://images.pexels.com/photos/9900047/pexels-photo-9900047.jpeg"
          alt="Mid-page Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h2 className="text-5xl md:text-6xl font-light mb-4">
              Luxury Beyond Time
            </h2>
            <p className="text-lg font-light max-w-2xl mx-auto">
              Discover fine craftsmanship and timeless beauty in every piece.
            </p>
          </div>
        </div>
      </div>

      {/* Content that scrolls up and hides the banner */}

      <EngagementRingsCarousel />

      {/* </section> */}

      {/* Wide Range Section */}
      <section className="relative  z-10 h-[60vh] overflow-hidden">
        <img
          // src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=2400&q=80"
          src="https://images.pexels.com/photos/27552423/pexels-photo-27552423.jpeg"
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
              WIDE RANGE OF PARCELS, PAIRS
              <br />& LAYOUTS
            </h2>
            <p className="text-lg md:text-xl font-light mb-8 leading-relaxed">
              Comprehensive selection for every requirement
            </p>
            <button
              id="diamond-shapes"
              className="border-2 border-white px-10 py-4 text-sm tracking-widest hover:bg-white hover:text-gray-900 transition-all"
            >
              View Collection
            </button>
          </div>
        </motion.div>
      </section>
      {/* Diamond Shapes */}
      <section className="py-24  z-10 px-6 md:px-12 bg-gray-50">
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
              { name: "Round Brilliant", img: round_cut },
              { name: "Baguettes", img: baguette_cut },
              { name: "Princess Cut", img: princess_cut },
              { name: "Marquise", img: marquise_cut },
            ].map((shape, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] mb-4 overflow-hidden bg-white">
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
              { name: "Emerald Cut", img: emrald_cut },
              { name: "Tapers", img: tapers_cut },
              { name: "Asscher Cut", img: asscher_cut },
              { name: "Pear Shape", img: pear_cut },
              { name: "Cushion Cut", img: cushion_cut },
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
      <section className="pb-20  z-10  pt-4 px-6 md:px-12 bg-gray-50">
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
            Every diamond tells a story. Discover the moments our gems have been
            part of.
          </motion.p>

          {/* Stories Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.pexels.com/photos/25396063/pexels-photo-25396063.jpeg",
                title: "A Promise Forever",
                story:
                  "When James chose a princess cut diamond for Emma, he knew it had to be perfect.",
                tag: "Wedding",
              },
              {
                img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
                title: "Three Generations",
                story:
                  "The Chen family has trusted Presto Trade for three generations.",
                tag: "Family Heritage",
              },
              {
                img: "https://images.pexels.com/photos/33449194/pexels-photo-33449194.jpeg",
                title: "Milestone Moments",
                story:
                  "Celebrating 25 years together, Sarah surprised Michael with a stunning bracelet.",
                tag: "Anniversary",
              },
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
                  <span className="inline-block text-xs tracking-widest uppercase mb-2 opacity-80">
                    {story.tag}
                  </span>
                  <h3 className="text-xl font-light mb-2">{story.title}</h3>
                  <p className="text-sm text-gray-200 line-clamp-2">
                    {story.story}
                  </p>
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
            <a
              href="#"
              className="text-sm underline hover:opacity-60 transition-opacity"
            >
              Read more stories
            </a>
          </motion.div>
        </div>
      </section>

      {/* News & Events */}
      {/* <section className="pb-20 px-6 md:px-12">
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
      </section> */}
      {/* Meet Us Section */}
      <section className="relative z-10 h-[70vh] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6098253/pexels-photo-6098253.jpeg"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6"
        >
          <h2 className="text-4xl md:text-4xl font-light mb-6 tracking-tight">
            CONNECT WITH US
          </h2>
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
      <section className="py-20  z-10 px-6 md:px-12 bg-gray-50">
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
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 md:px-4 md:py-2 px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
            />
            <button
              onClick={() => console.log("Subscribed:", email)}
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
