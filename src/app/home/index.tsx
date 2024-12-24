import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="bg-gray-300 min-h-screen">
      
      <main className="max-w-7xl mx-auto py-12 px-6 sm:px-12 lg:px-16">
        
        <h1 className="text-5xl font-bold text-blue-700 text-center mb-8">
          Welcome to Hemotec Healthcare
        </h1>
        
        <p className="text-lg text-gray-900 text-center mb-12">
          At Hemotec Healthcare, we are committed to providing innovative and 
          high-quality pharmaceutical products to improve lives and promote wellness.
        </p>

        
        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
          
        <Image
  src="/Images/excellence_in_healthcare_our_range_of_products.jpeg" // The path to your image
  alt="Healthcare Solutions" // The alt text for accessibility
  className="w-full lg:w-1/2 rounded-lg shadow-lg"
  width={500} // Specify the width for optimization (adjust as needed)
  height={281} // Specify the height for optimization (adjust based on your image's aspect ratio)
  layout="intrinsic" // Optional, maintains aspect ratio based on width/height
/>

          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">
              Excellence in Healthcare
            </h2>
            <p className="text-gray-700 text-lg mb-6">
            Our range of products, including antifungal soaps, antiscabies lotions, permethrin lotions, and antiscabies soaps, is crafted to meet the highest standards of healthcare. Explore our offerings to discover reliable solutions tailored to your needs.

Let me know if you&apos;d like any further refinements!
            </p>
            <a
              href="/products"
              className="inline-block px-6 py-3 bg-blue-700 text-white text-lg font-medium rounded-lg shadow hover:bg-blue-800 transition duration-200"
            >
              Explore Our Products
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
