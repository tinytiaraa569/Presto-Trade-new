import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
 <>
       <footer className="py-16 px-6 md:px-12 border-t">
         <div className="max-w-7xl mx-auto">
           <div className="grid md:grid-cols-4 gap-12 mb-12">
             <div>
               <h3 className="text-sm tracking-widest uppercase mb-6 font-medium">Contact</h3>
               <ul className="space-y-3 text-sm text-gray-600">
                 <li><a href="#" className="hover:text-gray-900 flex items-center gap-2">
                   <Mail className="w-4 h-4" /> info@prestotrade.hk
                 </a></li>
                 <li><a href="#" className="hover:text-gray-900 flex items-center gap-2">
                   <Phone className="w-4 h-4" /> +852 1234 5678
                 </a></li>
                 <li><a href="#" className="hover:text-gray-900 flex items-center gap-2">
                   <MapPin className="w-4 h-4" /> Hong Kong
                 </a></li>
                 <li><a href="#" className="hover:text-gray-900">Schedule consultation</a></li>
               </ul>
             </div>
 
             <div>
               <h3 className="text-sm tracking-widest uppercase mb-6 font-medium">Products</h3>
               <ul className="space-y-3 text-sm text-gray-600">
                 <li><a href="#" className="hover:text-gray-900">Princess Cut</a></li>
                 <li><a href="#" className="hover:text-gray-900">Emerald Cut</a></li>
                 <li><a href="#" className="hover:text-gray-900">Asscher Cut</a></li>
                 <li><a href="#" className="hover:text-gray-900">Round Brilliant</a></li>
                 <li><a href="#" className="hover:text-gray-900">GIA Certified</a></li>
               </ul>
             </div>
 
             <div>
               <h3 className="text-sm tracking-widest uppercase mb-6 font-medium">Services</h3>
               <ul className="space-y-3 text-sm text-gray-600">
                 <li><a href="#" className="hover:text-gray-900">Parcels & Layouts</a></li>
                 <li><a href="#" className="hover:text-gray-900">Pairs</a></li>
                 <li><a href="#" className="hover:text-gray-900">Custom Orders</a></li>
                 <li><a href="#" className="hover:text-gray-900">Certification</a></li>
               </ul>
             </div>
 
             <div>
               <h3 className="text-sm tracking-widest uppercase mb-6 font-medium">Company</h3>
               <ul className="space-y-3 text-sm text-gray-600">
                 <li><a href="#" className="hover:text-gray-900">About Presto Trade</a></li>
                 <li><a href="#" className="hover:text-gray-900">Our Heritage</a></li>
                 <li><a href="#" className="hover:text-gray-900">Trade Shows</a></li>
                 <li><a href="#" className="hover:text-gray-900">News & Events</a></li>
               </ul>
             </div>
           </div>
 
           <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
             <div className="flex gap-6 mb-4 md:mb-0">
               <a href="#" className="hover:text-gray-900">Privacy Policy</a>
               <a href="#" className="hover:text-gray-900">Terms of Service</a>
             </div>
             <p>© 2025 Presto Trade. Established 1991. All rights reserved.</p>
           </div>
         </div>
       </footer>
 </>
  )
}

export default Footer
