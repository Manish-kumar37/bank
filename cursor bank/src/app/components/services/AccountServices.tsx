import { useState } from 'react';
import { X, ArrowLeft, Building2, MapPin, Phone, Clock, Navigation, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

type ServiceType = 'open-account' | 'view-fd' | 'request-service' | null;

interface AccountServicesProps {
  onClose: () => void;
}

export function AccountServices({ onClose }: AccountServicesProps) {
  const [activeService, setActiveService] = useState<ServiceType>(null);
  const [formData, setFormData] = useState({
    // Account opening
    fullName: '',
    email: '',
    phone: '',
    address: '',
    panCard: '',
    aadhaar: '',
    occupation: '',
    
    // Service request
    serviceType: '',
    branchLocation: '',
    requestDetails: '',
    preferredDate: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleOpenAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
  };

  const handleRequestService = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
  };

  const branches = [
    {
      name: 'Lujiazui Branch',
      address: 'Century Avenue, Lujiazui Financial District, Pudong, Shanghai',
      phone: '+86 21 5888 9999',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM',
    },
    {
      name: 'Nanjing Road Branch',
      address: 'East Nanjing Road, Huangpu District, Shanghai',
      phone: '+86 21 5888 8888',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM',
    },
    {
      name: 'Xujiahui Branch',
      address: 'Xujiahui, Xuhui District, Shanghai',
      phone: '+86 21 5888 7777',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM',
    },
    {
      name: 'Hongqiao Branch',
      address: 'Hongqiao Road, Changning District, Shanghai',
      phone: '+86 21 5888 6666',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM',
    },
  ];

  const fdData = [
    {
      fdNumber: 'FD202401234',
      amount: '¥100,000',
      interestRate: '6.75%',
      tenure: '1 Year',
      maturityDate: '2025-12-15',
      maturityAmount: '¥106,750',
      status: 'Active',
    },
    {
      fdNumber: 'FD202401156',
      amount: '¥250,000',
      interestRate: '7.50%',
      tenure: '5 Years',
      maturityDate: '2029-03-20',
      maturityAmount: '¥356,250',
      status: 'Active',
    },
    {
      fdNumber: 'FD202301089',
      amount: '¥50,000',
      interestRate: '6.50%',
      tenure: '6 Months',
      maturityDate: '2024-09-10',
      maturityAmount: '¥51,625',
      status: 'Matured',
    },
  ];

  if (!activeService) {
    return (
      <div 
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <Card 
          className="max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <CardHeader className="bg-blue-50 relative sticky top-0 z-10">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 bg-white/50 hover:bg-white text-gray-500 hover:text-gray-900 rounded-full transition-all shadow-sm"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={onClose}
              className="absolute left-4 top-4 p-2 bg-white/50 hover:bg-white text-gray-500 hover:text-gray-900 rounded-full transition-all shadow-sm"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <CardTitle className="text-3xl text-center pt-2">Account Services</CardTitle>
            <CardDescription className="text-center text-lg">
              Choose a service below
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card 
                className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-blue-300"
                onClick={() => setActiveService('open-account')}
              >
                <CardHeader>
                  <div className="h-14 w-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Building2 className="h-7 w-7 text-blue-700" />
                  </div>
                  <CardTitle className="text-center">Open Savings Account</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Start your banking journey with us. Open a new savings account in minutes.
                  </p>
                  <Button className="w-full mt-4 bg-blue-700 hover:bg-blue-800">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              <Card 
                className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-blue-300"
                onClick={() => setActiveService('view-fd')}
              >
                <CardHeader>
                  <div className="h-14 w-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <CheckCircle className="h-7 w-7 text-green-700" />
                  </div>
                  <CardTitle className="text-center">View Fixed Deposits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Check your current FDs, maturity dates, and interest earned.
                  </p>
                  <Button className="w-full mt-4 bg-blue-700 hover:bg-blue-800">
                    View FDs
                  </Button>
                </CardContent>
              </Card>

              <Card 
                className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-blue-300"
                onClick={() => setActiveService('request-service')}
              >
                <CardHeader>
                  <div className="h-14 w-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <MapPin className="h-7 w-7 text-purple-700" />
                  </div>
                  <CardTitle className="text-center">Request Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Request various banking services from your nearest branch.
                  </p>
                  <Button className="w-full mt-4 bg-blue-700 hover:bg-blue-800">
                    Request Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <Card 
        className="max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader className="bg-blue-50 relative sticky top-0 z-10">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-white rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={() => {
              setActiveService(null);
              setSubmitted(false);
            }}
            className="absolute left-4 top-4 p-2 bg-white/50 hover:bg-white text-gray-500 hover:text-gray-900 rounded-full transition-all shadow-sm"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <CardTitle className="text-3xl text-center pt-2">
            {activeService === 'open-account' ? 'Open Savings Account' :
             activeService === 'view-fd' ? 'Your Fixed Deposits' :
             'Request Branch Services'}
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-8">
          {/* Open Account Form */}
          {activeService === 'open-account' && !submitted && (
            <form onSubmit={handleOpenAccount} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-lg">Full Name *</Label>
                  <Input
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lg">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-lg">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="occupation" className="text-lg">Occupation *</Label>
                  <Input
                    id="occupation"
                    required
                    value={formData.occupation}
                    onChange={(e) => setFormData({...formData, occupation: e.target.value})}
                    className="h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="panCard" className="text-lg">PAN Card Number *</Label>
                  <Input
                    id="panCard"
                    required
                    value={formData.panCard}
                    onChange={(e) => setFormData({...formData, panCard: e.target.value})}
                    className="h-12 text-base"
                    placeholder="ABCDE1234F"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="aadhaar" className="text-lg">Aadhaar Number *</Label>
                  <Input
                    id="aadhaar"
                    required
                    value={formData.aadhaar}
                    onChange={(e) => setFormData({...formData, aadhaar: e.target.value})}
                    className="h-12 text-base"
                    placeholder="1234 5678 9012"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address" className="text-lg">Complete Address *</Label>
                <Textarea
                  id="address"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="min-h-24 text-base"
                />
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Next Steps:</strong> After submitting this form, you will receive an email with the application reference number. Please visit your nearest branch with original documents for verification.
                </p>
              </div>
              <Button type="submit" className="w-full h-12 bg-blue-700 hover:bg-blue-800">
                Submit Application
              </Button>
            </form>
          )}

          {/* View FD */}
          {activeService === 'view-fd' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                <h3 className="text-2xl mb-2">Total FD Value</h3>
                <p className="text-4xl text-blue-700">¥400,000</p>
                <p className="text-gray-600 mt-2">Expected Maturity: ¥514,625</p>
              </div>

              {fdData.map((fd, index) => (
                <Card key={index} className={`border-2 ${fd.status === 'Active' ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>FD #{fd.fdNumber}</CardTitle>
                        <CardDescription className="text-base mt-1">
                          Status: <span className={fd.status === 'Active' ? 'text-green-700 font-semibold' : 'text-gray-600'}>{fd.status}</span>
                        </CardDescription>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm ${
                        fd.status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-700'
                      }`}>
                        {fd.status}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Principal Amount</p>
                        <p className="text-xl">{fd.amount}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Interest Rate</p>
                        <p className="text-xl text-green-700">{fd.interestRate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Tenure</p>
                        <p className="text-xl">{fd.tenure}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Maturity Date</p>
                        <p className="text-lg">{fd.maturityDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Maturity Amount</p>
                        <p className="text-lg font-semibold text-blue-700">{fd.maturityAmount}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Request Service Form */}
          {activeService === 'request-service' && !submitted && (
            <form onSubmit={handleRequestService} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="serviceType" className="text-lg">Type of Service Needed *</Label>
                <select
                  id="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                  className="w-full h-12 px-3 rounded-md border border-gray-300 text-base"
                >
                  <option value="">Select a service</option>
                  <option value="cheque-book">New Cheque Book</option>
                  <option value="atm-card">ATM/Debit Card</option>
                  <option value="passbook">Passbook Update</option>
                  <option value="account-closure">Account Closure</option>
                  <option value="loan-inquiry">Loan Inquiry</option>
                  <option value="document-update">Document Update</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label className="text-lg">Preferred Branch *</Label>
                {branches.map((branch, index) => (
                  <Card 
                    key={index}
                    className={`cursor-pointer transition-all border-2 ${
                      formData.branchLocation === branch.name ? 'border-blue-500 bg-blue-50' : 'hover:border-blue-300'
                    }`}
                    onClick={() => setFormData({...formData, branchLocation: branch.name})}
                  >
                    <CardContent className="pt-4">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Building2 className="h-5 w-5 text-blue-700" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1">{branch.name}</h4>
                          <p className="text-sm text-gray-600 flex items-start gap-1 mb-1">
                            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            {branch.address}
                          </p>
                          <p className="text-sm text-gray-600 flex items-center gap-1 mb-1">
                            <Phone className="h-4 w-4 flex-shrink-0" />
                            {branch.phone}
                          </p>
                          <p className="text-sm text-gray-600 flex items-center gap-1">
                            <Clock className="h-4 w-4 flex-shrink-0" />
                            {branch.hours}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferredDate" className="text-lg">Preferred Visit Date *</Label>
                <Input
                  id="preferredDate"
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                  className="h-12 text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requestDetails" className="text-lg">Additional Details</Label>
                <Textarea
                  id="requestDetails"
                  value={formData.requestDetails}
                  onChange={(e) => setFormData({...formData, requestDetails: e.target.value})}
                  className="min-h-24 text-base"
                  placeholder="Any specific requirements or questions..."
                />
              </div>

              <Button type="submit" className="w-full h-12 bg-blue-700 hover:bg-blue-800">
                Submit Request
              </Button>
            </form>
          )}

          {/* Success Message */}
          {submitted && (
            <div className="text-center py-8">
              <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl mb-4">Request Submitted Successfully!</h3>
              <p className="text-gray-600 mb-2">
                Reference Number: <strong>REQ{Date.now().toString().slice(-8)}</strong>
              </p>
              <p className="text-gray-600 mb-6">
                You will receive an email confirmation shortly. Our team will contact you within 24-48 hours.
              </p>
              <div className="flex gap-4 justify-center">
                <Button onClick={() => {
                  setSubmitted(false);
                  setActiveService(null);
                }} variant="outline">
                  Back to Services
                </Button>
                <Button onClick={onClose} className="bg-blue-700 hover:bg-blue-800">
                  Close
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
