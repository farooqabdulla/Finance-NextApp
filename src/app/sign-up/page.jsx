"use client";
import Image from "next/image";
import { useState } from "react";
import { useUser } from "@/context/UserContext";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

export default function SignForm() {
  const router = useRouter();
  const { setUserData } = useUser();
  const initialData = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialData);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.password) {
      console.log("password not Entered");
    } else {
      try {
        const formResponse = await fetch("/api/saveUser", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "CONTENT-TYPE": "application/json" },
        });
        if (formResponse.ok) {
          // Setting user data in the global context
          setUserData({ name: formData.name, email: formData.email });

          // Clear form data
          setFormData(initialData);

          // Redirect to dashboard
          router.push("/dashboard");

          // Show success toast notification
          toast.success("User registered successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
          });
        } else {
          // Handle error in registration
          const errorData = await formResponse.json();
          toast.error(errorData.message || "Failed to register", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
          });
        }
      } catch (error) {
        toast.error("An error occurred: " + error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full  h-full grid grid-cols-1 md:grid-cols-2">
        {/* Left Section */}
        <div className="relative bgc md:flex hidden  items-center justify-center p-8">
          <div className="text-white text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white p-2 rounded-full">
                <Image
                  src="/login-page.webp"
                  width={300}
                  height={300}
                  alt="Play Icon"
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mt-4">
              Empower Your Financial Journey
            </h2>
            <p className="text-white mt-2">
              Manage your finances with ease and make informed decisions to grow
              your wealth.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white flex items-center justify-center p-8">
          <div className="max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6">Sign up</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phonenumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  id="phonenumber"
                  type="number"
                  value={formData.phone}
                  name="phone"
                  onChange={handleChange}
                  placeholder="Enter your Number"
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-medium text-indigo-600 hover:underline"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
