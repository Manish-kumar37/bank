import { useState } from 'react';
import { BookOpen, Download, ChevronRight, CreditCard, Wallet, ArrowUpDown, UserPlus, Shield, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function UserGuides() {
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);

  const guides = [
    {
      id: 'account-opening',
      icon: UserPlus,
      title: 'Account Opening Guide',
      description: 'Step-by-step guide to open a new bank account',
      color: 'blue',
      steps: [
        {
          title: 'Step 1: Choose Account Type',
          content: 'Decide which type of account suits your needs - Savings, Current, or Zero Balance account. Savings accounts are ideal for individuals, while Current accounts are for businesses.'
        },
        {
          title: 'Step 2: Gather Required Documents',
          content: 'You will need:\n• Identity Proof (National ID, Passport, or Driver\'s License)\n• Address Proof (Utility Bill, Rental Agreement)\n• Recent Passport-size Photographs (2 copies)\n• Initial Deposit (varies by account type)'
        },
        {
          title: 'Step 3: Fill Application Form',
          content: 'Visit our website and click on "Open Account" or visit your nearest branch. Fill in all required details carefully including personal information, contact details, and nominee information.'
        },
        {
          title: 'Step 4: Submit Documents',
          content: 'Upload scanned copies of documents online or submit physical copies at the branch. Ensure all documents are clear and valid.'
        },
        {
          title: 'Step 5: Verification',
          content: 'Our team will verify your documents within 2-3 business days. You may receive a verification call on your registered mobile number.'
        },
        {
          title: 'Step 6: Account Activation',
          content: 'Once verified, your account will be activated. You will receive your account number, debit card, and internet banking credentials via registered email and post.'
        }
      ]
    },
    {
      id: 'loan-application',
      icon: Wallet,
      title: 'Loan Application Guide',
      description: 'How to apply for personal, home, or business loans',
      color: 'green',
      steps: [
        {
          title: 'Step 1: Check Eligibility',
          content: 'Before applying, check if you meet the eligibility criteria:\n• Age: 21-65 years\n• Minimum income requirements\n• Good credit score (600+)\n• Employment/Business stability\nUse our Loan Calculator to estimate EMI.'
        },
        {
          title: 'Step 2: Choose Loan Type',
          content: 'Select from:\n• Home Loan (8.5% p.a.)\n• Personal Loan (11.5% p.a.)\n• Car Loan (9.5% p.a.)\n• Education Loan (10.5% p.a.)\n• Business Loan (12% p.a.)'
        },
        {
          title: 'Step 3: Prepare Documents',
          content: 'Required documents:\n• Identity & Address Proof\n• Income Proof (Salary Slips, ITR, Bank Statements)\n• Employment Proof\n• Property Documents (for Home Loan)\n• Business Proof (for Business Loan)'
        },
        {
          title: 'Step 4: Fill Application',
          content: 'Fill the online loan application form with accurate details. Mention the loan amount, tenure, and purpose clearly.'
        },
        {
          title: 'Step 5: Document Verification',
          content: 'Submit all required documents. Our team will verify within 3-5 business days. You may need to visit the branch for physical verification.'
        },
        {
          title: 'Step 6: Approval & Disbursement',
          content: 'Once approved, loan amount will be disbursed to your account within 7-10 working days. You will receive a loan agreement document which you need to sign and return.'
        }
      ]
    },
    {
      id: 'deposit',
      icon: ArrowUpDown,
      title: 'Deposit Money Guide',
      description: 'Different ways to deposit money into your account',
      color: 'purple',
      steps: [
        {
          title: 'Method 1: Branch Deposit',
          content: 'Visit any SENPAI Bank branch with:\n• Cash or Cheque\n• Your Account Number\n• Deposit Slip (available at branch)\nFill the deposit slip and submit to the teller. You will receive a receipt.'
        },
        {
          title: 'Method 2: ATM Deposit',
          content: 'Visit any SENPAI Bank ATM:\n1. Insert your ATM card and enter PIN\n2. Select "Deposit" option\n3. Choose "Cash" or "Cheque"\n4. Insert cash/cheque in the slot\n5. Verify the amount on screen\n6. Confirm the transaction\n7. Collect receipt'
        },
        {
          title: 'Method 3: Online Transfer',
          content: 'Transfer from another bank:\n1. Login to your other bank\'s internet banking\n2. Add SENPAI Bank account as beneficiary\n3. Use NEFT/RTGS/IMPS to transfer\n4. Enter amount and confirm\nFunds will be credited within 2 hours (NEFT/RTGS) or instantly (IMPS).'
        },
        {
          title: 'Method 4: Mobile Banking',
          content: 'Using SENPAI Mobile App:\n1. Login to the app\n2. Go to "Deposit" section\n3. Choose deposit method\n4. Follow instructions for cash/cheque deposit\n5. Upload photos if required\nSome features require visiting ATM or branch.'
        },
        {
          title: 'Important Points',
          content: '• Cash deposit limit: ¥50,000 per day at ATM\n• Cheque deposits take 2-3 working days to clear\n• Keep deposit receipt safe\n• Check your account statement to confirm credit\n• Report any discrepancy within 24 hours'
        }
      ]
    },
    {
      id: 'withdrawal',
      icon: CreditCard,
      title: 'Withdrawal Guide',
      description: 'How to withdraw money from your account',
      color: 'red',
      steps: [
        {
          title: 'Method 1: ATM Withdrawal',
          content: 'Using SENPAI ATM:\n1. Insert your ATM/Debit card\n2. Enter your 4-digit PIN\n3. Select "Withdrawal" option\n4. Choose account type (Savings/Current)\n5. Enter amount (multiples of ¥100)\n6. Collect cash and receipt\n7. Don\'t forget to take your card\n\nDaily limit: ¥20,000'
        },
        {
          title: 'Method 2: Branch Withdrawal',
          content: 'Visit SENPAI Bank branch:\n1. Fill withdrawal slip with:\n   • Account number\n   • Amount in words and figures\n   • Your signature\n2. Submit slip with passbook\n3. Wait for token number\n4. Collect cash from teller\n5. Verify amount before leaving\n\nFor amounts above ¥50,000, advance notice may be required.'
        },
        {
          title: 'Method 3: Cheque Withdrawal',
          content: 'Using your cheque book:\n1. Write a self cheque:\n   • Write "Self" in payee name\n   • Mention amount in words and figures\n   • Date and sign\n2. Submit at branch counter\n3. Present ID proof if amount > ¥50,000\n4. Collect cash from teller\n\nCheques are valid for 3 months from issue date.'
        },
        {
          title: 'Method 4: UPI Withdrawal',
          content: 'Withdraw without card using UPI:\n1. Visit any SENPAI ATM\n2. Select "Cardless Withdrawal"\n3. Enter your registered mobile number\n4. Enter UPI PIN\n5. Enter amount\n6. Collect cash\n\nLimit: ¥5,000 per transaction'
        },
        {
          title: 'Safety Tips',
          content: '⚠️ Important:\n• Never share your PIN with anyone\n• Shield keypad when entering PIN\n• Check ATM for any suspicious devices\n• Count cash before leaving\n• Report lost card immediately\n• Keep transaction receipts\n• Monitor your account regularly'
        }
      ]
    },
    {
      id: 'internet-banking',
      icon: Shield,
      title: 'Internet Banking Guide',
      description: 'Setup and use internet banking services',
      color: 'indigo',
      steps: [
        {
          title: 'Step 1: Registration',
          content: 'First-time users:\n1. Visit www.senpaibank.com\n2. Click "Register for Internet Banking"\n3. Enter Account Number\n4. Enter Registered Mobile Number\n5. Enter ATM/Debit Card details\n6. You will receive OTP on mobile\n7. Enter OTP to verify\n8. Create User ID and Password\n9. Set security questions\n10. Registration complete!'
        },
        {
          title: 'Step 2: First Login',
          content: 'After registration:\n1. Go to Login page\n2. Enter your User ID\n3. Enter Password\n4. Complete CAPTCHA\n5. You may need to verify via OTP\n6. Accept terms and conditions\n7. You will be asked to change password on first login'
        },
        {
          title: 'Step 3: Add Beneficiary',
          content: 'To send money:\n1. Login to Internet Banking\n2. Go to "Fund Transfer" > "Add Beneficiary"\n3. Enter beneficiary details:\n   • Name\n   • Account Number\n   • IFSC Code\n   • Bank Name\n4. Verify via OTP\n5. Beneficiary activated in 30 minutes'
        },
        {
          title: 'Step 4: Fund Transfer',
          content: 'Transfer money:\n1. Go to "Fund Transfer"\n2. Select beneficiary\n3. Choose transfer type (NEFT/RTGS/IMPS)\n4. Enter amount\n5. Add remark (optional)\n6. Verify details\n7. Confirm with OTP\n8. Save transaction receipt\n\nLimits:\n• NEFT/RTGS: ¥10,00,000/day\n• IMPS: ¥2,00,000/day'
        },
        {
          title: 'Step 5: Bill Payments',
          content: 'Pay utility bills:\n1. Go to "Bill Payments"\n2. Select category (Electricity, Gas, Phone, etc.)\n3. Select biller\n4. Enter customer ID/account number\n5. Verify bill amount\n6. Confirm payment\n7. Save payment receipt\n\nYou can also set up auto-pay for recurring bills.'
        },
        {
          title: 'Step 6: Security Tips',
          content: '🔒 Keep your account secure:\n• Use strong password (8+ characters, mix of letters, numbers, symbols)\n• Change password every 3 months\n• Never share password/OTP\n• Always logout after use\n• Don\'t save password in browser\n• Enable SMS/Email alerts\n• Use only on trusted devices\n• Beware of phishing emails\n• Check https:// in URL'
        }
      ]
    },
    {
      id: 'mobile-banking',
      icon: FileText,
      title: 'Mobile Banking Guide',
      description: 'Download and use our mobile banking app',
      color: 'orange',
      steps: [
        {
          title: 'Step 1: Download App',
          content: 'Get SENPAI Mobile Banking App:\n• Android: Google Play Store\n• iOS: Apple App Store\n\nSearch for "SENPAI Bank" and download the official app (look for blue logo). App size: ~50MB\n\nMinimum requirements:\n• Android 7.0 or higher\n• iOS 12.0 or higher'
        },
        {
          title: 'Step 2: Install & Register',
          content: 'After installation:\n1. Open app\n2. Select "New User? Register"\n3. Enter Account Number\n4. Enter Registered Mobile Number\n5. Enter last 4 digits of ATM card\n6. Verify via OTP\n7. Create MPIN (6-digit)\n8. Enable biometric (fingerprint/face)\n9. Registration complete!'
        },
        {
          title: 'Step 3: Login',
          content: 'Login to app:\n1. Open SENPAI Bank app\n2. Enter MPIN or use biometric\n3. Access your dashboard\n\nFor security:\n• App auto-locks after inactivity\n• MPIN required for transactions\n• Enable app lock in settings'
        },
        {
          title: 'Step 4: Main Features',
          content: 'What you can do:\n✓ Check account balance\n✓ View mini statement\n✓ Transfer funds (NEFT/RTGS/IMPS/UPI)\n✓ Pay bills\n✓ Recharge mobile/DTH\n✓ Apply for loans/cards\n✓ Block/unblock card\n✓ Locate nearest ATM/branch\n✓ Raise complaints\n✓ Download statements'
        },
        {
          title: 'Step 5: UPI Setup',
          content: 'Create UPI ID:\n1. Go to UPI section in app\n2. Click "Create UPI ID"\n3. Choose format (name@senpai)\n4. Set UPI PIN (6-digit)\n5. Verify via ATM card details\n6. UPI ID created!\n\nYou can now:\n• Send/receive money via UPI\n• Scan QR codes\n• Request money\n• Link to other UPI apps'
        },
        {
          title: 'Step 6: Troubleshooting',
          content: 'Common issues:\n\n📱 Forgot MPIN?\n• Click "Forgot MPIN"\n• Verify via OTP\n• Create new MPIN\n\n📱 App not working?\n• Check internet connection\n• Update to latest version\n• Clear app cache\n• Reinstall if needed\n\n📱 Transaction failed?\n• Check account balance\n• Verify beneficiary details\n• Contact support: 1800 1080'
        }
      ]
    }
  ];

  const selectedGuideData = guides.find(g => g.id === selectedGuide);

  return (
    <div className="space-y-6">
      {!selectedGuide ? (
        <>
          <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <BookOpen className="h-10 w-10" />
                <div>
                  <CardTitle className="text-3xl">User Guides</CardTitle>
                  <CardDescription className="text-blue-100 text-lg">
                    Easy step-by-step guides for all banking services
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => {
              const Icon = guide.icon;
              return (
                <Card
                  key={guide.id}
                  className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-blue-300"
                  onClick={() => setSelectedGuide(guide.id)}
                >
                  <CardHeader>
                    <div className={`h-14 w-14 bg-${guide.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`h-8 w-8 text-${guide.color}-700`} />
                    </div>
                    <CardTitle className="text-xl">{guide.title}</CardTitle>
                    <CardDescription className="text-base">
                      {guide.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-blue-700 hover:bg-blue-800">
                      View Guide
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="pt-6">
              <h3 className="text-lg mb-3 flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download PDF Guides
              </h3>
              <p className="text-gray-700 mb-4">
                You can download printable PDF versions of all guides for offline reference
              </p>
              <Button variant="outline" className="border-yellow-600 text-yellow-700 hover:bg-yellow-100">
                <Download className="mr-2 h-4 w-4" />
                Download All Guides (PDF)
              </Button>
            </CardContent>
          </Card>
        </>
      ) : (
        <>
          <Button
            variant="outline"
            onClick={() => setSelectedGuide(null)}
            className="mb-4"
          >
            ← Back to All Guides
          </Button>

          {selectedGuideData && (
            <Card className="shadow-lg">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center gap-3">
                  {(() => {
                    const Icon = selectedGuideData.icon;
                    return <Icon className="h-10 w-10 text-blue-700" />;
                  })()}
                  <div className="flex-1">
                    <CardTitle className="text-3xl">{selectedGuideData.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {selectedGuideData.description}
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="pt-8">
                <div className="space-y-8">
                  {selectedGuideData.steps.map((step, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl mb-3">{step.title}</h3>
                        <div className="text-gray-700 whitespace-pre-line text-lg leading-relaxed bg-gray-50 p-6 rounded-lg">
                          {step.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t">
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="pt-6">
                      <h3 className="text-xl mb-3">✅ Still have questions?</h3>
                      <p className="text-gray-700 mb-4 text-lg">
                        Our customer support team is available 24/7 to help you
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-blue-700 hover:bg-blue-800 h-12">
                          Call 1800 1080
                        </Button>
                        <Button variant="outline" className="h-12">
                          Start Live Chat
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
}
