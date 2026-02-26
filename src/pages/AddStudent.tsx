import { useState } from "react";
import { GraduationCap, Upload } from "lucide-react";

const AddStudent = () => {
  const [form, setForm] = useState({
    name: "",
    roll: "",
    branch: "",
    batch: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Student added successfully! (UI only)");
    setForm({ name: "", roll: "", branch: "", batch: "", email: "" });
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="flex items-center gap-2">
        <GraduationCap size={24} className="text-secondary" />
        <h1 className="text-2xl font-bold text-foreground">Add Student</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-md p-8 space-y-5">
        {[
          { label: "Full Name", name: "name", type: "text", placeholder: "Aditya Patil" },
          { label: "Roll Number", name: "roll", type: "text", placeholder: "CU2026001" },
          { label: "Branch", name: "branch", type: "text", placeholder: "Computer Science" },
          { label: "Batch", name: "batch", type: "text", placeholder: "2023-2027" },
          { label: "Email Address", name: "email", type: "email", placeholder: "aditya@cu.edu" },
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

        {/* Photo Upload */}
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-foreground">Upload Photo</label>
          <label className="flex items-center justify-center gap-2 w-full px-4 py-6 rounded-lg border-2 border-dashed border-border bg-muted/30 text-muted-foreground cursor-pointer hover:bg-muted/50 transition-colors">
            <Upload size={20} />
            <span className="text-sm">Click to upload student photo</span>
            <input type="file" accept="image/*" className="hidden" />
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-secondary text-secondary-foreground py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
