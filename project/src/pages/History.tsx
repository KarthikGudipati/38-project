
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Clock, Tag, TrendingUp, Eye } from "lucide-react";

interface VideoAnalysisHistoryItem {
  id: string;
  videoName: string;
  timestamp: string;
  title: string;
  hashtags: string[];
  transcript: string;
  summary: string;
  views?: number;
  engagement?: number;
}

const History = () => {
  const [history, setHistory] = useState<VideoAnalysisHistoryItem[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
      return;
    }
    
    // Generate mock history data for demo
    const mockHistory = [
      {
        id: "1",
        videoName: "How to Boost YouTube Views 2024",
        timestamp: new Date(Date.now() - 86400000).toISOString(),
        title: "Ultimate YouTube Growth Strategy",
        hashtags: ["youtube", "growth", "marketing", "seo", "viral"],
        transcript: "Sample transcript...",
        summary: "Complete guide to YouTube optimization",
        views: 15420,
        engagement: 87
      },
      {
        id: "2", 
        videoName: "Social Media Marketing Tips",
        timestamp: new Date(Date.now() - 172800000).toISOString(),
        title: "Social Media Mastery Guide",
        hashtags: ["socialmedia", "marketing", "business", "tips", "strategy"],
        transcript: "Sample transcript...",
        summary: "Essential social media marketing strategies",
        views: 8930,
        engagement: 92
      }
    ];
    
    setHistory(mockHistory);
  }, [navigate]);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }).format(date);
  };
  
  return (
    <DashboardLayout title="Video Analytics Dashboard">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            📊 Video Analytics Dashboard
          </h1>
          <p className="text-xl text-gray-600">Track your video performance and optimization results</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="glass-card border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Videos</p>
                  <p className="text-3xl font-bold text-blue-600">{history.length}</p>
                </div>
                <Video className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Views</p>
                  <p className="text-3xl font-bold text-green-600">
                    {history.reduce((sum, item) => sum + (item.views || 0), 0).toLocaleString()}
                  </p>
                </div>
                <Eye className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-l-4 border-l-purple-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Engagement</p>
                  <p className="text-3xl font-bold text-purple-600">
                    {history.length > 0 ? Math.round(history.reduce((sum, item) => sum + (item.engagement || 0), 0) / history.length) : 0}%
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-l-4 border-l-orange-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Success Rate</p>
                  <p className="text-3xl font-bold text-orange-600">94%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {history.length > 0 ? (
          <div className="grid gap-6">
            <h2 className="text-2xl font-bold text-gray-800">📹 Recent Analysis History</h2>
            {history.map((item) => (
              <Card key={item.id} className="glass-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-xl">
                        <Video className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-800">{item.videoName}</CardTitle>
                        <span className="text-sm text-gray-500 flex items-center mt-1">
                          <Clock className="h-4 w-4 mr-1" />
                          {formatDate(item.timestamp)}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-4 text-center">
                      <div className="px-3 py-2 bg-green-50 rounded-lg">
                        <div className="text-lg font-bold text-green-600">{item.views?.toLocaleString()}</div>
                        <div className="text-xs text-green-600">Views</div>
                      </div>
                      <div className="px-3 py-2 bg-purple-50 rounded-lg">
                        <div className="text-lg font-bold text-purple-600">{item.engagement}%</div>
                        <div className="text-xs text-purple-600">Engagement</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                        🎯 Optimized Title
                      </h4>
                      <p className="text-sm font-medium bg-blue-50 p-3 rounded-lg border border-blue-200">{item.title}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                        <Tag className="h-4 w-4 mr-1" />
                        Strategic Hashtags
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.hashtags.slice(0, 8).map((tag, idx) => (
                          <span key={idx} className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full font-medium">
                            #{tag}
                          </span>
                        ))}
                        {item.hashtags.length > 8 && (
                          <span className="text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full">
                            +{item.hashtags.length - 8} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">📝 AI Summary</h4>
                      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{item.summary}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Card className="glass-card p-12 max-w-lg mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Video className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">No videos analyzed yet</h3>
              <p className="text-gray-600 mb-6">Upload your first video to start building your analytics dashboard</p>
              <Button 
                onClick={() => navigate("/video-analysis")}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-xl"
              >
                🚀 Analyze First Video
              </Button>
            </Card>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default History;
