import { useForm } from "react-hook-form";
import Head from "next/head";
import { AiFillGoogleCircle,AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";

const LoginPage = () => {


  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h3 className="text-xl font-semibold mb-4">LOGIN</h3>
        <div className="flex space-x-4 mb-4">
          {/* Tailwind CSS Google icon */}
          <button
            className="p-2 rounded-full bg-pink-900 text-white"
            onClick={() =>
              signIn("google", {
                callbackUrl: "http://localhost:3000/",
              })
            }
          >
            <span className="text-3xl"><AiFillGoogleCircle/></span>
        
            
          </button>
 
          <button
            className="p-2 rounded-full bg-gray-800 text-white"
            onClick={() =>
              signIn("github", {
                callbackUrl: "http://localhost:3000/",
              })
            }
          >
         <span className="text-3xl"><AiFillGithub/></span>
        
          </button>
        </div>
        <hr className="w-2/3 mb-4" />
        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="email" className="mb-2">
            Your Email
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="border p-2 rounded w-64 mb-2"
          />
          <label htmlFor="password" className="mb-2">
            Your Password
          </label>
          <input
            {...register("password", { required: true })}
            type="password"
            className="border p-2 rounded w-64 mb-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-32"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
