import { useState } from 'react';
import { Smartphone, Send, CheckCircle, X, User, CreditCard, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface MobileBankingServiceProps {
  onClose: () => void;
}

export function MobileBankingService({ onClose }: MobileBankingServiceProps) {
  const [transferType, setTransferType] = useState<'mobile' | 'account' | 'pan'>('mobile');
  const [formData, setFormData] = useState({
    fromAccount: '',
    toValue: '',
    amount: '',
    remark: '',
  });
  const [showConfirm, setShowConfirm] = useState(false);
  const [success, setSuccess] = useState(false);

  const myAccounts = [
    { value: 'acc1', label: 'Savings Account - ****3456', balance: '¥45,230' },
    { value: 'acc2', label: 'Current Account - ****7890', balance: '¥1,22,450' },
  ];

  const handleTransfer = async () => {
    setShowConfirm(false);
    // Simulate transfer
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <Card className="max-w-lg w-full">
          <CardContent className="pt-12 pb-12 text-center">
            <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl mb-4">Transfer Successful!</h2>
            <p className="text-lg text-gray-600 mb-2">Amount: <strong className="text-blue-700">¥{formData.amount}</strong></p>
            <p className="text-gray-600 mb-6">
              Transaction ID: <strong>TXN{Date.now().toString().slice(-10)}</strong>
            </p>
            <p className="text-sm text-gray-500 mb-8">
              The beneficiary will receive the amount within a few minutes.
            </p>
            <Button onClick={onClose} className="bg-blue-700 hover:bg-blue-800">
              Close
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showConfirm) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <Card className="max-w-lg w-full">
          <CardHeader className="bg-yellow-50">
            <CardTitle className="text-2xl">Confirm Transfer</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">From Account:</span>
                <span className="font-semibold">
                  {myAccounts.find(a => a.value === formData.fromAccount)?.label}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">To {transferType === 'mobile' ? 'Mobile' : transferType === 'account' ? 'Account' : 'PAN'}:</span>
                <span className="font-semibold">{formData.toValue}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Amount:</span>
                <span className="font-semibold text-blue-700 text-xl">¥{formData.amount}</span>
              </div>
              {formData.remark && (
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Remark:</span>
                  <span className="font-semibold">{formData.remark}</span>
                </div>
              )}
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                ⚠️ Please verify all details carefully. Once confirmed, this transaction cannot be reversed.
              </p>
            </div>

            <div className="flex gap-4">
              <Button 
                onClick={handleTransfer} 
                className="flex-1 h-12 bg-green-700 hover:bg-green-800"
              >
                Confirm & Send
              </Button>
              <Button 
                onClick={() => setShowConfirm(false)} 
                variant="outline" 
                className="h-12"
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <Card 
        className="max-w-2xl w-full my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader className="bg-blue-50 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 bg-white/50 hover:bg-white text-gray-500 hover:text-gray-900 rounded-full transition-all shadow-sm"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3">
            <Smartphone className="h-10 w-10 text-blue-700" />
            <div>
              <CardTitle className="text-3xl">Mobile Banking</CardTitle>
              <CardDescription className="text-lg">Send money instantly to anyone</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-6 space-y-6">
          {/* Transfer Type Selection */}
          <div className="space-y-3">
            <Label className="text-lg">Transfer To</Label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setTransferType('mobile')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  transferType === 'mobile' 
                    ? 'border-blue-700 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <User className="h-6 w-6 mx-auto mb-2 text-blue-700" />
                <p className="text-sm font-semibold">Mobile Number</p>
              </button>
              <button
                type="button"
                onClick={() => setTransferType('account')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  transferType === 'account' 
                    ? 'border-blue-700 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <CreditCard className="h-6 w-6 mx-auto mb-2 text-blue-700" />
                <p className="text-sm font-semibold">Account Number</p>
              </button>
              <button
                type="button"
                onClick={() => setTransferType('pan')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  transferType === 'pan' 
                    ? 'border-blue-700 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <FileText className="h-6 w-6 mx-auto mb-2 text-blue-700" />
                <p className="text-sm font-semibold">PAN Card</p>
              </button>
            </div>
          </div>

          {/* From Account */}
          <div className="space-y-2">
            <Label htmlFor="fromAccount" className="text-lg">From Account</Label>
            <Select 
              value={formData.fromAccount} 
              onValueChange={(val) => setFormData({...formData, fromAccount: val})}
            >
              <SelectTrigger className="h-12 text-base">
                <SelectValue placeholder="Select your account" />
              </SelectTrigger>
              <SelectContent>
                {myAccounts.map((acc) => (
                  <SelectItem key={acc.value} value={acc.value} className="text-base py-3">
                    {acc.label} - Balance: {acc.balance}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* To Value */}
          <div className="space-y-2">
            <Label htmlFor="toValue" className="text-lg">
              {transferType === 'mobile' ? 'Mobile Number' : 
               transferType === 'account' ? 'Account Number' : 'PAN Card Number'}
            </Label>
            <Input
              id="toValue"
              type="text"
              value={formData.toValue}
              onChange={(e) => setFormData({...formData, toValue: e.target.value})}
              className="h-12 text-base"
              placeholder={
                transferType === 'mobile' ? 'Enter 10-digit mobile number' : 
                transferType === 'account' ? 'Enter account number' : 
                'Enter PAN card number'
              }
            />
          </div>

          {/* Amount */}
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-lg">Amount (¥)</Label>
            <Input
              id="amount"
              type="number"
              value={formData.amount}
              onChange={(e) => setFormData({...formData, amount: e.target.value})}
              className="h-12 text-base"
              placeholder="Enter amount"
              min="1"
            />
            <div className="flex gap-2">
              {['500', '1000', '2000', '5000'].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setFormData({...formData, amount: amt})}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 text-sm"
                >
                  ¥{amt}
                </button>
              ))}
            </div>
          </div>

          {/* Remark */}
          <div className="space-y-2">
            <Label htmlFor="remark" className="text-lg">Remark (Optional)</Label>
            <Input
              id="remark"
              type="text"
              value={formData.remark}
              onChange={(e) => setFormData({...formData, remark: e.target.value})}
              className="h-12 text-base"
              placeholder="Add a note"
            />
          </div>

          {/* Transaction Limits */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Transaction Limits</h4>
            <div className="space-y-1 text-sm text-gray-700">
              <p>• Mobile/PAN Transfer: ¥1,00,000 per day</p>
              <p>• Account Transfer (IMPS): ¥2,00,000 per transaction</p>
              <p>• Account Transfer (NEFT/RTGS): ¥10,00,000 per day</p>
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            onClick={() => {
              if (formData.fromAccount && formData.toValue && formData.amount) {
                setShowConfirm(true);
              }
            }}
            disabled={!formData.fromAccount || !formData.toValue || !formData.amount}
            className="w-full h-14 text-lg bg-blue-700 hover:bg-blue-800"
          >
            <Send className="mr-2 h-5 w-5" />
            Proceed to Transfer
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
