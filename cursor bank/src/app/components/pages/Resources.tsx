import { FileText, Download, TrendingUp, DollarSign, Calculator, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { LoanCalculator } from '../LoanCalculator';
import { AccountOpeningForm } from '../AccountOpeningForm';
import { UserGuides } from '../UserGuides';
import { useState } from 'react';

type UserType = 'personal' | 'nri' | 'business';
type Page = 'home' | 'security' | 'login' | 'resources' | 'about' | 'help' | 'terms';

interface ResourcesProps {
  userType: UserType;
  setCurrentPage: (page: Page) => void;
}

export function Resources({ userType, setCurrentPage }: ResourcesProps) {
  const [activeView, setActiveView] = useState<'main' | 'calculator' | 'account-form' | 'guides'>('main');

  const interestRates = {
    personal: [
      { type: 'Savings Account', rate: '3.50% p.a.' },
      { type: 'Fixed Deposit (1 year)', rate: '6.75% p.a.' },
      { type: 'Fixed Deposit (2-3 years)', rate: '7.00% p.a.' },
      { type: 'Fixed Deposit (5 years)', rate: '7.25% p.a.' },
      { type: 'Recurring Deposit', rate: '6.50% p.a.' },
    ],
    nri: [
      { type: 'NRE Savings Account', rate: '3.50% p.a.' },
      { type: 'NRO Savings Account', rate: '3.50% p.a.' },
      { type: 'NRE Fixed Deposit (1 year)', rate: '7.00% p.a.' },
      { type: 'NRE Fixed Deposit (3 years)', rate: '7.50% p.a.' },
      { type: 'NRO Fixed Deposit (1 year)', rate: '7.00% p.a.' },
    ],
    business: [
      { type: 'Current Account', rate: '0% p.a.' },
      { type: 'Business Fixed Deposit (1 year)', rate: '6.75% p.a.' },
      { type: 'Business Fixed Deposit (3 years)', rate: '7.25% p.a.' },
      { type: 'Corporate Term Deposit', rate: '7.50% p.a.' },
      { type: 'Cash Management Account', rate: '4.00% p.a.' },
    ],
  };

  const serviceCharges = {
    personal: [
      { service: 'Account Maintenance (Quarterly)', charge: '₹150' },
      { service: 'ATM Withdrawal (Other Bank)', charge: '₹20 per transaction' },
      { service: 'Cheque Book (25 leaves)', charge: '₹75' },
      { service: 'NEFT/RTGS Transfer', charge: '₹5-25' },
      { service: 'Debit Card Annual Fee', charge: '₹500' },
    ],
    nri: [
      { service: 'NRE/NRO Account Maintenance', charge: 'Free' },
      { service: 'Inward Remittance', charge: '₹200-500' },
      { service: 'Outward Remittance', charge: '₹500-1000' },
      { service: 'Foreign Currency Draft', charge: '₹500' },
      { service: 'International Debit Card', charge: '₹1000' },
    ],
    business: [
      { service: 'Current Account Maintenance', charge: '₹500/quarter' },
      { service: 'Cash Deposit (over limit)', charge: '0.10%' },
      { service: 'Demand Draft', charge: '₹100' },
      { service: 'RTGS Transaction', charge: '₹25-50' },
      { service: 'Corporate Credit Card', charge: '₹1500/year' },
    ],
  };

  const downloads = [
    {
      icon: FileText,
      title: 'Account Opening Forms',
      description: 'Download forms to open new accounts',
      file: 'account-forms.pdf',
    },
    {
      icon: Calculator,
      title: 'Loan Calculator',
      description: 'Calculate your EMI and loan eligibility',
      file: 'loan-calculator.xlsx',
    },
    {
      icon: BookOpen,
      title: 'User Guide',
      description: 'Complete guide to online banking',
      file: 'user-guide.pdf',
    },
    {
      icon: FileText,
      title: 'Terms & Conditions',
      description: 'Banking terms and conditions',
      file: 'terms.pdf',
    },
  ];

  const guides = [
    {
      title: 'Getting Started with Online Banking',
      description: 'Learn how to use our online banking platform effectively',
    },
    {
      title: 'Mobile Banking App Guide',
      description: 'Step-by-step guide to our mobile banking features',
    },
    {
      title: 'Security Best Practices',
      description: 'Keep your account safe with these security tips',
    },
    {
      title: 'Investment Options',
      description: 'Explore various investment products and their benefits',
    },
  ];

  return (
    <div className="bg-white">
      {activeView === 'calculator' && (
        <div className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button 
              onClick={() => setActiveView('main')} 
              variant="outline"
              className="mb-6"
            >
              ← Back to Resources
            </Button>
            <LoanCalculator />
          </div>
        </div>
      )}

      {activeView === 'account-form' && (
        <div className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button 
              onClick={() => setActiveView('main')} 
              variant="outline"
              className="mb-6"
            >
              ← Back to Resources
            </Button>
            <AccountOpeningForm />
          </div>
        </div>
      )}

      {activeView === 'guides' && (
        <div className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button 
              onClick={() => setActiveView('main')} 
              variant="outline"
              className="mb-6"
            >
              ← Back to Resources
            </Button>
            <UserGuides />
          </div>
        </div>
      )}

      {activeView === 'main' && (
        <>
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Resources</h1>
              <p className="text-lg sm:text-xl text-blue-100">
                Find all the information you need about rates, charges, and banking guides
              </p>
            </div>
          </section>

          {/* Quick Access Tools */}
          <section className="py-12 sm:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl text-gray-900 mb-8">Quick Access Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card 
                  className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-blue-300"
                  onClick={() => setActiveView('calculator')}
                >
                  <CardHeader>
                    <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Calculator className="h-8 w-8 text-blue-700" />
                    </div>
                    <CardTitle className="text-xl">Loan Calculator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-lg">
                      Calculate your EMI, total interest, and loan amount easily with our advanced calculator
                    </p>
                    <Button className="w-full bg-blue-700 hover:bg-blue-800 h-12 text-base">
                      Open Calculator
                    </Button>
                  </CardContent>
                </Card>

                <Card 
                  className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-blue-300"
                  onClick={() => setActiveView('account-form')}
                >
                  <CardHeader>
                    <div className="h-16 w-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <FileText className="h-8 w-8 text-green-700" />
                    </div>
                    <CardTitle className="text-xl">Open Account</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-lg">
                      Fill our simple online form to open a new account from the comfort of your home
                    </p>
                    <Button className="w-full bg-green-700 hover:bg-green-800 h-12 text-base">
                      Start Application
                    </Button>
                  </CardContent>
                </Card>

                <Card 
                  className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-blue-300"
                  onClick={() => setActiveView('guides')}
                >
                  <CardHeader>
                    <div className="h-16 w-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <BookOpen className="h-8 w-8 text-purple-700" />
                    </div>
                    <CardTitle className="text-xl">User Guides</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-lg">
                      Step-by-step guides for account opening, loans, withdrawals, deposits, and more
                    </p>
                    <Button className="w-full bg-purple-700 hover:bg-purple-800 h-12 text-base">
                      View Guides
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Interest Rates */}
          <section className="py-12 sm:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="h-6 sm:h-8 w-6 sm:w-8 text-blue-700" />
                <h2 className="text-2xl sm:text-3xl text-gray-900">Interest Rates</h2>
              </div>

              <Card>
                <CardHeader>
                  <CardDescription className="text-lg">
                    Effective rates as of December 27, 2025. Rates are subject to change.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto -mx-4 sm:mx-0">
                    <table className="w-full min-w-[400px]">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 text-gray-900 text-lg">Product Type</th>
                          <th className="text-right py-3 px-4 text-gray-900 text-lg">Interest Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        {interestRates[userType].map((rate, index) => (
                          <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4 text-gray-700 text-base">{rate.type}</td>
                            <td className="py-3 px-4 text-right text-blue-700 text-lg">{rate.rate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Service Charges */}
          <section className="py-12 sm:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <DollarSign className="h-6 sm:h-8 w-6 sm:w-8 text-blue-700" />
                <h2 className="text-2xl sm:text-3xl text-gray-900">Service Charges</h2>
              </div>

              <Card>
                <CardHeader>
                  <CardDescription className="text-lg">
                    Standard service charges applicable. Additional charges may apply.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto -mx-4 sm:mx-0">
                    <table className="w-full min-w-[400px]">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 text-gray-900 text-lg">Service</th>
                          <th className="text-right py-3 px-4 text-gray-900 text-lg">Charge</th>
                        </tr>
                      </thead>
                      <tbody>
                        {serviceCharges[userType].map((charge, index) => (
                          <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4 text-gray-700 text-base">{charge.service}</td>
                            <td className="py-3 px-4 text-right text-blue-700 text-lg">{charge.charge}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Downloads */}
          <section className="py-12 sm:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <Download className="h-6 sm:h-8 w-6 sm:w-8 text-blue-700" />
                <h2 className="text-2xl sm:text-3xl text-gray-900">Downloads</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {downloads.map((download, index) => {
                  const Icon = download.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                          <Icon className="h-6 w-6 text-blue-700" />
                        </div>
                        <CardTitle className="text-lg">{download.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4 text-base">
                          {download.description}
                        </CardDescription>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full h-10"
                          onClick={() => {
                            if (download.title === 'Terms & Conditions') {
                              setCurrentPage('terms');
                            }
                          }}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          {download.title === 'Terms & Conditions' ? 'View' : 'Download'}
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Forex Rates */}
          <section className="py-12 sm:py-16 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl text-gray-900 mb-8">Foreign Exchange Rates</h2>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="overflow-x-auto -mx-4 sm:mx-0">
                    <table className="w-full min-w-[500px]">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 text-gray-900 text-lg">Currency</th>
                          <th className="text-right py-3 px-4 text-gray-900 text-lg">Buy Rate (CNY)</th>
                          <th className="text-right py-3 px-4 text-gray-900 text-lg">Sell Rate (CNY)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-gray-700 text-base">USD - US Dollar</td>
                          <td className="py-3 px-4 text-right text-blue-700 text-lg">7.2450</td>
                          <td className="py-3 px-4 text-right text-blue-700 text-lg">7.2950</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-gray-700 text-base">EUR - Euro</td>
                          <td className="py-3 px-4 text-right text-blue-700 text-lg">7.8920</td>
                          <td className="py-3 px-4 text-right text-blue-700 text-lg">7.9520</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-gray-700 text-base">GBP - British Pound</td>
                          <td className="py-3 px-4 text-right text-blue-700 text-lg">9.1230</td>
                          <td className="py-3 px-4 text-right text-blue-700 text-lg">9.1930</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-gray-700 text-base">JPY - Japanese Yen</td>
                          <td className="py-3 px-4 text-right text-blue-700 text-lg">0.0502</td>
                          <td className="py-3 px-4 text-right text-blue-700 text-lg">0.0506</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    * Rates are indicative and subject to change. Please contact our branch for current rates.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </>
      )}
    </div>
  );
}