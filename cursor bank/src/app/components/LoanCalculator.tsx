import { useState, useEffect } from 'react';
import { Calculator, IndianRupee, Calendar, Percent, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState('500000');
  const [interestRate, setInterestRate] = useState('8.5');
  const [loanTenure, setLoanTenure] = useState('5');
  const [tenureType, setTenureType] = useState<'years' | 'months'>('years');
  const [loanType, setLoanType] = useState('home');
  
  const [monthlyEMI, setMonthlyEMI] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const loanTypes = {
    home: { name: 'Home Loan', rate: 8.5 },
    personal: { name: 'Personal Loan', rate: 11.5 },
    car: { name: 'Car Loan', rate: 9.5 },
    education: { name: 'Education Loan', rate: 10.5 },
    business: { name: 'Business Loan', rate: 12.0 },
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTenure, tenureType]);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount) || 0;
    const rate = (parseFloat(interestRate) || 0) / 12 / 100;
    const tenure = tenureType === 'years' 
      ? (parseInt(loanTenure) || 0) * 12 
      : parseInt(loanTenure) || 0;

    if (principal > 0 && rate > 0 && tenure > 0) {
      // EMI Formula: P × r × (1 + r)^n / ((1 + r)^n - 1)
      const emi = principal * rate * Math.pow(1 + rate, tenure) / (Math.pow(1 + rate, tenure) - 1);
      const total = emi * tenure;
      const interest = total - principal;

      setMonthlyEMI(Math.round(emi));
      setTotalInterest(Math.round(interest));
      setTotalAmount(Math.round(total));
    } else {
      setMonthlyEMI(0);
      setTotalInterest(0);
      setTotalAmount(0);
    }
  };

  const handleLoanTypeChange = (type: string) => {
    setLoanType(type);
    setInterestRate(loanTypes[type as keyof typeof loanTypes].rate.toString());
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'CNY',
      maximumFractionDigits: 0,
    }).format(amount).replace('CNY', '¥');
  };

  return (
    <div className="space-y-6">
      <Card className="border-blue-200 shadow-lg">
        <CardHeader className="bg-blue-50">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-blue-700 rounded-full flex items-center justify-center">
              <Calculator className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl">Loan EMI Calculator</CardTitle>
              <CardDescription className="text-base">
                Calculate your monthly installment easily
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-6 space-y-6">
          {/* Loan Type Selection */}
          <div className="space-y-3">
            <Label htmlFor="loanType" className="text-lg">Select Loan Type</Label>
            <Select value={loanType} onValueChange={handleLoanTypeChange}>
              <SelectTrigger className="h-12 text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(loanTypes).map(([key, value]) => (
                  <SelectItem key={key} value={key} className="text-base py-3">
                    {value.name} ({value.rate}% p.a.)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Loan Amount */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="loanAmount" className="text-lg">Loan Amount</Label>
              <span className="text-2xl text-blue-700">{formatCurrency(parseFloat(loanAmount) || 0)}</span>
            </div>
            <Input
              id="loanAmount"
              type="range"
              min="10000"
              max="10000000"
              step="10000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="h-3 cursor-pointer"
            />
            <Input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="h-12 text-lg"
              placeholder="Enter amount"
            />
          </div>

          {/* Interest Rate */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="interestRate" className="text-lg">Interest Rate (% per year)</Label>
              <span className="text-2xl text-blue-700">{interestRate}%</span>
            </div>
            <Input
              id="interestRate"
              type="range"
              min="1"
              max="20"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="h-3 cursor-pointer"
            />
            <Input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="h-12 text-lg"
              step="0.1"
              placeholder="Enter rate"
            />
          </div>

          {/* Loan Tenure */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="loanTenure" className="text-lg">Loan Tenure</Label>
              <span className="text-2xl text-blue-700">{loanTenure} {tenureType}</span>
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                variant={tenureType === 'years' ? 'default' : 'outline'}
                onClick={() => setTenureType('years')}
                className="flex-1 h-12"
              >
                Years
              </Button>
              <Button
                type="button"
                variant={tenureType === 'months' ? 'default' : 'outline'}
                onClick={() => setTenureType('months')}
                className="flex-1 h-12"
              >
                Months
              </Button>
            </div>
            <Input
              id="loanTenure"
              type="range"
              min="1"
              max={tenureType === 'years' ? '30' : '360'}
              step="1"
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
              className="h-3 cursor-pointer"
            />
            <Input
              type="number"
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
              className="h-12 text-lg"
              placeholder="Enter tenure"
            />
          </div>

          {/* Results */}
          <div className="pt-6 border-t space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <IndianRupee className="h-5 w-5 text-blue-700" />
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Monthly EMI</p>
                  <p className="text-2xl text-blue-700">{formatCurrency(monthlyEMI)}</p>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="pt-6 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Percent className="h-5 w-5 text-green-700" />
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Total Interest</p>
                  <p className="text-2xl text-green-700">{formatCurrency(totalInterest)}</p>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="pt-6 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="h-5 w-5 text-purple-700" />
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Total Amount</p>
                  <p className="text-2xl text-purple-700">{formatCurrency(totalAmount)}</p>
                </CardContent>
              </Card>
            </div>

            {/* Breakdown */}
            <Card className="bg-gray-50">
              <CardContent className="pt-6 space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Principal Amount:</span>
                  <span className="text-lg">{formatCurrency(parseFloat(loanAmount) || 0)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Total Interest:</span>
                  <span className="text-lg text-green-700">{formatCurrency(totalInterest)}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Total Payable:</span>
                  <span className="text-xl text-blue-700">{formatCurrency(totalAmount)}</span>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full h-14 text-lg bg-blue-700 hover:bg-blue-800">
              Apply for {loanTypes[loanType as keyof typeof loanTypes].name}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Information Card */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <h3 className="text-lg mb-3">📌 Important Notes:</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• EMI calculations are approximate and for reference only</li>
            <li>• Actual EMI may vary based on processing fees and other charges</li>
            <li>• Interest rates are subject to change based on bank policies</li>
            <li>• Please contact our loan officer for exact calculations</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
