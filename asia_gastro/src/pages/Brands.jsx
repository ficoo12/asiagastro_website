import { useEffect, useState } from "react";
import client from "../sanity/client";
const Brands = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const fetchLogos = async () => {
      const query = `*[_type == "brandLogo"] | order(orderRank){
        _id,
        brandName,
        "logoUrl": logoImage.asset->url
      }`;

      try {
        const data = await client.fetch(query);
        setLogos(data);
      } catch (error) {
        console.error("Error fetching logos:", error);
      }
    };
    fetchLogos();
  }, []);

  return (
    <section className="min-h-screen pt-40">
      <div className="container mx-auto gap-10 flex flex-wrap justify-center">
        {logos.map((logo, index) => (
          <div>
            <img
              src={logo.logoUrl}
              alt={logo.brandName}
              className={` object-contain ${index < 8 ? "w-28 h-28" : "w-20 h-20"}`}
            ></img>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Brands;
