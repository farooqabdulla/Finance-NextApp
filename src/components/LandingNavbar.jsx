// src/components/LandingNavbar.js
import Link from 'next/link';

export default function LandingNavbar() {
  return (
    <nav className="text-gray-800 gls border-b border-gray-700 h-[10vh] fixed w-full px-[6vw] text-white">
        <div className="h-[10vh] mx-auto flex items-center justify-between">
          <h2 className="text-2xl font-bold">Finance App</h2>
          <ul className="flex space-x-8">
            <li>
              <Link href="/">
                <span className="hover:text-gray-300 hello">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <span className="hover:text-gray-300 px-[2.3vw] py-[1.5vh] bg-[#7183F4] rounded text-white">Login</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  );
}
