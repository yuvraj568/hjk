export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  brand?: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  customerInfo: {
    name: string;
    email: string;
    address: string;
  };
  createdAt: Date;
}