import {
  Users,
  GraduationCap,
  BookOpen,
  TrendingUp,
  Megaphone,
  Clock,
} from "lucide-react";

const stats = [
  { title: "Total Students", value: "120", icon: Users, color: "text-secondary" },
  { title: "Total Teachers", value: "15", icon: GraduationCap, color: "text-success" },
  { title: "Today's Classes", value: "4", icon: BookOpen, color: "text-warning" },
  { title: "Attendance %", value: "87%", icon: TrendingUp, color: "text-info" },
];

const recentAttendance = [
  { name: "Rahul Sharma", roll: "CU2023001", subject: "Data Structures", time: "09:15 AM", status: "Present" },
  { name: "Priya Patel", roll: "CU2023002", subject: "Machine Learning", time: "10:00 AM", status: "Present" },
  { name: "Amit Kumar", roll: "CU2023003", subject: "Networks", time: "10:00 AM", status: "Present" },
  { name: "Sneha Reddy", roll: "CU2023004", subject: "DBMS", time: "11:30 AM", status: "Present" },
  { name: "Vikram Singh", roll: "CU2023005", subject: "Data Structures", time: "09:15 AM", status: "Present" },
];

const announcements = [
  { text: "Mid-sem exams start from March 15", date: "Feb 25, 2026" },
  { text: "Holiday on Feb 28 — National Science Day", date: "Feb 24, 2026" },
  { text: "Guest lecture on AI Ethics — Auditorium", date: "Feb 23, 2026" },
];

const upcomingClasses = [
  { subject: "Data Structures", time: "02:00 PM", room: "Room 301" },
  { subject: "Operating Systems", time: "03:00 PM", room: "Room 204" },
  { subject: "Linear Algebra", time: "04:00 PM", room: "Room 108" },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-card rounded-xl shadow-md p-6 flex items-center justify-between hover:scale-[1.02] transition-transform cursor-default"
          >
            <div>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
              <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-xl bg-accent ${stat.color}`}>
              <stat.icon size={28} />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Attendance Table */}
        <div className="lg:col-span-2 bg-card rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">Recent Attendance</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left px-6 py-3 text-muted-foreground font-medium">Name</th>
                  <th className="text-left px-6 py-3 text-muted-foreground font-medium">Roll No</th>
                  <th className="text-left px-6 py-3 text-muted-foreground font-medium hidden md:table-cell">Subject</th>
                  <th className="text-left px-6 py-3 text-muted-foreground font-medium hidden sm:table-cell">Time</th>
                  <th className="text-left px-6 py-3 text-muted-foreground font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentAttendance.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-3 font-medium text-foreground">{row.name}</td>
                    <td className="px-6 py-3 text-muted-foreground">{row.roll}</td>
                    <td className="px-6 py-3 text-muted-foreground hidden md:table-cell">{row.subject}</td>
                    <td className="px-6 py-3 text-muted-foreground hidden sm:table-cell">{row.time}</td>
                    <td className="px-6 py-3">
                      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-success/10 text-success">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Announcements */}
          <div className="bg-card rounded-xl shadow-md p-6">
            <div className="flex items-center gap-2 mb-4">
              <Megaphone size={18} className="text-secondary" />
              <h2 className="text-lg font-semibold text-foreground">Announcements</h2>
            </div>
            <div className="space-y-3">
              {announcements.map((a, i) => (
                <div key={i} className="border-l-2 border-secondary pl-3">
                  <p className="text-sm text-foreground">{a.text}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{a.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Classes */}
          <div className="bg-card rounded-xl shadow-md p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock size={18} className="text-warning" />
              <h2 className="text-lg font-semibold text-foreground">Upcoming Classes</h2>
            </div>
            <div className="space-y-3">
              {upcomingClasses.map((c, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="text-sm font-medium text-foreground">{c.subject}</p>
                    <p className="text-xs text-muted-foreground">{c.room}</p>
                  </div>
                  <span className="text-xs font-medium text-secondary bg-accent px-2.5 py-1 rounded-full">
                    {c.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
