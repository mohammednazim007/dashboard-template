"use client";
import React from "react";
import {
  LayoutDashboard,
  Users,
  Building2,
  Coins,
  Video,
  History,
  Trophy,
  ShieldCheck,
  ShieldAlert,
  BarChart3,
  Gift,
  Settings,
} from "lucide-react";
import Image from "next/image";
import brandLogo from "@/app/assets/brand-logo.svg";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      active: true,
      path: "/dashboard",
    },
    { label: "Users", icon: Users, path: "/dashboard/users" },
    { label: "Agencies", icon: Building2, path: "/dashboard/agencies" },
    {
      label: "Coin Management",
      icon: Coins,
      path: "/dashboard/coin-management",
    },
    { label: "Live Streams", icon: Video, path: "/dashboard/live-streams" },
    {
      label: "Transaction History",
      icon: History,
      path: "/dashboard/transaction-history",
    },
    { label: "PK Masters", icon: Trophy, path: "/dashboard/pk-masters" },
    { label: "Kyc Centre", icon: ShieldCheck, path: "/dashboard/kyc-centre" },
    { label: "Moderation", icon: ShieldAlert, path: "/dashboard/moderation" },
    { label: "Analytics", icon: BarChart3, path: "/dashboard/analytics" },
    { label: "Gifts & Assets", icon: Gift, path: "/dashboard/gifts-assets" },
    { label: "Settings", icon: Settings, path: "/dashboard/settings" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar Container */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white/10 backdrop-blur-md border-r border-white/20 z-50 transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:block lg:min-h-screen
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full py-6 px-4">
          {/* Logo Area */}
          {/* <div className="flex items-center gap-3 px-2 mb-10">
            <div className="w-8 h-8 rounded-full from-purple-500 to-orange-400 flex items-center justify-center text-white font-bold text-xs shadow-lg">
              PL
            </div>
            <div className="flex flex-col">
              <span className="text-slate-800 font-bold text-lg leading-tight">
                Pen Live
              </span>
              <span className="text-orange-500 font-medium text-xs">
                Admin Panel
              </span>
            </div>
            <button className="lg:hidden ml-auto" onClick={toggleSidebar}>
              <X size={20} className="text-slate-600" />
            </button>
          </div> */}
          {/* Brand Logo */}
          <div className="flex items-center gap-3 px-2 mb-10">
            <Image
              src={brandLogo}
              alt="Pen Live"
              width={500}
              height={500}
              priority={true}
            />
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto space-y-1 custom-scrollbar">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                  ${
                    item.active
                      ? "text-orange-500 bg-orange-50/50"
                      : "text-slate-700 hover:bg-white/20 hover:text-slate-900"
                  }
                `}
              >
                <item.icon
                  size={18}
                  className={item.active ? "text-orange-500" : "text-slate-500"}
                />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
