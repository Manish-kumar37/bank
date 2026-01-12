import { Shield, Lock, Eye, CheckCircle, AlertTriangle, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

interface SecurePaymentsServiceProps {
  onClose: () => void;
}

export function SecurePaymentsService({ onClose }: SecurePaymentsServiceProps) {
  const securityFeatures = [
    {
      icon: Lock,
      title: '256-bit SSL Encryption',
      description: 'All your transactions are protected with bank-grade encryption, ensuring your data stays secure during transfer.',
      color: 'blue',
    },
    {
      icon: Shield,
      title: 'Two-Factor Authentication',
      description: 'Every transaction requires OTP verification sent to your registered mobile number for added security.',
      color: 'green',
    },
    {
      icon: Eye,
      title: '24/7 Fraud Monitoring',
      description: 'Our AI-powered systems monitor all transactions in real-time to detect and prevent suspicious activities.',
      color: 'purple',
    },
    {
      icon: CheckCircle,
      title: 'PCI DSS Compliant',
      description: 'We adhere to international Payment Card Industry Data Security Standards for maximum protection.',
      color: 'indigo',
    },
  ];

  const transferProcess = [
    {
      step: '1',
      title: 'Initiate Transfer',
      description: 'Enter beneficiary details and amount through our secure portal',
    },
    {
      step: '2',
      title: 'Encryption',
      description: 'Your data is encrypted using 256-bit SSL before transmission',
    },
    {
      step: '3',
      title: 'OTP Verification',
      description: 'Verify transaction with OTP sent to your registered mobile',
    },
    {
      step: '4',
      title: 'Secure Processing',
      description: 'Transaction processed through secure banking channels',
    },
    {
      step: '5',
      title: 'Confirmation',
      description: 'Instant SMS and email confirmation with transaction ID',
    },
  ];

  const safetyTips = [
    'Never share your password, PIN, or OTP with anyone',
    'Always verify the website URL before entering credentials',
    'Use strong passwords with mix of letters, numbers, and symbols',
    'Enable SMS/Email alerts for all transactions',
    'Log out after completing your banking session',
    'Regularly monitor your account statements',
    'Report any suspicious activity immediately',
    'Don\'t save passwords in browsers on public devices',
  ];

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <Card 
        className="max-w-5xl w-full my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all shadow-sm"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3">
            <Shield className="h-12 w-12" />
            <div>
              <CardTitle className="text-3xl">Secure Payment System</CardTitle>
              <CardDescription className="text-blue-100 text-lg">
                Your money is protected by multiple layers of security
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-8 space-y-8">
          {/* Security Features */}
          <div>
            <h3 className="text-2xl mb-6">Advanced Security Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className={`bg-${feature.color}-50 border border-${feature.color}-200 rounded-lg p-6`}>
                    <div className="flex items-start gap-4">
                      <div className={`h-12 w-12 bg-${feature.color}-700 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                        <p className="text-gray-700">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Transfer Process */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-2xl mb-6">How Your Money Travels Securely</h3>
            <div className="space-y-4">
              {transferProcess.map((process, index) => (
                <div key={index} className="flex gap-4">
                  <div className="h-12 w-12 bg-blue-700 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                    {process.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-1">{process.title}</h4>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                  {index < transferProcess.length - 1 && (
                    <div className="w-px bg-blue-200 ml-6" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="h-8 w-8 text-green-700" />
              <h3 className="text-2xl">Our Certifications</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="font-semibold text-lg">ISO 27001</p>
                <p className="text-sm text-gray-600">Information Security Management</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="font-semibold text-lg">PCI DSS Level 1</p>
                <p className="text-sm text-gray-600">Payment Card Industry Compliance</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="font-semibold text-lg">SOC 2 Type II</p>
                <p className="text-sm text-gray-600">Security & Availability Controls</p>
              </div>
            </div>
          </div>

          {/* Safety Tips */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-8 w-8 text-yellow-700" />
              <h3 className="text-2xl">Safety Tips for You</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {safetyTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-3 text-red-900">Report Suspicious Activity</h3>
            <p className="text-gray-700 mb-4">
              If you notice any unauthorized transaction or suspicious activity, contact us immediately:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-700 hover:bg-red-800 h-12 text-lg">
                Call 1800 1080 (24/7)
              </Button>
              <Button variant="outline" className="h-12 text-lg border-red-600 text-red-700 hover:bg-red-50">
                Email: fraud@senpaibank.com
              </Button>
            </div>
          </div>

          {/* Close Button */}
          <div className="text-center pt-4">
            <Button onClick={onClose} variant="outline" className="h-12 px-8 text-lg">
              Close
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
