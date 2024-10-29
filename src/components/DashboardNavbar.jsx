// src/components/DashboardNavbar.js
import Link from 'next/link';

export default function DashboardNavbar() {
  return (
    <nav className="text-gray-800 bg-white border p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/dashboard">
              <span className="hover:text-gray-300">Overview</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings">
              <span className="hover:text-gray-300">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
