// src/app/page.js
import Link from 'next/link';
import LandingNavbar from '../components/LandingNavbar';

export default function LandingPage() {
  return (
    <>
      <LandingNavbar />
      <div className="container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold">Welcome to the Finance App</h1>
        <p className="text-lg mt-4">Track your income and expenses effectively.</p>
        <Link href="/login">
          <button className="mt-8 bg-blue-500 text-white px-6 py-2 rounded-lg">
            Login
          </button>
        </Link>
      </div>
    </>
  );
}
