import { useState, useEffect } from "react";
import axios from "axios";
import { Camera, CirclePlay, CircleStop, Info } from "lucide-react";

const CameraAttendance = () => {
  const [cameraOn, setCameraOn] = useState(false);
  const [attendance, setAttendance] = useState<any[]>([]);

  const startCamera = async () => {
    await axios.post("http://localhost:8000/start");
    setCameraOn(true);
  };

  const stopCamera = async () => {
    await axios.post("http://localhost:8000/stop");
    setCameraOn(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get("http://localhost:8000/attendance")
        .then(res => setAttendance(res.data));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6">

      <div className="bg-card rounded-xl shadow-md p-6 w-full max-w-3xl text-center space-y-6">
        <div className="flex items-center justify-center gap-2">
          <Camera size={28} />
          <h1 className="text-2xl font-bold">Camera Attendance</h1>
        </div>

        {/* Live Camera Feed */}
        <div className="aspect-video bg-black rounded-xl overflow-hidden">
          {cameraOn ? (
            <img
              src="http://localhost:8000/video"
              alt="Camera Feed"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              Camera is stopped
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={startCamera}
            className="bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            Start Attendance
          </button>

          <button
            onClick={stopCamera}
            className="bg-red-600 text-white px-6 py-2 rounded-lg"
          >
            Stop Attendance
          </button>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="w-full max-w-3xl">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Roll No</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((student, index) => (
              <tr key={index}>
                <td className="border p-2">{student.roll_number}</td>
                <td className="border p-2">{student.name}</td>
                <td className="border p-2 text-green-600 font-semibold">
                  {student.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-sm text-muted-foreground bg-muted px-4 py-3 rounded-lg">
        Attendance will only be marked when camera is manually started.
      </div>
    </div>
  );
};

export default CameraAttendance;