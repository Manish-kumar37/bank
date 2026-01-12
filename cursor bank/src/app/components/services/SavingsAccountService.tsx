import { useState } from 'react';
import { Wallet, CheckCircle, TrendingUp, Shield, Gift, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface SavingsAccountServiceProps {
  onClose: () => void;
}

export function SavingsAccountService({ onClose }: SavingsAccountServiceProps) {
  const [step, setStep] = useState<'benefits' | 'form'>('benefits');
  const [formData, setFormData] = useState({
    accountType: '',
    name: '',
    email: '',
    mobile: '',
    initialDeposit: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const benefits = [
    {
      icon: TrendingUp,
      title: 'High Interest Rates',
      description: 'Earn up to 3.5% p.a. on your savings with quarterly interest credits',
    },
    {
      icon: Shield,
      title: 'Zero Balance Option',
      description: 'Open a zero-balance account with no minimum balance requirement',
    },
    {
      icon: Gift,
      title: 'Welcome Benefits',
      description: 'Get free debit card, cheque book, and internet banking activation',
    },
    {
      icon: Wallet,
      title: 'Easy Access',
      description: 'Access your account 24/7 through ATM, internet, and mobile banking',
    },
  ];

  const accountTypes = [
    { value: 'regular', label: 'Regular Savings (Min: ¥10,000)', rate: '3.25%' },
    { value: 'premium', label: 'Premium Savings (Min: ¥50,000)', rate: '3.5%' },
    { value: 'zero', label: 'Zero Balance Savings', rate: '3.0%' },
    { value: 'senior', label: 'Senior Citizen Savings', rate: '4.0%' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <Card className="max-w-lg w-full">
          <CardContent className="pt-12 pb-12 text-center">
            <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl mb-4">Application Submitted!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Reference Number: <strong className="text-blue-700">SA{Date.now().toString().slice(-8)}</strong>
            </p>
            <p className="text-gray-600 mb-8">
              Our team will contact you within 24 hours to complete the account opening process.
            </p>
            <Button onClick={onClose} className="bg-blue-700 hover:bg-blue-800">
              Close
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <Card 
        className="max-w-4xl w-full my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader className="bg-blue-50 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 bg-white/50 hover:bg-white text-gray-500 hover:text-gray-900 rounded-full transition-all shadow-sm"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3">
            <Wallet className="h-10 w-10 text-blue-700" />
            <div>
              <CardTitle className="text-3xl">Open Savings Account</CardTitle>
              <CardDescription className="text-lg">Start your savings journey with SENPAI Bank</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-6 bg-[rgba(255,255,255,0)]">
          {step === 'benefits' && (
            <div className="space-y-6 bg-[rgba(133,133,19,0)]">
              <div>
                <h3 className="text-2xl mb-6">Account Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="flex gap-4 p-4 bg-blue-50 rounded-lg">
                        <div className="h-12 w-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-xl mb-4">Interest Rates</h4>
                <div className="space-y-3">
                  {accountTypes.map((type) => (
                    <div key={type.value} className="flex justify-between items-center">
                      <span className="text-gray-700">{type.label}</span>
                      <span className="text-green-700 font-semibold text-lg">{type.rate} p.a.</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  onClick={() => setStep('form')} 
                  className="flex-1 h-14 text-lg bg-blue-700 hover:bg-blue-800"
                >
                  Apply Now
                </Button>
                <Button 
                  onClick={onClose} 
                  variant="outline" 
                  className="h-14 text-lg"
                >
                  Maybe Later
                </Button>
              </div>
            </div>
          )}

          {step === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="accountType" className="text-lg">Select Account Type</Label>
                  <Select 
                    value={formData.accountType} 
                    onValueChange={(val) => setFormData({...formData, accountType: val})}
                    required
                  >
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Choose account type" />
                    </SelectTrigger>
                    <SelectContent>
                      {accountTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value} className="text-base py-3">
                          {type.label} - {type.rate} p.a.
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12 text-base"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="h-12 text-base"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-lg">Mobile Number</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                      className="h-12 text-base"
                      placeholder="10-digit mobile"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="initialDeposit" className="text-lg">Initial Deposit (¥)</Label>
                  <Input
                    id="initialDeposit"
                    type="number"
                    value={formData.initialDeposit}
                    onChange={(e) => setFormData({...formData, initialDeposit: e.target.value})}
                    className="h-12 text-base"
                    placeholder="Minimum ¥1,000"
                    min="1000"
                    required
                  />
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  📋 <strong>Next Steps:</strong> After submission, you'll need to visit the nearest branch 
                  with your ID proof, address proof, and photographs to complete the account opening.
                </p>
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="flex-1 h-14 text-lg bg-blue-700 hover:bg-blue-800">
                  Submit Application
                </Button>
                <Button 
                  type="button"
                  onClick={() => setStep('benefits')} 
                  variant="outline" 
                  className="h-14 text-lg"
                >
                  Back
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
