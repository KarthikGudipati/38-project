
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "@/components/AuthForm";
import { useToast } from "@/hooks/use-toast";
import { Hash, Rocket } from "lucide-react";

const MOCK_USERS = [
  { email: "demo@example.com", password: "password123", name: "Demo User" }
];

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRegister = async ({ 
    email, 
    password, 
    name 
  }: { 
    email: string; 
    password: string; 
    name?: string 
  }) => {
    setLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const userExists = MOCK_USERS.some(u => u.email === email);
    
    if (userExists) {
      toast({
        title: "Registration failed",
        description: "Email already exists",
        variant: "destructive",
      });
      throw new Error("Email already exists");
    }
    
    localStorage.setItem("user", JSON.stringify({ email, name }));
    
    toast({
      title: "🎉 Account created!",
      description: "Welcome to SEO Keyword Guru - let's optimize your videos!",
    });
    
    navigate("/dashboard");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="glass-card p-10 animate-slide-up shadow-2xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">SK</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">SEO Keyword Guru</h1>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Join the revolution! 🚀</h2>
            <p className="text-gray-600">Create your account to start optimizing</p>
          </div>
          
          <div className="mb-6 p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200">
            <div className="flex items-center space-x-2 mb-3">
              <Rocket className="h-5 w-5 text-purple-600" />
              <p className="text-sm font-semibold text-purple-700">What you'll get:</p>
            </div>
            <ul className="text-sm text-purple-600 space-y-1">
              <li>✨ AI-powered video analysis</li>
              <li>📈 SEO keyword optimization</li>
              <li>🎯 Viral hashtag suggestions</li>
              <li>📊 Performance analytics</li>
            </ul>
          </div>
          
          <AuthForm type="register" onSubmit={handleRegister} />
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-purple-600 hover:text-purple-700 font-semibold underline decoration-2 underline-offset-2"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
