import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <div className="group relative">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="h-[300px] w-full object-cover object-center group-hover:opacity-75 transition-opacity"
          loading="lazy"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link to={`/product/${product.id}`}>
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
      <button
        type="button"
        onClick={handleAddToCart}
        className="mt-4 w-full bg-black text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors"
      >
        <ShoppingCart className="h-5 w-5 mr-2" />
        Add to Cart
      </button>
    </div>
  );
}