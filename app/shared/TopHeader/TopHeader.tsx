import { LogOut } from "lucide-react";
import Image from "next/image";

interface TopHeaderProps {
  userName: string;
  adminId: string;
  avatarUrl: string;
}
const TopHeader = ({ userName, adminId, avatarUrl }: TopHeaderProps) => {
  const handleLogout = () => {
    console.log("Attempting secure logout...");
    alert("User logout triggered!");
  };

  return (
    <header className="flex justify-between items-center w-full py-3 px-5 bg-[#EBF6FF] border-b border-gray-200">
      {/* Left side: User Profile Group */}
      <div className="flex items-center space-x-3">
        {/* Avatar */}
        <Image
          width={40}
          height={40}
          src={avatarUrl}
          alt={`${userName} avatar`}
          className="w-10 h-10 rounded-full object-cover"
        />

        {/* Text Info */}
        <div className="flex flex-col leading-tight">
          {/* Username: purple color, bold, text based on the image's style */}
          <p className="font-semibold text-sm text-purple-700">@{userName}</p>
          {/* Admin ID: smaller, grayed out */}
          <p className="text-xs text-gray-500">admin id: {adminId}</p>
        </div>
      </div>

      {/* Right side: Logout Button/Link */}
      {/* A button styled as a minimal link with text-red for emphasis */}
      <button
        onClick={handleLogout}
        className="flex items-center text-red-500 hover:text-red-700 transition-colors duration-150 p-2 rounded-md"
      >
        {/* Using a popular icon library like 'lucide-react' for the arrow icon */}
        <LogOut className="w-5 h-5 mr-1" aria-hidden="true" />
        <span className="font-medium text-sm">Logout</span>
      </button>
    </header>
  );
};

export default TopHeader;
