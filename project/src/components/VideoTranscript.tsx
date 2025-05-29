
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VideoTranscriptProps {
  transcript: string;
  summary: string;
}

export const VideoTranscript = ({ transcript, summary }: VideoTranscriptProps) => {
  const [showFullTranscript, setShowFullTranscript] = useState(false);
  const [activeTab, setActiveTab] = useState<'summary' | 'transcript' | 'insights'>('summary');
  const { toast } = useToast();

  const copyToClipboard = (text: string, type: 'transcript' | 'summary') => {
    navigator.clipboard.writeText(text);
    toast({
      title: "✅ Copied Successfully!",
      description: `${type === 'transcript' ? 'Full transcript' : 'AI summary'} copied to clipboard`,
    });
  };

  const mockInsights = [
    "🎯 High engagement potential detected",
    "📈 Trending keywords identified: 3",
    "⚡ Optimal length for platform",
    "🔥 Viral coefficient: 8.7/10"
  ];

  return (
    <div className="glass-card h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-lg">🧠</span>
          </div>
          <div>
            <CardTitle className="gradient-text text-xl">AI Content Analysis</CardTitle>
            <CardDescription className="text-gray-600">
              Smart insights from your video content
            </CardDescription>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
          {[
            { id: 'summary', label: '📋 Summary', icon: '📋' },
            { id: 'transcript', label: '📝 Transcript', icon: '📝' },
            { id: 'insights', label: '💡 Insights', icon: '💡' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-white text-emerald-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        {activeTab === 'summary' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-xl p-4 border border-emerald-200 relative">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-emerald-700 flex items-center gap-2">
                  🎯 AI-Generated Summary
                </h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-emerald-100"
                  onClick={() => copyToClipboard(summary, 'summary')}
                >
                  <Copy className="w-4 h-4 text-emerald-600" />
                </Button>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{summary}</p>
            </div>
          </div>
        )}

        {activeTab === 'transcript' && (
          <div className="space-y-4 flex-1 flex flex-col">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                📝 Complete Transcript
              </h3>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => copyToClipboard(transcript, 'transcript')}
                  className="text-xs"
                >
                  <Copy className="w-3 h-3 mr-1" />
                  Copy
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowFullTranscript(!showFullTranscript)}
                  className="text-xs"
                >
                  {showFullTranscript ? "Collapse" : "Expand"}
                </Button>
              </div>
            </div>
            
            <div className="flex-1 bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
              {showFullTranscript ? (
                <ScrollArea className="h-64 p-4">
                  <p className="text-sm whitespace-pre-line text-gray-700 leading-relaxed">
                    {transcript}
                  </p>
                </ScrollArea>
              ) : (
                <div className="p-4">
                  <p className="text-sm text-gray-700 line-clamp-6 leading-relaxed">
                    {transcript}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'insights' && (
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-700 flex items-center gap-2 mb-4">
              💡 Smart Insights
            </h3>
            {mockInsights.map((insight, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-700 font-medium">{insight}</span>
              </div>
            ))}
            
            <div className="mt-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
              <h4 className="font-semibold text-yellow-700 mb-2">🚀 Optimization Tip</h4>
              <p className="text-sm text-yellow-600">
                Consider adding more engaging hooks in the first 15 seconds to boost retention rates.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </div>
  );
};
