export interface IAgency {
  userId: string;
  name: string;
  level: number;
  diamonds: string;
  beans: string;
  coinSell: string;
  coinBuy: string;
  location: string;
  status: "active" | "inactive";
}

export interface IStatMetric {
  title: string;
  value: string;
  growth: string;
  iconType: "users" | "wallet" | "chart";
  iconColorClass: string;
  iconBgClass: string;
}

export interface ISidebarItem {
  label: string;
  icon: string;
  active?: boolean;
}
