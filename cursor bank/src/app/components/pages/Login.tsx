import { useState } from 'react';
import { Lock, User, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

type UserType = 'personal' | 'nri' | 'business';

interface LoginProps {
  userType: UserType;
}

export function Login({ userType }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ userId?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: { userId?: string; password?: string } = {};
    
    if (!userId.trim()) {
      newErrors.userId = 'User ID is required';
    } else if (userId.length < 4) {
      newErrors.userId = 'User ID must be at least 4 characters';
    }
    
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock successful login
    console.log('Login attempt:', { userId, password, userType, rememberMe });
    setLoginSuccess(true);
    setIsLoading(false);
    
    // Reset after showing success message
    setTimeout(() => {
      setLoginSuccess(false);
      setUserId('');
      setPassword('');
      setErrors({});
    }, 2000);
  };

  const getUserTypeLabel = () => {
    switch (userType) {
      case 'personal':
        return 'Personal Banking';
      case 'nri':
        return 'NRI Banking';
      case 'business':
        return 'Business Banking';
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] bg-gradient-to-br from-blue-50 to-gray-100 py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - Login Form */}
          <div>
            <Card className="shadow-xl">
              <CardHeader className="space-y-1">
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="h-6 w-6 text-blue-700" />
                  <span className="text-sm text-blue-700">{getUserTypeLabel()}</span>
                </div>
                <CardTitle className="text-2xl sm:text-3xl">Login to Your Account</CardTitle>
                <CardDescription className="text-base">
                  Enter your credentials to access your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loginSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <p className="text-sm text-green-800">Login successful! Redirecting...</p>
                  </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="userId">User ID</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="userId"
                        type="text"
                        placeholder="Enter your User ID"
                        value={userId}
                        onChange={(e) => {
                          setUserId(e.target.value);
                          if (errors.userId) setErrors({ ...errors, userId: undefined });
                        }}
                        className={`pl-10 ${errors.userId ? 'border-red-500' : ''}`}
                        disabled={isLoading}
                      />
                    </div>
                    {errors.userId && (
                      <div className="flex items-center gap-2 text-sm text-red-600">
                        <AlertCircle className="h-4 w-4" />
                        <span>{errors.userId}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your Password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          if (errors.password) setErrors({ ...errors, password: undefined });
                        }}
                        className={`pl-10 pr-10 ${errors.password ? 'border-red-500' : ''}`}
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        disabled={isLoading}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <div className="flex items-center gap-2 text-sm text-red-600">
                        <AlertCircle className="h-4 w-4" />
                        <span>{errors.password}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <label className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300" 
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        disabled={isLoading}
                      />
                      <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                    <button
                      type="button"
                      className="text-sm text-blue-700 hover:underline"
                      disabled={isLoading}
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-700 hover:bg-blue-800" 
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Logging in...' : 'Login'}
                  </Button>

                  <div className="text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <button type="button" className="text-blue-700 hover:underline">
                      Register Now
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-left">
                <div className="text-sm text-gray-600 mb-1">New User?</div>
                <div className="text-blue-700">Register Now</div>
              </button>
              <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-left">
                <div className="text-sm text-gray-600 mb-1">Need Help?</div>
                <div className="text-blue-700">Contact Support</div>
              </button>
            </div>
          </div>

          {/* Right side - Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl text-gray-900 mb-4">Secure Online Banking</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Access your account anytime, anywhere with our secure online banking platform
              </p>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">24/7 Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Manage your accounts, make transfers, and pay bills round the clock
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Bank-Grade Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Your data is protected with 256-bit encryption and two-factor authentication
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Instant Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Get real-time alerts for all your transactions via SMS and email
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg text-blue-900 mb-3">Security Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Never share your password or OTP with anyone</li>
                <li>• Always verify the website URL before logging in</li>
                <li>• Use strong and unique passwords</li>
                <li>• Log out after completing your session</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}