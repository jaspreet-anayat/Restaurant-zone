import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

interface ChatWidgetProps {
  onOpenHireModal: () => void;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ onOpenHireModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string }>>([
    {
      sender: 'bot',
      text: 'Hi there! Looking to hire top restaurant or hospitality talent, or searching for your next career role?',
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInputValue('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: 'Thanks for reaching out! A dedicated RestaurantZone executive recruiter is available. Would you like to submit your hiring request or schedule an instant consultation call?',
        },
      ]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Chat Box */}
      {isOpen && (
        <div className="mb-3 w-[340px] sm:w-[380px] bg-[#132930] text-white border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#0e2127] px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-[#10ACCF] flex items-center justify-center text-white">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">RestaurantZone Assistant</h4>
                <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Recruiting Team Online
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
              aria-label="Close Chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="p-4 h-64 overflow-y-auto space-y-3 text-xs sm:text-[13px] bg-[#132930]/95">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#10ACCF] text-white rounded-tr-none'
                      : 'bg-white/10 text-slate-100 rounded-tl-none border border-white/10'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Action Button */}
          <div className="px-4 py-2 bg-white/5 border-t border-white/10 flex gap-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenHireModal();
              }}
              className="flex-1 bg-[#10ACCF] hover:bg-[#0ea1c2] text-white font-bold py-1.5 rounded-full text-xs transition-colors cursor-pointer"
            >
              Request Talent Now
            </button>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-[#0e2127] border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask a question or type a role..."
              className="flex-1 bg-white/10 text-white placeholder-slate-400 text-xs px-3.5 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#10ACCF] border border-white/10"
            />
            <button
              type="submit"
              className="bg-[#10ACCF] hover:bg-[#0ea1c2] text-white p-2 rounded-xl transition-colors cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Chat Bubble Button matching bottom-right of screenshot */}
      <button
        id="floating-chat-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 rounded-2xl bg-[#495c83] hover:bg-[#3d4f73] text-white shadow-xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer border border-white/20"
        aria-label="Open support chat"
      >
        <MessageSquare className="w-6 h-6 fill-white/10 stroke-[2.2]" />
      </button>
    </div>
  );
};
