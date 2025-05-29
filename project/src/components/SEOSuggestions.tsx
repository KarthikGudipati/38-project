
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Sparkles, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SEOSuggestionsProps {
  title: string;
  hashtags: string[];
}

export const SEOSuggestions = ({ title, hashtags }: SEOSuggestionsProps) => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${type} copied to clipboard`,
    });
  };

  const suggestedTitles = [
    `🔥 ${title} - Viral Content Alert!`,
    `✨ ${title} | Must Watch 2024`,
    `💯 ${title} - You Won't Believe This!`,
  ];

  return (
    <div className="glass-card p-8">
      <CardHeader className="pb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center">
            <Sparkles className="text-white text-2xl" size={28} />
          </div>
          <div>
            <CardTitle className="gradient-text text-3xl mb-2">🚀 SEO Power-Up Suite</CardTitle>
            <p className="text-gray-600 text-lg">Transform your content into a viral sensation</p>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="text-green-600" size={20} />
              <span className="font-bold text-green-700">SEO Score</span>
            </div>
            <div className="text-2xl font-bold text-green-600">94/100</div>
            <p className="text-sm text-green-600">Excellent optimization</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-blue-600 text-lg">🎯</span>
              <span className="font-bold text-blue-700">Reach Potential</span>
            </div>
            <div className="text-2xl font-bold text-blue-600">2.3M+</div>
            <p className="text-sm text-blue-600">Estimated views</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-purple-600 text-lg">⚡</span>
              <span className="font-bold text-purple-700">Viral Score</span>
            </div>
            <div className="text-2xl font-bold text-purple-600">8.7/10</div>
            <p className="text-sm text-purple-600">High viral potential</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-8">
        {/* Optimized Titles */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            ✨ Viral Title Suggestions
          </h3>
          <div className="space-y-3">
            {suggestedTitles.map((suggestedTitle, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200 hover:shadow-md transition-all duration-200">
                <span className="font-medium text-gray-800 flex-1">{suggestedTitle}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(suggestedTitle, "Title")}
                  className="ml-3"
                >
                  <Copy size={16} />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Hashtag Strategy */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              📈 Strategic Hashtag Mix
            </h3>
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(hashtags.map(tag => `#${tag}`).join(' '), "Hashtags")}
            >
              <Copy size={16} className="mr-2" />
              Copy All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* High Volume Tags */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-5 border border-red-200">
              <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                🔥 High Volume (1M+ posts)
              </h4>
              <div className="flex flex-wrap gap-2">
                {hashtags.slice(0, 3).map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-red-100 text-red-700 border-red-200">
                    #{tag}
                  </Badge>
                ))}
              </div>
              <p className="text-xs text-red-600 mt-2">Maximum exposure potential</p>
            </div>

            {/* Medium Volume Tags */}
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-5 border border-yellow-200">
              <h4 className="font-bold text-yellow-700 mb-3 flex items-center gap-2">
                ⚡ Medium Volume (100K-1M posts)
              </h4>
              <div className="flex flex-wrap gap-2">
                {hashtags.slice(3, 6).map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-yellow-100 text-yellow-700 border-yellow-200">
                    #{tag}
                  </Badge>
                ))}
              </div>
              <p className="text-xs text-yellow-600 mt-2">Balanced reach & competition</p>
            </div>

            {/* Niche Tags */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-5 border border-green-200">
              <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                🎯 Niche Tags (&lt;100K posts)
              </h4>
              <div className="flex flex-wrap gap-2">
                {hashtags.slice(6, 9).map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                    #{tag}
                  </Badge>
                ))}
              </div>
              <p className="text-xs text-green-600 mt-2">Higher engagement rates</p>
            </div>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-xl p-6 border border-indigo-200">
          <h3 className="text-xl font-bold text-indigo-700 mb-4 flex items-center gap-2">
            💡 Pro Growth Hacks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-indigo-600">
                <span className="font-semibold">🕐 Optimal Posting:</span> 6-9 PM weekdays for max engagement
              </p>
              <p className="text-sm text-indigo-600">
                <span className="font-semibold">🔄 Cross-Platform:</span> Adapt these hashtags for Instagram, TikTok, YouTube
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-indigo-600">
                <span className="font-semibold">📊 A/B Testing:</span> Try different title variations to see what performs best
              </p>
              <p className="text-sm text-indigo-600">
                <span className="font-semibold">🎪 Trend Riding:</span> Monitor trending topics and adapt your content accordingly
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </div>
  );
};
