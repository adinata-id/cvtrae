export interface TerminalState {
  history: string[];
  currentLine: string;
  cursorPosition: number;
  output: TerminalOutput[];
}

export interface TerminalOutput {
  type: 'command' | 'response' | 'error' | 'system';
  content: string;
  timestamp: Date;
}

export interface Command {
  name: string;
  description: string;
  handler: (args: string[]) => TerminalOutput[];
  aliases?: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  description: string;
  photo: string;
}

export interface Skill {
  name: string;
  percentage: number;
  category: 'framework' | 'database' | 'cloud' | 'networking';
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Project {
  name: string;
  description: string;
  url?: string;
  category: 'tool' | 'website' | 'script';
}

export interface Article {
  title: string;
  date: string;
  category: string;
}

export interface Contact {
  address: string;
  phone: string;
  email: string;
  website: string;
}