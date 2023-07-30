import Image from "next/image";
import React from "react";
import Link from "next/link";
import img from "../assets/Image/b1 (2).jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            height={200}
            width={400}
            responsive
            src={img}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              "Build Your Dream PC: Unleash Your Performance Potential!"!
            </h1>
            <p className="py-6">
              "Build Your Dream PC: Unleash Your Performance Potential!"!
            </p>
            <Link href="/pc-building">
              {" "}
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
