import React from "react";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  growth: string;
  icon: LucideIcon;
  iconColorClass: string;
  iconBgClass: string;
  growthColorClass?: string;
  bgClass?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  growth,
  icon: Icon,
  iconColorClass,
  iconBgClass,
  growthColorClass = "text-green-500",
  bgClass = "bg-white/80",
}) => {
  return (
    <div
      className={`${bgClass} backdrop-blur-sm rounded-xl p-5 shadow-sm border border-white/40 flex justify-between items-start`}
    >
      <div className="flex flex-col gap-1">
        <span className="text-slate-600 text-sm font-medium">{title}</span>
        <h3 className="text-2xl font-bold text-slate-800 mt-2">{value}</h3>
        <span className={`text-xs font-semibold mt-1 ${growthColorClass}`}>
          {growth}
        </span>
      </div>
      <div className={`p-3 rounded-xl ${iconBgClass}`}>
        <Icon className={`w-6 h-6 ${iconColorClass}`} />
      </div>
    </div>
  );
};

export default StatsCard;
