import { useState } from 'react';
import { TrendingUp, DollarSign, BarChart3, X, ArrowUp, ArrowDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

interface InvestmentServiceProps {
  onClose: () => void;
}

export function InvestmentService({ onClose }: InvestmentServiceProps) {
  const [selectedStock, setSelectedStock] = useState<string | null>(null);

  const marketIndices = [
    { name: 'Shanghai Composite', value: '3,245.67', change: '+12.45', percent: '+0.39%', trend: 'up' },
    { name: 'Shenzhen Component', value: '10,892.34', change: '-8.23', percent: '-0.08%', trend: 'down' },
    { name: 'CSI 300', value: '3,876.12', change: '+15.67', percent: '+0.41%', trend: 'up' },
  ];

  const topStocks = [
    { symbol: 'SENPAI', name: 'SENPAI Bank', price: '¥245.50', change: '+2.5%', volume: '1.2M' },
    { symbol: 'ICBC', name: 'Industrial Bank', price: '¥189.20', change: '+1.8%', volume: '2.3M' },
    { symbol: 'ABC', name: 'Agricultural Bank', price: '¥156.80', change: '-0.5%', volume: '1.8M' },
    { symbol: 'BOC', name: 'Bank of China', price: '¥198.30', change: '+1.2%', volume: '1.5M' },
    { symbol: 'CCB', name: 'Construction Bank', price: '¥212.90', change: '+0.8%', volume: '1.9M' },
    { symbol: 'CMB', name: 'Merchants Bank', price: '¥267.40', change: '+3.2%', volume: '2.1M' },
  ];

  const investmentOptions = [
    {
      title: 'Equity Trading',
      description: 'Trade stocks directly from your SENPAI Bank account',
      features: ['Real-time market data', 'Low brokerage fees (0.15%)', 'Mobile & web trading platform'],
      color: 'blue',
    },
    {
      title: 'Mutual Funds',
      description: 'Invest in professionally managed diversified portfolios',
      features: ['SIP starting from ¥500', '500+ fund options', 'Zero entry/exit load'],
      color: 'green',
    },
    {
      title: 'Fixed Income',
      description: 'Secure your returns with bonds and debentures',
      features: ['Government bonds', 'Corporate bonds', 'Tax-free bonds available'],
      color: 'purple',
    },
    {
      title: 'Gold Investment',
      description: 'Invest in digital gold or sovereign gold bonds',
      features: ['Buy from ¥100', 'Store safely in vault', 'Easy liquidation'],
      color: 'yellow',
    },
  ];

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <Card 
        className="max-w-6xl w-full my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3">
            <TrendingUp className="h-10 w-10" />
            <div>
              <CardTitle className="text-3xl">Investment Options</CardTitle>
              <CardDescription className="text-blue-100 text-lg">
                Grow your wealth with smart investment choices
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-6 space-y-6 bg-[rgba(0,0,0,0)]">
          {/* Market Indices */}
          <div>
            <h3 className="text-2xl mb-4">Market Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {marketIndices.map((index, i) => (
                <Card key={i} className={`${index.trend === 'up' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                  <CardContent className="pt-6">
                    <p className="text-sm text-gray-600 mb-1">{index.name}</p>
                    <p className="text-2xl font-bold mb-2">{index.value}</p>
                    <div className="flex items-center gap-2">
                      {index.trend === 'up' ? (
                        <ArrowUp className="h-4 w-4 text-green-600" />
                      ) : (
                        <ArrowDown className="h-4 w-4 text-red-600" />
                      )}
                      <span className={`text-sm font-semibold ${index.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {index.change} ({index.percent})
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Top Stocks */}
          <div>
            <h3 className="text-2xl mb-4">Top Stocks to Watch</h3>
            <Card>
              <CardContent className="pt-4">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Symbol</th>
                        <th className="text-left py-3 px-2">Company</th>
                        <th className="text-right py-3 px-2">Price</th>
                        <th className="text-right py-3 px-2">Change</th>
                        <th className="text-right py-3 px-2">Volume</th>
                        <th className="text-right py-3 px-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topStocks.map((stock, index) => (
                        <tr key={index} className="border-b last:border-0 hover:bg-gray-50">
                          <td className="py-3 px-2 font-semibold">{stock.symbol}</td>
                          <td className="py-3 px-2">{stock.name}</td>
                          <td className="py-3 px-2 text-right font-semibold">{stock.price}</td>
                          <td className={`py-3 px-2 text-right font-semibold ${
                            stock.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {stock.change}
                          </td>
                          <td className="py-3 px-2 text-right text-gray-600">{stock.volume}</td>
                          <td className="py-3 px-2 text-right">
                            <Button size="sm" variant="outline" className="text-xs">
                              Trade
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Investment Options */}
          <div>
            <h3 className="text-2xl mb-4">Investment Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {investmentOptions.map((option, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className={`bg-${option.color}-50`}>
                    <CardTitle className="text-xl">{option.title}</CardTitle>
                    <CardDescription className="text-base">{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2 mb-4">
                      {option.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <BarChart3 className={`h-4 w-4 text-${option.color}-600 mt-0.5 flex-shrink-0`} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full bg-${option.color}-600 hover:bg-${option.color}-700`}>
                      Start Investing
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibold mb-3">⚠️ Investment Disclaimer</h4>
            <p className="text-sm text-gray-700 mb-3">
              • Investments in securities market are subject to market risks. Read all related documents carefully before investing.
            </p>
            <p className="text-sm text-gray-700 mb-3">
              • Past performance is not indicative of future returns. Please consider your specific investment requirements, risk tolerance, and time horizon before choosing an investment product.
            </p>
            <p className="text-sm text-gray-700">
              • SENPAI Bank does not guarantee any returns. Investors should consult their financial advisors before making any investment decisions.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl mb-3">Ready to Start Investing?</h3>
            <p className="text-blue-100 mb-6">
              Open a Demat account with SENPAI Bank and start trading today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-700 hover:bg-blue-50 h-12 text-lg">
                Open Demat Account
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 h-12 text-lg">
                Talk to Advisor
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
