
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { User, Lock, Bell, Palette, Crown } from "lucide-react";

const Settings = () => {
  const { toast } = useToast();
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : { name: "User", email: "user@example.com" };
  });
  
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    weeklyDigest: true,
    newFeatures: false,
    analyticsUpdates: true,
    trendAlerts: true,
    competitorUpdates: false,
  });
  
  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    
    const updatedUser = { ...user, name: formData.name, email: formData.email };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    
    toast({
      title: "✅ Profile Updated",
      description: "Your profile information has been successfully updated.",
    });
  };
  
  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.newPassword !== formData.confirmPassword) {
      toast({
        title: "❌ Password Mismatch",
        description: "New passwords do not match. Please try again.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "🔒 Password Updated",
      description: "Your password has been successfully changed.",
    });
    
    setFormData({
      ...formData,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };
  
  const handleNotificationToggle = (key: string) => {
    setNotificationSettings({
      ...notificationSettings,
      [key]: !notificationSettings[key as keyof typeof notificationSettings],
    });
    
    toast({
      title: "🔔 Settings Updated",
      description: "Your notification preferences have been saved.",
    });
  };
  
  return (
    <DashboardLayout title="Account Settings">
      <div className="space-y-8 animate-fade-in">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            ⚙️ Account Settings
          </h1>
          <p className="text-xl text-gray-600">Customize your SEO Keyword Guru experience</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-5 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-1">
            <TabsTrigger value="profile" className="flex items-center space-x-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="password" className="flex items-center space-x-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg">
              <Lock className="h-4 w-4" />
              <span className="hidden sm:inline">Security</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center space-x-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg">
              <Bell className="h-4 w-4" />
              <span className="hidden sm:inline">Alerts</span>
            </TabsTrigger>
            <TabsTrigger value="preferences" className="flex items-center space-x-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg">
              <Palette className="h-4 w-4" />
              <span className="hidden sm:inline">Theme</span>
            </TabsTrigger>
            <TabsTrigger value="premium" className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-lg">
              <Crown className="h-4 w-4" />
              <span className="hidden sm:inline">Premium</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-6">
            <Card className="glass-card">
              <form onSubmit={handleProfileUpdate}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-6 w-6 text-blue-600" />
                    <span>👤 Profile Information</span>
                  </CardTitle>
                  <CardDescription>
                    Update your personal details and account information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold">Full Name</Label>
                    <Input 
                      id="name" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="modern-input"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="modern-input"
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="primary-btn">
                    💾 Save Changes
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="password" className="space-y-6">
            <Card className="glass-card">
              <form onSubmit={handlePasswordUpdate}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lock className="h-6 w-6 text-green-600" />
                    <span>🔒 Security Settings</span>
                  </CardTitle>
                  <CardDescription>
                    Keep your account secure with a strong password
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword" className="text-sm font-semibold">Current Password</Label>
                    <Input 
                      id="currentPassword" 
                      type="password" 
                      value={formData.currentPassword}
                      onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                      className="modern-input"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword" className="text-sm font-semibold">New Password</Label>
                    <Input 
                      id="newPassword" 
                      type="password" 
                      value={formData.newPassword}
                      onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                      className="modern-input"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-sm font-semibold">Confirm New Password</Label>
                    <Input 
                      id="confirmPassword" 
                      type="password" 
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="modern-input"
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="primary-btn">
                    🔐 Update Password
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-6 w-6 text-purple-600" />
                  <span>🔔 Notification Preferences</span>
                </CardTitle>
                <CardDescription>
                  Control how and when you receive updates from SEO Keyword Guru
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {[
                  { key: "emailNotifications", title: "📧 Email Notifications", desc: "Receive important updates via email" },
                  { key: "weeklyDigest", title: "📊 Weekly Performance Digest", desc: "Get a summary of your video analytics every week" },
                  { key: "newFeatures", title: "✨ New Feature Announcements", desc: "Be the first to know about new tools and features" },
                  { key: "analyticsUpdates", title: "📈 Analytics Insights", desc: "Get notified about significant changes in your metrics" },
                  { key: "trendAlerts", title: "🔥 Trending Topic Alerts", desc: "Receive alerts about viral trends in your niche" },
                  { key: "competitorUpdates", title: "👀 Competitor Analysis", desc: "Updates on your competitors' performance" }
                ].map(({ key, title, desc }) => (
                  <div key={key} className="flex items-center justify-between p-4 bg-white/50 rounded-xl border border-gray-200">
                    <div className="space-y-1">
                      <Label htmlFor={key} className="font-semibold">{title}</Label>
                      <p className="text-sm text-gray-600">{desc}</p>
                    </div>
                    <Switch 
                      id={key} 
                      checked={notificationSettings[key as keyof typeof notificationSettings]}
                      onCheckedChange={() => handleNotificationToggle(key)}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="preferences" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Palette className="h-6 w-6 text-indigo-600" />
                  <span>🎨 Appearance & Preferences</span>
                </CardTitle>
                <CardDescription>
                  Customize your dashboard appearance and experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
                  <h4 className="font-semibold text-indigo-700 mb-3">🌈 Theme Options</h4>
                  <div className="grid grid-cols-3 gap-3">
                    <button className="p-3 bg-white rounded-lg border-2 border-blue-500 shadow-sm">
                      <div className="w-full h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded mb-2"></div>
                      <div className="text-xs font-medium">Ocean (Current)</div>
                    </button>
                    <button className="p-3 bg-white rounded-lg border border-gray-200 hover:border-purple-300 shadow-sm">
                      <div className="w-full h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded mb-2"></div>
                      <div className="text-xs font-medium">Sunset</div>
                    </button>
                    <button className="p-3 bg-white rounded-lg border border-gray-200 hover:border-green-300 shadow-sm">
                      <div className="w-full h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded mb-2"></div>
                      <div className="text-xs font-medium">Forest</div>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="premium" className="space-y-6">
            <Card className="glass-card bg-gradient-to-r from-orange-50 to-pink-50 border-2 border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Crown className="h-6 w-6 text-orange-600" />
                  <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">👑 Premium Features</span>
                </CardTitle>
                <CardDescription>
                  Unlock advanced AI capabilities and exclusive tools
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "🤖 Advanced AI Analysis",
                    "🔍 Competitor Intelligence",
                    "📊 Advanced Analytics",
                    "🎯 Custom Strategies",
                    "⚡ Priority Processing",
                    "📈 Trend Forecasting"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 p-3 bg-white/70 rounded-lg">
                      <span className="text-green-500">✓</span>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-4 rounded-xl">
                  🚀 Upgrade to Premium
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
