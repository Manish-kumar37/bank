import { Shield, Lock, Eye, Smartphone, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import securityGif from 'figma:asset/57378177edd3619f70924da25318e312463863f1.png';
import { motion } from 'motion/react';

const EncryptionIcon = () => (
  <div className="relative w-24 h-24 mx-auto mb-6">
    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#1d4ed8', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#grad1)" fillOpacity="0.1" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="5,5">
        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="20s" repeatCount="indefinite" />
      </circle>
      <path d="M35 40 V30 A15 15 0 0 1 65 30 V40 H70 V80 H30 V40 Z" fill="url(#grad1)" className="drop-shadow-md" />
      <path d="M45 55 A5 5 0 1 1 55 55 V65 A5 5 0 1 1 45 65 Z" fill="white" />
      <rect x="38" y="45" width="24" height="2" fill="white" fillOpacity="0.3">
        <animate attributeName="y" values="45;75;45" dur="3s" repeatCount="indefinite" />
      </rect>
    </svg>
  </div>
);

const AuthIcon = () => (
  <div className="relative w-24 h-24 mx-auto mb-6">
    <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#6d28d9', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="30" y="15" width="40" height="70" rx="5" fill="white" stroke="url(#grad2)" strokeWidth="2" />
      <circle cx="50" cy="75" r="3" fill="#ddd" />
      <path d="M40 35 Q50 25 60 35 T50 55 T40 35" fill="none" stroke="url(#grad2)" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="stroke-dasharray" values="0,100;100,0;0,100" dur="3s" repeatCount="indefinite" />
      </path>
      <circle cx="75" cy="25" r="12" fill="#22c55e" className="drop-shadow-md">
         <animate attributeName="r" values="10;12;10" dur="2s" repeatCount="indefinite" />
      </circle>
      <path d="M70 25 L73 28 L80 21" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  </div>
);

const FraudIcon = () => (
  <div className="relative w-24 h-24 mx-auto mb-6">
     <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
     <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      <defs>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ef4444', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#b91c1c', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path d="M50 15 L85 30 V55 C85 75 50 90 50 90 C50 90 15 75 15 55 V30 Z" fill="white" stroke="url(#grad3)" strokeWidth="2" />
      <circle cx="50" cy="50" r="15" fill="none" stroke="url(#grad3)" strokeWidth="2" opacity="0.5">
         <animate attributeName="r" values="0;25" dur="2s" repeatCount="indefinite" />
         <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="50" r="6" fill="url(#grad3)" />
      <line x1="50" y1="50" x2="70" y2="50" stroke="url(#grad3)" strokeWidth="1" transform="rotate(0 50 50)">
         <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2s" repeatCount="indefinite" />
      </line>
    </svg>
  </div>
);

const PrivacyIcon = () => (
  <div className="relative w-24 h-24 mx-auto mb-6">
    <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-xl animate-pulse"></div>
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      <defs>
        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#14b8a6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0f766e', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path d="M15 50 Q50 15 85 50 Q50 85 15 50 Z" fill="white" stroke="url(#grad4)" strokeWidth="2" />
      <circle cx="50" cy="50" r="12" fill="url(#grad4)" />
      <circle cx="50" cy="50" r="4" fill="white" />
      <path d="M15 50 Q50 15 85 50" fill="none" stroke="url(#grad4)" strokeWidth="2" strokeDasharray="100" strokeDashoffset="100">
         <animate attributeName="stroke-dashoffset" values="100;0" dur="1.5s" fill="freeze" />
      </path>
      <rect x="30" y="45" width="40" height="10" fill="white" opacity="0.8">
         <animate attributeName="height" values="10;0" dur="0.5s" begin="2s" fill="freeze" />
         <animate attributeName="y" values="45;50" dur="0.5s" begin="2s" fill="freeze" />
      </rect>
    </svg>
  </div>
);

export function SecurityPrivacy() {
  const securityFeatures = [
    {
      Component: EncryptionIcon,
      title: '256-bit Encryption',
      description: 'All your data is protected with bank-grade 256-bit SSL encryption',
      color: 'bg-blue-50/50 hover:bg-blue-50',
      border: 'border-blue-100'
    },
    {
      Component: AuthIcon,
      title: 'Two-Factor Authentication',
      description: 'Enhanced security with OTP and biometric authentication',
      color: 'bg-purple-50/50 hover:bg-purple-50',
      border: 'border-purple-100'
    },
    {
      Component: FraudIcon,
      title: 'Fraud Protection',
      description: '24/7 fraud monitoring and instant alerts for suspicious activities',
      color: 'bg-red-50/50 hover:bg-red-50',
      border: 'border-red-100'
    },
    {
      Component: PrivacyIcon,
      title: 'Privacy Protection',
      description: 'Your data is never shared with third parties without your consent',
      color: 'bg-teal-50/50 hover:bg-teal-50',
      border: 'border-teal-100'
    },
  ];

  const securityTips = [
    'Never share your password, OTP, or PIN with anyone',
    'Always log out after completing your banking session',
    'Verify the website URL before entering credentials',
    'Use strong and unique passwords for your account',
    'Enable transaction alerts on your mobile number',
    'Regularly update your contact information',
  ];

  const safetyMeasures = [
    {
      title: 'Secure Browsing',
      description: 'Always look for "https://" in the URL and the padlock icon in your browser',
    },
    {
      title: 'Phishing Protection',
      description: 'Be cautious of emails or messages asking for personal information',
    },
    {
      title: 'Device Security',
      description: 'Keep your devices updated with the latest security patches',
    },
    {
      title: 'Public Wi-Fi',
      description: 'Avoid banking transactions on public or unsecured networks',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">Your Security is Our Priority</h1>
              <p className="text-lg sm:text-xl text-blue-100">
                SENPAI Bank employs industry-leading security measures to protect your financial information and ensure safe banking experiences.
              </p>
            </div>
            <div className="hidden lg:block">
              <ImageWithFallback
                src={securityGif}
                alt="Security"
                className="rounded-lg shadow-2xl w-full h-[350px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Advanced Security Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              State-of-the-art protection engineered for the digital age, keeping your assets secure 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => {
              const IconComponent = feature.Component;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className={`h-full text-center border-2 ${feature.border} ${feature.color} backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden`}>
                    <CardHeader className="pt-10 pb-2">
                       <IconComponent />
                       <CardTitle className="text-xl font-bold text-gray-800">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-gray-600 leading-relaxed px-2">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Tips */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-8 w-8 text-blue-700" />
                <h2 className="text-2xl sm:text-3xl text-gray-900">Security Tips</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Follow these important security guidelines to protect your account:
              </p>
              <div className="space-y-4">
                {securityTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-blue-700" />
                <h2 className="text-2xl sm:text-3xl text-gray-900">Safety Measures</h2>
              </div>
              <div className="space-y-6">
                {safetyMeasures.map((measure, index) => (
                  <Card key={index} className="hover:border-blue-200 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg">{measure.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{measure.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl text-gray-900 mb-6">Privacy Policy</h2>
          
          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 space-y-6 border border-gray-100">
            <div>
              <h3 className="text-lg sm:text-xl text-gray-900 mb-3">Information We Collect</h3>
              <p className="text-gray-600">
                We collect personal information necessary to provide banking services, including your name, 
                contact details, identification documents, and financial information. All data collection 
                complies with local banking regulations and data protection laws.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl text-gray-900 mb-3">How We Use Your Information</h3>
              <p className="text-gray-600">
                Your information is used solely for providing banking services, processing transactions, 
                preventing fraud, and complying with legal requirements. We never sell your personal data 
                to third parties.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl text-gray-900 mb-3">Data Protection</h3>
              <p className="text-gray-600">
                We implement strict security measures including encryption, access controls, and regular 
                security audits to protect your data. Our systems are monitored 24/7 to detect and prevent 
                unauthorized access.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl text-gray-900 mb-3">Your Rights</h3>
              <p className="text-gray-600">
                You have the right to access, correct, or delete your personal information. You can also 
                request a copy of your data or restrict certain processing activities. Contact our customer 
                service for any privacy-related requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl mb-4">Have Security Concerns?</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8">
            Our security team is available 24/7 to address your concerns
          </p>
          <button className="bg-white text-blue-700 px-6 sm:px-8 py-3 rounded-md hover:bg-blue-50 transition-colors font-semibold">
            Contact Security Team
          </button>
        </div>
      </section>
    </div>
  );
}
