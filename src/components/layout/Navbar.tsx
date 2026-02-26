import { Bell, ChevronDown, LogOut } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full bg-nav text-nav-foreground h-16 flex items-center justify-between px-6 shadow-md z-50">
      {/* Left */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-nav-foreground/20 flex items-center justify-center font-bold text-sm">
          CU
        </div>
        <span className="text-lg font-semibold tracking-tight hidden sm:inline">
          CU Attendance Portal
        </span>
      </div>

      {/* Center */}
      <div className="hidden md:flex items-center gap-2 bg-nav-foreground/10 rounded-lg px-4 py-2 text-sm">
        <span>Session:</span>
        <span className="font-medium">Jan–Jun 2026</span>
        <ChevronDown size={16} />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-lg hover:bg-nav-foreground/10 transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-xs font-bold">
            AP
          </div>
          <span className="text-sm font-medium hidden lg:inline">Aditya Patil</span>
        </div>

        <button className="flex items-center gap-1 text-sm bg-nav-foreground/10 hover:bg-nav-foreground/20 px-3 py-1.5 rounded-lg transition-colors">
          <LogOut size={16} />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
