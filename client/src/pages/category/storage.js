import React from "react";
import MainLayout from "../../layouts/mainLayout";
import FeaturedProductCard from "../../components/cardComponents/FeaturedProductCard";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToPcBuilding } from "../../redux/pcBuilder/pcBuilderSlice";

const Storage = ({allProducts}) => {
  const router = useRouter();
  const dispatch = useDispatch();
const handleSelectedComponent = (componentName,price,category) => {
  dispatch (addToPcBuilding({ componentName, price,category }));
  router.push({
    pathname: "/pc-building",
  });
};

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
  const res = await fetch("http://localhost:4000/api/v1/products");
  const products = await res.json();
  const cpuProducts = products?.data?.filter((product) => product.category === 'Storage Device');
  return {
    props: {
      allProducts: cpuProducts,
    },
  };
}
