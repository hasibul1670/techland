import HomePageFeaturedCard from "../cardComponents/HomePageFeaturedCard";



const Featuredproduct = ({ allProducts }) => {
  return (
    <div className="py-20">
      <h1 className="flex justify-center text-xl text-cyan-400 font-bold">
        Our Features Products
      </h1>
      <div className="flex justify-center  container mx-auto mb-5    px-4">
        <div className="grid  mt-4 md:grid-cols-2 lg:grid-cols-3  gap-5">
          {allProducts.slice(0, 7)?.map((product) => (
            <HomePageFeaturedCard
              key={product?._id}
              product={product}
            ></HomePageFeaturedCard>
          ))}
        </div>
      </div>


    </div>
  );
};

export default Featuredproduct;
