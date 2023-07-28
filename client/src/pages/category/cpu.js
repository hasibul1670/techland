

import React from 'react';
import FeaturedProductCard from '../../components/cardComponents/FeaturedProductCard';
import MainLayout from '../../layouts/mainLayout';

const CpuCategoryPage = ({products}) => {

  const allProducts = products;

  const CPUPage = () => {
    const [selectedCpu, setSelectedCpu] = useState('');
    const router = useRouter();
  
    const handleSelectCpu = (cpuName) => {
      setSelectedCpu(cpuName);
    };
  
    const handleGoBack = () => {
      router.back(); // Go back to the previous page without adding the CPU to the selected list
    };
  
    const handleAddCpu = () => {
      // Do any additional logic or API calls here to save the selected CPU, if needed.
      router.back(); // Go back to the previous page after adding the CPU to the selected list
    };

  return (
    <div className="py-20">
      <h1 className="flex justify-center text-xl text-cyan-400 font-bold">
        CPU/Processors
      </h1>
      <div className="flex justify-center  container mx-auto mb-5    px-4">
        <div className="grid  mt-4 md:grid-cols-2 lg:grid-cols-3  gap-5">
          {allProducts?.map((product) => (
            <FeaturedProductCard
            handleSelectCpu={handleSelectCpu}
              key={product?._id}
              product={product}
            ></FeaturedProductCard>
          ))}
        </div>
      </div>


    </div>
  );
};


export default CpuCategoryPage;

CpuCategoryPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};



export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/api/v1/products");
  const products = await res.json();
  const cpuProducts = products?.data?.filter((product) => product.category === 'CPU');
  return {
    props: {
      products: cpuProducts,
    },
  };
}

