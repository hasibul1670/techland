import Head from "next/head";
import FeatureCategory from "../components/FeaturedProducts/FeatureCategory";
import Featuredproduct from "../components/FeaturedProducts/Featuredproduct";
import MainLayout from "../layouts/mainLayout";



export default function Home({ products }) {
  const allProducts = products?.data;

  return (
    <>
      <Head>
        <title>E-Commerce Site</title>
        <meta
          name="description"
          content="This is an Ecommerce Site made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Featuredproduct allProducts={allProducts} />
    
      <FeatureCategory/>

    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/api/v1/products");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}

// export const getServerSideProps = async () => {
//   const res = await fetch("https://cow-hut-ten.vercel.app/api/v1/cows");
//   const data = await res.json();
//   return {
//     props: {
//       allProducts: data,
//     },
//   };
// };
