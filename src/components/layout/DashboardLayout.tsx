import { useState } from "react";
import { Menu } from "lucide-react";
import Navbar from "./Navbar";
import AppSidebar from "./AppSidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex flex-1">
        <AppSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex-1 flex flex-col min-w-0">
          {/* Mobile menu trigger */}
          <div className="lg:hidden p-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-lg bg-card shadow-sm hover:bg-muted transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>
          <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
