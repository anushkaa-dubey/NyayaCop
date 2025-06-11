import type { AnalysisResult, Complaint, LegalRight, IPCSection } from '../types';

export const mockAnalysisResult: AnalysisResult = {
  suggestions: [
    {
      section: 'IPC 354A - Sexual Harassment',
      description: 'Whoever commits physical contact and advances involving unwelcome and explicit sexual overtures...',
      act: 'Indian Penal Code',
      isCognizable: true,
      isBailable: true,
      punishment: 'Imprisonment up to 3 years, or fine, or both'
    },
    {
      section: 'IPC 509 - Word, gesture or act intended to insult the modesty of a woman',
      description: 'Whoever, intending to insult the modesty of any woman, utters any word, makes any sound or gesture...',
      act: 'Indian Penal Code',
      isCognizable: true,
      isBailable: true,
      punishment: 'Imprisonment up to 1 year, or fine, or both'
    }
  ],
  judgments: [
    {
      title: 'Vishaka vs State of Rajasthan',
      year: 1997,
      summary: 'Landmark judgment on sexual harassment at workplace',
      fullText: 'Full text of the judgment...',
      citation: 'AIR 1997 SC 3011'
    }
  ],
  proceduralSteps: [
    'File FIR at the nearest police station',
    'Get a copy of the FIR',
    'Cooperate with the investigation',
    'Attend court hearings when summoned'
  ]
};

export const mockComplaints: Complaint[] = [
  {
    id: '1',
    text: 'I was harassed at my workplace by my supervisor',
    language: 'English',
    status: 'filed',
    createdAt: '2024-03-15T10:30:00Z',
    assignedOfficer: 'Inspector Rajesh Kumar',
    firNumber: 'FIR-2024-001',
    appliedSections: ['IPC 354A', 'IPC 509']
  },
  {
    id: '2',
    text: 'Someone stole my mobile phone from my bag',
    language: 'Hindi',
    status: 'analyzed',
    createdAt: '2024-03-16T14:20:00Z'
  }
];

export const mockLegalRights: LegalRight[] = [
  {
    title: 'Right to File FIR',
    description: 'Every citizen has the right to file an FIR at any police station, regardless of where the crime occurred.',
    section: 'Section 154 CrPC'
  },
  {
    title: 'Right to Know FIR Status',
    description: 'You have the right to know the status of your FIR and get a copy of it.',
    section: 'Section 154(2) CrPC'
  },
  {
    title: 'Right to Legal Aid',
    description: 'Free legal aid is available for those who cannot afford a lawyer.',
    section: 'Section 304 CrPC'
  }
];

export const mockIPCSections: IPCSection[] = [
  {
    number: 'IPC 354A',
    title: 'Sexual Harassment',
    description: 'Physical contact and advances involving unwelcome and explicit sexual overtures',
    punishment: 'Imprisonment up to 3 years, or fine, or both',
    isCognizable: true,
    isBailable: true
  },
  {
    number: 'IPC 379',
    title: 'Theft',
    description: 'Whoever, intending to take dishonestly any moveable property out of the possession of any person',
    punishment: 'Imprisonment up to 3 years, or fine, or both',
    isCognizable: true,
    isBailable: true
  },
  {
    number: 'IPC 323',
    title: 'Voluntary Hurt',
    description: 'Whoever causes hurt to any person',
    punishment: 'Imprisonment up to 1 year, or fine up to ₹1000, or both',
    isCognizable: true,
    isBailable: true
  }
]; 