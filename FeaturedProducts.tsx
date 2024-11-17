import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Nike Air Max 270',
    price: 150,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'shoes',
    brand: 'nike',
    description: 'The Nike Air Max 270 delivers visible cushioning under every step.'
  },
  {
    id: '2',
    name: 'Adidas Ultraboost',
    price: 180,
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'shoes',
    brand: 'adidas',
    description: 'Energy-returning Ultraboost cushioning for comfort.'
  },
  {
    id: '3',
    name: 'Nike Air Jordan 1 High OG',
    price: 499,
    image: 'https://images.unsplash.com/photo-1586525198428-225f6f12cff5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'shoes',
    brand: 'nike',
    description: 'Legendary high-top basketball shoes with premium leather.'
  },
  {
    id: '4',
    name: 'Nike Dunk Low Off-White',
    price: 899,
    image: 'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'shoes',
    brand: 'nike',
    description: 'Limited edition collaboration sneakers.'
  }
];

export default function FeaturedProducts() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}