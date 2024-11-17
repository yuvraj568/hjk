import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export default function Navbar() {
  const cartItems = useCartStore((state) => state.items);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-gray-800">StyleHub</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/category/men" className="text-gray-600 hover:text-gray-900">Men</Link>
            <Link to="/category/women" className="text-gray-600 hover:text-gray-900">Women</Link>
            <Link to="/category/kids" className="text-gray-600 hover:text-gray-900">Kids</Link>
            <Link to="/brand/nike" className="text-gray-600 hover:text-gray-900">Nike</Link>
            <Link to="/brand/adidas" className="text-gray-600 hover:text-gray-900">Adidas</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">
              <Search className="h-6 w-6" />
            </button>
            <Link to="/cart" className="text-gray-600 hover:text-gray-900 relative">
              <ShoppingCart className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <Link to="/account" className="text-gray-600 hover:text-gray-900">
              <User className="h-6 w-6" />
            </Link>
            <button
              className="md:hidden text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/category/men" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Men</Link>
            <Link to="/category/women" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Women</Link>
            <Link to="/category/kids" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Kids</Link>
            <Link to="/brand/nike" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Nike</Link>
            <Link to="/brand/adidas" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Adidas</Link>
          </div>
        </div>
      )}
    </nav>
  );
}