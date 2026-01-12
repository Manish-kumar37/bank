import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Phone, User, Bot } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message
      setTimeout(() => {
        addBotMessage(
          "👋 Hello! Welcome to SENPAI Bank. I'm here to help you with:\n\n" +
          "• Account information\n" +
          "• Loan queries\n" +
          "• Services information\n" +
          "• Branch locations\n" +
          "• General banking queries\n\n" +
          "How can I assist you today?"
        );
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const getBotResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    // Account related queries
    if (msg.includes('account') && (msg.includes('open') || msg.includes('create') || msg.includes('new'))) {
      return "To open a new account with SENPAI Bank:\n\n" +
        "1. Click on 'Open Account' on our homepage\n" +
        "2. Fill the online application form\n" +
        "3. Upload required documents (ID proof, address proof)\n" +
        "4. Submit the form\n" +
        "5. Our team will verify and activate your account within 2-3 days\n\n" +
        "You can also visit any branch for assisted account opening. Would you like the list of required documents?";
    }

    if (msg.includes('minimum balance') || msg.includes('min balance')) {
      return "Minimum balance requirements:\n\n" +
        "• Regular Savings: ¥10,000\n" +
        "• Premium Savings: ¥50,000\n" +
        "• Zero Balance: ¥0\n" +
        "• Current Account: ¥25,000\n\n" +
        "Would you like to know about penalties for non-maintenance?";
    }

    if (msg.includes('interest rate') || msg.includes('interest')) {
      return "Current interest rates:\n\n" +
        "Savings Account: 3.50% p.a.\n" +
        "Fixed Deposits:\n" +
        "• 1 year: 6.75% p.a.\n" +
        "• 2-3 years: 7.00% p.a.\n" +
        "• 5 years: 7.25% p.a.\n\n" +
        "For loan interest rates, please type 'loan rates'. Would you like more details?";
    }

    // Loan related queries
    if (msg.includes('loan')) {
      if (msg.includes('rate') || msg.includes('interest')) {
        return "Loan interest rates:\n\n" +
          "• Home Loan: 8.5% p.a.\n" +
          "• Personal Loan: 11.5% p.a.\n" +
          "• Car Loan: 9.5% p.a.\n" +
          "• Education Loan: 10.5% p.a.\n" +
          "• Business Loan: 12.0% p.a.\n\n" +
          "Use our Loan Calculator to calculate EMI. Type 'loan eligibility' to know eligibility criteria.";
      }
      if (msg.includes('eligibility') || msg.includes('eligible')) {
        return "Loan Eligibility Criteria:\n\n" +
          "• Age: 21-65 years\n" +
          "• Minimum monthly income: ¥15,000\n" +
          "• Employment: Minimum 1 year in current job\n" +
          "• Credit Score: 600 or above\n" +
          "• No loan defaults in last 3 years\n\n" +
          "Would you like to apply for a loan or use our calculator?";
      }
      if (msg.includes('apply') || msg.includes('application')) {
        return "To apply for a loan:\n\n" +
          "1. Use our Loan Calculator to check EMI\n" +
          "2. Click 'Apply for Loan' on our website\n" +
          "3. Fill the application form\n" +
          "4. Upload required documents\n" +
          "5. Submit application\n\n" +
          "Our loan officer will contact you within 24 hours. Need help with documents required?";
      }
      return "I can help you with:\n" +
        "• Loan interest rates\n" +
        "• Loan eligibility\n" +
        "• Loan application process\n" +
        "• EMI calculation\n\n" +
        "What would you like to know about loans?";
    }

    // Card related queries
    if (msg.includes('card') || msg.includes('atm') || msg.includes('debit') || msg.includes('credit')) {
      if (msg.includes('lost') || msg.includes('block') || msg.includes('stolen')) {
        return "⚠️ URGENT - Lost/Stolen Card:\n\n" +
          "Please block your card immediately:\n" +
          "1. Call our 24/7 helpline: 1800 1080\n" +
          "2. Or use Internet/Mobile Banking to block\n" +
          "3. Lodge a police complaint\n" +
          "4. Request new card\n\n" +
          "Would you like to speak to our support team right away? Type 'connect agent'.";
      }
      if (msg.includes('apply') || msg.includes('new')) {
        return "To apply for a Debit/Credit card:\n\n" +
          "1. Login to Internet Banking\n" +
          "2. Go to 'Cards' section\n" +
          "3. Select card type\n" +
          "4. Fill application\n" +
          "5. Submit\n\n" +
          "Card will be delivered in 7-10 days. Would you like to know about card features?";
      }
      return "I can help you with:\n" +
        "• Apply for new card\n" +
        "• Block/unblock card\n" +
        "• Set card limits\n" +
        "• Card charges\n" +
        "• Lost card procedure\n\n" +
        "What would you like to know?";
    }

    // Internet/Mobile banking
    if (msg.includes('internet banking') || msg.includes('online banking') || msg.includes('net banking')) {
      return "Internet Banking Services:\n\n" +
        "To register:\n" +
        "1. Visit www.senpaibank.com\n" +
        "2. Click 'Register for Internet Banking'\n" +
        "3. Enter account number and details\n" +
        "4. Verify via OTP\n" +
        "5. Create login credentials\n\n" +
        "Features: Fund transfer, Bill payments, Account statements, and more!\n\n" +
        "Need help with registration?";
    }

    if (msg.includes('mobile app') || msg.includes('mobile banking')) {
      return "SENPAI Mobile Banking App:\n\n" +
        "Download from:\n" +
        "• Google Play Store (Android)\n" +
        "• Apple App Store (iOS)\n\n" +
        "Features:\n" +
        "✓ Check balance\n" +
        "✓ Transfer money\n" +
        "✓ Pay bills\n" +
        "✓ UPI payments\n" +
        "✓ Locate ATM/Branch\n" +
        "✓ Block card\n\n" +
        "Need help with app installation?";
    }

    // Branch/ATM location
    if (msg.includes('branch') || msg.includes('atm') || msg.includes('location') || msg.includes('near')) {
      return "Find Nearest Branch/ATM:\n\n" +
        "• Visit our website and click 'Branch Locator'\n" +
        "• Use our mobile app's 'Locate Us' feature\n" +
        "• Call 1800 1080 for assistance\n\n" +
        "We have 150+ branches across China. Would you like contact details of our main branch?";
    }

    // Customer service
    if (msg.includes('complaint') || msg.includes('issue') || msg.includes('problem')) {
      return "To register a complaint:\n\n" +
        "1. Call 1800 1080 (24/7)\n" +
        "2. Email: support@senpaibank.com\n" +
        "3. Visit any branch\n" +
        "4. Use our website's complaint form\n\n" +
        "You'll receive a reference number. Track status online.\n\n" +
        "Would you like to connect with an agent now? Type 'connect agent'.";
    }

    // Contact/Help
    if (msg.includes('contact') || msg.includes('helpline') || msg.includes('support') || msg.includes('call')) {
      return "📞 Contact SENPAI Bank:\n\n" +
        "24/7 Helpline: 1800 1080\n" +
        "Email: support@senpaibank.com\n" +
        "WhatsApp: +86 XXX XXX XXXX\n\n" +
        "Office Hours: Mon-Sat, 9 AM - 6 PM\n" +
        "Head Office: Lujiazui Financial District, Shanghai\n\n" +
        "How else can I help you?";
    }

    // Connect to agent
    if (msg.includes('agent') || msg.includes('human') || msg.includes('representative') || msg.includes('officer')) {
      return "🔗 Connecting you to a customer service agent...\n\n" +
        "While you wait, here are quick contact options:\n\n" +
        "📞 Call: 1800 1080 (24/7)\n" +
        "📧 Email: support@senpaibank.com\n\n" +
        "Average wait time: 2-3 minutes\n\n" +
        "You can also continue chatting with me for basic queries!";
    }

    // Greetings
    if (msg.includes('hi') || msg.includes('hello') || msg.includes('hey')) {
      return "Hello! 👋 How can I assist you with your banking needs today?";
    }

    if (msg.includes('thank') || msg.includes('thanks')) {
      return "You're welcome! 😊 Is there anything else I can help you with?";
    }

    // Default response for complex queries
    return "I'm sorry, I didn't quite understand that. For complex queries, I recommend:\n\n" +
      "📞 Call our 24/7 helpline: 1800 1080\n" +
      "📧 Email: support@senpaibank.com\n" +
      "👤 Type 'connect agent' to talk to a customer service representative\n\n" +
      "Or you can ask me about:\n" +
      "• Account opening\n" +
      "• Loans\n" +
      "• Cards\n" +
      "• Internet/Mobile banking\n" +
      "• Branch locations";
  };

  const handleSend = () => {
    if (!inputMessage.trim()) return;

    addUserMessage(inputMessage);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const response = getBotResponse(inputMessage);
      setIsTyping(false);
      addBotMessage(response);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-16 w-16 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-50"
          aria-label="Open live chat"
        >
          <MessageCircle className="h-8 w-8" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-[90vw] sm:w-96 h-[600px] shadow-2xl flex flex-col z-50 border-2 border-blue-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                <Bot className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <h3 className="font-semibold">SENPAI Assistant</h3>
                <p className="text-xs text-blue-100">Online • Instant replies</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-700 p-2 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'bot' && (
                  <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="h-5 w-5 text-blue-700" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-blue-700 text-white'
                      : 'bg-white border border-gray-200 text-gray-800'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString('en-US', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
                {message.sender === 'user' && (
                  <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="h-5 w-5 text-gray-600" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center">
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5 text-blue-700" />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
                  <div className="flex gap-1">
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t bg-white">
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => {
                  addUserMessage("How to open account?");
                  setTimeout(() => {
                    setIsTyping(true);
                    setTimeout(() => {
                      setIsTyping(false);
                      addBotMessage(getBotResponse("How to open account?"));
                    }, 1000);
                  }, 100);
                }}
                className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full whitespace-nowrap hover:bg-blue-100"
              >
                Open Account
              </button>
              <button
                onClick={() => {
                  addUserMessage("Loan rates");
                  setTimeout(() => {
                    setIsTyping(true);
                    setTimeout(() => {
                      setIsTyping(false);
                      addBotMessage(getBotResponse("Loan rates"));
                    }, 1000);
                  }, 100);
                }}
                className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full whitespace-nowrap hover:bg-blue-100"
              >
                Loan Rates
              </button>
              <button
                onClick={() => {
                  addUserMessage("Contact support");
                  setTimeout(() => {
                    setIsTyping(true);
                    setTimeout(() => {
                      setIsTyping(false);
                      addBotMessage(getBotResponse("Contact support"));
                    }, 1000);
                  }, 100);
                }}
                className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full whitespace-nowrap hover:bg-blue-100"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white rounded-b-lg">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 h-10"
              />
              <Button
                onClick={handleSend}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-blue-700 hover:bg-blue-800 px-4"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              For urgent matters, call <a href="tel:18001080" className="text-blue-700 hover:underline">1800 1080</a>
            </p>
          </div>
        </Card>
      )}
    </>
  );
}
