import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "@/context/UserContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Finance App",
  description: "A simple finance tracking app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider>
          <ToastContainer />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
