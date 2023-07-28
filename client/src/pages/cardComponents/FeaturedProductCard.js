import Image from "next/image";
import Link from "next/link";

const FeaturedProductCard = ({ product }) => {
  console.log("Hello", product);
  return (
    <div className="card w-58 h-96 p-1 border-solid border-2 border-sky-500 shadow-xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
      <figure className="px-6 pt-2">
        <Image
          alt="example"
          src={product?.image_url}
          height={200}
          width={200}
          responsive
        />
      </figure>
      <div className="card-body items-center text-center py-3">
        <h6 className="font-bold text-cyan-700 ">{product?.productName}</h6>
        <p className=" text-cyan-700 ">Category:{product?.category}</p>

        <p className="text-bold text-cyan-400">
          Stock Available:{product?.inStock ? "In Stock" : "Out of stock"}
        </p>
        <h6 className="font-bold  ">
          {product?.price} {product?.currency}
        </h6>

        <p className=" text-cyan-700 font-bold ">
          Rating:{product?.averageRating}
        </p>
        <Link href={`/products/${product?._id}`}>
          <button className="btn  btn-primary capitalize  btn-sm">
            Show Detail
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
