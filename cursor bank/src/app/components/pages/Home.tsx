import { Wallet, CreditCard, PiggyBank, TrendingUp, Shield, Smartphone, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';
import { SavingsAccountService } from '../services/SavingsAccountService';
import { MobileBankingService } from '../services/MobileBankingService';
import { SecurePaymentsService } from '../services/SecurePaymentsService';
import { FixedDepositService } from '../services/FixedDepositService';
import { InvestmentService } from '../services/InvestmentService';
import { CreditCardService } from '../services/CreditCardService';
import { AccountServices } from '../services/AccountServices';
import { FloatingCardShowcase } from '../services/FloatingCardShowcase';
import { ModernHero } from '../ModernHero';
import { getThemeColors } from '../../utils/theme';

type UserType = 'personal' | 'nri' | 'business';

interface HomeProps {
  userType: UserType;
}

export function Home({ userType }: HomeProps) {
  const [activeService, setActiveService] = useState<string | null>(null);
  const theme = getThemeColors(userType);

  const getServices = () => {
    const commonServices = {
      personal: [
        {
          icon: CreditCard,
          title: 'Savings Account',
          description: 'Open a savings account with attractive interest rates and zero balance options',
          service: SavingsAccountService,
        },
        {
          icon: Smartphone,
          title: 'Mobile Banking',
          description: 'Bank on the go with our secure and easy-to-use mobile banking app',
          service: MobileBankingService,
        },
        {
          icon: Shield,
          title: 'Secure Payments',
          description: 'Make safe and secure payments with our advanced security features',
          service: SecurePaymentsService,
        },
        {
          icon: PiggyBank,
          title: 'Fixed Deposits',
          description: 'Invest in fixed deposits with competitive interest rates and flexible tenures',
          service: FixedDepositService,
        },
        {
          icon: TrendingUp,
          title: 'Investment Options',
          description: 'Grow your wealth with our diverse investment products and expert advice',
          service: InvestmentService,
        },
        {
          icon: CreditCard,
          title: 'Credit Cards',
          description: 'Choose from a wide range of credit cards with exclusive rewards and benefits',
          service: CreditCardService,
        },
      ],
      nri: [
        {
          icon: Wallet,
          title: 'NRI Accounts',
          description: 'NRE and NRO accounts with easy fund transfers and repatriation',
        },
        {
          icon: TrendingUp,
          title: 'Investment Services',
          description: 'Access to mutual funds, bonds, and equity investment options',
        },
        {
          icon: CreditCard,
          title: 'Remittances',
          description: 'Quick and secure money transfers to India with competitive exchange rates',
        },
        {
          icon: Shield,
          title: 'Forex Services',
          description: 'Comprehensive foreign exchange services for all your needs',
        },
        {
          icon: PiggyBank,
          title: 'NRI Deposits',
          description: 'High-interest fixed deposits for NRI customers',
        },
        {
          icon: Smartphone,
          title: 'Online Banking',
          description: 'Manage your accounts from anywhere in the world',
        },
      ],
      business: [
        {
          icon: CreditCard,
          title: 'Business Accounts',
          description: 'Current accounts tailored for businesses of all sizes',
        },
        {
          icon: TrendingUp,
          title: 'Business Loans',
          description: 'Flexible loan options to fuel your business growth',
        },
        {
          icon: Shield,
          title: 'Payment Solutions',
          description: 'Integrated payment gateway and merchant services',
        },
        {
          icon: Wallet,
          title: 'Trade Finance',
          description: 'Import-export financing and documentary credit services',
        },
        {
          icon: Smartphone,
          title: 'Corporate Banking',
          description: 'Dedicated relationship manager and priority banking services',
        },
        {
          icon: PiggyBank,
          title: 'Cash Management',
          description: 'Efficient cash management solutions for your business',
        },
      ],
    };

    return commonServices[userType];
  };

  const services = getServices();

  return (
    <div className="bg-white">
      {/* Service Modals */}
      {activeService === 'savings' && <SavingsAccountService onClose={() => setActiveService(null)} />}
      {activeService === 'mobile' && <MobileBankingService onClose={() => setActiveService(null)} />}
      {activeService === 'secure' && <SecurePaymentsService onClose={() => setActiveService(null)} />}
      {activeService === 'fd' && <FixedDepositService onClose={() => setActiveService(null)} />}
      {activeService === 'investment' && <InvestmentService onClose={() => setActiveService(null)} />}
      {activeService === 'creditcard' && <CreditCardService onClose={() => setActiveService(null)} />}
      {activeService === 'accountservices' && <AccountServices onClose={() => setActiveService(null)} />}

      {/* Modern Hero Section */}
      <ModernHero userType={userType} onCtaClick={() => setActiveService('savings')} />

      {/* Services Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Comprehensive banking solutions designed for your needs
            </p>
          </div>
          
          <div className="mb-20">
             <FloatingCardShowcase onApply={() => setActiveService('creditcard')} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const serviceKey = service.title.toLowerCase().includes('savings') ? 'savings' :
                               service.title.toLowerCase().includes('mobile') ? 'mobile' :
                               service.title.toLowerCase().includes('secure') || service.title.toLowerCase().includes('payment') ? 'secure' :
                               service.title.toLowerCase().includes('fixed') || service.title.toLowerCase().includes('deposit') ? 'fd' :
                               service.title.toLowerCase().includes('investment') ? 'investment' :
                               service.title.toLowerCase().includes('credit') ? 'creditcard' : null;
              
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => serviceKey && setActiveService(serviceKey)}>
                  <CardHeader>
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-700" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                    <button className="text-blue-700 hover:underline mt-4 flex items-center gap-1">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Account Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <button 
                      className="text-blue-700 hover:underline flex items-center gap-2"
                      onClick={() => setActiveService('savings')}
                    >
                      <ArrowRight className="h-4 w-4" />
                      Open Savings Account
                    </button>
                  </li>
                  <li>
                    <button 
                      className="text-blue-700 hover:underline flex items-center gap-2"
                      onClick={() => setActiveService('fd')}
                    >
                      <ArrowRight className="h-4 w-4" />
                      View Fixed Deposits
                    </button>
                  </li>
                  <li>
                    <button 
                      className="text-blue-700 hover:underline flex items-center gap-2"
                      onClick={() => setActiveService('accountservices')}
                    >
                      <ArrowRight className="h-4 w-4" />
                      Request Services
                    </button>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Manage Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <button 
                      className="text-blue-700 hover:underline flex items-center gap-2"
                      onClick={() => setActiveService('creditcard')}
                    >
                      <ArrowRight className="h-4 w-4" />
                      Apply for Credit Card
                    </button>
                  </li>
                  <li>
                    <button 
                      className="text-blue-700 hover:underline flex items-center gap-2"
                      onClick={() => setActiveService('creditcard')}
                    >
                      <ArrowRight className="h-4 w-4" />
                      Block/Unblock Card
                    </button>
                  </li>
                  <li>
                    <button className="text-blue-700 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Check CIBIL Score
                    </button>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <button 
                      className="text-blue-700 hover:underline flex items-center gap-2"
                      onClick={() => setActiveService('mobile')}
                    >
                      <ArrowRight className="h-4 w-4" />
                      Send Money
                    </button>
                  </li>
                  <li>
                    <button 
                      className="text-blue-700 hover:underline flex items-center gap-2"
                      onClick={() => setActiveService('investment')}
                    >
                      <ArrowRight className="h-4 w-4" />
                      Invest Now
                    </button>
                  </li>
                  <li>
                    <button 
                      className="text-blue-700 hover:underline flex items-center gap-2"
                      onClick={() => setActiveService('secure')}
                    >
                      <ArrowRight className="h-4 w-4" />
                      Secure Payments Info
                    </button>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-12 sm:py-16 ${
        userType === 'personal' ? 'bg-gradient-to-r from-blue-600 to-blue-800' :
        userType === 'nri' ? 'bg-gradient-to-r from-red-600 to-red-800' :
        'bg-gradient-to-r from-orange-600 to-orange-800'
      } text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-4">Ready to Get Started?</h2>
          <p className={`text-lg sm:text-xl mb-6 sm:mb-8 ${
            userType === 'personal' ? 'text-blue-100' :
            userType === 'nri' ? 'text-red-100' :
            'text-orange-100'
          }`}>
            Open your account today and experience the future of banking
          </p>
          <Button 
            size="lg" 
            className={`bg-white ${
              userType === 'personal' ? 'text-blue-700 hover:bg-blue-50' :
              userType === 'nri' ? 'text-red-700 hover:bg-red-50' :
              'text-orange-700 hover:bg-orange-50'
            } w-full sm:w-auto`}
            onClick={() => setActiveService('savings')}
          >
            Open an Account
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}