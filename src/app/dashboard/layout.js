// src/app/dashboard/layout.js
import DashboardNavbar from '../../components/DashboardNavbar';
import Sidebar from '../../components/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Fixed Sidebar */}
      {/* <Sidebar /> */}

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Fixed Navbar */}
        {/* <DashboardNavbar /> */}
        
        {/* Scrollable Content */}
        <div className="">
          {children}
        </div>
      </div>
    </div>
  );
}
