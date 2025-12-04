import React from "react";
import { Eye, Filter } from "lucide-react";
import { IAgency } from "../../types/types";

interface AgencyTableProps {
  data: IAgency[];
}

const AgencyTable: React.FC<AgencyTableProps> = ({ data }) => {
  return (
    <div className=" overflow-hidden shadow-sm mt-6">
      {/* Toolbar */}
      <div className="pb-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="relative w-full sm:w-96">
          <input
            type="text"
            placeholder="Search by agency ID or name"
            className="w-full bg-white/50 border-none rounded-lg px-4 py-2 text-sm text-slate-700 placeholder-slate-500 focus:ring-2 focus:ring-orange-300 outline-none"
          />
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white/70 hover:bg-white text-[#FF9080] text-sm font-medium rounded-lg transition-colors shadow-sm">
            <Filter size={16} />
            Filter
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary bg-[#FF9080] text-white text-sm font-medium rounded-lg transition-colors shadow-sm whitespace-nowrap">
            Add Agency
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="blur-bg overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-500/10 text-slate-600 text-sm border-b border-slate-500/10">
              <th className="py-3 px-4 font-medium whitespace-nowrap">
                User ID
              </th>
              <th className="py-3 px-4 font-medium whitespace-nowrap">Name</th>
              <th className="py-3 px-4 font-medium whitespace-nowrap">Level</th>
              <th className="py-3 px-4 font-medium whitespace-nowrap">
                Diamonds
              </th>
              <th className="py-3 px-4 font-medium whitespace-nowrap">Beans</th>
              <th className="py-3 px-4 font-medium whitespace-nowrap">
                Coin Sell
              </th>
              <th className="py-3 px-4 font-medium whitespace-nowrap">
                Coin Buy
              </th>
              <th className="py-3 px-4 font-medium whitespace-nowrap">
                Location
              </th>
              <th className="py-3 px-4 font-medium whitespace-nowrap text-center">
                Status
              </th>
              <th className="py-3 px-4 font-medium whitespace-nowrap text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {data.map((row, index) => (
              <tr
                key={row.userId}
                className={`
                  border-b border-slate-500/5 last:border-none hover:bg-white/30 transition-colors
                  ${index % 2 === 0 ? "bg-transparent" : "bg-slate-500/5"}
                `}
              >
                <td className="py-3 px-4 font-semibold text-slate-800">
                  {row.userId}
                </td>
                <td className="py-3 px-4 text-slate-700">{row.name}</td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-purple-200 text-purple-700 shadow-sm border border-purple-300">
                    <span className="mr-0.5">💎</span> LV{row.level}
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-600">{row.diamonds}</td>
                <td className="py-3 px-4 text-slate-600">{row.beans}</td>
                <td className="py-3 px-4 text-slate-600">{row.coinSell}</td>
                <td className="py-3 px-4 text-slate-600">{row.coinBuy}</td>
                <td className="py-3 px-4 text-slate-600">{row.location}</td>
                <td className="py-3 px-4 text-center">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      row.status === "active"
                        ? "bg-green-400/80 text-green-900"
                        : "bg-red-400/80 text-red-900"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  <button className="p-1.5 rounded-full hover:bg-slate-200/50 text-slate-700 transition-colors">
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgencyTable;
