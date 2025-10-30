import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* Wavy diamond-cut top edge */}
   
 {/* Wavy diamond-cut bottom edge */}
      {/* <div className="relative w-full h-24 bg-white">
        <svg className="absolute top-0 w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 Q120,20 240,60 T480,60 T720,60 T960,60 T1200,60 T1440,60 L1440,120 L0,120 Z" fill="#000B58"/>
        </svg>
        <svg className="absolute top-0 w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,40 Q120,80 240,40 T480,40 T720,40 T960,40 T1200,40 T1440,40 L1440,100 L0,100 Z" fill="#000B58" opacity="0.5"/>
        </svg>
      </div> */}
      <footer className="relative py-16 px-6 md:px-12 bg-[#000B58] text-white">
        {/* Diagonal diamond cuts on sides */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#000842] to-transparent opacity-50" 
             style={{clipPath: 'polygon(0 0, 100% 20%, 100% 80%, 0 100%)'}}></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#000842] to-transparent opacity-50"
             style={{clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0 80%)'}}></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-sm tracking-widest uppercase mb-6 font-medium">Contact</h3>
              <ul className="space-y-3 text-sm text-white">
                <li><a href="#" className="hover:text-gray-300 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> info@prestotrade.hk
                </a></li>
                <li><a href="#" className="hover:text-gray-300 flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +852 1234 5678
                </a></li>
                <li><a href="#" className="hover:text-gray-300 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Hong Kong
                </a></li>
                <li><a href="#" className="hover:text-gray-300">Schedule consultation</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm tracking-widest uppercase mb-6 font-medium">Products</h3>
              <ul className="space-y-3 text-sm text-white">
                <li><a href="#" className="hover:text-gray-300">Princess Cut</a></li>
                <li><a href="#" className="hover:text-gray-300">Emerald Cut</a></li>
                <li><a href="#" className="hover:text-gray-300">Asscher Cut</a></li>
                <li><a href="#" className="hover:text-gray-300">Round Brilliant</a></li>
                <li><a href="#" className="hover:text-gray-300">GIA Certified</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm tracking-widest uppercase mb-6 font-medium">Services</h3>
              <ul className="space-y-3 text-sm text-white">
                <li><a href="#" className="hover:text-gray-300">Parcels & Layouts</a></li>
                <li><a href="#" className="hover:text-gray-300">Pairs</a></li>
                <li><a href="#" className="hover:text-gray-300">Custom Orders</a></li>
                <li><a href="#" className="hover:text-gray-300">Certification</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm tracking-widest uppercase mb-6 font-medium">Company</h3>
              <ul className="space-y-3 text-sm text-white">
                <li><a href="#" className="hover:text-gray-300">About Presto Trade</a></li>
                <li><a href="#" className="hover:text-gray-300">Our Heritage</a></li>
                <li><a href="#" className="hover:text-gray-300">Trade Shows</a></li>
                <li><a href="#" className="hover:text-gray-300">News & Events</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between text-xs text-white">
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300">Terms of Service</a>
            </div>
            <p>© 2025 Presto Trade. Established 1991. All rights reserved.</p>
          </div>
        </div>
      </footer>
   {/* <div className="relative w-full h-24 bg-amber-50">
        <svg className="absolute bottom-0 w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0 L0,60 Q120,100 240,60 T480,60 T720,60 T960,60 T1200,60 T1440,60 L1440,0 Z" fill="#000B58"/>
        </svg>
        <svg className="absolute bottom-0 w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,20 Q120,60 240,20 T480,20 T720,20 T960,20 T1200,20 T1440,20 L1440,0 L0,0 Z" fill="#000B58" opacity="0.5"/>
        </svg>
      </div> */}
     
    </>
  );
};

export default Footer;