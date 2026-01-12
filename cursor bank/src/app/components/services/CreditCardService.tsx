import { useState } from 'react';
import { CreditCard, Lock, Shield, CheckCircle, X, AlertCircle, Wifi, Cpu, Wallet, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { motion } from 'motion/react';

interface CreditCardServiceProps {
  onClose: () => void;
}

export function CreditCardService({ onClose }: CreditCardServiceProps) {
  const [view, setView] = useState<'cards' | 'debit-cards' | 'apply' | 'block' | 'score'>('cards');
  const [cibilScore, setCibilScore] = useState<number | null>(null);
  const [checkingScore, setCheckingScore] = useState(false);
  const [applyType, setApplyType] = useState<'credit' | 'debit'>('credit');
  const [formData, setFormData] = useState({
    cardType: '',
    name: '',
    email: '',
    mobile: '',
    income: '',
    employment: '',
  });
  const [blockData, setBlockData] = useState({
    cardNumber: '',
    reason: '',
  });
  const [cardBlocked, setCardBlocked] = useState(false);

  const creditCards = [
    {
      name: 'Elite Black Credit Card',
      type: 'Premium Credit',
      image: 'bg-gradient-to-br from-gray-900 via-slate-800 to-black',
      textColor: 'text-white',
      accentColor: 'text-gray-400',
      features: ['Unlimited 2% cashback', 'Priority Pass Access', '24/7 Concierge', 'Zero Forex Markup'],
      fee: '¥5000/year',
      minIncome: '¥100,000/month',
      eligibleScore: 780,
      pattern: 'geometric'
    },
    {
      name: 'Gold Pro Credit Card',
      type: 'Professional Credit',
      image: 'bg-gradient-to-bl from-amber-100 via-orange-100 to-yellow-200',
      textColor: 'text-amber-900',
      accentColor: 'text-amber-700/60',
      features: ['1.5% dining cashback', 'Fuel surcharge waiver', 'Movie ticket BOGO', 'Quarterly lounge access'],
      fee: '¥1000/year',
      minIncome: '¥50,000/month',
      eligibleScore: 700,
      pattern: 'waves'
    },
    {
      name: 'Silver Newbie Credit Card',
      type: 'Entry Credit',
      image: 'bg-gradient-to-tr from-blue-100 via-indigo-100 to-purple-100',
      textColor: 'text-slate-700',
      accentColor: 'text-slate-500/60',
      features: ['1% online cashback', 'No annual fee', 'Build credit history', 'EMI conversion'],
      fee: 'Lifetime Free',
      minIncome: '¥20,000/month',
      eligibleScore: 650,
      pattern: 'mesh'
    },
  ];

  const debitCards = [
    {
      name: 'Infinite Debit Card',
      type: 'Premium Debit',
      image: 'bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200',
      textColor: 'text-rose-900',
      accentColor: 'text-rose-500/60',
      features: ['Higher withdrawal limits', 'Airport Lounge Access', 'Purchase Protection', 'Personal Accident Insurance'],
      fee: '¥500/year',
      minBalance: '¥50,000',
      pattern: 'abstract'
    },
    {
      name: 'Platinum Debit Card',
      type: 'Standard Debit',
      image: 'bg-gradient-to-tr from-teal-100 via-emerald-100 to-green-100',
      textColor: 'text-teal-900',
      accentColor: 'text-teal-600/60',
      features: ['Global acceptance', 'Rewards on spends', 'Secure online payments', 'Contactless payments'],
      fee: '¥200/year',
      minBalance: '¥10,000',
      pattern: 'circles'
    },
    {
      name: 'Classic Debit Card',
      type: 'Basic Debit',
      image: 'bg-gradient-to-bl from-sky-100 via-blue-100 to-cyan-100',
      textColor: 'text-blue-900',
      accentColor: 'text-blue-600/60',
      features: ['Standard daily limits', 'Zero liability', 'SMS alerts', 'Mobile banking access'],
      fee: 'Lifetime Free',
      minBalance: '¥0',
      pattern: 'lines'
    }
  ];

  const handleCheckCibilScore = async () => {
    setCheckingScore(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    const score = Math.floor(Math.random() * (850 - 600 + 1)) + 600;
    setCibilScore(score);
    setCheckingScore(false);
  };

  const handleBlockCard = async () => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    setCardBlocked(true);
  };

  const getScoreColor = (score: number) => {
    if (score >= 750) return 'text-green-600';
    if (score >= 650) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreStatus = (score: number) => {
    if (score >= 750) return 'Excellent';
    if (score >= 700) return 'Good';
    if (score >= 650) return 'Fair';
    return 'Needs Improvement';
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <Card 
        className="max-w-6xl w-full my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader className="bg-purple-50 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 bg-white/50 hover:bg-white text-gray-500 hover:text-gray-900 rounded-full transition-all shadow-sm"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3">
            <CreditCard className="h-10 w-10 text-purple-700" />
            <div>
              <CardTitle className="text-3xl">Cards & Payments</CardTitle>
              <CardDescription className="text-lg">Manage your Credit and Debit cards</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-6">
          {/* View Tabs */}
          <div className="flex gap-2 mb-6 border-b overflow-x-auto">
            <button
              onClick={() => setView('cards')}
              className={`px-4 py-3 whitespace-nowrap transition-colors ${
                view === 'cards' 
                  ? 'border-b-2 border-purple-700 text-purple-700 font-medium' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Credit Cards
            </button>
            <button
              onClick={() => setView('debit-cards')}
              className={`px-4 py-3 whitespace-nowrap transition-colors ${
                view === 'debit-cards' 
                  ? 'border-b-2 border-purple-700 text-purple-700 font-medium' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Debit Cards
            </button>
            <button
              onClick={() => setView('score')}
              className={`px-4 py-3 whitespace-nowrap transition-colors ${
                view === 'score' 
                  ? 'border-b-2 border-purple-700 text-purple-700 font-medium' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Check CIBIL Score
            </button>
            <button
              onClick={() => setView('apply')}
              className={`px-4 py-3 whitespace-nowrap transition-colors ${
                view === 'apply' 
                  ? 'border-b-2 border-purple-700 text-purple-700 font-medium' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Track Application
            </button>
            <button
              onClick={() => setView('block')}
              className={`px-4 py-3 whitespace-nowrap transition-colors ${
                view === 'block' 
                  ? 'border-b-2 border-purple-700 text-purple-700 font-medium' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Block Card
            </button>
          </div>

          {/* Credit Cards View */}
          {view === 'cards' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                 <h3 className="text-2xl font-semibold text-gray-800">Premium Credit Cards</h3>
                 <p className="text-gray-500">Double click cards to see details</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {creditCards.map((card, index) => (
                  <FlipCard 
                    key={index} 
                    card={card} 
                    onApply={() => {
                        setApplyType('credit');
                        setFormData(prev => ({...prev, cardType: card.name}));
                        setView('apply');
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Debit Cards View */}
          {view === 'debit-cards' && (
             <div className="space-y-6">
               <div className="flex justify-between items-center mb-4">
                 <h3 className="text-2xl font-semibold text-gray-800">Lifestyle Debit Cards</h3>
                 <p className="text-gray-500">Double click cards to see details</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {debitCards.map((card, index) => (
                   <FlipCard 
                    key={index} 
                    card={card} 
                    onApply={() => {
                        setApplyType('debit');
                        setFormData(prev => ({...prev, cardType: card.name}));
                        setView('apply');
                    }}
                   />
                 ))}
               </div>
             </div>
          )}

          {/* CIBIL Score Check */}
          {view === 'score' && (
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                <Shield className="h-16 w-16 text-blue-700 mx-auto mb-4" />
                <h3 className="text-2xl mb-3">Check Your CIBIL Score</h3>
                <p className="text-gray-700 mb-6">
                  Your CIBIL score determines your credit card eligibility. Check for free!
                </p>
                
                {cibilScore === null ? (
                  <Button 
                    onClick={handleCheckCibilScore}
                    disabled={checkingScore}
                    className="bg-blue-700 hover:bg-blue-800 h-14 text-lg px-8"
                  >
                    {checkingScore ? 'Checking Score...' : 'Check CIBIL Score (Free)'}
                  </Button>
                ) : (
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-8 shadow-lg">
                      <p className="text-gray-600 mb-2">Your CIBIL Score</p>
                      <p className={`text-6xl font-bold mb-2 ${getScoreColor(cibilScore)}`}>
                        {cibilScore}
                      </p>
                      <p className={`text-xl ${getScoreColor(cibilScore)}`}>
                        {getScoreStatus(cibilScore)}
                      </p>
                      <div className="mt-6 w-full bg-gray-200 rounded-full h-4">
                        <div 
                          className={`h-4 rounded-full ${cibilScore >= 750 ? 'bg-green-600' : cibilScore >= 650 ? 'bg-yellow-600' : 'bg-red-600'}`}
                          style={{ width: `${((cibilScore - 300) / 550) * 100}%` }}
                        />
                      </div>
                    </div>
                    <Button onClick={() => setCibilScore(null)} variant="outline" className="w-full">
                      Check Again
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Apply View */}
          {view === 'apply' && (
            <form className="space-y-6 max-w-2xl mx-auto">
              <div className="text-center mb-6">
                 <h3 className="text-2xl font-semibold">Apply for {applyType === 'credit' ? 'Credit' : 'Debit'} Card</h3>
                 <p className="text-gray-500">Complete the form below to get your new card</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardType" className="text-lg">Selected Card</Label>
                  <Select 
                    value={formData.cardType} 
                    onValueChange={(val) => setFormData({...formData, cardType: val})}
                  >
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Choose card" />
                    </SelectTrigger>
                    <SelectContent>
                      {(applyType === 'credit' ? creditCards : debitCards).map((card) => (
                        <SelectItem key={card.name} value={card.name} className="text-base py-3">
                          {card.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12 text-base"
                    placeholder="As per your ID"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="h-12 text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-lg">Mobile</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                      className="h-12 text-base"
                    />
                  </div>
                </div>

                {applyType === 'credit' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="employment" className="text-lg">Employment Type</Label>
                        <Select 
                        value={formData.employment} 
                        onValueChange={(val) => setFormData({...formData, employment: val})}
                        >
                        <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="salaried">Salaried</SelectItem>
                            <SelectItem value="self-employed">Self Employed</SelectItem>
                            <SelectItem value="business">Business Owner</SelectItem>
                        </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="income" className="text-lg">Monthly Income (¥)</Label>
                        <Input
                        id="income"
                        type="number"
                        value={formData.income}
                        onChange={(e) => setFormData({...formData, income: e.target.value})}
                        className="h-12 text-base"
                        />
                    </div>
                    </div>
                )}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  📋 We will process your application within 2-3 business days.
                </p>
              </div>

              <Button type="button" className="w-full h-14 text-lg bg-purple-700 hover:bg-purple-800">
                Submit Application
              </Button>
            </form>
          )}

          {/* Block Card View */}
          {view === 'block' && (
            <div className="space-y-6 max-w-2xl mx-auto">
              {!cardBlocked ? (
                <>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertCircle className="h-8 w-8 text-red-600" />
                      <h3 className="text-2xl">Block Your Card</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Lost your card? Block it immediately to prevent unauthorized transactions.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber" className="text-lg">Card Number (Last 4 digits)</Label>
                      <Input
                        id="cardNumber"
                        value={blockData.cardNumber}
                        onChange={(e) => setBlockData({...blockData, cardNumber: e.target.value})}
                        className="h-12 text-base"
                        placeholder="Enter last 4 digits"
                        maxLength={4}
                      />
                    </div>
                    <div className="space-y-2">
                       <Label htmlFor="reason" className="text-lg">Reason</Label>
                       <Select 
                         value={blockData.reason} 
                         onValueChange={(val) => setBlockData({...blockData, reason: val})}
                       >
                         <SelectTrigger className="h-12 text-base"><SelectValue placeholder="Select reason" /></SelectTrigger>
                         <SelectContent>
                           <SelectItem value="lost">Lost</SelectItem>
                           <SelectItem value="stolen">Stolen</SelectItem>
                           <SelectItem value="damaged">Damaged</SelectItem>
                         </SelectContent>
                       </Select>
                    </div>
                  </div>
                  <Button onClick={handleBlockCard} className="w-full h-14 text-lg bg-red-700 hover:bg-red-800" disabled={!blockData.cardNumber}>
                    <Lock className="mr-2 h-5 w-5" /> Block Card
                  </Button>
                </>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl mb-3">Card Blocked Successfully</h3>
                  <Button onClick={onClose} className="bg-green-700 hover:bg-green-800">Close</Button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function FlipCard({ card, onApply }: any) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-shadow border-none bg-transparent shadow-none">
      {/* 3D Flip Container */}
      <div 
        className="relative w-full h-56 perspective-1000 cursor-pointer group mb-6"
        onDoubleClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="w-full h-full relative preserve-3d"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* FRONT SIDE */}
          <div className={`absolute inset-0 backface-hidden rounded-2xl shadow-xl p-6 flex flex-col justify-between ${card.image} ${card.textColor} border border-white/20 overflow-hidden`}>
            
            {/* Decorative Patterns */}
            {card.pattern === 'geometric' && (
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-48 h-48 border border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                </div>
            )}
            {card.pattern === 'waves' && (
                <div className="absolute inset-0 opacity-20">
                    <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320">
                        <path fill="currentColor" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            )}
            {card.pattern === 'abstract' && (
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rotate-45 transform"></div>
                    <div className="absolute bottom-10 -left-10 w-20 h-20 bg-white rounded-full"></div>
                </div>
            )}
             {card.pattern === 'circles' && (
                <div className="absolute inset-0 opacity-10">
                     {[...Array(5)].map((_, i) => (
                        <div key={i} className="absolute border border-white rounded-full" 
                             style={{
                                width: `${(i + 1) * 50}px`,
                                height: `${(i + 1) * 50}px`,
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)'
                             }}
                        ></div>
                     ))}
                </div>
            )}


            {/* Header */}
            <div className="flex justify-between items-start relative z-10">
              <Wifi className={`w-8 h-8 rotate-90 ${card.accentColor}`} />
              <div className="text-right">
                <p className="font-bold tracking-widest text-lg font-mono">SENPAI</p>
                <p className="text-[10px] uppercase tracking-wider opacity-80">{card.type}</p>
              </div>
            </div>

            {/* Chip & Number */}
            <div className="space-y-4 relative z-10">
              <Cpu className={`w-10 h-10 ${card.accentColor} opacity-90`} />
              <p className="font-mono text-2xl tracking-widest drop-shadow-sm truncate">
                •••• •••• •••• 8888
              </p>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-end relative z-10">
              <div>
                <p className="text-[9px] uppercase tracking-widest opacity-70 mb-1">Card Holder</p>
                <p className="font-medium tracking-wide uppercase truncate max-w-[120px]">JOHN DOE</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-[9px] uppercase tracking-widest opacity-70 mb-1">Expires</p>
                <p className="font-mono font-medium">12/28</p>
              </div>
              <CreditCard className={`w-8 h-8 ${card.accentColor}`} />
            </div>

            {/* Flip Hint */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white pointer-events-none z-20">
              Double Click to Flip
            </div>
          </div>

          {/* BACK SIDE */}
          <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-2xl shadow-xl overflow-hidden ${card.image} ${card.textColor} border border-white/10`}>
            
            {/* Top Text */}
            <div className="h-8 w-full px-4 flex items-center justify-end">
                <p className="text-[8px] tracking-wider opacity-80 font-medium">AUTHORIZED SIGNATURE • NOT TRANSFERABLE</p>
            </div>

            {/* Magnetic Strip */}
            <div className="w-full h-12 bg-[#1a1a1a] relative shadow-inner">
               <div className="w-full h-full opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)]"></div>
            </div>

            <div className="p-5 space-y-5">
              {/* Signature Strip & CVC */}
              <div className="flex items-center gap-3 mt-1">
                <div className="h-10 flex-[0.7] bg-white/90 backdrop-blur-sm flex items-center justify-start px-2 relative overflow-hidden rounded-sm">
                   <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#e5e5e5,#e5e5e5_1px,transparent_1px,transparent_3px)] opacity-50"></div>
                   <span className="font-handwriting text-gray-600 text-lg relative z-10 rotate-[-1deg] ml-4 font-cursive">John Doe</span>
                </div>
                <div className="h-8 px-2 flex items-center justify-center">
                    <span className="font-mono font-bold text-sm italic opacity-90">CVC</span>
                    <span className="font-mono font-bold text-lg italic ml-2 bg-white/20 px-1 rounded">567</span>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                 {/* Hologram */}
                 <div className="w-14 h-10 rounded bg-gradient-to-tr from-gray-300 via-gray-100 to-gray-300 flex items-center justify-center shadow-md border border-white/40 overflow-hidden relative flex-shrink-0">
                    <div className="absolute inset-0 opacity-50 bg-[repeating-radial-gradient(circle_at_center,transparent_0,transparent_2px,#000_2px,#000_3px)] mix-blend-overlay scale-50"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400/30 to-purple-400/30 blur-sm absolute"></div>
                    <Shield className="w-6 h-6 text-gray-400/60 relative z-10" />
                 </div>

                 {/* Legal Text */}
                 <div className="flex-1 text-[6.5px] leading-3 opacity-70 text-justify tracking-wide font-medium">
                    <p>This card is the property of SENPAI Bank. Use of this card is governed by the Cardholder Agreement. If found, please return to any SENPAI Bank branch or contact customer service immediately. Not transferable. Valid only in designated regions.</p>
                 </div>
              </div>
            </div>

            {/* Decorative Bottom */}
            <div className="absolute bottom-6 left-0 w-full px-6 flex justify-between items-end opacity-20 pointer-events-none select-none">
                 <span className="font-mono text-xl tracking-[0.15em] font-bold drop-shadow-sm">0000 0000 0000 0000</span>
                 <span className="font-mono text-xs tracking-widest uppercase">CARDHOLDER</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Features & Action */}
      <CardContent className="pt-0 px-2 space-y-4">
        <h3 className="text-xl font-semibold text-center">{card.name}</h3>
        
        <div className="space-y-3 bg-gray-50 p-4 rounded-xl">
          {card.features.map((feature: string, i: number) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700 leading-tight">{feature}</p>
            </div>
          ))}
        </div>

        <div className="pt-2 space-y-2">
          <div className="flex justify-between text-sm px-2">
            <span className="text-gray-500">{card.fee === 'Lifetime Free' ? 'Fee' : 'Annual Fee'}</span>
            <span className="font-semibold text-gray-900">{card.fee}</span>
          </div>
          <div className="flex justify-between text-sm px-2">
            <span className="text-gray-500">{card.minIncome ? 'Min. Income' : 'Min. Balance'}</span>
            <span className="font-semibold text-gray-900">{card.minIncome || card.minBalance}</span>
          </div>
        </div>

        <Button 
          className="w-full h-12 bg-purple-700 hover:bg-purple-800 shadow-lg shadow-purple-200 group"
          onClick={onApply}
        >
          Apply Now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
}
