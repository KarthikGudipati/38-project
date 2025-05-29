
import React from "react";
import { Progress } from "@/components/ui/progress";

interface AnalysisLoadingProps {
  currentStep?: string;
  progress?: number;
}

export const AnalysisLoading = ({ 
  currentStep = "🎬 Analyzing your masterpiece...", 
  progress = 0 
}: AnalysisLoadingProps) => {
  const steps = [
    "🔊 Extracting audio waves",
    "📝 Generating smart transcripts", 
    "🎯 Mining viral keywords",
    "🚀 Optimizing for discovery"
  ];
  
  const currentStepIndex = Math.floor((progress / 100) * steps.length);
  
  return (
    <div className="glass-card p-8 text-center animate-slide-up">
      <div className="space-y-6">
        {/* Animated Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-3xl">🎥</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full blur opacity-30 animate-pulse"></div>
          </div>
        </div>

        {/* Title */}
        <div>
          <h2 className="gradient-text text-3xl mb-2">AI Video Intelligence</h2>
          <p className="text-gray-600 font-medium">Unleashing the power of your content</p>
        </div>

        {/* Current Step */}
        <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-xl p-4 border border-emerald-200">
          <p className="text-xl font-semibold text-emerald-700">{currentStep}</p>
        </div>

        {/* Progress */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-700">Processing Progress</span>
            <span className="gradient-text font-bold text-lg">{progress}%</span>
          </div>
          <Progress value={progress} className="h-3 bg-gray-200" />
        </div>

        {/* Step Indicators */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`p-3 rounded-lg transition-all duration-300 ${
                index <= currentStepIndex 
                  ? 'bg-emerald-100 border border-emerald-300 text-emerald-700' 
                  : 'bg-gray-50 border border-gray-200 text-gray-500'
              }`}
            >
              <span className="text-sm font-medium">{step}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            ⚡ Powered by advanced AI models for maximum engagement
          </p>
        </div>
      </div>
    </div>
  );
};
