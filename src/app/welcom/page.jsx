"use client";
//test
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function Home() {
  const [formData, setFormData] = useState({});
  const [display, setDisply] = useState("invisible");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setFormData(data);
    setDisply("");
  };
  // console.log(formData)
  return (
    <main className="  py-32">
      <div className="container mx-auto">
        <div className="w-1/2 bg-white mx-auto shadow-lg overflow-hidden">
          <div className="py-16 px-12">
            <div className="flex gap-6">
              <Link href=".." className="text-3xl mb-4">
                SignUp
              </Link>
              <span className="text-3xl">/</span>
              <Link href="/welcom" className="text-3xl mb-4">
                Login
              </Link>
            </div>
            <p className="mb-4">Login to your acount</p>
            <form className="" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="mt-1">
                <input
                  className="border border-gray-400 py-1 px-2 w-full"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invallid email format",
                    },
                  })}
                  placeholder="Email"
                  type="email"
                />
                <p className="text-red-500 mt-2">{errors.email?.message}</p>
              </div>
              <div className="mt-5">
                <input
                  className="border border-gray-400 py-1 px-2 w-full"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                      message:
                        "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number",
                    },
                  })}
                  placeholder="Password"
                  type="password"
                />
                <p className="text-red-500 mt-2">{errors.password?.message}</p>
              </div>
              <div className="mt-5">
                <button
                  className="w-full py-3 text-center text-white bg-purple-500"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <div
            className={`mx-12 mb-2 py-2 flex flex-col items-center border border-purple-300 ${display}`}
          >
            <p className="py-2 text-lg text-bold">you are in your acount now</p>
            <p className="py-2 ">
              {" "}
              <span className="text-purple-600">Your Email Is:</span>
              {` ${formData.email} `}{" "}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
