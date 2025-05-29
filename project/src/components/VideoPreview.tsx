
import React from "react";

interface VideoPreviewProps {
  videoFile: File;
  videoUrl: string | null;
}

export const VideoPreview = ({ videoFile, videoUrl }: VideoPreviewProps) => {
  const formatFileSize = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 Bytes';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  };

  const getVideoDuration = () => {
    // This would need actual video metadata in a real app
    return "2:34";
  };

  return (
    <div className="glass-card p-6 animate-slide-up">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
          <span className="text-white text-xl">🎬</span>
        </div>
        <div>
          <h2 className="gradient-text text-2xl">Video Preview Studio</h2>
          <p className="text-gray-600">Ready for AI-powered analysis</p>
        </div>
      </div>

      {/* Video Player */}
      <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg mb-6">
        <video 
          src={videoUrl || undefined} 
          controls 
          className="w-full h-full object-contain"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23374151'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='40' fill='%23ffffff' text-anchor='middle' dy='.3em'%3E▶%3C/text%3E%3C/svg%3E"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
      </div>

      {/* File Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="modern-card p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-emerald-500">📁</span>
            <span className="font-semibold text-gray-700">File Name</span>
          </div>
          <p className="text-sm text-gray-600 truncate" title={videoFile.name}>
            {videoFile.name}
          </p>
        </div>

        <div className="modern-card p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-cyan-500">💾</span>
            <span className="font-semibold text-gray-700">File Size</span>
          </div>
          <p className="text-sm text-gray-600">
            {formatFileSize(videoFile.size)}
          </p>
        </div>

        <div className="modern-card p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-purple-500">⏱️</span>
            <span className="font-semibold text-gray-700">Duration</span>
          </div>
          <p className="text-sm text-gray-600">
            {getVideoDuration()}
          </p>
        </div>
      </div>

      {/* Analysis Ready Indicator */}
      <div className="mt-6 bg-gradient-to-r from-emerald-100 to-cyan-100 rounded-xl p-4 border border-emerald-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="font-medium text-emerald-700">Ready for AI Analysis</span>
          </div>
          <button className="primary-btn text-sm py-1 px-4">
            Start Analysis 🚀
          </button>
        </div>
      </div>
    </div>
  );
};
