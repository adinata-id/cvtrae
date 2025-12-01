import React, { useState, useEffect, useRef } from 'react';
import { TerminalState, TerminalOutput } from '../types/terminal';
import { processCommand, getWelcomeMessage } from '../utils/commandProcessor';

const Terminal: React.FC = () => {
  const [terminalState, setTerminalState] = useState<TerminalState>({
    history: [],
    currentLine: '',
    cursorPosition: 0,
    output: getWelcomeMessage()
  });
  
  const [isMobile, setIsMobile] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalState.output]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = terminalState.currentLine.trim();
      if (command) {
        const newOutput: TerminalOutput[] = [
          ...terminalState.output,
          {
            type: 'command',
            content: `visitor@adi:~$ ${command}`,
            timestamp: new Date()
          }
        ];

        if (command === 'clear') {
          setTerminalState({
            history: [...terminalState.history, command],
            currentLine: '',
            cursorPosition: 0,
            output: []
          });
        } else {
          const commandOutput = processCommand(command);
          setTerminalState({
            history: [...terminalState.history, command],
            currentLine: '',
            cursorPosition: 0,
            output: [...newOutput, ...commandOutput]
          });
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Tab completion could be implemented here
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      // Command history navigation could be implemented here
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      // Command history navigation could be implemented here
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerminalState(prev => ({
      ...prev,
      currentLine: e.target.value,
      cursorPosition: e.target.selectionStart || 0
    }));
  };

  const getOutputColor = (type: TerminalOutput['type']) => {
    switch (type) {
      case 'command':
        return 'text-green-400';
      case 'response':
        return 'text-white';
      case 'error':
        return 'text-red-400';
      case 'system':
        return 'text-blue-400';
      default:
        return 'text-white';
    }
  };

  const fontSize = isMobile ? 'text-xs' : 'text-sm';
  const padding = isMobile ? 'p-2' : 'p-4';

  return (
    <div className={`min-h-screen bg-black text-green-400 font-mono ${fontSize} ${padding}`}>
      <div 
        ref={terminalRef}
        className="h-screen overflow-y-auto pb-20"
        onClick={() => inputRef.current?.focus()}
      >
        {terminalState.output.map((output, index) => (
          <div key={index} className={`whitespace-pre-wrap ${getOutputColor(output.type)} mb-1`}>
            {output.content}
          </div>
        ))}
        
        <div className="flex items-center">
          <span className={`text-green-400 ${isMobile ? 'mr-1' : 'mr-2'}`}>
            {isMobile ? '$' : 'visitor@adi:~$'}
          </span>
          <div className="relative flex-1">
            <input
              ref={inputRef}
              type="text"
              value={terminalState.currentLine}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="bg-transparent text-green-400 outline-none w-full caret-transparent"
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
            />
            <span className="absolute inset-0 pointer-events-none text-green-400">
              {terminalState.currentLine}
              <span className="animate-blink ml-0.5">_</span>
            </span>
          </div>
        </div>
      </div>
      
      {isMobile && (
        <div className="fixed bottom-2 left-2 right-2 text-center text-xs text-gray-500">
          Tap anywhere to focus input
        </div>
      )}
    </div>
  );
};

export default Terminal;