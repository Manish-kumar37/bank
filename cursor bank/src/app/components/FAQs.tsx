import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqCategories = [
    {
      category: 'Account Related',
      questions: [
        {
          q: 'How do I open a savings account?',
          a: 'You can open a savings account by clicking on "Open Account" button on the home page, filling out the online application form, and submitting required documents. You can also visit any SENPAI Bank branch with your ID proof, address proof, and photographs.',
        },
        {
          q: 'What is the minimum balance required?',
          a: 'Regular Savings Account requires ¥10,000, Premium Savings requires ¥50,000, and we also offer Zero Balance accounts with no minimum balance requirement.',
        },
        {
          q: 'How can I check my account balance?',
          a: 'You can check your balance through: 1) Internet Banking, 2) Mobile Banking App, 3) ATM, 4) SMS by sending "BAL" to 567910, 5) Missed call to 1800-1080.',
        },
        {
          q: 'How do I update my mobile number or email?',
          a: 'Visit your nearest branch with a written request and valid ID proof. You can also update through Internet Banking by verifying with OTP sent to your existing registered number.',
        },
      ],
    },
    {
      category: 'Cards & ATM',
      questions: [
        {
          q: 'How do I block my lost or stolen card?',
          a: 'Immediately call our 24/7 helpline at 1800 1080, or use Internet/Mobile Banking to block your card. You can also visit the "Credit Card Services" section on our website to block your card online.',
        },
        {
          q: 'What is the daily ATM withdrawal limit?',
          a: 'The daily ATM withdrawal limit is ¥20,000. You can withdraw higher amounts from the branch with advance notice.',
        },
        {
          q: 'How do I apply for a credit card?',
          a: 'Click on "Credit Card Services" on our home page, check your CIBIL score, and apply for the card that suits your needs. Approval depends on your credit score and income.',
        },
        {
          q: 'Are there any charges for using other bank ATMs?',
          a: 'First 5 transactions per month are free. After that, ¥20 per transaction is charged for other bank ATMs in metro cities and ¥10 in non-metro cities.',
        },
      ],
    },
    {
      category: 'Internet & Mobile Banking',
      questions: [
        {
          q: 'How do I register for Internet Banking?',
          a: 'Visit www.senpaibank.com, click "Register for Internet Banking", enter your account number and registered mobile number, verify with OTP, and create your login credentials.',
        },
        {
          q: 'I forgot my password. What should I do?',
          a: 'Click on "Forgot Password" on the login page, enter your user ID, verify with OTP sent to your registered mobile/email, and create a new password.',
        },
        {
          q: 'Is mobile banking safe?',
          a: 'Yes, absolutely! We use 256-bit SSL encryption, two-factor authentication, and 24/7 fraud monitoring to keep your account secure. Never share your password or OTP with anyone.',
        },
        {
          q: 'What are the transaction limits for online transfers?',
          a: 'NEFT/RTGS: ¥10,00,000 per day, IMPS: ¥2,00,000 per transaction, UPI: ¥1,00,000 per transaction. You can request for higher limits through your branch.',
        },
      ],
    },
    {
      category: 'Loans',
      questions: [
        {
          q: 'What documents are required for a home loan?',
          a: 'Identity proof, address proof, last 6 months salary slips, bank statements, property documents, and income tax returns for the last 2 years.',
        },
        {
          q: 'How long does loan approval take?',
          a: 'Personal loans: 2-3 business days, Home loans: 7-10 business days, Business loans: 10-15 business days, depending on document verification.',
        },
        {
          q: 'Can I prepay my loan?',
          a: 'Yes, you can prepay your loan. Prepayment charges may apply as per the loan agreement. Home loans typically have no prepayment charges after 1 year.',
        },
        {
          q: 'What is the minimum CIBIL score required for a loan?',
          a: 'Generally, a CIBIL score of 650 or above is required. However, 750+ score increases your chances of approval with better interest rates.',
        },
      ],
    },
    {
      category: 'Fixed Deposits',
      questions: [
        {
          q: 'What is the minimum amount for FD?',
          a: 'You can open a Fixed Deposit with a minimum amount of ¥1,000.',
        },
        {
          q: 'Can I break my FD before maturity?',
          a: 'Yes, premature withdrawal is allowed, but a penalty of 0.5%-1% on interest will be charged. The penalty varies based on the tenure.',
        },
        {
          q: 'Do senior citizens get higher interest rates?',
          a: 'Yes, senior citizens (60 years and above) get an additional 0.5% interest on all FD tenures.',
        },
        {
          q: 'Can I get a loan against my FD?',
          a: 'Yes, you can avail loan up to 90% of your FD amount at attractive interest rates, typically 1-2% above the FD rate.',
        },
      ],
    },
    {
      category: 'General',
      questions: [
        {
          q: 'What are the bank working hours?',
          a: 'Monday to Friday: 9:00 AM - 6:00 PM, Saturday: 9:00 AM - 2:00 PM. Sundays and public holidays are closed. However, ATMs and online banking are available 24/7.',
        },
        {
          q: 'How do I file a complaint?',
          a: 'Call our helpline 1800 1080, send email to support@senpaibank.com, or visit the Help section on our website to submit a complaint. You will receive a reference number to track your complaint.',
        },
        {
          q: 'How long does it take to get a cheque book?',
          a: 'Cheque books are dispatched within 3-5 working days to your registered address. You can also collect it from your branch immediately.',
        },
        {
          q: 'What should I do if I receive a suspicious call or email?',
          a: 'Never share your password, PIN, OTP, or card details. Bank never asks for these details. Report suspicious communications immediately to fraud@senpaibank.com or call 1800 1080.',
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <CardHeader>
          <div className="flex items-center gap-3">
            <HelpCircle className="h-10 w-10" />
            <div>
              <CardTitle className="text-3xl">Frequently Asked Questions</CardTitle>
              <CardDescription className="text-blue-100 text-lg">
                Find quick answers to common questions
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      {faqCategories.map((category, categoryIndex) => (
        <Card key={categoryIndex}>
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-2xl">{category.category}</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {category.questions.map((faq, index) => {
                const globalIndex = categoryIndex * 100 + index;
                const isOpen = openIndex === globalIndex;

                return (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                      className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                    >
                      <span className="text-lg pr-4">{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-blue-700 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 py-4 bg-blue-50 border-t">
                        <p className="text-gray-700 text-base leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
