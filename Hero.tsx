import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative h-[600px] mt-16">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Your Style
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Explore our curated collection of premium fashion and footwear from top brands
          </p>
          <div className="flex space-x-4">
            <Link
              to="/category/new-arrivals"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100"
            >
              Shop New Arrivals
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/category/trending"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-black transition-colors"
            >
              Trending Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}