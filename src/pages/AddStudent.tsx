import { useState } from "react";
import { GraduationCap, Upload } from "lucide-react";
import axios from "axios";

const AddStudent = () => {
  const [form, setForm] = useState({
    name: "",
    roll: "",
    branch: "",
    batch: "",
    email: "",
  });

  const [image, setImage] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload student photo");
      return;
    }

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("roll", form.roll);
    formData.append("branch", form.branch);
    formData.append("batch", form.batch);
    formData.append("email", form.email);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:8000/add-student", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Student added successfully!");
      setForm({ name: "", roll: "", branch: "", batch: "", email: "" });
      setImage(null);
    } catch (error) {
      console.error(error);
      alert("Error adding student");
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="flex items-center gap-2">
        <GraduationCap size={24} className="text-secondary" />
        <h1 className="text-2xl font-bold text-foreground">Add Student</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-md p-8 space-y-5">
        {[
          { label: "Full Name", name: "name", type: "text", placeholder: "Enter student name" },
          { label: "Roll Number", name: "roll", type: "text", placeholder: "Enter student rollno" },
          { label: "Branch", name: "branch", type: "text", placeholder: "Enter branch" },
          { label: "Batch", name: "batch", type: "text", placeholder: "Enter academic year" },
          { label: "Email Address", name: "email", type: "email", placeholder: "Enter student email adress" },
        ].map((field) => (
          <div key={field.name} className="space-y-1.5">
            <label className="block text-sm font-medium text-foreground">
              {field.label}
            </label>
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
          <label className="block text-sm font-medium text-foreground">
            Upload Photo
          </label>

          <label className="flex items-center justify-center gap-2 w-full px-4 py-6 rounded-lg border-2 border-dashed border-border bg-muted/30 text-muted-foreground cursor-pointer hover:bg-muted/50 transition-colors">
            <Upload size={20} />
            <span className="text-sm">
              {image ? image.name : "Click to upload student photo"}
            </span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
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