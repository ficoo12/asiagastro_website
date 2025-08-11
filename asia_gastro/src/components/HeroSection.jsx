import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="relative h-screen pt-20 flex items-center justify-center bg-cover bg-center bg-[url('/back.png')]">
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 text-center px-4 w-2/3">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Leading regional distributor of Asian food and beverages
        </h1>
        <Link
          to="/products"
          className="inline-block mt-8 bg-[#A79261] hover:bg-[rgba(167,146,97,0.6)] text-white font-semibold px-6 py-3 rounded"
        >
          SHOW PRODUCTS
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
