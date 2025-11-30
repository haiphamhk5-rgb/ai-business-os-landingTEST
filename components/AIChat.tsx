import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage, ChatRole } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const AIChat: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: ChatRole.MODEL, text: "Xin chào! Tôi là trợ lý AI Business OS. Bạn muốn biết cách biến doanh nghiệp thành cỗ máy tự động không?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: ChatRole.USER, text: userMessage }]);
        setIsLoading(true);

        try {
            // Format history for Gemini
            const history = messages.map(m => ({
                role: m.role === ChatRole.USER ? 'user' : 'model',
                parts: [{ text: m.text }]
            }));

            const responseText = await sendMessageToGemini(userMessage, history);
            
            setMessages(prev => [...prev, { role: ChatRole.MODEL, text: responseText }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: ChatRole.MODEL, text: "Xin lỗi, có lỗi xảy ra. Vui lòng thử lại." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl border border-gray-200 flex flex-col mb-4 overflow-hidden animate-fade-in-up">
                    {/* Header */}
                    <div className="bg-brand-red p-4 flex justify-between items-center text-white">
                        <div className="flex items-center gap-2">
                            <Sparkles size={18} className="text-brand-gold" />
                            <span className="font-bold">AI Support Assistant</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === ChatRole.USER ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                                    msg.role === ChatRole.USER 
                                    ? 'bg-brand-dark text-white rounded-br-none' 
                                    : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                                }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-bl-none shadow-sm">
                                    <Loader2 size={16} className="animate-spin text-brand-red" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 bg-white border-t border-gray-100">
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="Nhập câu hỏi..."
                                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                            />
                            <button 
                                onClick={handleSend}
                                disabled={isLoading || !input.trim()}
                                className="bg-brand-red text-white p-2 rounded-full hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${isOpen ? 'bg-gray-800' : 'bg-brand-red'} text-white p-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 font-semibold`}
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
                {!isOpen && <span className="hidden md:inline">Tư vấn ngay</span>}
            </button>
        </div>
    );
};

export default AIChat;