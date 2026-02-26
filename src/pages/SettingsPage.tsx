import { useState } from "react";
import { User, Bell, Shield, Palette, Save } from "lucide-react";

const SettingsPage = () => {
  const [profile, setProfile] = useState({
    name: "Aditya Patil",
    email: "aditya.patil@cu.edu",
    phone: "+91 98765 43210",
    department: "Computer Science",
    role: "Admin",
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    attendanceAlerts: true,
    examAlerts: false,
    announcements: true,
  });

  const [saved, setSaved] = useState(false);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Settings</h1>

      {/* Profile Section */}
      <div className="bg-card rounded-xl shadow-md p-6 space-y-5">
        <div className="flex items-center gap-2 text-foreground">
          <User size={20} className="text-secondary" />
          <h2 className="text-lg font-semibold">Profile Information</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "Full Name", name: "name", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Phone", name: "phone", type: "tel" },
            { label: "Department", name: "department", type: "text" },
          ].map((field) => (
            <div key={field.name} className="space-y-1.5">
              <label className="block text-sm font-medium text-foreground">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={profile[field.name as keyof typeof profile]}
                onChange={handleProfileChange}
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
              />
            </div>
          ))}
        </div>

        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-foreground">Role</label>
          <input
            type="text"
            value={profile.role}
            disabled
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-muted text-muted-foreground text-sm cursor-not-allowed"
          />
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-card rounded-xl shadow-md p-6 space-y-5">
        <div className="flex items-center gap-2 text-foreground">
          <Bell size={20} className="text-secondary" />
          <h2 className="text-lg font-semibold">Notification Preferences</h2>
        </div>

        <div className="space-y-3">
          {[
            { key: "emailAlerts" as const, label: "Email Alerts", desc: "Receive important updates via email" },
            { key: "attendanceAlerts" as const, label: "Attendance Alerts", desc: "Get notified about attendance changes" },
            { key: "examAlerts" as const, label: "Exam Alerts", desc: "Notifications for exam schedule and results" },
            { key: "announcements" as const, label: "Announcements", desc: "University-wide announcements" },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
              <button
                onClick={() => handleToggle(item.key)}
                className={`w-11 h-6 rounded-full relative transition-colors ${
                  notifications[item.key] ? "bg-secondary" : "bg-border"
                }`}
              >
                <span
                  className={`absolute top-0.5 w-5 h-5 rounded-full bg-card shadow-sm transition-transform ${
                    notifications[item.key] ? "left-[22px]" : "left-0.5"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Security */}
      <div className="bg-card rounded-xl shadow-md p-6 space-y-5">
        <div className="flex items-center gap-2 text-foreground">
          <Shield size={20} className="text-secondary" />
          <h2 className="text-lg font-semibold">Security</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-foreground">Current Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-foreground">New Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
      >
        <Save size={18} />
        {saved ? "Saved!" : "Save Changes"}
      </button>
    </div>
  );
};

export default SettingsPage;
