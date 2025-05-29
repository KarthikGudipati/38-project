
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Sparkles, History, Settings, BarChart, TrendingUp, Video, Zap } from "lucide-react";
import { PricingPlans } from "@/components/PricingPlans";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface NavigationHistoryItem {
  path: string;
  title: string;
  timestamp: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [recentHistory, setRecentHistory] = useState<NavigationHistoryItem[]>([]);
  const [showPricingDialog, setShowPricingDialog] = useState(false);
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
    }
    
    const historyString = localStorage.getItem("navigation-history") || "[]";
    const history = JSON.parse(historyString);
    setRecentHistory(history.slice(0, 5));
  }, [navigate]);
  
  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-8 animate-fade-in">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 text-white">
          <h1 className="text-4xl font-bold mb-3">Welcome to SEO Keyword Guru</h1>
          <p className="text-xl opacity-90 mb-6">Transform your videos into viral content with AI-powered optimization</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">94%</div>
              <div className="text-sm opacity-90">SEO Score Average</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">2.3M+</div>
              <div className="text-sm opacity-90">Views Generated</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">8.7/10</div>
              <div className="text-sm opacity-90">Viral Score</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="glass-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold">🚀 New Analysis</CardTitle>
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Upload className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <CardDescription className="text-gray-600">Upload and analyze your video content</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">Generate powerful SEO keywords, transcripts, and viral hashtag strategies</p>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200" 
                onClick={() => navigate("/video-analysis")}
              >
                Start Analysis
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="glass-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold">📊 Analytics Hub</CardTitle>
                <div className="p-3 bg-green-100 rounded-xl">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <CardDescription className="text-gray-600">Track your content performance</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">Monitor hashtag effectiveness and video optimization metrics</p>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full border-2 border-green-500 text-green-600 hover:bg-green-50 font-semibold py-3 rounded-xl transition-all duration-200" 
                onClick={() => navigate("/history")}
              >
                View Analytics
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="glass-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-purple-500">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold">🎯 Quick Tools</CardTitle>
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <CardDescription className="text-gray-600">Access powerful optimization tools</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">Keyword research, trend analysis, and competitor insights</p>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full border-2 border-purple-500 text-purple-600 hover:bg-purple-50 font-semibold py-3 rounded-xl transition-all duration-200" 
                onClick={() => navigate("/settings")}
              >
                Explore Tools
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Premium Upgrade Card */}
        <Card className="w-full glass-card bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50 border-2 border-gradient-to-r border-orange-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  🔥 Unlock Pro Features
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg mt-2">
                  Supercharge your content with advanced AI analytics
                </CardDescription>
              </div>
              <div className="p-4 bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl">
                <Sparkles className="h-8 w-8 text-orange-600" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-white/70 rounded-xl border border-orange-200">
                <div className="text-2xl font-bold text-orange-600 mb-1">$19</div>
                <div className="text-sm text-gray-600">Monthly Pro</div>
                <div className="text-xs text-orange-600 mt-1">Most Popular</div>
              </div>
              <div className="text-center p-4 bg-white/70 rounded-xl border-2 border-orange-400">
                <div className="text-2xl font-bold text-orange-600 mb-1">$99</div>
                <div className="text-sm text-gray-600">6 Months</div>
                <div className="text-xs text-green-600 mt-1">Save 15%</div>
              </div>
              <div className="text-center p-4 bg-white/70 rounded-xl border border-orange-200">
                <div className="text-2xl font-bold text-orange-600 mb-1">$179</div>
                <div className="text-sm text-gray-600">Annual Plan</div>
                <div className="text-xs text-green-600 mt-1">Save 25%</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Advanced competitor analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Viral trend forecasting</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Custom hashtag strategies</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Priority AI processing</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white text-lg font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200" 
              onClick={() => setShowPricingDialog(true)}
            >
              Upgrade to Pro
            </Button>
          </CardFooter>
        </Card>
        
        <Dialog open={showPricingDialog} onOpenChange={setShowPricingDialog}>
          <DialogContent className="sm:max-w-[900px]">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-center mb-2">Choose Your Plan</DialogTitle>
              <DialogDescription className="text-center text-lg">
                Unlock the full potential of AI-powered video optimization
              </DialogDescription>
            </DialogHeader>
            <PricingPlans />
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
