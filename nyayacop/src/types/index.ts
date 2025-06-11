export interface LegalSuggestion {
  section: string;
  description: string;
  act: string;
  isCognizable: boolean;
  isBailable: boolean;
  punishment: string;
}

export interface Judgment {
  title: string;
  year: number;
  summary: string;
  fullDetails: string;
  citation: string;
  keyPoints: string[];
}

export interface AnalysisResult {
  suggestions: LegalSuggestion[];
  judgments: Judgment[];
  proceduralSteps: string[];
}

export type Language = 'English' | 'Hindi' | 'Marathi' | 'Tamil'; 