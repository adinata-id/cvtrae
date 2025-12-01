import { TerminalOutput } from '../types/terminal';
import { availableCommands } from './commands';

export const processCommand = (input: string): TerminalOutput[] => {
  const [commandName, ...args] = input.trim().split(' ');
  
  const command = availableCommands.find(cmd => 
    cmd.name === commandName || cmd.aliases?.includes(commandName)
  );
  
  if (!command) {
    return [{
      type: 'error',
      content: `Command not found: ${commandName}. Type 'help' for available commands.`,
      timestamp: new Date()
    }];
  }
  
  try {
    return command.handler(args);
  } catch (error) {
    return [{
      type: 'error',
      content: `Error executing command: ${error instanceof Error ? error.message : 'Unknown error'}`,
      timestamp: new Date()
    }];
  }
};

export const getWelcomeMessage = (): TerminalOutput[] => {
  return [
    {
      type: 'system',
      content: `
 ╔══════════════════════════════════════════════════════════════════════════════╗
 ║                                                                              ║
 ║   ██████╗ ██╗    ██╗██╗  ██╗███████╗██╗     ██╗██████╗ ███████╗███████╗   ║
 ║   ██╔══██╗██║    ██║██║  ██║██╔════╝██║     ██║██╔══██╗██╔════╝██╔════╝   ║
 ║   ██║  ██║██║ █╗ ██║███████║█████╗  ██║     ██║██║  ██║█████╗  ███████╗   ║
 ║   ██║  ██║██║███╗██║██╔══██║██╔══╝  ██║     ██║██║  ██║██╔══╝  ╚════██║   ║
 ║   ██████╔╝╚███╔███╔╝██║  ██║███████╗███████╗██║██████╔╝███████╗███████║   ║
 ║   ╚═════╝  ╚══╝╚══╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═════╝ ╚══════╝╚══════╝   ║
 ║                                                                              ║
 ║                    Personal Terminal - Web Programmer                        ║
 ║                        Security Researcher | Network Admin                     ║
 ║                                                                              ║
 ╚══════════════════════════════════════════════════════════════════════════════╝
      `,
      timestamp: new Date()
    },
    {
      type: 'response',
      content: 'Welcome to Adi Pratama\'s personal terminal interface.',
      timestamp: new Date()
    },
    {
      type: 'response',
      content: 'Type \'help\' to see available commands.',
      timestamp: new Date()
    }
  ];
};