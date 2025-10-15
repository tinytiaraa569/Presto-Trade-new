import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronDown, Menu, X, Search, User, Mail, Phone, MapPin, Award, Shield, Gem, Clock, Heart, ShoppingBag, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const messages = [
  "✨ FREE SHIPPING WORLDWIDE ✨",
  "💎 PREMIUM QUALITY GUARANTEED 💎",
  "⚡ NEW COLLECTION DROPPING SOON ⚡",
];
 function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000); // change message every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gray-900 text-white">
      {/* Persistent line */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-400" />

      {/* Animated text */}
      <div className="h-10 flex items-center justify-center text-xs sm:text-sm tracking-wider font-light relative z-10">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="inline-block"
          >
            {messages[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}



const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000); // change message every 3 seconds
    return () => clearInterval(interval);
  }, []);

const handleNavigation = (title) => {
  const lowerTitle = title.toLowerCase();

  if (lowerTitle === "diamonds") {
    navigate("/diamonds");
  } else if (lowerTitle === "jewelry") {
    navigate("/jewelry");
  } else if (lowerTitle === "rings") {
    navigate("/jewelry/rings");
  } else {
    navigate("/");
  }

  // Close menu and scroll to top
  setMenuOpen(false);
  window.scrollTo({ top: 0, behavior: "smooth" });
};



  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const menuData = {
    diamonds: {
      title: 'Diamonds',
      path: '/diamonds',
      sections: [
        {
          title: 'By Shape',
          items: [
            { name: 'Round Cut', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80' },
            { name: 'Princess Cut', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80' },
            { name: 'Emerald Cut', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80' },
            { name: 'Cushion Cut', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80' },
            { name: 'Oval Cut', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80' },
            { name: 'Pear Cut', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80' },
            { name: 'Marquise Cut', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80' },
            { name: 'Asscher Cut', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80' },
            { name: 'View All', featured: true }
          ]
        },
        {
          title: 'By Certification',
          items: [
            { name: 'GIA Certified' },
            { name: 'IGI Certified' },
            { name: 'AGS Certified' },
            { name: 'View All' }
          ]
        },
        {
          title: 'By Carat',
          items: [
            { name: '0.50 - 1.00 ct' },
            { name: '1.00 - 2.00 ct' },
            { name: '2.00 - 3.00 ct' },
            { name: '3.00+ ct' },
            { name: 'View All' }
          ]
        }
      ],
      featured: {
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
        title: 'GIA Certified Excellence',
        subtitle: 'Explore our curated collection',
        cta: 'Shop Now'
      }
    },
    jewelry: {
      title: 'Jewelry',
      path: '/jewelry',
      sections: [
        {
          title: 'By Category',
          items: [
            { name: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80' },
            { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80' },
            { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80' },
            { name: 'Bracelets', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80' },
            { name: 'Personalized Jewels', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80' },
            { name: 'Must Have', featured: true },
            { name: 'Gift Card' },
            { name: 'Accessories' },
            { name: 'View All', featured: true }
          ]
        },
        {
          title: 'By Color',
          items: [
            { name: 'White Gold' },
            { name: 'Yellow Gold' },
            { name: 'Rose Gold' },
            { name: 'Fresh Water Pearl' },
            { name: 'Platinum' },
            { name: 'View All' }
          ]
        },
        {
          title: 'By Price',
          items: [
            { name: 'Under $1,000' },
            { name: '$1,000 - $5,000' },
            { name: '$5,000 - $10,000' },
            { name: '$10,000+' },
            { name: 'View All' }
          ]
        }
      ],
      featured: {
        image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
        title: 'Timeless Elegance',
        subtitle: 'Discover our signature pieces',
        cta: 'Explore Collection'
      }
    },
    engagement: {
      title: 'Engagement',
      path: '/engagement',
      sections: [
        {
          title: 'Rings',
          items: [
            { name: 'Solitaire Rings' },
            { name: 'Halo Rings' },
            { name: 'Three Stone Rings' },
            { name: 'Vintage Rings' },
            { name: 'View All' }
          ]
        },
        {
          title: 'By Style',
          items: [
            { name: 'Classic' },
            { name: 'Modern' },
            { name: 'Vintage' },
            { name: 'Unique' },
            { name: 'View All' }
          ]
        },
        {
          title: 'Resources',
          items: [
            { name: 'Ring Size Guide' },
            { name: 'Style Quiz' },
            { name: 'Book Consultation' },
            { name: 'Custom Design' }
          ]
        }
      ],
      featured: {
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
        title: 'Forever Starts Here',
        subtitle: 'Find your perfect ring',
        cta: 'Start Your Journey'
      }
    },
    showrooms: {
      title: 'Showrooms',
      path: '/showrooms',
      sections: [
        {
          title: 'Visit Us',
          items: [
            { name: 'Mumbai Showroom' },
            { name: 'Delhi Showroom' },
            { name: 'Bangalore Showroom' },
            { name: 'Book Appointment' }
          ]
        },
        {
          title: 'Services',
          items: [
            { name: 'Private Consultation' },
            { name: 'Custom Design' },
            { name: 'Cleaning & Care' },
            { name: 'Appraisals' }
          ]
        },
        {
          title: 'Virtual Experience',
          items: [
            { name: 'Virtual Showroom' },
            { name: 'Video Consultation' },
            { name: 'Live Chat' }
          ]
        }
      ],
      featured: {
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
        title: 'Experience Luxury',
        subtitle: 'Visit our showrooms',
        cta: 'Find Location'
      }
    }
  };

  const toggleMobileSubmenu = (key) => {
    setMobileExpandedMenu(mobileExpandedMenu === key ? null : key);
  };

  return (
    <>
{/* <AnnouncementBar /> */}

      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50  transition-all duration-300 bg-white shadow-sm shadow-gray-300 ${
          scrolled ? '' : ''
        }`}
      >
   
        <div className="w-full px-6 md:px-6 py-5 gap-4 flex flex-col">
           <motion.div 
            whileHover={{ opacity: 0.6 }}
            className={`text-base text-center text-nowrap md:text-xl font-medium tracking-[0.3em] absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0 ${scrolled ? 'hidden' : ''}`}
          >
            
            <a href="/">PRESTO TRADE</a>
          </motion.div>
          <div className='flex items-center justify-between'>
 <button className="lg:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
            <Search className="w-5 h-5 md:hidden absolute left-16" />
          
          <motion.div 
            whileHover={{ opacity: 0.6 }}
            className={`text-base text-nowrap  md:text-xl font-medium tracking-[0.3em] absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0 ${scrolled ? '' : 'hidden'}`}
          >
            
            <a href="/">PRESTO TRADE</a>
          </motion.div>

          <nav className="hidden ml-20 w-full justify-center lg:flex items-center space-x-12 text-sm tracking-wider">
            {Object.keys(menuData).map((key) => (
              <div
                key={key}
                className="relative group"
                onMouseEnter={() => setActiveMenu(key)}
                onMouseLeave={() => setActiveMenu(null)}
                >
                <a 
                  href={menuData[key].path} 
                  className="relative font-normal text-gray-800 tracking-[0.2em] transition-opacity capitalize inline-block"
                >
                  {menuData[key].title}
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-800 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeMenu === key ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </a>
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hover:opacity-60 transition-opacity hidden md:block">
              <Search className="w-5 h-5" />
            </button>
            <button className="hover:opacity-60 hidden md:block transition-opacity">
              <User className="w-5 h-5" />
            </button>
            <button className="hover:opacity-60 transition-opacity">
              <Heart className="w-5 h-5" />
            </button>
            <button className="hover:opacity-60 transition-opacity">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
          </div>
         
        </div>
    

        {/* Desktop Mega Menu */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-white border-t shadow-2xl"
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="max-w-7xl mx-auto px-12 py-12">
                <div className="grid grid-cols-4 gap-12">
                  {menuData[activeMenu].sections.map((section, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                    >
                      <h3 className="text-xs font-semibold tracking-widest mb-6 text-gray-400 uppercase">
                        {section.title}
                      </h3>
                      <ul className="space-y-3">
                        {section.items.map((item, itemIdx) => (
                          <motion.li
                            key={itemIdx}
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            <a 
                              href="#" 
                              className={`text-sm hover:opacity-60 transition-opacity block ${
                                item.featured ? 'font-semibold' : ''
                              }`}
                            >
                              {item.name}
                            </a>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="relative overflow-hidden group cursor-pointer"
                  >
                    <div className="relative h-full">
                      <img 
                        src={menuData[activeMenu].featured.image}
                        alt={menuData[activeMenu].featured.title}
                        className="w-full h-64 object-cover rounded-sm"
                      />
                      <motion.div 
                        className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex flex-col justify-end p-6"
                      >
                        <h4 className="text-white text-xl font-light mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {menuData[activeMenu].featured.title}
                        </h4>
                        <p className="text-white text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {menuData[activeMenu].featured.subtitle}
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="bg-white text-black px-6 py-2 text-xs tracking-wider hover:bg-gray-100 transition-colors self-start opacity-0 group-hover:opacity-100"
                        >
                          {menuData[activeMenu].featured.cta}
                        </motion.button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                onClick={() => setMenuOpen(false)}
              />

              {/* Sliding Menu */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed top-0 left-0 h-full w-80 bg-white z-50 lg:hidden overflow-y-auto shadow-2xl"
              >
                <div className="p-6">
                  {/* Logo/Header */}
                  <div className="flex items-center justify-between  pb-6 border-b">
                    <h2 className="text-xl font-normal tracking-[0.2em]">MENU</h2>
                    <button onClick={() => setMenuOpen(false)}>
                      <X className="w-6 h-6" />
                    </button>
                  </div>
  {/* Login/Account Section */}
                  {/* <div className="mt-8 pt-6 ">
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-3 text-sm tracking-wider hover:opacity-60 transition-opacity mb-4"
                    >
                      <LogIn className="w-5 h-5" />
                      <span>Sign In / Register</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-3 text-sm tracking-wider hover:opacity-60 transition-opacity mb-4"
                    >
                      <User className="w-5 h-5" />
                      <span>My Account</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-3 text-sm tracking-wider hover:opacity-60 transition-opacity"
                    >
                      <Search className="w-5 h-5" />
                      <span>Search</span>
                    </motion.button>
                  </div> */}

                  {/* Main Navigation */}
                  <nav className="space-y-2 overflow-x-auto">
                    {Object.keys(menuData).map((key) => (
                      <div key={key} className="border-b">
                        <button
                          onClick={() => toggleMobileSubmenu(key)}
                          className="flex items-center justify-between w-full py-4 text-sm tracking-wider hover:opacity-60 transition-opacity"
                        >
                      <span
      className="capitalize font-medium cursor-pointer hover:text-black transition-colors"
      onClick={() => handleNavigation(menuData[key].title)}
    >
      {menuData[key].title}
    </span>
                          <motion.div
                            animate={{ rotate: mobileExpandedMenu === key ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {mobileExpandedMenu === key && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-4 pl-4 space-y-4">
                                {menuData[key].sections.map((section, idx) => (
                                  <div key={idx}>
                                    <h4 className="text-xs font-semibold tracking-widest mb-3 text-gray-400 uppercase">
                                      {section.title}
                                    </h4>
                                    <ul className="space-y-2">
                                      {section.items.map((item, itemIdx) => (
                                        <motion.li
                                          key={itemIdx}
                                          initial={{ x: -10, opacity: 0 }}
                                          animate={{ x: 0, opacity: 1 }}
                                          transition={{ delay: itemIdx * 0.05 }}
                                        >
                                          <a 
                                            href="#" 
                                            className={`text-sm hover:opacity-60 transition-opacity block py-1 ${
                                              item.featured ? 'font-semibold' : ''
                                            }`}
                                          >
                                            {item.name}
                                          </a>
                                        </motion.li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </nav>

                  {/* Additional Links */}
                  {/* <div className="mt-8 space-y-4">
                    <motion.a
                      whileHover={{ x: 4 }}
                      href="#"
                      className="flex items-center space-x-3 text-sm tracking-wider hover:opacity-60 transition-opacity"
                    >
                      <Heart className="w-5 h-5" />
                      <span>Wishlist</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ x: 4 }}
                      href="#"
                      className="flex items-center space-x-3 text-sm tracking-wider hover:opacity-60 transition-opacity"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      <span>Shopping Bag</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ x: 4 }}
                      href="#"
                      className="flex items-center space-x-3 text-sm tracking-wider hover:opacity-60 transition-opacity"
                    >
                      <MapPin className="w-5 h-5" />
                      <span>Store Locator</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ x: 4 }}
                      href="#"
                      className="flex items-center space-x-3 text-sm tracking-wider hover:opacity-60 transition-opacity"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Contact Us</span>
                    </motion.a>
                  </div> */}
                  {/* <div className='mt-20 fixed bg-white bottom-10 left-0 h-9'></div> */}
                <div className=" fixed w-[75%] bg-white bottom-4 left-0 right-0 flex z-50 items-center justify-center">
      <motion.button
        whileHover={{ x: 4 }}
        
        className="flex items-center justify-center w-full gap-3 rounded-xl border border-gray-800 py-3 px-4 text-sm font-medium tracking-wider ml-6 text-white
                   bg-gray-800 bg-[length:200%_auto]
                   hover:bg-gray-900  hover:shadow-md transition-all duration-300 ease-in-out"
      >
        <User className="w-5 h-5" />
        <span>Login</span>
      </motion.button>
    </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer to prevent content from hiding under fixed header */}
      {/* <div className="md:h-10"></div> */}

    
    </>
  );
};

export default Header;