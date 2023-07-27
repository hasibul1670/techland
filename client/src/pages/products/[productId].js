
import Image from "next/image";
import MainLayout from '../../layouts/mainLayout';
import Swal from "sweetalert2"

const ProductDetailPage = ({ product }) => {
  const {
    image_url,
    description,
    currency,
    ratings,
    name,
    features,
    category,
    price,
  } = product?.data;



const handleBuyNow =()=>{
  Swal.fire({
    position: 'top-middle',
    icon: 'success',
    title: 'Your Order has been Placed',
    showConfirmButton: false,
    timer: 2500
  })
  
}

  return (
    <div className="py-20">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            alt="example"
            src={image_url}
            height={1000}
            width={1000}
            responsive
          />
          <div>
            <h1 className="text-xl text-cyan-400 font-bold">{name}</h1>
            <p className=" text-md font-semibold ">Category : {category}</p>

            <p className=" text-md font-semibold ">
              Price : {price} {currency}
            </p>
            <p className=" text-md text-cyan-700 font-semibold ">Rating:{ratings.average}</p>
            <p className=" text-md font-semibold text-cyan-600 ">
              {description}
            </p>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div>
              <h1 className="text-red-700 font-semibold">Features of {name}</h1>

              <ul>
                {features.map((feature, index) => (
                  <li className="font-semibold text-teal-700" key={index}>
                    {feature}
                  </li>
                ))}
              </ul>
              <button onClick={()=>handleBuyNow()} className="btn btn-primary p-2 m-2">Buy Now</button>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://cow-hut-ten.vercel.app/api/v1/cows/${params.productId}`
  );
  const data = await res.json();


  return {
    props: {
      product: data,
    },
  };
};
