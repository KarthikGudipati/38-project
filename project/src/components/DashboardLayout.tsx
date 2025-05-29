
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Hash, User, LogOut, Video, BarChart, Settings } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
}

export const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Hash className="h-6 w-6 text-emerald-600" />
            <h1 className="text-xl font-bold text-gray-900">VideoTag AI</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/dashboard")}
              className="text-gray-600 hover:text-emerald-600"
            >
              <BarChart className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate("/video-analysis")}
              className="text-gray-600 hover:text-emerald-600"
            >
              <Video className="h-4 w-4 mr-2" />
              Analyze
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate("/history")}
              className="text-gray-600 hover:text-emerald-600"
            >
              <BarChart className="h-4 w-4 mr-2" />
              History
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate("/settings")}
              className="text-gray-600 hover:text-emerald-600"
            >
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </nav>
          
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="text-gray-600"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold gradient-text">{title}</h2>
        </div>
        {children}
      </main>
    </div>
  );
};
