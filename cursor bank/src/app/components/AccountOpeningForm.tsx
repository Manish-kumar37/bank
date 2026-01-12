import { useState } from 'react';
import { UserPlus, CheckCircle, AlertCircle, Upload } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';

export function AccountOpeningForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Details
    accountType: '',
    title: '',
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    fatherName: '',
    motherName: '',
    maritalStatus: '',
    
    // Contact Details
    mobile: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    country: 'China',
    
    // Identity Proof
    idProofType: '',
    idProofNumber: '',
    
    // Employment Details
    occupation: '',
    monthlyIncome: '',
    
    // Nominee Details
    nomineeName: '',
    nomineeRelation: '',
    nomineeDOB: '',
    
    // Initial Deposit
    initialDeposit: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.accountType) newErrors.accountType = 'Please select account type';
      if (!formData.title) newErrors.title = 'Please select title';
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
      if (!formData.gender) newErrors.gender = 'Please select gender';
      if (!formData.fatherName) newErrors.fatherName = "Father's name is required";
    }

    if (step === 2) {
      if (!formData.mobile || formData.mobile.length < 10) {
        newErrors.mobile = 'Valid mobile number is required';
      }
      if (!formData.email || !formData.email.includes('@')) {
        newErrors.email = 'Valid email is required';
      }
      if (!formData.addressLine1) newErrors.addressLine1 = 'Address is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.pincode) newErrors.pincode = 'Pincode is required';
    }

    if (step === 3) {
      if (!formData.idProofType) newErrors.idProofType = 'Please select ID proof type';
      if (!formData.idProofNumber) newErrors.idProofNumber = 'ID proof number is required';
      if (!formData.occupation) newErrors.occupation = 'Occupation is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <Card className="border-green-200 shadow-lg">
        <CardContent className="pt-12 pb-12 text-center">
          <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="text-3xl text-gray-900 mb-4">Application Submitted Successfully!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Your application reference number is: <strong className="text-blue-700">SENPAI{Date.now().toString().slice(-8)}</strong>
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6 text-left">
            <h3 className="text-lg mb-3">📋 Next Steps:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>1. Our team will verify your details within 2-3 business days</li>
              <li>2. You will receive a verification call on your registered mobile number</li>
              <li>3. Please visit your nearest branch with original documents</li>
              <li>4. After verification, your account will be activated</li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-gray-600">A confirmation email has been sent to: <strong>{formData.email}</strong></p>
            <Button className="bg-blue-700 hover:bg-blue-800" onClick={() => window.location.reload()}>
              Submit Another Application
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const steps = [
    { number: 1, name: 'Personal Details' },
    { number: 2, name: 'Contact Details' },
    { number: 3, name: 'Documents & KYC' },
    { number: 4, name: 'Nominee & Deposit' },
  ];

  return (
    <div className="space-y-6">
      {/* Progress Indicator */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center text-lg ${
                      currentStep >= step.number
                        ? 'bg-blue-700 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {step.number}
                  </div>
                  <span className={`text-xs mt-2 text-center ${
                    currentStep >= step.number ? 'text-blue-700' : 'text-gray-500'
                  }`}>
                    {step.name}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-2 ${
                      currentStep > step.number ? 'bg-blue-700' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Form Card */}
      <Card className="shadow-lg">
        <CardHeader className="bg-blue-50">
          <div className="flex items-center gap-3">
            <UserPlus className="h-8 w-8 text-blue-700" />
            <div>
              <CardTitle className="text-2xl">Open New Account</CardTitle>
              <CardDescription className="text-base">
                Step {currentStep} of {steps.length}: {steps[currentStep - 1].name}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-6">
          {/* Step 1: Personal Details */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="accountType" className="text-lg">Account Type *</Label>
                <Select value={formData.accountType} onValueChange={(val) => updateField('accountType', val)}>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Select account type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="savings" className="text-base py-3">Savings Account</SelectItem>
                    <SelectItem value="current" className="text-base py-3">Current Account</SelectItem>
                    <SelectItem value="salary" className="text-base py-3">Salary Account</SelectItem>
                    <SelectItem value="zero-balance" className="text-base py-3">Zero Balance Account</SelectItem>
                  </SelectContent>
                </Select>
                {errors.accountType && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle className="h-4 w-4" />{errors.accountType}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-3">
                  <Label htmlFor="title" className="text-lg">Title *</Label>
                  <Select value={formData.title} onValueChange={(val) => updateField('title', val)}>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mr" className="text-base">Mr.</SelectItem>
                      <SelectItem value="ms" className="text-base">Ms.</SelectItem>
                      <SelectItem value="mrs" className="text-base">Mrs.</SelectItem>
                      <SelectItem value="dr" className="text-base">Dr.</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.title && <p className="text-sm text-red-600"><AlertCircle className="h-4 w-4 inline" /></p>}
                </div>

                <div className="space-y-3 sm:col-span-2">
                  <Label htmlFor="firstName" className="text-lg">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateField('firstName', e.target.value)}
                    className="h-12 text-base"
                    placeholder="Enter first name"
                  />
                  {errors.firstName && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle className="h-4 w-4" />{errors.firstName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Label htmlFor="middleName" className="text-lg">Middle Name</Label>
                  <Input
                    id="middleName"
                    value={formData.middleName}
                    onChange={(e) => updateField('middleName', e.target.value)}
                    className="h-12 text-base"
                    placeholder="Enter middle name"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="lastName" className="text-lg">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateField('lastName', e.target.value)}
                    className="h-12 text-base"
                    placeholder="Enter last name"
                  />
                  {errors.lastName && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle className="h-4 w-4" />{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Label htmlFor="dateOfBirth" className="text-lg">Date of Birth *</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => updateField('dateOfBirth', e.target.value)}
                    className="h-12 text-base"
                  />
                  {errors.dateOfBirth && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle className="h-4 w-4" />{errors.dateOfBirth}</p>}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="gender" className="text-lg">Gender *</Label>
                  <Select value={formData.gender} onValueChange={(val) => updateField('gender', val)}>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male" className="text-base">Male</SelectItem>
                      <SelectItem value="female" className="text-base">Female</SelectItem>
                      <SelectItem value="other" className="text-base">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.gender && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle className="h-4 w-4" />{errors.gender}</p>}
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="fatherName" className="text-lg">Father's Name *</Label>
                <Input
                  id="fatherName"
                  value={formData.fatherName}
                  onChange={(e) => updateField('fatherName', e.target.value)}
                  className="h-12 text-base"
                  placeholder="Enter father's full name"
                />
                {errors.fatherName && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle className="h-4 w-4" />{errors.fatherName}</p>}
              </div>

              <div className="space-y-3">
                <Label htmlFor="motherName" className="text-lg">Mother's Name</Label>
                <Input
                  id="motherName"
                  value={formData.motherName}
                  onChange={(e) => updateField('motherName', e.target.value)}
                  className="h-12 text-base"
                  placeholder="Enter mother's full name"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="maritalStatus" className="text-lg">Marital Status</Label>
                <Select value={formData.maritalStatus} onValueChange={(val) => updateField('maritalStatus', val)}>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Select marital status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single" className="text-base">Single</SelectItem>
                    <SelectItem value="married" className="text-base">Married</SelectItem>
                    <SelectItem value="divorced" className="text-base">Divorced</SelectItem>
                    <SelectItem value="widowed" className="text-base">Widowed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Step 2: Contact Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Label htmlFor="mobile" className="text-lg">Mobile Number *</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => updateField('mobile', e.target.value)}
                    className="h-12 text-base"
                    placeholder="Enter 10-digit mobile number"
                  />
                  {errors.mobile && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle className="h-4 w-4" />{errors.mobile}</p>}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-lg">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="h-12 text-base"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle className="h-4 w-4" />{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="addressLine1" className="text-lg">Address Line 1 *</Label>
                <Input
                  id="addressLine1"
                  value={formData.addressLine1}
                  onChange={(e) => updateField('addressLine1', e.target.value)}
                  className="h-12 text-base"
                  placeholder="House/Flat number, Building name"
                />
                {errors.addressLine1 && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle className="h-4 w-4" />{errors.addressLine1}</p>}
              </div>

              <div className="space-y-3">
                <Label htmlFor="addressLine2" className="text-lg">Address Line 2</Label>
                <Input
                  id="addressLine2"
                  value={formData.addressLine2}
                  onChange={(e) => updateField('addressLine2', e.target.value)}
                  className="h-12 text-base"
                  placeholder="Street, Locality"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-3">
                  <Label htmlFor="city" className="text-lg">City *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => updateField('city', e.target.value)}
                    className="h-12 text-base"
                    placeholder="City"
                  />
                  {errors.city && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle className="h-4 w-4" />{errors.city}</p>}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="state" className="text-lg">State/Province *</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => updateField('state', e.target.value)}
                    className="h-12 text-base"
                    placeholder="State"
                  />
                  {errors.state && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle className="h-4 w-4" />{errors.state}</p>}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="pincode" className="text-lg">Pincode *</Label>
                  <Input
                    id="pincode"
                    value={formData.pincode}
                    onChange={(e) => updateField('pincode', e.target.value)}
                    className="h-12 text-base"
                    placeholder="Pincode"
                  />
                  {errors.pincode && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle className="h-4 w-4" />{errors.pincode}</p>}
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="country" className="text-lg">Country</Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) => updateField('country', e.target.value)}
                  className="h-12 text-base"
                  readOnly
                />
              </div>
            </div>
          )}

          {/* Step 3: Documents & KYC */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="idProofType" className="text-lg">Identity Proof Type *</Label>
                <Select value={formData.idProofType} onValueChange={(val) => updateField('idProofType', val)}>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Select ID proof type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="national-id" className="text-base">National ID Card</SelectItem>
                    <SelectItem value="passport" className="text-base">Passport</SelectItem>
                    <SelectItem value="drivers-license" className="text-base">Driver's License</SelectItem>
                    <SelectItem value="voter-id" className="text-base">Voter ID</SelectItem>
                  </SelectContent>
                </Select>
                {errors.idProofType && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle className="h-4 w-4" />{errors.idProofType}</p>}
              </div>

              <div className="space-y-3">
                <Label htmlFor="idProofNumber" className="text-lg">ID Proof Number *</Label>
                <Input
                  id="idProofNumber"
                  value={formData.idProofNumber}
                  onChange={(e) => updateField('idProofNumber', e.target.value)}
                  className="h-12 text-base"
                  placeholder="Enter ID number"
                />
                {errors.idProofNumber && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle className="h-4 w-4" />{errors.idProofNumber}</p>}
              </div>

              <div className="space-y-3">
                <Label className="text-lg">Upload Documents</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500">ID Proof, Address Proof, Photo (Max 5MB each)</p>
                  <input type="file" className="hidden" multiple accept="image/*,.pdf" />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="occupation" className="text-lg">Occupation *</Label>
                <Select value={formData.occupation} onValueChange={(val) => updateField('occupation', val)}>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Select occupation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="salaried" className="text-base">Salaried Employee</SelectItem>
                    <SelectItem value="self-employed" className="text-base">Self Employed</SelectItem>
                    <SelectItem value="business" className="text-base">Business Owner</SelectItem>
                    <SelectItem value="professional" className="text-base">Professional</SelectItem>
                    <SelectItem value="retired" className="text-base">Retired</SelectItem>
                    <SelectItem value="student" className="text-base">Student</SelectItem>
                    <SelectItem value="homemaker" className="text-base">Homemaker</SelectItem>
                    <SelectItem value="other" className="text-base">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.occupation && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle className="h-4 w-4" />{errors.occupation}</p>}
              </div>

              <div className="space-y-3">
                <Label htmlFor="monthlyIncome" className="text-lg">Monthly Income (¥)</Label>
                <Select value={formData.monthlyIncome} onValueChange={(val) => updateField('monthlyIncome', val)}>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Select income range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="below-5000" className="text-base">Below ¥5,000</SelectItem>
                    <SelectItem value="5000-10000" className="text-base">¥5,000 - ¥10,000</SelectItem>
                    <SelectItem value="10000-25000" className="text-base">¥10,000 - ¥25,000</SelectItem>
                    <SelectItem value="25000-50000" className="text-base">¥25,000 - ¥50,000</SelectItem>
                    <SelectItem value="above-50000" className="text-base">Above ¥50,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Step 4: Nominee & Deposit */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="text-lg mb-2">📋 Nominee Details (Optional but Recommended)</h3>
                <p className="text-sm text-gray-600">Adding a nominee ensures smooth transfer of funds in case of unforeseen circumstances</p>
              </div>

              <div className="space-y-3">
                <Label htmlFor="nomineeName" className="text-lg">Nominee Full Name</Label>
                <Input
                  id="nomineeName"
                  value={formData.nomineeName}
                  onChange={(e) => updateField('nomineeName', e.target.value)}
                  className="h-12 text-base"
                  placeholder="Enter nominee's full name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Label htmlFor="nomineeRelation" className="text-lg">Relationship with Nominee</Label>
                  <Select value={formData.nomineeRelation} onValueChange={(val) => updateField('nomineeRelation', val)}>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select relationship" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="spouse" className="text-base">Spouse</SelectItem>
                      <SelectItem value="father" className="text-base">Father</SelectItem>
                      <SelectItem value="mother" className="text-base">Mother</SelectItem>
                      <SelectItem value="son" className="text-base">Son</SelectItem>
                      <SelectItem value="daughter" className="text-base">Daughter</SelectItem>
                      <SelectItem value="brother" className="text-base">Brother</SelectItem>
                      <SelectItem value="sister" className="text-base">Sister</SelectItem>
                      <SelectItem value="other" className="text-base">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="nomineeDOB" className="text-lg">Nominee Date of Birth</Label>
                  <Input
                    id="nomineeDOB"
                    type="date"
                    value={formData.nomineeDOB}
                    onChange={(e) => updateField('nomineeDOB', e.target.value)}
                    className="h-12 text-base"
                  />
                </div>
              </div>

              <div className="border-t pt-6 mt-6">
                <h3 className="text-lg mb-4">Initial Deposit</h3>
                <div className="space-y-3">
                  <Label htmlFor="initialDeposit" className="text-lg">Initial Deposit Amount (¥)</Label>
                  <Input
                    id="initialDeposit"
                    type="number"
                    value={formData.initialDeposit}
                    onChange={(e) => updateField('initialDeposit', e.target.value)}
                    className="h-12 text-base"
                    placeholder="Minimum ¥1,000"
                    min="1000"
                  />
                  <p className="text-sm text-gray-600">Minimum initial deposit: ¥1,000 for Savings Account</p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-lg mb-3">✅ Declaration</h3>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" required />
                  <span className="text-sm text-gray-700">
                    I hereby declare that the information provided above is true and correct to the best of my knowledge. 
                    I have read and agree to the Terms & Conditions of SENPAI Bank.
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                className="h-12 px-8"
                disabled={isSubmitting}
              >
                Previous
              </Button>
            )}
            
            {currentStep < 4 ? (
              <Button
                type="button"
                onClick={handleNext}
                className="h-12 px-8 ml-auto bg-blue-700 hover:bg-blue-800"
              >
                Next
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleSubmit}
                className="h-12 px-8 ml-auto bg-green-700 hover:bg-green-800"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Help Card */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardContent className="pt-6">
          <h3 className="text-lg mb-3">💡 Need Help?</h3>
          <p className="text-sm text-gray-700 mb-3">
            If you face any difficulty in filling this form, please call our helpline: <strong className="text-blue-700">1800 1080</strong>
          </p>
          <p className="text-sm text-gray-700">
            You can also visit your nearest SENPAI Bank branch for assisted account opening.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
