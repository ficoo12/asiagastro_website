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

  console.log(logos);

  console.log("slice(8):", logos.slice(8).length);

  return (
    <section className="min-h-screen pt-40">
      <div className="space-y-10 lg:space-y-15">
        <div className="container mx-auto">
          <p className="text-xl font-semibold pl-2">Featured brands</p>
          <div className="mx-auto flex gap-10 flex-wrap px-2 mt-5">
            {logos.slice(0, 8).map((logo, index) => (
              <div
                key={index}
                className="bg-white h-40 w-full shadow-xl flex flex-col justify-center items-center relative md:max-w-sm"
              >
                <p className="absolute right-2 top-2 bg-[#A79261] text-white px-2 py-1 rounded-lg ">
                  Top brand
                </p>
                <img
                  src={logo.logoUrl}
                  alt={logo.brandName}
                  className="max-w-36"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="container  mx-auto">
          <p className="text-xl font-semibold pl-2">All brands</p>
          <div className=" mx-auto flex gap-10 flex-wrap px-2 mt-5">
            {logos.map((logo, index) => (
              <div key={index}>
                <img
                  src={logo.logoUrl}
                  alt={logo.brandName}
                  className="max-w-16"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Brands;
