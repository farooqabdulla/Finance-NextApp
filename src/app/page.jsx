// src/app/page.js
import Link from 'next/link';
import LandingNavbar from '../components/LandingNavbar';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <>
      <div id="homePageLogin" className="h-[100vh] w-full bg-[#191D31]">
      <LandingNavbar />
      
      <section className="h-[100vh] pt-[5vh] md:flex px-[6vw] items-center justify-center w-full">
        <div className="md:w-[50%] text-white">
          <h2 className="md:text-[20px] font-semibold mb-2">Welcome to Finance App ,</h2>
          <h3 className="md:text-[48px] font-bold md:leading-none">Transform Your Financial Future with Our Cutting-Edge<span className="cl"> Finance App</span>.</h3>
          <p className="md:text-[16px] mt-4 text-gray-400">Are you looking for a streamlined way to manage loans and payments? Our finance app is designed to simplify your financial tracking, offering powerful features to keep you organized and informed.</p>
          <Link href="/login">
            <button className="mt-8 bg-white flex items-center md:text-lg text-gray-700 px-[2vw] py-[2vh] rounded-lg">
              <span className="pr-3 border-gray-700 font-[500]"> Get Started</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#374151">
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </button>
          </Link>
        </div>
        <picture className="md:w-[50%] pt-[2vh] flex items-center justify-end">
          <Image className="md:h-[80%] md:w-[80%]" src="/hero-finance.png" alt="Finance App Hero Image" width={500} height={500} />
        </picture>
      </section>
      <section className="h-[50vh] w-full bg-[#191D31] flex flex-col justify-center text-white px-[6vw] text-center">
        <h3 className="md:text-[42px] font-bold md:leading-none">Streamline Your Loan Management with Enhanced Dashboard.</h3>
        <p className="mt-[4vh] text-[16px] text-gray-400">
          <span className="font-semibold">Manage Your Finances Seamlessly:</span> Loan tracking system offers a comprehensive solution for businesses and individuals looking to efficiently manage loans, repayments, and participant contributions. With an easy-to-use interface, powerful reporting tools, and customizable payment schedules, managing your financial operations has never been easier.
        </p>
      </section>
      <footer className="w-full md:flex justify-between h-[50vh] bg-[#191D31] text-white px-[6vw] border-t border-gray-700 pt-[5vh]">
        <div className="w-[23%]">
          <h2 className="text-2xl font-bold">Finance App</h2>
          <p className="text-[16px] text-gray-400 mt-[3vh]">Transform Your Financial Future with Our Cutting-Edge Finance App.</p>
        </div>
        <div className="w-[20%] flex justify-between">
          <div>
            <h3>Home</h3>
            <ul className="mt-[3vh] space-y-2 text-gray-400">
              <li className="hover:underline">Product</li>
              <li className="hover:underline">Pricing</li>
              <li className="hover:underline">Business</li>
              <li className="hover:underline">Enterprise</li>
            </ul>
          </div>
          <div>
            <h3>About us</h3>
            <ul className="mt-[3vh] space-y-2 text-gray-400">
              <li className="hover:underline">Company</li>
              <li className="hover:underline">Leadership</li>
              <li className="hover:underline">About Us</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
