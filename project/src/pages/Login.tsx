
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "@/components/AuthForm";
import { useToast } from "@/hooks/use-toast";
import { Hash, Sparkles } from "lucide-react";

const MOCK_USERS = [
  { email: "demo@example.com", password: "password123", name: "Demo User" }
];

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async ({ email, password }: { email: string; password: string }) => {
    setLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user = MOCK_USERS.find(u => u.email === email && u.password === password);
    
    if (user) {
      localStorage.setItem("user", JSON.stringify({ email: user.email, name: user.name }));
      toast({
        title: "🎉 Welcome back!",
        description: "Successfully logged in to SEO Keyword Guru",
      });
      navigate("/dashboard");
    } else {
      throw new Error("Invalid credentials");
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="glass-card p-10 animate-slide-up shadow-2xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">SK</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">SEO Keyword Guru</h1>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Welcome back! 👋</h2>
            <p className="text-gray-600">Sign in to boost your video SEO</p>
          </div>
          
          <div className="mb-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200">
            <div className="flex items-center space-x-2 mb-3">
              <Sparkles className="h-5 w-5 text-blue-600" />
              <p className="text-sm font-semibold text-blue-700">Demo Account</p>
            </div>
            <p className="text-sm text-blue-600 font-medium">📧 Email: demo@example.com</p>
            <p className="text-sm text-blue-600 font-medium">🔑 Password: password123</p>
          </div>
          
          <AuthForm type="login" onSubmit={handleLogin} />
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              New to SEO Keyword Guru?{" "}
              <button
                onClick={() => navigate("/register")}
                className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 underline-offset-2"
              >
                Create account
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
