import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="bg-gray-400 min-h-screen">
      <main className="max-w-4xl mx-auto py-12 px-6 sm:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center">
          
          <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-6">
            <Image
              src="/Images/pharma_team_of_6_different_pakistani_people.jpeg"
              alt="Pharmaceutical Team"
              width={400}
              height={400} 
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center lg:text-left">
              About Us
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to <span className="font-semibold text-blue-600">Hemotec Healthcare</span>, where innovation meets healthcare excellence. 
  With a legacy of trust and quality, we are committed to providing cutting-edge pharmaceutical solutions that enhance the quality of life. 
  Our portfolio includes a wide range of medicines, healthcare products, and solutions tailored to meet the needs of patients and healthcare professionals.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
            At <span className="font-semibold text-blue-600">Hemotec Healthcare</span>, we adhere to the highest standards of research, development, and manufacturing to 
            ensure the safety and efficacy of our products. Join us on our mission to build a healthier world, one innovation at a time.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;