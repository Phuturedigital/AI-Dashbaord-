export interface Strategy {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  impact: string;
  difficulty: string;
  type: 'seo' | 'engagement' | 'budget';
  details: {
    keywords?: string[];
    estimatedImpact?: number;
    contentIdeas?: string[];
    peakTimes?: Array<{ day: string; time: string }>;
    platforms?: string[];
    currentAllocation?: Array<{ campaign: string; amount: number }>;
    recommendedAllocation?: Array<{ campaign: string; amount: number }>;
  };
}