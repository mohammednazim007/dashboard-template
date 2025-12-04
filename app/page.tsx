"use client";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-[#a8c0d6] overflow-hidden font-sans">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="flex-1 flex flex-col h-full relative overflow-hidden bg-gradient-to-br from-[#b0c4de] to-[#a8c0d6]">
        {/* Subtle overlay to give depth to the content area similar to image */}
        <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
        <Dashboard toggleSidebar={toggleSidebar} />
      </main>
    </div>
  );
}
