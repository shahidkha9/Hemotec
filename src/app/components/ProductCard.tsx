import Image from 'next/image';
import { Product } from '../types/product';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-gray-200 shadow-lg rounded-lg p-6">
<Image
  src={product.image} // Keep the dynamic image source
  alt={product.name} // Keep the alt text for accessibility
  className="w-full h-48 object-cover rounded-lg mb-4"
  width={500} // Specify the width for optimization
  height={192} // Specify the height for optimization (keeping aspect ratio)
  layout="intrinsic" // Optional, based on your layout requirements
/>
     <h2 className="text-xl font-semibold text-blue-700 mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <div className="text-blue-600 font-bold text-lg">${product.price.toFixed(2)}</div>
    </div>
  );
};

export default ProductCard;
