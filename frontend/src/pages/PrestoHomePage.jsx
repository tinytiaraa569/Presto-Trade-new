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
  // Link,
} from "lucide-react";

import rings from "../assets/jewelry/rings.webp";
import earrings from "../assets/jewelry/earrings.webp";
import bracelet from "../assets/jewelry/bracelet.webp";
import necklace from "../assets/jewelry/necklace.webp";

import classic from "../assets/home_diamonds/classic_ring.png";
import halo from "../assets/home_diamonds/halo_ring.png";
import three_stone from "../assets/home_diamonds/three_stone_ring.png";
import vintage from "../assets/home_diamonds/vintage_ring.png";
import modern from "../assets/home_diamonds/modern_ring.png";
import pave from "../assets/home_diamonds/pave_ring.png";


import oval_cut from "../assets/home_diamonds/oval.png";
import lozenge_cut from "../assets/home_diamonds/lozenge.png";
import princess_cut from "../assets/home_diamonds/princess.png";
import cushion_cut from "../assets/home_diamonds/cushion.png";
import emrald_cut from "../assets/home_diamonds/emerald.png";
import asscher_cut from "../assets/home_diamonds/asscher.png";
import round_cut from "../assets/home_diamonds/round.png";
import baguette_cut from "../assets/home_diamonds/bagutte.png";
import tapers_cut from "../assets/home_diamonds/tapers.png";
import marquise_cut from "../assets/home_diamonds/marquise.png";
import pear_cut from "../assets/home_diamonds/pear.png";
import fine_jewelry from "../assets/home_diamonds/princess.png";
import fancy_diamonds from "../assets/home_diamonds/princess.png";
import { Link } from "react-router-dom";

