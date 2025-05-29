
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Upload, Video } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface VideoUploaderProps {
  onVideoUploaded: (file: File, url: string) => void;
}

export const VideoUploader = ({ onVideoUploaded }: VideoUploaderProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Validate file type
    if (!file.type.includes("video/")) {
      toast({
        title: "❌ Invalid File Type",
        description: "Please upload a video file (MP4, MOV, AVI, etc.)",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (100MB limit)
    const maxSize = 100 * 1024 * 1024; // 100MB
    if (file.size > maxSize) {
      toast({
        title: "📁 File Too Large",
        description: "Please upload a video smaller than 100MB",
        variant: "destructive",
      });
      return;
    }

    uploadVideo(file);
  };

  const uploadVideo = (file: File) => {
    setUploading(true);
    setUploadProgress(0);
    
    // Simulate realistic upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Slower progress at the beginning, faster in middle, slower at end
        if (prev < 20) return prev + 2;
        if (prev < 80) return prev + 8;
        return prev + 1;
      });
    }, 200);
    
    // Simulate API request delay
    setTimeout(() => {
      clearInterval(interval);
      setUploadProgress(100);
      
      // Create a URL for the uploaded video
      const fileUrl = URL.createObjectURL(file);
      
      onVideoUploaded(file, fileUrl);
      
      toast({
        title: "🎉 Upload Successful!",
        description: "Your video is ready for AI-powered analysis",
      });
      
      setUploading(false);
      setUploadProgress(0);
    }, 4000);
  };

  const supportedFormats = ["MP4", "MOV", "AVI", "WMV", "FLV"];

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="gradient-text text-3xl mb-2">🚀 Upload Your Content</h2>
        <p className="text-gray-600 text-lg">Transform your videos with AI-powered insights</p>
      </div>

      {/* Main Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
          dragActive 
            ? "border-emerald-400 bg-emerald-50 scale-[1.02]" 
            : "border-gray-300 hover:border-emerald-300 hover:bg-emerald-50/50"
        } ${uploading ? "pointer-events-none opacity-75" : ""}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Animated Upload Icon */}
          <div className={`relative ${uploading ? 'animate-pulse' : ''}`}>
            <div className="p-6 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl shadow-lg">
              <Upload size={48} className="text-white" />
            </div>
            {!uploading && (
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-2xl blur opacity-30 animate-pulse"></div>
            )}
          </div>

          {/* Upload Text */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gray-800">
              {uploading ? "🔄 Processing Your Video..." : "Drop your video here"}
            </h3>
            <p className="text-gray-600">
              {uploading ? "AI analysis will begin automatically" : "or click to browse your files"}
            </p>
          </div>

          {/* Upload Button */}
          {!uploading && (
            <Button
              onClick={() => inputRef.current?.click()}
              className="primary-btn text-lg px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Video className="w-5 h-5 mr-2" />
              Select Video File
            </Button>
          )}

          <input
            ref={inputRef}
            type="file"
            onChange={handleChange}
            accept="video/*"
            className="hidden"
            disabled={uploading}
          />
        </div>
      </div>

      {/* Upload Progress */}
      {uploading && (
        <div className="glass-card p-6 animate-slide-up">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">Upload Progress</span>
              <span className="gradient-text font-bold text-xl">{uploadProgress}%</span>
            </div>
            <Progress value={uploadProgress} className="h-3 bg-gray-200" />
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span>Preparing for AI analysis...</span>
            </div>
          </div>
        </div>
      )}

      {/* Supported Formats */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm font-medium text-gray-600">Supported formats:</span>
          {supportedFormats.map((format) => (
            <span 
              key={format}
              className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 border border-gray-300"
            >
              {format}
            </span>
          ))}
        </div>
      </div>

      {/* Features Preview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {[
          { icon: "🎯", title: "Smart SEO", desc: "AI-optimized titles & tags" },
          { icon: "📊", title: "Trend Analysis", desc: "Viral hashtag insights" },
          { icon: "📝", title: "Auto Transcripts", desc: "Perfect accuracy every time" }
        ].map((feature, index) => (
          <div key={index} className="modern-card p-4 text-center">
            <div className="text-2xl mb-2">{feature.icon}</div>
            <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
            <p className="text-sm text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
