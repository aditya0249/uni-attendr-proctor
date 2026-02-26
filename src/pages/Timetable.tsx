import { Calendar } from "lucide-react";

const timetableData = [
  { subject: "Data Structures", teacher: "Dr. Mehta", day: "Monday", start: "09:00 AM", end: "10:00 AM", room: "301" },
  { subject: "Machine Learning", teacher: "Prof. Kapoor", day: "Monday", start: "10:00 AM", end: "11:00 AM", room: "205" },
  { subject: "DBMS", teacher: "Dr. Sharma", day: "Tuesday", start: "09:00 AM", end: "10:30 AM", room: "108" },
  { subject: "Operating Systems", teacher: "Prof. Gupta", day: "Tuesday", start: "11:00 AM", end: "12:00 PM", room: "204" },
  { subject: "Computer Networks", teacher: "Dr. Reddy", day: "Wednesday", start: "09:00 AM", end: "10:00 AM", room: "301" },
  { subject: "Linear Algebra", teacher: "Prof. Joshi", day: "Wednesday", start: "02:00 PM", end: "03:00 PM", room: "102" },
  { subject: "Data Structures Lab", teacher: "Dr. Mehta", day: "Thursday", start: "10:00 AM", end: "12:00 PM", room: "Lab 3" },
  { subject: "ML Lab", teacher: "Prof. Kapoor", day: "Friday", start: "10:00 AM", end: "12:00 PM", room: "Lab 5" },
];

const Timetable = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Calendar size={24} className="text-secondary" />
        <h1 className="text-2xl font-bold text-foreground">Timetable</h1>
      </div>

      <div className="bg-card rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="text-left px-6 py-3 font-medium">Subject</th>
                <th className="text-left px-6 py-3 font-medium">Teacher</th>
                <th className="text-left px-6 py-3 font-medium">Day</th>
                <th className="text-left px-6 py-3 font-medium">Start Time</th>
                <th className="text-left px-6 py-3 font-medium">End Time</th>
                <th className="text-left px-6 py-3 font-medium">Room</th>
              </tr>
            </thead>
            <tbody>
              {timetableData.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-border hover:bg-accent/50 transition-colors ${
                    i % 2 === 0 ? "bg-card" : "bg-muted/30"
                  }`}
                >
                  <td className="px-6 py-3 font-medium text-foreground">{row.subject}</td>
                  <td className="px-6 py-3 text-muted-foreground">{row.teacher}</td>
                  <td className="px-6 py-3 text-muted-foreground">{row.day}</td>
                  <td className="px-6 py-3 text-muted-foreground">{row.start}</td>
                  <td className="px-6 py-3 text-muted-foreground">{row.end}</td>
                  <td className="px-6 py-3">
                    <span className="bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded-full">
                      {row.room}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Timetable;