export default function PrestoHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState("");

  const heroSlides = [
    {
      // image: "https://images.pexels.com/photos/12507511/pexels-photo-12507511.jpeg",
      image:"https://images.pexels.com/photos/14056405/pexels-photo-14056405.jpeg",
      title: "THE FINEST DIAMONDS",
      subtitle: "Exceptional quality, unparalleled craftsmanship",
      cta: "Explore Collection",
    },
    {
      // image: "https://images.pexels.com/photos/17261921/pexels-photo-17261921.jpeg",
      // image:"https://images.pexels.com/photos/29245549/pexels-photo-29245549.jpeg",
      image:"https://images.pexels.com/photos/32652449/pexels-photo-32652449.jpeg",
      title: "DIAMONDS OF DISTINCTION",
      subtitle: "Manufacturing excellence since 1991",
      cta: "Explore Collection",
    },
    {
      // image: "https://images.pexels.com/photos/29483946/pexels-photo-29483946.jpeg",
      image:"https://images.pexels.com/photos/20796886/pexels-photo-20796886.jpeg",
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
      <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-gray-50">
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
    <section className="py-16 px-6 md:px-20 bg-white">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    <h2 className="text-3xl text-royalblue md:text-4xl font-light mb-4 uppercase tracking-wide">
      Discover Our World
    </h2>
    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
      Explore our exquisite collections of fine jewelry and certified diamonds
    </p>
  </motion.div>

  <div className="grid md:grid-cols-2 gap-6 mb-12">
    {/* Fine Jewelry */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative h-[70vh] overflow-hidden group cursor-pointer"
    >
      <img
        // src="https://images.pexels.com/photos/13037618/pexels-photo-13037618.jpeg"
        src="https://images.pexels.com/photos/29371787/pexels-photo-29371787.jpeg"
        alt="Necklaces"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      {/* bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-all duration-300" />

      <div className="absolute inset-0 flex flex-col items-center justify-end text-white text-center py-6">
        <h3 className="text-4xl md:text-4xl font-light mb-4">
          Fine Jewelry
        </h3>
        <p className="text-lg font-light mb-6">
          Timeless pieces crafted with precision and elegance
        </p>
       
         <Link
  to="/jewelry"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="inline-block border-2 border-white px-8 py-3 text-lg tracking-widest text-white hover:bg-white hover:text-gray-900 transition-all"
>
  Explore Jewelry
</Link>

      </div>
    </motion.div>

    {/* Diamonds */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative h-[70vh] overflow-hidden group cursor-pointer"
      >
      <img
      src="https://images.pexels.com/photos/22475821/pexels-photo-22475821.jpeg"
        // src="https://images.pexels.com/photos/15684102/pexels-photo-15684102.jpeg"
        alt="Earrings"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      {/* bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-all duration-300" />

      <div className="absolute inset-0 flex flex-col items-center justify-end text-white text-center py-6">
        <h3 className="text-4xl md:text-4xl font-light mb-4">
          Diamonds
        </h3>
        <p className="text-lg font-light mb-6">
          GIA certified stones with unmatched brilliance
        </p>
          <Link
  to="/jewelry"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}className="border-2 border-white px-8 py-3 text-lg tracking-widest hover:bg-white hover:text-gray-900 transition-all">
          Explore Diamonds
        </Link>
      </div>
    </motion.div>
  </div>
</section>


      {/* Fine Jewelry Collection */}
      <FineJewelrySection />

      {/* Diamond Shapes */}
      <DiamondShapesSection />

      {/* Parallax Banner */}
      <ParallaxBanner />
     
           <section id="jewelry-collection" className=" py-20 px-6 md:px-20 bg-yellow-50/20">
             {/* <div className="max-w-7xl mx-auto"> */}
              <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center mb-16"
>
  <h2 className="text-3xl text-nowrap md:text-4xl text-royalblue font-light mb-4 tracking-wide">
    DIAMONDS COLLECTION
  </h2>
  <p className="text-gray-600 max-w-2xl mx-auto">
    Explore our natural and lab-grown diamonds, from rare melee stones to large, certified beauties.
  </p>
</motion.div>

     
               {/* Featured Jewelry Category */}


<div className="grid md:grid-cols-2 gap-6 mb-12">

  {/* Natural Diamonds */}
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <Link
      to="/diamonds"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="relative block h-[60vh] overflow-hidden group cursor-pointer"
    >
      <img
        src="https://images.pexels.com/photos/30721001/pexels-photo-30721001.jpeg"
        alt="Natural Diamonds"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />

      <div className="absolute inset-0 flex flex-col items-center justify-end mb-10 text-white text-center px-6">
        <h3 className="text-4xl md:text-4xl font-light mb-4">Natural Diamonds</h3>
        <p className="text-lg font-light mb-6">
          Earth's rarest treasures with unmatched brilliance
        </p>

        <button className="relative overflow-hidden border-2 border-white text-white px-8 py-3 text-xs tracking-widest transition-all duration-300
          before:absolute before:inset-0 before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 before:ease-out
          hover:before:scale-x-100 hover:text-gray-900">
          <span className="relative z-10">Explore Collection</span>
        </button>
      </div>
    </Link>
  </motion.div>

  {/* Lab Grown Diamonds */}
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <Link
      to="/diamonds"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="relative block h-[60vh] overflow-hidden group cursor-pointer"
    >
      <img
        src="https://images.pexels.com/photos/14353725/pexels-photo-14353725.jpeg"
        alt="Lab Grown Diamonds"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />

      <div className="absolute inset-0 flex flex-col items-center justify-end mb-10 text-white text-center px-6">
        <h3 className="text-4xl md:text-4xl font-light mb-4">Lab Grown Diamonds</h3>
        <p className="text-lg font-light mb-6">
          Sustainable brilliance with certified quality
        </p>

        <button className="relative overflow-hidden border-2 border-white text-white px-8 py-3 text-xs tracking-widest transition-all duration-300
          before:absolute before:inset-0 before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-500 before:ease-out
          hover:before:scale-x-100 hover:text-gray-900">
          <span className="relative z-10">Explore Collection</span>
        </button>
      </div>
    </Link>
  </motion.div>
</div>

     
               {/* Jewelry Grid */}
               {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
      */}
               {/* <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="text-center mt-12"
               >
                 <button className="bg-gray-900 text-white px-10 py-4 text-sm tracking-widest hover:bg-gray-800 transition-all">
                   View All Jewelry
                 </button>
               </motion.div> */}
             {/* </div> */}
           </section>

      {/* Natural Diamonds Section */}
      {/* <NaturalDiamondsSection /> */}

      {/* Lab Grown Diamonds Section */}
      {/* <LabGrownDiamondsSection /> */}

      {/* Jewelry Collections Carousel */}
      <JewelryCollectionsCarousel />

      {/* Fancy Color Diamonds */}
      {/* <FancyColorDiamonds /> */}

      {/* Engagement Rings */}
      <EngagementRingsSection />

      {/* Final CTA Banner */}
      <FinalCTABanner />

      {/* Newsletter */}
      <section className="py-20 px-6 md:px-20 bg-amber-50/20">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-royalblue font-light mb-4 tracking-wide"
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
              className="flex-1 px-6 py-4 border border-blue-900/60 focus:outline-none focus:border-blue-900 transition-colors"
            />
            <button className="px-4 md:px-8 py-4 bg-blue-900/90 text-white text-sm tracking-widest hover:bg-blue-800 transition-colors">
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
    <section className=" py-10 md:py-16 px-6  md:px-0 bg-amber-50/30">
      {/* <div className="max-w-7xl mx-auto"> */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-royalblue font-light mb-4 tracking-wide">
            FINE JEWELRY COLLECTION
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Exquisite pieces that showcase our diamond expertise and craftsmanship
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 mb-12">
          {[
            {
              name: "Necklaces",
              // img: "https://images.pexels.com/photos/15684103/pexels-photo-15684103.jpeg",
              img:necklace
            },
            {
              name: "Earrings",
              // img: "https://images.pexels.com/photos/6689396/pexels-photo-6689396.jpeg",
              img:earrings
            },
            {
              name: "Bracelets",
              // img: "https://images.pexels.com/photos/20429596/pexels-photo-20429596.jpeg",
              img:bracelet
            },
            {
              name: "Rings",
              // img: "https://images.pexels.com/photos/30720972/pexels-photo-30720972.jpeg",
              img:rings
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
  <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-sm">
    <img
      src={item.img}
      alt={item.name}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    />

    {/* Bottom gradient for readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 transition-opacity duration-300" />

    {/* Text overlay appears on hover */}
    <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <h4 className="text-white text-lg md:text-xl font-light mb-6 tracking-wide text-center drop-shadow-md">
        {item.name}
      </h4>
    </div>
  </div>
</motion.div>

          ))}
        </div>

       <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center"
>
<Link
  to="/jewelry"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="relative inline-block overflow-hidden border-2 border-royalblue text-royalblue px-10 py-4 text-md tracking-widest transition-all duration-300
  before:absolute before:inset-0 before:bg-royalblue before:scale-x-0 before:origin-left before:transition-transform before:duration-500 before:ease-out
  hover:before:scale-x-100 hover:text-white"
>
  <span className="relative z-10">View All Jewelry</span>
</Link>
</motion.div>

      {/* </div> */}
    </section>
  );
}

// Diamond Shapes Section
function DiamondShapesSection() {
  return (
    <section className="py-20 px-6 md:px-0 bg-white">
      {/* <div className="max-w-7xl mx-auto"> */}
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
           <h2 className="text-3xl md:text-4xl uppercase text-yellow-600 font-light mb-4 tracking-wide">
            Diamond Shapes
          </h2>
          {/* <h2 className="text-md tracking-[0.15em] mb-4 uppercase text-gray-500">Diamond Shapes</h2> */}
          {/* <h3 className="text-4xl md:text-4xl font-light mb-4 uppercase tracking-wide">Choose Your Perfect Cut</h3> */}
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From classic rounds to unique fancy shapes, each cut is precision-crafted
          </p>
        </motion.div>

        {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-16 px-12">
          {[
            { name: "Princess Cut", img: princess_cut },
            { name: "Emerald Cut", img: emrald_cut },
            {name :"Lozenge Cut", img :lozenge_cut},
            { name: "Round Brilliant", img: round_cut },
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
              <div className="mb-4 overflow-hidden    transition-shadow duration-300">
                <img
                  src={shape.img}
                  alt={shape.name}
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
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
        </motion.h4> */}

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:px-12">
          {[
            { name: "Asscher", img: asscher_cut },
            { name: "Marquise", img: marquise_cut },
            { name: "Pear", img: pear_cut },
            { name: "Tapers", img: tapers_cut },
            {name :"Oval",img:oval_cut},
            { name: "Baguettes", img: baguette_cut },
          ].map((shape, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className=" mb-4 overflow-hidden  group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={shape.img}
                  alt={shape.name}
                  className="w-full h-full  object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h4 className="text-md uppercase text-center font-light">{shape.name}</h4>
            </motion.div>
          ))}
        </div>
      {/* </div> */}
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
    <section className="py-20 px-6 md:px-20 bg-white">
      {/* <div className="max-w-7xl mx-auto"> */}
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
      {/* </div> */}
    </section>
  );
}

// Lab Grown Diamonds Section
function LabGrownDiamondsSection() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      {/* <div className="max-w-7xl mx-auto"> */}
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
      {/* </div> */}
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
    <section className="py-10 md:py-20 px-6 md:px-20 bg-white">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-royalblue uppercase font-light mb-4 tracking-wide">
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
            className="flex gap-3 md:gap-6 overflow-x-auto overflow-y-hidden scroll-smooth md:px-20 no-scrollbar"
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
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-xl ">
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
    <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-gray-50 to-white">
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

 function EngagementRingsSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15, // stagger for each ring
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const rings = [
    { title: "Classic Solitaire", img: classic, desc: "Timeless elegance" },
    { title: "Halo Setting", img: halo, desc: "Surrounded by brilliance" },
    { title: "Three-Stone", img: three_stone, desc: "Past, present, future" },
    { title: "Vintage Design", img: vintage, desc: "Romantic heritage" },
    { title: "Modern Twist", img: modern, desc: "Contemporary sophistication" },
    { title: "Pave Band", img: pave, desc: "Sparkling accents" },
  ];

  return (
    <motion.section
      className="py-20 px-6 md:px-20 bg-yellow-50/30"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl text-royalblue capitalize font-light mb-4 tracking-wide"
        >
          Engagement Ring Collection
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-gray-600 text-lg max-w-3xl mx-auto"
        >
          Celebrate your love story with rings designed to capture timeless
          elegance and eternal commitment.
        </motion.p>
      </div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-2"
      >
        {rings.map((ring, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="relative overflow-hidden shadow-lg border bg-gradient-to-tr from-red-50 via-white to-blue-50 group cursor-pointer"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={ring.img}
                alt={ring.title}
                className="w-fit h-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0  transition-opacity duration-700"></div>

            {/* Text */}
            <div className="absolute bottom-2 md:bottom-6 left-6 right-6 text-black text-center transition-colors duration-500">
              <h3 className="text-md md:text-xl text-nowrap uppercase font-light mb-1">
                {ring.title}
              </h3>
              <p className="text-xs md:text-sm text-nowrap text-gray-900">{ring.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Button */}
      <motion.div
        variants={itemVariants}
        className="text-center mt-16"
      >
        <button className="relative overflow-hidden border border-royalblue px-10 py-4 text-md tracking-widest text-royalblue transition-all duration-500 group">
          <span className="relative z-10 group-hover:text-white transition-colors duration-500">
            View All Ring Collection
          </span>
          <span className="absolute inset-0 bg-royalblue translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
        </button>
      </motion.div>
    </motion.section>
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