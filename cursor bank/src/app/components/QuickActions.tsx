import { useState } from 'react';
import { DollarSign, CreditCard, Lock, Download, FileText, Wallet, CheckCircle, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

type QuickActionType = 'balance' | 'block' | 'password' | 'statement' | 'complaint' | 'loan' | null;

export function QuickActions() {
  const [activeAction, setActiveAction] = useState<QuickActionType>(null);
  const [formData, setFormData] = useState({
    accountNumber: '',
    cardNumber: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    complaintId: '',
    loanType: '',
    loanAmount: '',
  });
  const [result, setResult] = useState<any>(null);

  const handleCheckBalance = async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setResult({
      type: 'balance',
      accountNumber: formData.accountNumber,
      balance: '¥45,230.50',
      availableBalance: '¥43,230.50',
      accountType: 'Savings Account',
    });
  };

  const handleBlockCard = async () => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    setResult({
      type: 'block',
      message: 'Card blocked successfully',
      referenceNumber: `BLK${Date.now().toString().slice(-8)}`,
    });
  };

  const handleResetPassword = async () => {
    if (formData.newPassword !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    await new Promise(resolve => setTimeout(resolve, 1500));
    setResult({
      type: 'password',
      message: 'Password reset successfully',
    });
  };

  const handleDownloadStatement = async () => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    setResult({
      type: 'statement',
      message: 'Statement downloaded successfully',
      fileName: `statement_${formData.accountNumber}_${new Date().toISOString().slice(0, 10)}.pdf`,
    });
  };

  const handleTrackComplaint = async () => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    setResult({
      type: 'complaint',
      complaintId: formData.complaintId,
      status: 'In Progress',
      description: 'Your complaint is being reviewed by our team',
      expectedResolution: '2-3 business days',
    });
  };

  const actions = [
    {
      icon: DollarSign,
      title: 'Check Balance',
      description: 'View your account balance instantly',
      action: 'balance',
    },
    {
      icon: CreditCard,
      title: 'Block/Unblock Card',
      description: 'Secure your card immediately',
      action: 'block',
    },
    {
      icon: Lock,
      title: 'Reset Password',
      description: 'Change your banking password',
      action: 'password',
    },
    {
      icon: Download,
      title: 'Download Statement',
      description: 'Get your account statement',
      action: 'statement',
    },
    {
      icon: FileText,
      title: 'Track Complaint',
      description: 'Check complaint status',
      action: 'complaint',
    },
    {
      icon: Wallet,
      title: 'Apply for Loan',
      description: 'Quick loan application',
      action: 'loan',
    },
  ];

  const closeModal = () => {
    setActiveAction(null);
    setResult(null);
    setFormData({
      accountNumber: '',
      cardNumber: '',
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      complaintId: '',
      loanType: '',
      loanAmount: '',
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Card
              key={index}
              className="hover:shadow-lg transition-all cursor-pointer hover:border-blue-300 border-2"
              onClick={() => setActiveAction(action.action as QuickActionType)}
            >
              <CardHeader>
                <div className="h-14 w-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-blue-700" />
                </div>
                <CardTitle className="text-xl">{action.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{action.description}</CardDescription>
                <Button className="w-full mt-4 bg-blue-700 hover:bg-blue-800">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Modal */}
      {activeAction && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-lg w-full">
            <CardHeader className="bg-blue-50 relative">
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 p-2 hover:bg-white rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <CardTitle className="text-2xl">
                {actions.find(a => a.action === activeAction)?.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-6">
              {!result ? (
                <div className="space-y-6">
                  {/* Check Balance */}
                  {activeAction === 'balance' && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="accountNumber" className="text-lg">Account Number</Label>
                        <Input
                          id="accountNumber"
                          value={formData.accountNumber}
                          onChange={(e) => setFormData({...formData, accountNumber: e.target.value})}
                          className="h-12 text-base"
                          placeholder="Enter account number"
                        />
                      </div>
                      <Button onClick={handleCheckBalance} className="w-full h-12 bg-blue-700 hover:bg-blue-800">
                        Check Balance
                      </Button>
                    </div>
                  )}

                  {/* Block Card */}
                  {activeAction === 'block' && (
                    <div className="space-y-4">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-sm text-gray-700">
                          ⚠️ This will immediately block your card. You can unblock it later through Internet Banking or by visiting a branch.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber" className="text-lg">Card Number (Last 4 digits)</Label>
                        <Input
                          id="cardNumber"
                          value={formData.cardNumber}
                          onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                          className="h-12 text-base"
                          placeholder="****"
                          maxLength={4}
                        />
                      </div>
                      <Button onClick={handleBlockCard} className="w-full h-12 bg-red-700 hover:bg-red-800">
                        Block Card Now
                      </Button>
                    </div>
                  )}

                  {/* Reset Password */}
                  {activeAction === 'password' && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="oldPassword" className="text-lg">Old Password</Label>
                        <Input
                          id="oldPassword"
                          type="password"
                          value={formData.oldPassword}
                          onChange={(e) => setFormData({...formData, oldPassword: e.target.value})}
                          className="h-12 text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword" className="text-lg">New Password</Label>
                        <Input
                          id="newPassword"
                          type="password"
                          value={formData.newPassword}
                          onChange={(e) => setFormData({...formData, newPassword: e.target.value})}
                          className="h-12 text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-lg">Confirm New Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                          className="h-12 text-base"
                        />
                      </div>
                      <Button onClick={handleResetPassword} className="w-full h-12 bg-blue-700 hover:bg-blue-800">
                        Reset Password
                      </Button>
                    </div>
                  )}

                  {/* Download Statement */}
                  {activeAction === 'statement' && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="stmtAccount" className="text-lg">Account Number</Label>
                        <Input
                          id="stmtAccount"
                          value={formData.accountNumber}
                          onChange={(e) => setFormData({...formData, accountNumber: e.target.value})}
                          className="h-12 text-base"
                          placeholder="Enter account number"
                        />
                      </div>
                      <Button onClick={handleDownloadStatement} className="w-full h-12 bg-blue-700 hover:bg-blue-800">
                        <Download className="mr-2 h-5 w-5" />
                        Download Statement
                      </Button>
                    </div>
                  )}

                  {/* Track Complaint */}
                  {activeAction === 'complaint' && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="complaintId" className="text-lg">Complaint Reference Number</Label>
                        <Input
                          id="complaintId"
                          value={formData.complaintId}
                          onChange={(e) => setFormData({...formData, complaintId: e.target.value})}
                          className="h-12 text-base"
                          placeholder="Enter reference number"
                        />
                      </div>
                      <Button onClick={handleTrackComplaint} className="w-full h-12 bg-blue-700 hover:bg-blue-800">
                        Track Complaint
                      </Button>
                    </div>
                  )}

                  {/* Apply for Loan */}
                  {activeAction === 'loan' && (
                    <div className="space-y-4">
                      <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">
                        For loan applications, please use our comprehensive Loan Calculator available in the Resources section or visit your nearest branch.
                      </p>
                      <Button onClick={closeModal} variant="outline" className="w-full h-12">
                        Close
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Balance Result */}
                  {result.type === 'balance' && (
                    <div className="space-y-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                        <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                        <p className="text-sm text-gray-600 mb-2">Account: ****{result.accountNumber.slice(-4)}</p>
                        <p className="text-sm text-gray-600 mb-4">{result.accountType}</p>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-gray-600">Current Balance</p>
                            <p className="text-3xl text-green-700">{result.balance}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Available Balance</p>
                            <p className="text-2xl text-gray-700">{result.availableBalance}</p>
                          </div>
                        </div>
                      </div>
                      <Button onClick={closeModal} className="w-full h-12 bg-blue-700 hover:bg-blue-800">
                        Close
                      </Button>
                    </div>
                  )}

                  {/* Block Card Result */}
                  {result.type === 'block' && (
                    <div className="space-y-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                        <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl mb-2">{result.message}</h3>
                        <p className="text-gray-600 mb-4">
                          Reference Number: <strong>{result.referenceNumber}</strong>
                        </p>
                        <p className="text-sm text-gray-600">
                          Your card has been blocked successfully. No transactions can be made on this card.
                        </p>
                      </div>
                      <Button onClick={closeModal} className="w-full h-12 bg-blue-700 hover:bg-blue-800">
                        Close
                      </Button>
                    </div>
                  )}

                  {/* Password Reset Result */}
                  {result.type === 'password' && (
                    <div className="space-y-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                        <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl mb-2">{result.message}</h3>
                        <p className="text-sm text-gray-600">
                          Please use your new password for future logins.
                        </p>
                      </div>
                      <Button onClick={closeModal} className="w-full h-12 bg-blue-700 hover:bg-blue-800">
                        Close
                      </Button>
                    </div>
                  )}

                  {/* Statement Download Result */}
                  {result.type === 'statement' && (
                    <div className="space-y-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                        <Download className="h-12 w-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl mb-2">{result.message}</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          File: <strong>{result.fileName}</strong>
                        </p>
                        <p className="text-sm text-gray-600">
                          The statement has been downloaded to your device.
                        </p>
                      </div>
                      <Button onClick={closeModal} className="w-full h-12 bg-blue-700 hover:bg-blue-800">
                        Close
                      </Button>
                    </div>
                  )}

                  {/* Complaint Tracking Result */}
                  {result.type === 'complaint' && (
                    <div className="space-y-4">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="text-xl mb-4">Complaint Status</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between py-2 border-b">
                            <span className="text-gray-600">Complaint ID:</span>
                            <span className="font-semibold">{result.complaintId}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b">
                            <span className="text-gray-600">Status:</span>
                            <span className="font-semibold text-yellow-700">{result.status}</span>
                          </div>
                          <div className="py-2">
                            <p className="text-sm text-gray-600 mb-1">Description:</p>
                            <p className="text-gray-700">{result.description}</p>
                          </div>
                          <div className="py-2 bg-yellow-50 rounded px-3">
                            <p className="text-sm text-gray-600">Expected Resolution:</p>
                            <p className="font-semibold">{result.expectedResolution}</p>
                          </div>
                        </div>
                      </div>
                      <Button onClick={closeModal} className="w-full h-12 bg-blue-700 hover:bg-blue-800">
                        Close
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
