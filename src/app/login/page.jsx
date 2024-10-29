"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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
            <h2 class="text-2xl font-bold text-white mt-4">
              Empower Your Financial Journey
            </h2>
            <p class="text-white mt-2">
              Manage your finances with ease and make informed decisions to grow
              your wealth.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white flex items-center justify-center p-8">
          <div className="max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form className="space-y-4" onSubmit={handleLogin}>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              <div className="flex justify-between items-center">
                <label className="flex items-center text-sm text-gray-600">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <a href="#" className="text-sm text-indigo-600 hover:underline">
                  Forget Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="/sign-up"
                className="font-medium text-indigo-600 hover:underline"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
