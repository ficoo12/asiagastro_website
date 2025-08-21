import { useEffect, useState } from "react";
import client from "../sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}
const Assortment = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState([]);
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const categoriesData = await client.fetch(
        `*[_type == "categorie"] | order(orderRank){_id, title}`
      );
      const productsData =
        await client.fetch(`*[_type == "product"] | order(orderRank){
        _id,
        name,
        code,
        quantity,
        "categorie": categorie->title,
        image
      }`);

      setCategories(categoriesData);
      setProducts(productsData);

      if (categoriesData.length > 0) {
        setActiveCategory(categoriesData[0].title);
      }
    };

    fetchData();
  }, []);
  const filteredProducts = products.filter(
    (product) => product.categorie === activeCategory
  );

  return (
    <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 min-h-screen pt-40">
      <aside className="w-full md:w-1/4">
        <h2 className="mb-5 hidden md:block font-semibold">Categories:</h2>

        <div className="md:hidden mb-4">
          <button
            className="w-full flex justify-between items-center px-4 py-2 border border-gray-300 rounded"
            onClick={() => setAccordionOpen(!accordionOpen)}
          >
            <span className="font-semibold">Categories</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                accordionOpen ? "transform rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <p className="mt-1 text-[#A79261] text-sm font-semibold">
            {activeCategory}
          </p>
          {accordionOpen && (
            <ul className="mt-2 border border-gray-300 rounded max-h-96 overflow-scroll">
              {categories.map((cat) => (
                <li key={cat._id}>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setActiveCategory(cat.title);
                      setAccordionOpen(false);
                    }}
                  >
                    {cat.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <ul className="hidden md:block space-y-2 font-semibold max-h-screen overflow-scroll">
          {categories.map((cat) => (
            <li key={cat._id}>
              <button
                className={`block w-full text-left px-2 py-1 transition ${
                  activeCategory === cat.title
                    ? "text-[#A79261]"
                    : "text-black hover:text-[#A79261]"
                }`}
                onClick={() => setActiveCategory(cat.title)}
              >
                {cat.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div
        className="w-full md:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-6"
        style={{ gridAutoRows: "20rem" }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow p-4 flex flex-col text-center space-y-3 h-full"
            >
              {product.image && (
                <img
                  src={urlFor(product.image).width(300).url()}
                  alt={product.name}
                  className="mx-auto h-40 object-contain mb-2"
                />
              )}
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm">{product.quantity}</p>
              <p className="text-xs text-gray-500 mt-auto">{product.code}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center">
            Nema proizvoda u ovoj kategoriji.
          </p>
        )}
      </div>
    </section>
  );
};
export default Assortment;
