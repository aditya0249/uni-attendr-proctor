import { Camera, CirclePlay, CircleStop, Info } from "lucide-react";

const CameraAttendance = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-12rem)]">
      <div className="bg-card rounded-xl shadow-md p-8 w-full max-w-2xl text-center space-y-6">
        <div className="flex items-center justify-center gap-2">
          <Camera size={28} className="text-secondary" />
          <h1 className="text-2xl font-bold text-foreground">Camera Attendance</h1>
        </div>

        {/* Camera feed placeholder */}
        <div className="aspect-video bg-foreground/90 rounded-xl flex items-center justify-center">
          <div className="text-center space-y-2">
            <Camera size={48} className="mx-auto text-muted" />
            <p className="text-muted-foreground text-sm">Camera feed will appear here</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity">
            <CirclePlay size={20} />
            Start Attendance
          </button>
          <button className="flex items-center gap-2 bg-destructive text-destructive-foreground px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity">
            <CircleStop size={20} />
            Stop Attendance
          </button>
        </div>

        {/* Note */}
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-muted px-4 py-3 rounded-lg">
          <Info size={16} className="flex-shrink-0" />
          <span>Attendance will only be marked when camera is manually started.</span>
        </div>
      </div>
    </div>
  );
};

export default CameraAttendance;
