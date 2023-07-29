import Image from "next/image";
import Link from "next/link";

const FeaturedProductCard = ({ product,handleSelectedComponent }) => {

  

  return (
    <div className="p-7">
<div className="card w-64 h-84 p-1 border-solid border-2 border-sky-500 bg-base-200 shadow-xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
     <figure className="">
      <div className="group h-full overflow-hidden hover:scale-150 transform transition-all duration-300">
        <Image
          alt="example"
          src={product?.image}
          height={200}
          width={250}
          responsive
        />
      </div>
    </figure>
      <div className="card-body items-center text-center py-3">
        <h6 className="font-bold text-sm text-cyan-700 ">{product?.productName}</h6>
        <p className=" text-cyan-700 ">Category:{product?.category}</p>

        <p className="text-bold text-pink-700">
          Stock Available:{product?.inStock ? "In Stock" : "Out of stock"}
        </p>
        <h6 className="font-bold  ">
          Price : {product?.price} $
        </h6>

        <p className=" text-cyan-700 font-bold ">
          Rating:{product?.averageRating}
        </p>
     
          <button 
          onClick={() => handleSelectedComponent(product?.productName, product?.price,product?.category )}
          className="btn  btn-primary capitalize  btn-sm">
            Add to Pc Building
          </button>
      
      </div>
    </div>
    </div>

  );
};

export default FeaturedProductCard;
