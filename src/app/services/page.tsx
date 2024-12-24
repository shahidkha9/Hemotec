import Image from 'next/image';
const ServicesPage = () => {
    const services = [
      {
        id: 1,
        title: 'Pharmaceutical Manufacturing',
        description:
          'We specialize in producing high-quality pharmaceutical products adhering to international standards.',
          image: '/images/pharmaceutical_manufacturing (2).jpeg',
      },
      {
        id: 2,
        title: 'Research & Development',
        description:
          'Our R&D team is dedicated to discovering innovative solutions for better healthcare.',
          image: '/images/research_development_our_r_d_team_is.jpeg',
      },
      {
        id: 3,
        title: 'Logistics & Supply Chain',
        description:
          'Efficient delivery and distribution of medicines to ensure availability worldwide.',
          image: '/images/logistics_supply_chain_efficient_delivery_and.jpeg',
      },
      {
        id: 4,
        title: 'Healthcare Consulting',
        description:
          'Providing expert advice to improve healthcare outcomes and support medical professionals.',
          image: '/images/healthcare_consulting_providing_expert_advice_to_improve.jpeg',
      },
    ];
  
    return (
      <div className="bg-gray-400 min-h-screen">
        
        <main className="max-w-7xl mx-auto py-12 px-6 sm:px-12 lg:px-16">
        
          <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">
            Our Services
          </h1>
          <p className="text-lg text-black text-center mb-12">
            We are committed to delivering exceptional services to improve healthcare globally.
          </p>
  
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-200 shadow-md rounded-lg p-6 flex flex-col items-center text-center"
              >
                
                <Image
  src={service.image} // Keep the dynamic image source
  alt={service.title} // Keep the alt text for accessibility
  className="w-16 h-16 mb-4 rounded-full"
  width={64} // Specify the width for optimization (16 * 4 = 64px)
  height={64} // Specify the height for optimization (16 * 4 = 64px)
  layout="intrinsic" // Ensures image maintains aspect ratio
/>
                
                <h2 className="text-xl font-semibold text-blue-700 mb-2">
                  {service.title}
                </h2>
                
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  };
  
  export default ServicesPage;
  