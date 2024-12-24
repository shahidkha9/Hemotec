const ContactPage = () => {
    return (
      <div className="bg-gray-400 min-h-screen">
        
        <main className="max-w-4xl mx-auto py-12 px-6 sm:px-12 lg:px-16">
        
          <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            Have any questions or need assistance? Fill out the form below, and we’ll get back to you as soon as possible.
          </p>
  
          
          <form className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
  
            
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
  
            
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message:
              </label>
              <textarea rows={6}
                id="message"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
  
            
            <div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition duration-200"
              >
                Send
              </button>
            </div>
          </form>
        </main>
      </div>
    );
  };
  
  export default ContactPage;
  