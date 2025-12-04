"use client";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
// import TopHeader from "./shared/TopHeader/TopHeader";
// import profile from "@/app/assets/woman.webp";

export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="flex h-screen primary-bg overflow-hidden font-sans">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-1 flex flex-col h-full relative overflow-hidden ">
          <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
          <Dashboard toggleSidebar={toggleSidebar} />
        </main>
      </div>
    </div>
  );
}
