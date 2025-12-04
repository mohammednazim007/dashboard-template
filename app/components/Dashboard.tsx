"use client";
import React from "react";
import { Upload, Users, Wallet, BarChart } from "lucide-react";
import { IAgency } from "../types/types";
import StatsCard from "../shared/StatsCard/StatsCard";
import AgencyTable from "../shared/AgencyTable/AgencyTable";

const mockData: IAgency[] = [
  {
    userId: "0012300",
    name: "StartHost...",
    level: 1,
    diamonds: "100M",
    beans: "100K",
    coinSell: "14K",
    coinBuy: "100K",
    location: "Bangladesh",
    status: "active",
  },
  {
    userId: "00122301",
    name: "Elite Broa...",
    level: 1,
    diamonds: "100K",
    beans: "100K",
    coinSell: "120K",
    coinBuy: "100M",
    location: "Bangladesh",
    status: "active",
  },
  {
    userId: "001",
    name: "Premium..",
    level: 1,
    diamonds: "100K",
    beans: "100M",
    coinSell: "90K",
    coinBuy: "100M",
    location: "Bangladesh",
    status: "active",
  },
  {
    userId: "09401",
    name: "StartHost...",
    level: 1,
    diamonds: "100K",
    beans: "100K",
    coinSell: "99K",
    coinBuy: "100K",
    location: "Bangladesh",
    status: "active",
  },
  {
    userId: "0091",
    name: "StartHost...",
    level: 1,
    diamonds: "100K",
    beans: "100K",
    coinSell: "100K",
    coinBuy: "100K",
    location: "Bangladesh",
    status: "active",
  },
  {
    userId: "001100",
    name: "Premium...",
    level: 1,
    diamonds: "100K",
    beans: "100K",
    coinSell: "100K",
    coinBuy: "100K",
    location: "Bangladesh",
    status: "active",
  },
];

interface DashboardProps {
  toggleSidebar?: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ toggleSidebar }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 lg:p-8">
      <div className="blur-bg p-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3">
              {toggleSidebar && (
                <button
                  onClick={toggleSidebar}
                  className="lg:hidden p-1 bg-white/50 rounded text-slate-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </button>
              )}
              <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
            </div>
            <p className="text-slate-500 text-sm mt-1">
              Manage ur app from your dashboard
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/60 hover:bg-white/80 text-slate-700 text-sm font-medium rounded-lg border border-white/40 shadow-sm transition-colors">
            Export Data
            <Upload size={16} />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Total Agencies"
            value="3"
            growth="+3 this month"
            icon={Users}
            iconBgClass="bg-purple-200"
            iconColorClass="text-purple-600"
            bgClass="bg-[#EAE7F8]"
          />
          <StatsCard
            title="Total Coin Sales"
            value="5.3M"
            growth="+3 this month"
            icon={Wallet}
            iconBgClass="bg-blue-200"
            iconColorClass="text-blue-600"
            bgClass="bg-[#E4F1FA]"
          />
          <StatsCard
            title="Avg Commission"
            value="10.0%"
            growth="+3 this month"
            icon={BarChart}
            iconBgClass="bg-green-200"
            iconColorClass="text-green-600"
            bgClass="bg-[#D8FFDF]"
          />
        </div>
      </div>

      {/* Main Content Table */}
      <AgencyTable data={mockData} />
    </div>
  );
};

export default Dashboard;
