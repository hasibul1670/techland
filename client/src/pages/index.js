
import Head from "next/head";

import Product from "./products";
import MainLayout from "../layouts/mainLayout";


export default function Home({ allProducts }) {
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
<h1 className="pt-20 flex justify-center text-blue-800 font-bold text-3xl " >WellCome  To My E-Commerce </h1>
      <Product allProducts={allProducts} />
    </>
  );
}

Home.getLayout = function getLayout(page) {
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
