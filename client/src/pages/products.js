
import MainLayout from "../layouts/mainLayout";
import ProductCard from "./shared/ProductCard";

const Product = ({ allProducts }) => {
  const products = allProducts?.data;



  return (
    <div className="py-20">
      <h1 className="flex justify-center text-cyan-400 font-bold">
        All Products
      </h1>
      <div className="flex justify-center  container mx-auto mb-5    px-4">
        <div className="grid  mt-4 md:grid-cols-2 lg:grid-cols-3  gap-5">
          {products?.map((product) => (
            <ProductCard key={product?._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

Product.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("https://cow-hut-ten.vercel.app/api/v1/cows");
  const data = await res.json();
  return {
    props: {
      allProducts: data,
    },
  };
};
