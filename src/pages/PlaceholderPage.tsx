import { Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage = ({ title }: PlaceholderPageProps) => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-12rem)]">
      <div className="text-center space-y-4">
        <div className="mx-auto w-16 h-16 rounded-full bg-accent flex items-center justify-center">
          <Construction size={32} className="text-secondary" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">{title}</h1>
        <p className="text-muted-foreground text-sm max-w-md">
          This section is under development and will be available soon.
        </p>
      </div>
    </div>
  );
};

export default PlaceholderPage;
