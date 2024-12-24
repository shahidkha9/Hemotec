import HomePage from "./home";
import ServicesPage from "./services/page";
import ProductsPage from "./products/page";
import AboutPage from "./about/page";

export default function Home() {
  return (
   <div>
    <HomePage />
    <AboutPage />
    <ProductsPage />
    <ServicesPage />
   </div>
  );
}
