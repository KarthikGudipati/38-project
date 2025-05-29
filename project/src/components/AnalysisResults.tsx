
import React from "react";
import { SEOSuggestions } from "@/components/SEOSuggestions";
import { HashtagChart } from "@/components/HashtagChart";
import { VideoTranscript } from "@/components/VideoTranscript";

interface AnalysisResultsProps {
  analysisContent: {
    title: string;
    hashtags: string[];
    transcript: string;
    summary: string;
    chartData: any[];
  };
}

export const AnalysisResults = ({ analysisContent }: AnalysisResultsProps) => {
  return (
    <div className="space-y-8 animate-slide-up">
      {/* Header Section */}
      <div className="text-center glass-card p-6">
        <h1 className="gradient-text text-4xl mb-2">🎯 Content Intelligence Report</h1>
        <p className="text-gray-600 text-lg">Your video's potential unlocked with AI-powered insights</p>
      </div>

      {/* SEO Section */}
      <div className="transform hover:scale-[1.02] transition-transform duration-200">
        <SEOSuggestions 
          title={analysisContent.title} 
          hashtags={analysisContent.hashtags} 
        />
      </div>
      
      {/* Analytics Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Chart takes 2 columns */}
        <div className="xl:col-span-2 transform hover:scale-[1.02] transition-transform duration-200">
          <HashtagChart data={analysisContent.chartData} />
        </div>
        
        {/* Transcript takes 1 column */}
        <div className="xl:col-span-1 transform hover:scale-[1.02] transition-transform duration-200">
          <VideoTranscript 
            transcript={analysisContent.transcript} 
            summary={analysisContent.summary} 
          />
        </div>
      </div>

      {/* Action Footer */}
      <div className="glass-card p-6 text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="primary-btn flex items-center gap-2">
            <span>📊</span> Export Full Report
          </button>
          <button className="secondary-btn flex items-center gap-2">
            <span>🔄</span> Re-analyze Content
          </button>
          <button className="secondary-btn flex items-center gap-2">
            <span>💾</span> Save to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
