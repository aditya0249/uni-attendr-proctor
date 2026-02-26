import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import CameraAttendance from "./pages/CameraAttendance";
import Timetable from "./pages/Timetable";
import AddTeacher from "./pages/AddTeacher";
import AddStudent from "./pages/AddStudent";
import PlaceholderPage from "./pages/PlaceholderPage";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/my-info" element={<PlaceholderPage title="My Info" />} />
            <Route path="/attendance" element={<PlaceholderPage title="Attendance" />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/add-teacher" element={<AddTeacher />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/camera-attendance" element={<CameraAttendance />} />
            <Route path="/exam-monitoring" element={<PlaceholderPage title="Exam Monitoring" />} />
            <Route path="/reports" element={<PlaceholderPage title="Reports" />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DashboardLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
