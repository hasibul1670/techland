import Image from "next/image";
import Swal from "sweetalert2";
import MainLayout from "../../layouts/mainLayout";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToPcBuilding } from "../../redux/pcBuilder/pcBuilderSlice";
const ProductDetailPage = ({ product }) => {
  const {
    image,
    description,
    averageRating,
    productName,
    keyFeatures,
    category,
    inStock,
    reviews,
    individualRating,
    price,
  } = product?.data;

 

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
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            alt="example"
            className="group h-full overflow-hidden hover:scale-150 transform transition-all duration-300"
            src={image}
            height={400}
            width={300}
            responsive
          />
          <div>
            <div className="flex justify-between">
            <h1 className="text-xl text-cyan-800 font-bold">{productName}</h1>
            <button 
          onClick={() => handleSelectedComponent(productName,price,category)}
          className="btn btn-info capitalize  btn-sm">
            Add to Pc Building
          </button>
            </div>
        

            <p className=" text-md font-semibold ">Category : {category}</p>

            <p className=" text-md font-semibold ">Price : {price}</p>

            <p className=" text-md text-red-700 font-semibold ">
              Status:{inStock ? " In Stock" : "Out of Stock"}
            </p>

            <p className=" text-md text-cyan-700 font-semibold ">
              Average Rating:{averageRating}
            </p>
            <p className=" text-md text-cyan-700 font-semibold ">
              Individual Rating :{individualRating}
            </p>
            <p className=" text-md font-semibold text-pink-900 ">
              Description:{description}
            </p>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div>
              <h1 className="text-red-700 font-semibold">
                Some Key Features of
                <span className="text-indigo-700 font-bold	"> {productName}</span>
              </h1>

              <l>
                {Object.entries(keyFeatures).map(([key, value]) => (
                  <li className="font-semibold text-teal-700" key={key}>
                    {`${key}: ${value}`}
                  </li>
                ))}
              </l>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </div>
        </div>
      </div>

      <h1 className="flex justify-center text-xl text-cyan-400 font-bold">
        Customer Review
      </h1>
      {reviews.map((review) => (
        <div className="flex justify-center">
          <div
            className="card w-fit  my-2 py-2 px-5 sm:h-32 md:h-32 h-32 bg-base-300  shadow-xl flex justify-between  items-center "
            key={review.id}
          >
            <div className=" ">
              <p className="text-sm text-pink-700 underline underline-offset-2 font-bold">
                Username: {review.username}
              </p>
              <p className="text-purple-800	 font-bold	">
                Rating: {review.rating}
              </p>
              <p className="font-bold text-fuchsia-800 text-sm	">
                Comment: {review.comment}
              </p>
              <hr />
            </div>
          </div>
        </div>
      ))}
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
    `http://localhost:4000/api/v1/products/${params.productId}`
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
