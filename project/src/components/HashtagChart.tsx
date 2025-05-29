
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface HashtagData {
  tag: string;
  count: number;
  relevance: number;
}

interface HashtagChartProps {
  data: HashtagData[];
}

export const HashtagChart = ({ data }: HashtagChartProps) => {
  const colors = [
    '#10B981', '#06B6D4', '#8B5CF6', '#F59E0B', '#EF4444', 
    '#EC4899', '#6366F1', '#84CC16', '#F97316', '#14B8A6'
  ];

  const topPerformers = data?.slice(0, 3) || [];
  
  return (
    <div className="glass-card h-full">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <span className="text-white text-xl">#</span>
          </div>
          <div>
            <CardTitle className="gradient-text text-2xl">Viral Hashtag Intelligence</CardTitle>
            <CardDescription className="text-gray-600">
              🚀 Discover trending tags that drive massive engagement
            </CardDescription>
          </div>
        </div>

        {/* Top Performers */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          {topPerformers.map((item, index) => (
            <div key={index} className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-lg p-3 border border-emerald-200">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}</span>
                <span className="font-bold text-emerald-700 text-sm">#{item.tag}</span>
              </div>
              <div className="text-xs text-gray-600">
                <span className="font-medium">{item.count}k</span> uses • 
                <span className="font-medium text-emerald-600 ml-1">{item.relevance}%</span> match
              </div>
            </div>
          ))}
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 60,
              }}
              barCategoryGap="20%"
            >
              <defs>
                <linearGradient id="countGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="100%" stopColor="#10B981" stopOpacity={0.3}/>
                </linearGradient>
                <linearGradient id="relevanceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity={0.8}/>
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity={0.3}/>
                </linearGradient>
              </defs>
              
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
              <XAxis 
                dataKey="tag" 
                angle={-45} 
                textAnchor="end" 
                tick={{ fontSize: 11, fill: '#6B7280', fontWeight: 500 }}
                interval={0}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                tick={{ fontSize: 11, fill: '#6B7280' }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
                formatter={(value, name) => {
                  if (name === "count") return [`${value}k users`, "💫 Usage Count"];
                  if (name === "relevance") return [`${value}%`, "🎯 Relevance Score"];
                  return [value, name];
                }}
                labelFormatter={(label) => `#${label}`}
                cursor={{ fill: 'rgba(16, 185, 129, 0.1)' }}
              />
              <Legend 
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="circle"
              />
              <Bar 
                dataKey="count" 
                name="Usage Count" 
                fill="url(#countGradient)"
                radius={[6, 6, 0, 0]}
                stroke="#10B981"
                strokeWidth={1}
              >
                {data?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
              <Bar 
                dataKey="relevance" 
                name="Relevance Score" 
                fill="url(#relevanceGradient)"
                radius={[6, 6, 0, 0]}
                stroke="#06B6D4"
                strokeWidth={1}
              >
                {data?.map((entry, index) => (
                  <Cell key={`cell-rel-${index}`} fill={`${colors[index % colors.length]}80`} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Insights Panel */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
              📈 Trending Now
            </h4>
            <p className="text-sm text-green-600">
              Tags with 85%+ relevance show 3x higher engagement rates
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
            <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
              🎯 Pro Tip
            </h4>
            <p className="text-sm text-blue-600">
              Mix high-volume and niche tags for maximum discoverability
            </p>
          </div>
        </div>
      </CardContent>
    </div>
  );
};
