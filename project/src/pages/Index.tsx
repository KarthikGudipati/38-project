
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Video, Hash } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50">
      {/* Simple Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Hash className="h-6 w-6 text-emerald-600" />
            <h1 className="text-xl font-bold text-gray-900">VideoTag AI</h1>
          </div>
          <div className="space-x-3">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/login")}
              className="text-gray-600"
            >
              Login
            </Button>
            <Button 
              onClick={() => navigate("/register")}
              className="primary-btn"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center space-y-8 animate-slide-up">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-gray-900">
              AI Video Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Extract hashtags and insights from your videos with AI
            </p>
          </div>
          
          <div className="space-x-4">
            <Button 
              size="lg"
              onClick={() => navigate("/register")}
              className="primary-btn text-lg px-8 py-3"
            >
              Get Started
            </Button>
          </div>
        </div>
        
        {/* Simple Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="modern-card p-6">
            <Video className="h-8 w-8 text-emerald-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Upload Video</h3>
            <p className="text-gray-600">Upload your video files quickly</p>
          </div>
          
          <div className="modern-card p-6">
            <Hash className="h-8 w-8 text-emerald-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">AI Analysis</h3>
            <p className="text-gray-600">Get AI-powered hashtag suggestions</p>
          </div>
          
          <div className="modern-card p-6">
            <Video className="h-8 w-8 text-emerald-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Export Results</h3>
            <p className="text-gray-600">Download your analysis results</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
