import React from 'react';

function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4 luxury-heading">Jhandulal</h3>
            <p className="text-gray-400 mb-6">
              Premium dental care with advanced technology and compassionate service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400">General Dentistry</a></li>
              <li><a href="#" className="hover:text-blue-400">Cosmetic Dentistry</a></li>
              <li><a href="#" className="hover:text-blue-400">Dental Implants</a></li>
              <li><a href="#" className="hover:text-blue-400">Orthodontics</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📍 123 Dental Avenue</li>
              <li>📞 (555) 123-4567</li>
              <li>✉️ info@jhandulal.com</li>
              <li>🕐 Mon-Fri: 8AM-6PM</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Jhandulal Dental Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;