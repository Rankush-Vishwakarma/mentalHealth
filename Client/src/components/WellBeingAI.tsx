import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot } from "lucide-react";

interface Message {
  type: 'user' | 'bot';
  content: string;
}

export const WellBeingAI = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: "Hello! I'm WellBeingAI, your mental health companion. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: input }]);
    
    // Simulate bot response (this would be replaced with actual AI integration)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: "I understand you're sharing something important. While I'm here to listen and provide general support, remember that I'm an AI assistant and not a replacement for professional help. Would you like to book a session with one of our counselors?"
      }]);
    }, 1000);
    
    setInput('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Bot className="h-6 w-6 text-sage-400" />
        <h2 className="text-xl font-semibold text-sage-400">WellBeingAI Chat</h2>
      </div>
      
      <ScrollArea className="h-[400px] border rounded-lg p-4 mb-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-sage-300 text-white'
                    : 'bg-lavender-100 text-gray-800'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
          className="flex-1"
        />
        <Button onClick={handleSend} className="bg-sage-300 hover:bg-sage-400">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};