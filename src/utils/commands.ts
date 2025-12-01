import { TerminalOutput, Command } from '../types/terminal';
import { profileData, skills, experiences, projects, articles, contactData } from '../data/profile';

const generateAsciiBorder = (width: number, height: number): string => {
  const top = '+' + '-'.repeat(width - 2) + '+';
  const middle = '|' + ' '.repeat(width - 2) + '|';
  const bottom = '+' + '-'.repeat(width - 2) + '+';
  
  return [top, ...Array(height - 2).fill(middle), bottom].join('\n');
};

const generateProgressBar = (percentage: number, width: number = 20): string => {
  const filled = Math.round((percentage / 100) * width);
  const empty = width - filled;
  return '█'.repeat(filled) + '░'.repeat(empty) + ` ${percentage}%`;
};

export const helpHandler = (args: string[]): TerminalOutput[] => {
  return [{
    type: 'system',
    content: generateAsciiBorder(60, 3),
    timestamp: new Date()
  }, {
    type: 'response',
    content: `Available Commands:
  help        - Show this help message
  profile     - Display personal profile information
  skills      - Show technical skills with progress bars
  experience  - Display work experience timeline
  portfolio   - Show projects and tools
  blog        - Display blog articles
  contact     - Show contact information
  clear       - Clear terminal screen
  whoami      - Easter egg command`,
    timestamp: new Date()
  }];
};

export const profileHandler = (args: string[]): TerminalOutput[] => {
  return [{
    type: 'system',
    content: generateAsciiBorder(60, 25),
    timestamp: new Date()
  }, {
    type: 'response',
    content: `Name: ${profileData.name}
Title: ${profileData.title}

${profileData.description}`,
    timestamp: new Date()
  }];
};

export const skillsHandler = (args: string[]): TerminalOutput[] => {
  const output: TerminalOutput[] = [{
    type: 'system',
    content: generateAsciiBorder(60, 3),
    timestamp: new Date()
  }];

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  let content = 'Technical Skills:\n\n';
  
  Object.entries(skillsByCategory).forEach(([category, categorySkills]) => {
    content += `${category.toUpperCase()}:\n`;
    categorySkills.forEach(skill => {
      content += `  ${skill.name.padEnd(20)} ${generateProgressBar(skill.percentage)}\n`;
    });
    content += '\n';
  });

  output.push({
    type: 'response',
    content: content.trim(),
    timestamp: new Date()
  });

  return output;
};

export const experienceHandler = (args: string[]): TerminalOutput[] => {
  const output: TerminalOutput[] = [{
    type: 'system',
    content: generateAsciiBorder(60, 3),
    timestamp: new Date()
  }];

  let content = 'Work Experience:\n\n';
  
  experiences.forEach(exp => {
    content += `[${exp.startDate}] - [${exp.endDate}]\n`;
    content += `${exp.company.toUpperCase()} - ${exp.position}\n`;
    exp.description.forEach(desc => {
      content += `  • ${desc}\n`;
    });
    content += '\n';
  });

  output.push({
    type: 'response',
    content: content.trim(),
    timestamp: new Date()
  });

  return output;
};

export const portfolioHandler = (args: string[]): TerminalOutput[] => {
  const output: TerminalOutput[] = [{
    type: 'system',
    content: generateAsciiBorder(60, 3),
    timestamp: new Date()
  }];

  let content = 'Projects & Tools:\n\n';
  
  projects.forEach(project => {
    content += `[${project.category.toUpperCase()}] ${project.name}\n`;
    content += `  ${project.description}\n`;
    if (project.url) {
      content += `  URL: ${project.url}\n`;
    }
    content += '\n';
  });

  output.push({
    type: 'response',
    content: content.trim(),
    timestamp: new Date()
  });

  return output;
};

export const blogHandler = (args: string[]): TerminalOutput[] => {
  const output: TerminalOutput[] = [{
    type: 'system',
    content: generateAsciiBorder(60, 3),
    timestamp: new Date()
  }];

  let content = 'Blog Articles:\n\n';
  
  articles.forEach(article => {
    content += `[${article.date}] ${article.title}\n`;
    content += `  Category: ${article.category}\n\n`;
  });

  output.push({
    type: 'response',
    content: content.trim(),
    timestamp: new Date()
  });

  return output;
};

export const contactHandler = (args: string[]): TerminalOutput[] => {
  return [{
    type: 'system',
    content: generateAsciiBorder(60, 3),
    timestamp: new Date()
  }, {
    type: 'response',
    content: `Contact Information:

Address: ${contactData.address}
Phone: ${contactData.phone}
Email: ${contactData.email}
Website: ${contactData.website}`,
    timestamp: new Date()
  }];
};

export const clearHandler = (args: string[]): TerminalOutput[] => {
  return [];
};

export const whoamiHandler = (args: string[]): TerminalOutput[] => {
  return [{
    type: 'system',
    content: generateAsciiBorder(60, 3),
    timestamp: new Date()
  }, {
    type: 'response',
    content: `visitor\n
You are a curious visitor exploring the digital realm of Adi Pratama.
Your IP has been logged for security purposes.\n
Just kidding... or am I? 😈`,
    timestamp: new Date()
  }];
};

export const availableCommands: Command[] = [
  { name: 'help', description: 'Show available commands', handler: helpHandler },
  { name: 'profile', description: 'Display personal profile', handler: profileHandler },
  { name: 'skills', description: 'Show technical skills', handler: skillsHandler },
  { name: 'experience', description: 'Display work experience', handler: experienceHandler },
  { name: 'portfolio', description: 'Show projects and tools', handler: portfolioHandler },
  { name: 'blog', description: 'Display blog articles', handler: blogHandler },
  { name: 'contact', description: 'Show contact information', handler: contactHandler },
  { name: 'clear', description: 'Clear terminal screen', handler: clearHandler },
  { name: 'whoami', description: 'Easter egg command', handler: whoamiHandler }
];