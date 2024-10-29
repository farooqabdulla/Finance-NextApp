// src/components/LandingNavbar.js
import Link from 'next/link';

export default function LandingNavbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Finance App</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <span className="hover:text-gray-300">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <span className="hover:text-gray-300">Login</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
