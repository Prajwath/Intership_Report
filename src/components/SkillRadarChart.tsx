
import React from 'react';
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

interface SkillRadarChartProps {
  data: {
    subject: string;
    start: number;
    current: number;
    fullMark: number;
  }[];
}

const SkillRadarChart = ({ data }: SkillRadarChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid stroke="#e2e8f0" />
        <PolarAngleAxis 
          dataKey="subject" 
          tick={{ 
            fill: '#475569', 
            fontSize: 12,
            fontFamily: 'Inter, sans-serif'
          }} 
        />
        <PolarRadiusAxis 
          angle={30} 
          domain={[0, 100]} 
          tick={{ fill: '#94a3b8' }}
          stroke="#cbd5e1"
          axisLine={false}
        />
        <Radar
          name="January 2025"
          dataKey="start"
          stroke="#9333ea"
          fill="#c084fc"
          fillOpacity={0.3}
        />
        <Radar
          name="April 2025"
          dataKey="current"
          stroke="#2563eb"
          fill="#60a5fa"
          fillOpacity={0.5}
        />
        <Legend 
          align="center" 
          verticalAlign="bottom" 
          wrapperStyle={{ 
            paddingTop: '20px',
            fontSize: '12px',
            fontFamily: 'Inter, sans-serif'
          }} 
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SkillRadarChart;
