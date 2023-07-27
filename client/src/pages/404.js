import Image from "next/image";
import Link from "next/link";
import img404 from "../assets/Image/404.png";
import NavBar from "./shared/Navbar";

const NotFound = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="flex items-center justify-center min-h-screen">
        <div className="card w-96 glass mt-10">
          <figure>
            <Image
              alt="example"
              src={img404}
              height={400}
              width={600}
              responsive
            />
          </figure>
          <div className="card-body items-center justify-center">
            <h2 className="card-title text-red-700 font-bold ">
              404! Not Found
            </h2>

            <div className="card-actions justify-end">
              <Link href="/">
                {" "}
                <button className="btn btn-primary">Back to Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
