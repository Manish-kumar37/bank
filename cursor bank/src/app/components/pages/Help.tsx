import { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock, Search, AlertCircle, CheckCircle, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { FAQs } from '../FAQs';
import { QuickActions } from '../QuickActions';

export function Help() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
  };

  const searchableContent = [
    { query: ['balance', 'check balance', 'account balance'], response: 'To check your account balance, you can: 1) Use Internet Banking, 2) Use Mobile Banking App, 3) Visit any ATM, 4) Send SMS "BAL" to 567910, 5) Missed call to 1800-1080, or 6) Use the Quick Actions section on our website.' },
    { query: ['block card', 'lost card', 'stolen card'], response: 'To block your card immediately: 1) Call 1800 1080 (24/7), 2) Use Internet/Mobile Banking, 3) Use the "Block Card" option in Quick Actions on our website. You will receive a reference number for tracking.' },
    { query: ['password', 'reset password', 'forgot password'], response: 'To reset your password: 1) Click "Forgot Password" on login page, 2) Enter your User ID, 3) Verify with OTP sent to registered mobile/email, 4) Create new password. You can also use Quick Actions for password reset.' },
    { query: ['statement', 'download statement', 'account statement'], response: 'You can download your account statement through: 1) Internet Banking - Login > Accounts > Download Statement, 2) Mobile Banking App, 3) Quick Actions section on our website, or 4) Visit your nearest branch.' },
    { query: ['complaint', 'track complaint', 'grievance'], response: 'To track your complaint: 1) Use Quick Actions on our website with your reference number, 2) Call 1800 1080, 3) Email support@senpaibank.com, or 4) Visit Help section and submit your complaint reference number.' },
    { query: ['loan', 'apply loan', 'home loan', 'personal loan'], response: 'To apply for a loan: 1) Use our Loan Calculator in Resources section, 2) Click "Apply for Loan" and fill the application form, 3) Upload required documents, or 4) Visit your nearest branch. You will receive a call within 24 hours.' },
    { query: ['open account', 'new account', 'savings account'], response: 'To open a new account: 1) Click "Open Account" on home page, 2) Fill the online application form with your details, 3) Upload required documents (ID proof, address proof, photo), 4) Submit the application. Our team will contact you within 2-3 days.' },
    { query: ['atm', 'withdraw', 'cash withdrawal'], response: 'ATM withdrawal limit is ¥20,000 per day. To withdraw higher amounts, visit your branch with advance notice. First 5 transactions per month at other bank ATMs are free, then ¥20 per transaction (metro) or ¥10 (non-metro).' },
    { query: ['credit card', 'apply credit card'], response: 'To apply for a credit card: 1) Check your CIBIL score (minimum 650 required), 2) Visit Credit Card section on home page, 3) Choose a card based on your income and needs, 4) Fill application form. Approval takes 2-3 business days.' },
    { query: ['fixed deposit', 'fd', 'invest'], response: 'To open a Fixed Deposit: 1) Visit Fixed Deposit section, 2) Use FD Calculator to check maturity amount, 3) Choose tenure (7 days to 10 years), 4) Minimum amount: ¥1,000. Senior citizens get additional 0.5% interest.' },
    { query: ['mobile banking', 'app', 'download app'], response: 'Download SENPAI Mobile Banking App from Google Play Store (Android) or Apple App Store (iOS). Features: Check balance, Transfer money, Pay bills, UPI payments, Locate ATM/Branch, Block card. Register using your account number and registered mobile.' },
    { query: ['branch', 'nearest branch', 'location'], response: 'To find nearest branch: 1) Visit Branch Locator on our website, 2) Use Mobile App "Locate Us" feature, 3) Call 1800 1080. We have 150+ branches across China. Main branch: Lujiazui Financial District, Shanghai.' },
    { query: ['interest rate', 'rates'], response: 'Current interest rates: Savings Account - 3.5% p.a., FD (1 year) - 6.75% p.a., FD (5 years) - 7.5% p.a. Loan rates: Home Loan - 8.5%, Personal Loan - 11.5%, Car Loan - 9.5%. Check Resources section for complete rate card.' },
    { query: ['transfer', 'send money', 'fund transfer'], response: 'To transfer money: 1) Use Mobile Banking section on home page, 2) Select transfer type (Mobile/Account/PAN), 3) Enter beneficiary details and amount, 4) Confirm with OTP. Limits: IMPS - ¥2,00,000, NEFT/RTGS - ¥10,00,000 per day.' },
  ];

  const handleSearch = () => {
    const query = searchQuery.toLowerCase().trim();
    
    if (!query) {
      setSearchResult({ found: false, message: 'Please enter a search term.' });
      return;
    }

    const found = searchableContent.find(item => 
      item.query.some(q => query.includes(q) || q.includes(query))
    );

    if (found) {
      setSearchResult({ found: true, response: found.response });
    } else {
      setSearchResult({ 
        found: false, 
        message: 'Service or request not available. Please call our helpline 1800 1080 or email support@senpaibank.com for assistance.' 
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Help & Support</h1>
          <p className="text-lg sm:text-xl text-blue-100">
            We're here to help you 24/7
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Search className="h-6 w-6" />
                Search for Help
              </CardTitle>
              <CardDescription className="text-base">
                Find answers to your questions instantly
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex gap-2">
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="h-12 text-base flex-1"
                  placeholder="Search for: balance, block card, loan, statement, etc."
                />
                <Button onClick={handleSearch} className="h-12 px-6 bg-blue-700 hover:bg-blue-800">
                  <Search className="h-5 w-5" />
                </Button>
              </div>

              {searchResult && (
                <div className={`p-6 rounded-lg border-2 ${
                  searchResult.found 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-yellow-50 border-yellow-200'
                }`}>
                  <div className="flex items-start gap-3">
                    {searchResult.found ? (
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    ) : (
                      <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                    )}
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">
                        {searchResult.found ? 'Found!' : 'Not Found'}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {searchResult.found ? searchResult.response : searchResult.message}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">Quick Actions</h2>
            <p className="text-lg text-gray-600">Access commonly used services instantly</p>
          </div>
          <QuickActions />
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQs />
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-base sm:text-lg text-gray-600">
              Can't find what you're looking for? Write to us directly.
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Enter your name" 
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Enter your phone" 
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      type="text" 
                      placeholder="Subject of your query" 
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your issue or query in detail..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-700 hover:bg-blue-800" 
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Submit Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Branch Locator */}
      <section className="py-12 sm:py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MapPin className="h-8 sm:h-10 w-8 sm:w-10" />
            <h2 className="text-3xl sm:text-4xl">Find a Branch</h2>
          </div>
          <p className="text-lg sm:text-xl text-blue-100 mb-8">
            Locate our nearest branch or ATM for in-person assistance
          </p>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
            Branch Locator
          </Button>
        </div>
      </section>
    </div>
  );
}