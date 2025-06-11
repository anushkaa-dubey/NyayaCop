import type { AnalysisResult, Judgment, LegalSuggestion } from '../types';

export const mockLegalSuggestions: LegalSuggestion[] = [
  {
    section: 'Section 354A - Sexual Harassment',
    description: 'Sexual harassment and punishment for sexual harassment',
    act: 'IPC',
    isCognizable: true,
    isBailable: false,
    punishment: 'Imprisonment up to 3 years and/or fine'
  },
  {
    section: 'Section 66E - Privacy Violation',
    description: 'Violation of privacy through capturing, publishing or transmitting images of private area',
    act: 'IT Act',
    isCognizable: true,
    isBailable: true,
    punishment: 'Imprisonment up to 3 years and/or fine up to 2 lakhs'
  }
];

export const mockJudgments: Judgment[] = [
  {
    title: 'Vishaka v. State of Rajasthan',
    year: 1997,
    summary: 'Landmark judgment on sexual harassment at workplace',
    fullDetails: 'The Supreme Court laid down guidelines for preventing sexual harassment at workplace, known as the Vishaka Guidelines. These guidelines were later incorporated into the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.',
    citation: 'AIR 1997 SC 3011',
    keyPoints: [
      'Established the Vishaka Guidelines',
      'Recognized sexual harassment as a violation of fundamental rights',
      'Made employers responsible for preventing sexual harassment'
    ]
  },
  {
    title: 'State of Maharashtra v. Madhukar Narayan Mardikar',
    year: 1991,
    summary: 'Important judgment on privacy rights',
    fullDetails: 'The Supreme Court held that the right to privacy is a fundamental right under Article 21 of the Constitution. This judgment laid the foundation for privacy rights in India.',
    citation: 'AIR 1991 SC 207',
    keyPoints: [
      'Recognized right to privacy as fundamental right',
      'Established privacy as essential to human dignity',
      'Set precedent for future privacy-related cases'
    ]
  }
];

export const mockProceduralSteps = [
  'File FIR at nearest police station',
  'Medical examination if required',
  'Collect evidence and witness statements',
  'File chargesheet within 90 days',
  'Trial in appropriate court'
];

export const mockAnalysisResult: AnalysisResult = {
  suggestions: mockLegalSuggestions,
  judgments: mockJudgments,
  proceduralSteps: mockProceduralSteps
}; 