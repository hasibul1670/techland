import React from "react";
import FeaturedProductCard from "../../components/cardComponents/FeaturedProductCard";
import useAddComponentToPCBuilding from "../../components/handleSelectedComponent";
import MainLayout from "../../layouts/mainLayout";

const Storage = ({ allProducts }) => {
  const handleSelectedComponent = useAddComponentToPCBuilding();

  return (
    <div className="py-20">
      <h1 className="flex justify-center text-xl text-cyan-400 font-bold">
        Storage Devices
      </h1>
      <div className="flex justify-center  container mx-auto mb-5    px-4">
        <div className="grid  mt-4 md:grid-cols-2 lg:grid-cols-3  gap-5">
          {allProducts?.map((product) => (
            <FeaturedProductCard
              key={product?._id}
              product={product}
              handleSelectedComponent={handleSelectedComponent}
            ></FeaturedProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Storage;

Storage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps() {
  const res = await fetch("https://server-nu-teal.vercel.app/api/v1/products");
  const products = await res.json();
  const cpuProducts = products?.data?.filter(
    (product) => product.category === "Storage Device"
  );
  return {
    props: {
      allProducts: cpuProducts,
    },
  };
}
