import { FileText, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export function TermsConditions() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <FileText className="h-12 w-12" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl">Terms & Conditions</h1>
          </div>
          <p className="text-lg sm:text-xl text-blue-100">
            Last updated: December 28, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">1. Introduction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                These Terms and Conditions ("Terms") govern your use of banking services provided by 
                SENPAI Bank ("Bank", "we", "us", or "our"), located in Shanghai, China. By opening an 
                account or using any of our services, you agree to be bound by these Terms.
              </p>
              <p>
                Please read these Terms carefully before using our services. If you do not agree with 
                any part of these Terms, please do not use our services.
              </p>
            </CardContent>
          </Card>

          {/* Account Opening */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">2. Account Opening and KYC</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-lg mb-2">2.1 Eligibility</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You must be at least 18 years of age to open an account</li>
                  <li>You must be a legal resident with valid identification documents</li>
                  <li>You must provide accurate and complete information during registration</li>
                  <li>Business accounts require valid business registration documents</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg mb-2">2.2 KYC Requirements</h3>
                <p>
                  In compliance with regulatory requirements, you must provide:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Valid government-issued photo identification (National ID, Passport, or Driver's License)</li>
                  <li>Proof of residential address (not older than 3 months)</li>
                  <li>Recent passport-size photographs</li>
                  <li>PAN card or equivalent tax identification</li>
                  <li>Additional documents as required for specific account types</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">2.3 Verification Process</h3>
                <p>
                  The Bank reserves the right to verify all information and documents provided. 
                  Account activation may be delayed or rejected if verification is not satisfactory. 
                  You agree to provide any additional information or documents requested by the Bank.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Account Operations */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">3. Account Operations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-lg mb-2">3.1 Minimum Balance</h3>
                <p>
                  Each account type has specific minimum balance requirements:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Regular Savings Account: ¥10,000</li>
                  <li>Premium Savings Account: ¥50,000</li>
                  <li>Current Account: ¥25,000</li>
                  <li>Zero Balance Account: No minimum balance required</li>
                </ul>
                <p className="mt-2">
                  Failure to maintain minimum balance may result in service charges as per the 
                  Bank's fee schedule.
                </p>
              </div>

              <div>
                <h3 className="text-lg mb-2">3.2 Deposits and Withdrawals</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Deposits can be made through branch, ATM, online transfer, or mobile banking</li>
                  <li>Cash deposits above ¥50,000 per day may require additional verification</li>
                  <li>Cheque deposits are subject to clearing period of 2-3 working days</li>
                  <li>ATM withdrawal limit: ¥20,000 per day</li>
                  <li>Branch withdrawals above ¥50,000 may require advance notice</li>
                  <li>All transactions are subject to applicable taxes and charges</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">3.3 Interest Calculation</h3>
                <p>
                  Interest on savings accounts is calculated on daily balance and credited quarterly. 
                  Interest rates are subject to change based on market conditions and regulatory guidelines. 
                  The Bank will notify account holders of any interest rate changes through official channels.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Debit/Credit Cards */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">4. Debit and Credit Cards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-lg mb-2">4.1 Card Security</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You are responsible for keeping your card and PIN secure</li>
                  <li>Never share your PIN with anyone, including bank staff</li>
                  <li>Report lost or stolen cards immediately by calling 1800 1080</li>
                  <li>You are liable for all transactions until the card is blocked</li>
                  <li>The Bank is not responsible for unauthorized transactions due to customer negligence</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">4.2 Card Usage Limits</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Daily ATM withdrawal limit: ¥20,000</li>
                  <li>Daily POS transaction limit: ¥50,000</li>
                  <li>Online transaction limit: ¥25,000 per transaction</li>
                  <li>Limits can be customized through internet banking or branch visit</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">4.3 Card Charges</h3>
                <p>
                  Annual charges apply as per the card type. First year may be free for certain cards. 
                  Charges for card replacement, PIN regeneration, and international transactions apply 
                  as per the fee schedule available on our website.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Internet and Mobile Banking */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">5. Internet and Mobile Banking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-lg mb-2">5.1 Access and Security</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You are responsible for maintaining the confidentiality of login credentials</li>
                  <li>Use strong passwords and change them periodically (recommended every 90 days)</li>
                  <li>Do not use public computers or unsecured networks for banking transactions</li>
                  <li>Always logout after completing your banking session</li>
                  <li>Enable two-factor authentication for enhanced security</li>
                  <li>Report any suspicious activity immediately</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">5.2 Transaction Limits</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>NEFT/RTGS: ¥10,00,000 per day</li>
                  <li>IMPS: ¥2,00,000 per transaction</li>
                  <li>UPI: ¥1,00,000 per transaction</li>
                  <li>Bill payments: ¥50,000 per transaction</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">5.3 System Availability</h3>
                <p>
                  While we strive for 24/7 availability, services may be temporarily unavailable due to 
                  maintenance, upgrades, or technical issues. The Bank is not liable for any losses 
                  resulting from service unavailability.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Loans */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">6. Loans and Advances</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-lg mb-2">6.1 Loan Approval</h3>
                <p>
                  Loan approval is subject to credit assessment, documentation verification, and 
                  Bank's internal policies. The Bank reserves the right to accept or reject any 
                  loan application without providing reasons.
                </p>
              </div>

              <div>
                <h3 className="text-lg mb-2">6.2 Repayment Terms</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>EMI must be paid on or before the due date each month</li>
                  <li>Late payment attracts penalty charges and affects credit score</li>
                  <li>Prepayment is allowed subject to prepayment charges as applicable</li>
                  <li>Foreclosure is subject to terms mentioned in the loan agreement</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">6.3 Default and Recovery</h3>
                <p>
                  In case of default, the Bank reserves the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Report to credit bureaus affecting your credit score</li>
                  <li>Initiate legal proceedings for recovery</li>
                  <li>Auction collateral/security provided against the loan</li>
                  <li>Offset against any deposits held with the Bank</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Charges and Fees */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">7. Charges and Fees</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Bank may levy charges for various services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account maintenance charges</li>
                <li>Non-maintenance of minimum balance charges</li>
                <li>ATM usage charges (other bank ATMs)</li>
                <li>Cheque book issuance charges</li>
                <li>Demand draft and payment order charges</li>
                <li>SMS and email alert charges</li>
                <li>Debit/credit card annual charges</li>
                <li>Loan processing fees</li>
                <li>Prepayment and foreclosure charges</li>
              </ul>
              <p className="mt-4">
                Current fee schedule is available on our website and at all branches. The Bank reserves 
                the right to modify charges with prior notice to customers.
              </p>
            </CardContent>
          </Card>

          {/* Privacy and Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">8. Privacy and Data Protection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-lg mb-2">8.1 Data Collection</h3>
                <p>
                  The Bank collects and processes personal information necessary for providing banking 
                  services. This includes identity information, contact details, financial information, 
                  and transaction data.
                </p>
              </div>

              <div>
                <h3 className="text-lg mb-2">8.2 Data Usage</h3>
                <p>
                  Your data is used for:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Processing transactions and maintaining accounts</li>
                  <li>Complying with legal and regulatory requirements</li>
                  <li>Preventing fraud and ensuring security</li>
                  <li>Providing customer service and support</li>
                  <li>Offering relevant products and services</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">8.3 Data Sharing</h3>
                <p>
                  The Bank may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Credit bureaus for credit assessment</li>
                  <li>Regulatory and law enforcement authorities as required by law</li>
                  <li>Service providers engaged for banking operations</li>
                  <li>Group companies for internal purposes</li>
                </ul>
                <p className="mt-2">
                  We do not sell or rent personal information to third parties for marketing purposes.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Liability and Indemnity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">9. Liability and Indemnity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-lg mb-2">9.1 Bank's Liability</h3>
                <p>
                  The Bank is not liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Losses due to customer negligence or fraud</li>
                  <li>System failures or service interruptions beyond our control</li>
                  <li>Acts of God, natural disasters, or force majeure events</li>
                  <li>Losses arising from third-party services</li>
                  <li>Delays in cheque clearing or fund transfers due to technical issues</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">9.2 Customer Indemnity</h3>
                <p>
                  You agree to indemnify and hold the Bank harmless from any claims, losses, or damages 
                  arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Unauthorized use of your account due to your negligence</li>
                  <li>Providing false or misleading information</li>
                  <li>Violation of these Terms and Conditions</li>
                  <li>Your use of Bank's services</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Account Closure */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">10. Account Closure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-lg mb-2">10.1 Closure by Customer</h3>
                <p>
                  You may close your account at any time by:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Visiting the branch with account closure form</li>
                  <li>Returning unused cheque leaves and debit card</li>
                  <li>Settling all outstanding dues</li>
                  <li>Providing withdrawal instructions for remaining balance</li>
                </ul>
                <p className="mt-2">
                  Account closure process takes 7-10 working days. Closure charges may apply if the 
                  account is closed within 1 year of opening.
                </p>
              </div>

              <div>
                <h3 className="text-lg mb-2">10.2 Closure by Bank</h3>
                <p>
                  The Bank reserves the right to close or suspend any account if:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Account remains dormant for extended period</li>
                  <li>Customer violates Terms and Conditions</li>
                  <li>Suspicious or illegal activities are detected</li>
                  <li>Required KYC documents are not provided</li>
                  <li>Account is used for money laundering or fraudulent activities</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Amendments */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">11. Amendments to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Bank reserves the right to modify these Terms and Conditions at any time. Changes 
                will be notified through:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Website announcement</li>
                <li>Email to registered email address</li>
                <li>SMS to registered mobile number</li>
                <li>Notice at branches</li>
              </ul>
              <p className="mt-4">
                Continued use of services after such notification constitutes acceptance of the modified 
                Terms. If you do not agree with the modifications, you may close your account.
              </p>
            </CardContent>
          </Card>

          {/* Grievance Redressal */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">12. Grievance Redressal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                For any complaints or grievances, you may contact:
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
                <h4 className="font-semibold mb-3">Customer Service</h4>
                <ul className="space-y-2">
                  <li>📞 Helpline: 1800 1080 (24/7)</li>
                  <li>📧 Email: support@senpaibank.com</li>
                  <li>🌐 Website: www.senpaibank.com/complaints</li>
                  <li>🏢 Visit nearest branch</li>
                </ul>
              </div>
              <p className="mt-4">
                All complaints will be acknowledged within 24 hours and resolved within 7-10 working days. 
                You will receive a reference number for tracking.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">13. Governing Law and Jurisdiction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                These Terms and Conditions are governed by the laws of the People's Republic of China. 
                Any disputes arising out of these Terms shall be subject to the exclusive jurisdiction 
                of courts in Shanghai, China.
              </p>
            </CardContent>
          </Card>

          {/* Acceptance */}
          <Card className="bg-green-50 border-green-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg mb-2">Acceptance of Terms</h3>
                  <p className="text-gray-700">
                    By opening an account or using any services of SENPAI Bank, you acknowledge that 
                    you have read, understood, and agree to be bound by these Terms and Conditions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <div className="text-center pt-8 border-t">
            <p className="text-gray-600 mb-4">
              For questions about these Terms and Conditions, please contact us at:
            </p>
            <p className="text-blue-700">
              <strong>SENPAI Bank</strong><br />
              Lujiazui Financial District, Shanghai, China<br />
              Email: legal@senpaibank.com | Phone: 1800 1080
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
