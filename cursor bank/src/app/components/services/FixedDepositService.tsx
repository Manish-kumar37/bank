import { useState } from 'react';
import { PiggyBank, TrendingUp, Calendar, X, Plus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface FixedDepositServiceProps {
  onClose: () => void;
}

export function FixedDepositService({ onClose }: FixedDepositServiceProps) {
  const [view, setView] = useState<'dashboard' | 'calculator' | 'new'>('dashboard');
  const [amount, setAmount] = useState('100000');
  const [tenure, setTenure] = useState('12');
  const [maturityAmount, setMaturityAmount] = useState(0);

  const fdRates = [
    { tenure: '7-14 days', rate: '3.00%' },
    { tenure: '15-45 days', rate: '3.50%' },
    { tenure: '46-90 days', rate: '4.50%' },
    { tenure: '91-180 days', rate: '5.50%' },
    { tenure: '181-364 days', rate: '6.25%' },
    { tenure: '1 year', rate: '6.75%' },
    { tenure: '2 years', rate: '7.00%' },
    { tenure: '3 years', rate: '7.25%' },
    { tenure: '5 years', rate: '7.50%' },
    { tenure: '10 years', rate: '7.75%' },
  ];

  const currentFDs = [
    {
      id: 'FD001',
      amount: '¥50,000',
      rate: '7.00%',
      startDate: '01-Jan-2024',
      maturityDate: '01-Jan-2026',
      maturityAmount: '¥57,245',
      status: 'Active',
    },
    {
      id: 'FD002',
      amount: '¥1,00,000',
      rate: '7.50%',
      startDate: '15-Mar-2023',
      maturityDate: '15-Mar-2028',
      maturityAmount: '¥1,43,563',
      status: 'Active',
    },
    {
      id: 'FD003',
      amount: '¥25,000',
      rate: '6.75%',
      startDate: '10-Jun-2024',
      maturityDate: '10-Jun-2025',
      maturityAmount: '¥26,688',
      status: 'Active',
    },
  ];

  const benefits = [
    'Higher interest rates compared to savings accounts',
    'Guaranteed returns with zero market risk',
    'Flexible tenure options from 7 days to 10 years',
    'Loan facility against FD up to 90% of deposit',
    'Auto-renewal option available',
    'Premature withdrawal allowed with penalty',
    'Senior citizen get additional 0.5% interest',
    'Tax saving FD with deduction under Section 80C',
  ];

  const calculateMaturity = () => {
    const principal = parseFloat(amount);
    const months = parseInt(tenure);
    const rate = months >= 60 ? 7.5 : months >= 36 ? 7.25 : months >= 24 ? 7.0 : months >= 12 ? 6.75 : 5.5;
    
    // Simple interest calculation for display
    const interest = (principal * rate * (months / 12)) / 100;
    const maturity = principal + interest;
    setMaturityAmount(Math.round(maturity));
  };

  useState(() => {
    calculateMaturity();
  });

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <Card 
        className="max-w-6xl w-full my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader className="bg-green-50 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 bg-white/50 hover:bg-white text-gray-500 hover:text-gray-900 rounded-full transition-all shadow-sm"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3">
            <PiggyBank className="h-10 w-10 text-green-700" />
            <div>
              <CardTitle className="text-3xl">Fixed Deposit</CardTitle>
              <CardDescription className="text-lg">Secure your future with guaranteed returns</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-6">
          {/* View Tabs */}
          <div className="flex gap-2 mb-6 border-b">
            <button
              onClick={() => setView('dashboard')}
              className={`px-6 py-3 transition-colors ${
                view === 'dashboard' 
                  ? 'border-b-2 border-green-700 text-green-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              My FDs
            </button>
            <button
              onClick={() => setView('calculator')}
              className={`px-6 py-3 transition-colors ${
                view === 'calculator' 
                  ? 'border-b-2 border-green-700 text-green-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              FD Calculator
            </button>
            <button
              onClick={() => setView('new')}
              className={`px-6 py-3 transition-colors ${
                view === 'new' 
                  ? 'border-b-2 border-green-700 text-green-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Open New FD
            </button>
          </div>

          {/* Dashboard View */}
          {view === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-6 text-center">
                    <p className="text-sm text-gray-600 mb-2">Total FDs</p>
                    <p className="text-3xl text-blue-700">3</p>
                  </CardContent>
                </Card>
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="pt-6 text-center">
                    <p className="text-sm text-gray-600 mb-2">Total Investment</p>
                    <p className="text-3xl text-green-700">¥1,75,000</p>
                  </CardContent>
                </Card>
                <Card className="bg-purple-50 border-purple-200">
                  <CardContent className="pt-6 text-center">
                    <p className="text-sm text-gray-600 mb-2">Maturity Value</p>
                    <p className="text-3xl text-purple-700">¥2,27,496</p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-xl mb-4">Your Fixed Deposits</h3>
                <div className="space-y-4">
                  {currentFDs.map((fd) => (
                    <Card key={fd.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="pt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">FD Number</p>
                            <p className="font-semibold text-lg">{fd.id}</p>
                            <p className="text-sm text-green-600">{fd.status}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Deposit Amount</p>
                            <p className="font-semibold text-lg">{fd.amount}</p>
                            <p className="text-sm text-blue-600">Rate: {fd.rate} p.a.</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Maturity Date</p>
                            <p className="font-semibold">{fd.maturityDate}</p>
                            <p className="text-sm text-gray-500">Started: {fd.startDate}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Maturity Amount</p>
                            <p className="font-semibold text-xl text-green-700">{fd.maturityAmount}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Button 
                onClick={() => setView('new')} 
                className="w-full h-14 text-lg bg-green-700 hover:bg-green-800"
              >
                <Plus className="mr-2 h-5 w-5" />
                Open New Fixed Deposit
              </Button>
            </div>
          )}

          {/* Calculator View */}
          {view === 'calculator' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="calcAmount" className="text-lg">Deposit Amount (¥)</Label>
                    <Input
                      id="calcAmount"
                      type="number"
                      value={amount}
                      onChange={(e) => {
                        setAmount(e.target.value);
                        setTimeout(calculateMaturity, 100);
                      }}
                      className="h-12 text-base"
                      min="1000"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="calcTenure" className="text-lg">Tenure (Months)</Label>
                    <Select 
                      value={tenure} 
                      onValueChange={(val) => {
                        setTenure(val);
                        setTimeout(calculateMaturity, 100);
                      }}
                    >
                      <SelectTrigger className="h-12 text-base">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3 Months - 4.5% p.a.</SelectItem>
                        <SelectItem value="6">6 Months - 5.5% p.a.</SelectItem>
                        <SelectItem value="12">1 Year - 6.75% p.a.</SelectItem>
                        <SelectItem value="24">2 Years - 7.0% p.a.</SelectItem>
                        <SelectItem value="36">3 Years - 7.25% p.a.</SelectItem>
                        <SelectItem value="60">5 Years - 7.5% p.a.</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Deposit Amount:</span>
                        <span className="text-lg font-semibold">¥{parseFloat(amount || '0').toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Interest Earned:</span>
                        <span className="text-lg font-semibold text-green-700">
                          ¥{(maturityAmount - parseFloat(amount || '0')).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-green-300">
                        <span className="text-gray-900 font-semibold">Maturity Amount:</span>
                        <span className="text-2xl font-bold text-green-700">¥{maturityAmount.toLocaleString()}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Button 
                    onClick={() => setView('new')} 
                    className="w-full h-12 bg-green-700 hover:bg-green-800"
                  >
                    Open FD with These Details
                  </Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl mb-4">Interest Rates</h3>
                    <Card>
                      <CardContent className="pt-4">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2">Tenure</th>
                              <th className="text-right py-2">Rate (p.a.)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {fdRates.map((rate, index) => (
                              <tr key={index} className="border-b last:border-0">
                                <td className="py-2 text-gray-700">{rate.tenure}</td>
                                <td className="py-2 text-right text-green-700 font-semibold">{rate.rate}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">💡 Special Benefits</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Senior citizens get additional 0.5% interest</li>
                      <li>• Tax saving FD available (5 years lock-in)</li>
                      <li>• Loan facility up to 90% of FD value</li>
                      <li>• Auto-renewal option available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* New FD View */}
          {view === 'new' && (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl mb-4">Benefits of Fixed Deposit</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <TrendingUp className="h-5 w-5 text-green-700 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                <Calendar className="h-12 w-12 text-yellow-700 mx-auto mb-3" />
                <h3 className="text-xl mb-3">Ready to Open a Fixed Deposit?</h3>
                <p className="text-gray-700 mb-6">
                  Please visit your nearest SENPAI Bank branch or use our internet banking to open a Fixed Deposit account.
                  You can also call our customer service at <strong className="text-blue-700">1800 1080</strong> for assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-green-700 hover:bg-green-800 h-12">
                    Find Nearest Branch
                  </Button>
                  <Button variant="outline" className="h-12">
                    Call 1800 1080
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
