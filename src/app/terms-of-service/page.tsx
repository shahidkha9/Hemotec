const TermsOfServicePage = () => {
    return (
      <div className="bg-gray-300 min-h-screen">
        <main className="max-w-7xl mx-auto py-12 px-6 sm:px-12 lg:px-16">
          <h1 className="text-3xl font-bold text-blue-700 mb-6">Terms of Service</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to <span className="font-semibold text-blue-600">Hemotec Healthcare</span>. By accessing or using our website, you agree to comply with these terms and conditions.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600 mt-8">Use of Our Services</h2>
          <p className="text-gray-700 mt-4">
            - You agree to use our website and services for lawful purposes only.<br />
            - You may not copy, distribute, or modify any content without prior written consent.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600 mt-8">Limitation of Liability</h2>
          <p className="text-gray-700 mt-4">
            We are not responsible for any damages arising from the use of our website or services.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600 mt-8">Changes to Terms</h2>
          <p className="text-gray-700 mt-4">
            We reserve the right to update these terms at any time. Continued use of the website signifies your acceptance of any changes.
          </p>
          <p className="text-gray-700 mt-4">
            For any questions, please contact us at <span className="font-semibold text-blue-600">support@hemotechealthcare.com</span>.
          </p>
        </main>
      </div>
    );
  };
  
  export default TermsOfServicePage;
  