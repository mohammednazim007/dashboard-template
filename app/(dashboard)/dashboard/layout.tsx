import FSidebar from "@/app/fake/FSidebar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-slate-400">
      <div>
        <FSidebar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
