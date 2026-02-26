import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import {
  Home,
  User,
  ClipboardCheck,
  Calendar,
  UserPlus,
  GraduationCap,
  Camera,
  ShieldCheck,
  BarChart3,
  Settings,
} from "lucide-react";

const menuItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "My Info", url: "/my-info", icon: User },
  { title: "Attendance", url: "/attendance", icon: ClipboardCheck },
  { title: "Timetable", url: "/timetable", icon: Calendar },
  { title: "Add Teacher", url: "/add-teacher", icon: UserPlus },
  { title: "Add Student", url: "/add-student", icon: GraduationCap },
  { title: "Camera Attendance", url: "/camera-attendance", icon: Camera },
  { title: "Exam Monitoring", url: "/exam-monitoring", icon: ShieldCheck },
  { title: "Reports", url: "/reports", icon: BarChart3 },
  { title: "Settings", url: "/settings", icon: Settings },
];

interface AppSidebarProps {
  open: boolean;
  onClose: () => void;
}

const AppSidebar = ({ open, onClose }: AppSidebarProps) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-foreground/30 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-card shadow-md z-40
          transition-transform duration-200 ease-in-out
          lg:translate-x-0 lg:static lg:z-auto
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <nav className="py-4 flex flex-col gap-1 px-3 overflow-y-auto h-full">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.url;
            return (
              <RouterNavLink
                key={item.title}
                to={item.url}
                onClick={onClose}
                className={`
                  flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all
                  ${
                    isActive
                      ? "bg-accent text-accent-foreground font-semibold border-l-4 border-secondary"
                      : "text-foreground hover:bg-muted"
                  }
                `}
              >
                <item.icon size={18} />
                <span>{item.title}</span>
              </RouterNavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default AppSidebar;
