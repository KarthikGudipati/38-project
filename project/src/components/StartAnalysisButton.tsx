
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Sparkles } from "lucide-react";

interface StartAnalysisButtonProps {
  onStartAnalysis: () => void;
  isLoading: boolean;
}

export const StartAnalysisButton = ({ onStartAnalysis, isLoading }: StartAnalysisButtonProps) => {
  return (
    <Card className="glass-card">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Sparkles className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl gradient-text">Ready to Analyze</CardTitle>
        <CardDescription>
          Start AI-powered analysis to generate hashtags, transcripts, and SEO insights
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="p-3 bg-emerald-50 rounded-lg">
            <div className="font-semibold text-emerald-700">Extract</div>
            <div className="text-emerald-600">Audio & Speech</div>
          </div>
          <div className="p-3 bg-cyan-50 rounded-lg">
            <div className="font-semibold text-cyan-700">Generate</div>
            <div className="text-cyan-600">AI Hashtags</div>
          </div>
          <div className="p-3 bg-teal-50 rounded-lg">
            <div className="font-semibold text-teal-700">Optimize</div>
            <div className="text-teal-600">SEO Content</div>
          </div>
        </div>
        
        <Button 
          onClick={onStartAnalysis}
          disabled={isLoading}
          className="primary-btn w-full text-lg py-6"
        >
          <Play className="h-5 w-5 mr-2" />
          {isLoading ? "Analyzing..." : "Start Analysis"}
        </Button>
      </CardContent>
    </Card>
  );
};
