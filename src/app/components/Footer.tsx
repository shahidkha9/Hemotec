import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-6">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Hemotec Healthcare. All rights reserved.</p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <Link href="/privacy-policy" className="text-sm hover:underline">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-sm hover:underline">Terms of Service</Link>
            <Link href="/contact" className="text-sm hover:underline">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

