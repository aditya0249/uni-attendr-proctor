import { useState } from "react";
import { UserPlus } from "lucide-react";

const AddTeacher = () => {
  const [form, setForm] = useState({ name: "", email: "", department: "", subject: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Teacher added successfully! (UI only)");
    setForm({ name: "", email: "", department: "", subject: "" });
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="flex items-center gap-2">
        <UserPlus size={24} className="text-secondary" />
        <h1 className="text-2xl font-bold text-foreground">Add Teacher</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-md p-8 space-y-5">
        {[
          { label: "Full Name", name: "name", type: "text", placeholder: "Dr. Rahul Mehta" },
          { label: "Email Address", name: "email", type: "email", placeholder: "rahul.mehta@cu.edu" },
          { label: "Department", name: "department", type: "text", placeholder: "Computer Science" },
          { label: "Subject", name: "subject", type: "text", placeholder: "Data Structures" },
        ].map((field) => (
          <div key={field.name} className="space-y-1.5">
            <label className="block text-sm font-medium text-foreground">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={form[field.name as keyof typeof form]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-secondary text-secondary-foreground py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
        >
          Add Teacher
        </button>
      </form>
    </div>
  );
};

export default AddTeacher;
