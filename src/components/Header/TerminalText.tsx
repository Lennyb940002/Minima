import { useEffect, useState } from 'react';

const messages = [
  "Tu vas cartonner !",
  "Fonce !",
  "Tu es un champion !",
  "Crois en toi !",
  "Victoire imminente !",
  "Tu vas déchirer !",
  "Rien ne t'arrête !",
  "Success mode : ON !",
  "Tu es génial !",
  "Go, go, go !"
];

export function TerminalText() {
  const [text, setText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    const currentMessage = messages[messageIndex];
    
    if (isTyping) {
      if (text.length < currentMessage.length) {
        const timeout = setTimeout(() => {
          setText(currentMessage.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (text.length > 0) {
        const timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setMessageIndex((prev) => (prev + 1) % messages.length);
        setIsTyping(true);
      }
    }
  }, [text, messageIndex, isTyping]);

  return (
    <div className="w-64 h-8 text-white font-mono">
      {text}<span className="animate-pulse">|</span>
    </div>
  );
}