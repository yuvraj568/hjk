import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export default function CartPage() {
  const { items, total, removeItem, updateQuantity } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some products to your cart to continue shopping</p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            {items.map((item) => (
              <div key={item.id} className="flex items-center py-6 border-b">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{item.brand}</p>
                  <div className="mt-2 flex items-center">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="p-1 text-gray-500 hover:text-gray-700"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="mx-2 text-gray-700">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 text-gray-500 hover:text-gray-700"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">
                    ${item.price * item.quantity}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="mt-2 text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-4">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              <div className="flow-root">
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-600">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">${total}</dd>
                  </div>
                  <div className="flex justify-between mt-2">
                    <dt className="text-sm text-gray-600">Shipping</dt>
                    <dd className="text-sm font-medium text-gray-900">Free</dd>
                  </div>
                  <div className="flex justify-between mt-4 pt-4 border-t">
                    <dt className="text-base font-medium text-gray-900">Order total</dt>
                    <dd className="text-base font-medium text-gray-900">${total}</dd>
                  </div>
                </div>
              </div>
              <Link
                to="/checkout"
                className="mt-6 w-full bg-black text-white py-3 px-4 rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}