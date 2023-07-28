import Lottie from "lottie-react";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ card }) => {
  return (
    <div className="mb-5 px-10">
    <div className="card w-64 h-72 bg-base-200 text-center shadow-xl hover:shadow-3xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="card-animation  w-48 h-48 px-4">
        <Lottie animationData={card?.animationData} loop={true} />
      </div>
      <div className="card-body items-center text-center">
        <p className="card-title font-bold text-pink-700 ">{card?.cardTitle}</p>
        <Link href={card.linkTo}>
          <button className="btn btn-primary btn-sm capitalize">
            Explore This Category
          </button>
        </Link>
      </div>
    </div>
  </div>
  



  );
};

export default CategoryCard;
