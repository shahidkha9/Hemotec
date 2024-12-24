import ProductCard from '../components/ProductCard';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Permetec Lotion',
    description: 'An effective solution for scabies treatment.',
    price: 10.99,
    image: '/permetec_lotion_an_effective_solution_for_scabies.jpeg',
  },
  {
    id: 2,
    name: 'F-Tec Antifungal Soap',
    description: 'A trusted antifungal soap for healthier skin.',
    price: 9.99,
    image: '/f_tec_antifungal_soap_a_trusted_antifungal_soap.jpeg',
  },
  {
    id: 3,
    name: 'S-tec Lotion',
    description: 'An advanced antiscabies lotion formulated for effective treatment and relief.',
    price: 12.99,
    image: '/s_tec_lotion.jpeg',
  },
  {
    id: 4,
    name: 'S-tec Soap',
    description: 'An antiscabies soap designed to provide a complete solution for skin protection.',
    price: 8.99,
    image: '/s_tec_soap_and_lotion.jpeg',
  },
];

const ProductsPage = () => {
  return (
    <div className="bg-gray-300 min-h-screen">
      <main className="max-w-7xl mx-auto py-12 px-6 sm:px-12 lg:px-16">
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">
          Our Products
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Explore our range of innovative and high-quality pharmaceutical products designed to meet your healthcare needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
