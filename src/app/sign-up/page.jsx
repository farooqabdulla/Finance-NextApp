"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhno] = useState("");
  const [name, setName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "12345") {
      router.push("/dashboard");
    } else {
      alert("Incorrect password");
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
            <form className="space-y-4" onSubmit={handleLogin}>
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={phonenumber}
                  onChange={(e) => setPhno(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
