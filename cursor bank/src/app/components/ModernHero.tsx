import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { ArrowRight, CreditCard, Shield, TrendingUp, Users, Zap, Activity, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

interface ModernHeroProps {
  userType: 'personal' | 'nri' | 'business';
  onCtaClick: () => void;
}

export function ModernHero({ userType, onCtaClick }: ModernHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Mouse movement logic for 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    setMousePosition({ x, y });
  };

  const resetMousePosition = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // Smooth springs for tilt
  const xSpring = useSpring(0, { stiffness: 100, damping: 20 });
  const ySpring = useSpring(0, { stiffness: 100, damping: 20 });

  useEffect(() => {
    xSpring.set(mousePosition.x * 20); // Max 20deg tilt
    ySpring.set(mousePosition.y * -20); // Invert Y axis
  }, [mousePosition, xSpring, ySpring]);

  // Content based on user type
  const content = {
    personal: {
      badge: 'Next Gen Personal Banking',
      title: 'Banking Reimagined for the Future',
      subtitle: 'Experience a seamless blend of aesthetic design and powerful financial tools. Manage your life, not just your money.',
      gradient: 'from-rose-400 via-fuchsia-500 to-indigo-500',
    },
    nri: {
      badge: 'Global NRI Solutions',
      title: 'Borders Don\'t Limit Your Ambition',
      subtitle: 'Seamlessly connect your global wealth with your Indian roots. The world is your office, we are your bank.',
      gradient: 'from-orange-400 via-red-500 to-rose-500',
    },
    business: {
      badge: 'Enterprise Grade Power',
      title: 'Command Center for Your Business',
      subtitle: 'Powerful tools to scale your operations. Automate finances, track growth, and secure your future.',
      gradient: 'from-blue-400 via-indigo-500 to-violet-600',
    },
  };

  const currentContent = content[userType];

  return (
    <section 
      className="relative min-h-[90vh] overflow-hidden bg-[#F8FAFC] flex items-center justify-center py-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMousePosition}
    >
      {/* Dynamic Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-300/30 to-blue-300/30 blur-3xl animate-blob" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-rose-300/30 to-orange-300/30 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-teal-300/30 to-green-300/30 blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-sm"
          >
            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentContent.gradient}`} />
            <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">{currentContent.badge}</span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            <span className="block">{currentContent.title.split(' ').slice(0, 2).join(' ')}</span>
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentContent.gradient}`}>
              {currentContent.title.split(' ').slice(2).join(' ')}
            </span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            {currentContent.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              onClick={onCtaClick}
              className={`h-14 px-8 text-lg rounded-2xl bg-gray-900 text-white hover:bg-gray-800 shadow-lg shadow-gray-200 transition-all hover:scale-105`}
            >
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="h-14 px-8 text-lg rounded-2xl border-2 border-gray-200 bg-white/50 hover:bg-white hover:border-gray-300 text-gray-700 backdrop-blur-sm transition-all"
            >
              View Demo
            </Button>
          </div>

          <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-gray-500">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-white shadow-sm"><Shield className="w-5 h-5 text-green-600" /></div>
              <span className="text-sm font-medium">Bank Grade Security</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-white shadow-sm"><Users className="w-5 h-5 text-blue-600" /></div>
              <span className="text-sm font-medium">2M+ Users</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content - 3D Interface */}
        <div className="relative perspective-1000">
          <motion.div
            style={{ 
              rotateX: ySpring, 
              rotateY: xSpring,
              transformStyle: "preserve-3d"
            }}
            className="relative w-full aspect-[4/3]"
          >
            {/* Main Glass Dashboard Card */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-[2rem] border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden">
              {/* Fake UI Header */}
              <div className="h-16 border-b border-white/30 flex items-center justify-between px-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="h-2 w-32 bg-gray-400/10 rounded-full" />
                <div className="w-8 h-8 rounded-full bg-gray-400/10" />
              </div>
              
              {/* Fake UI Body */}
              <div className="p-8 grid grid-cols-3 gap-6">
                {/* Sidebar */}
                <div className="col-span-1 space-y-4">
                   <div className="h-32 bg-white/40 rounded-2xl border border-white/50 p-4">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg mb-3 flex items-center justify-center">
                         <TrendingUp className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="h-2 w-16 bg-gray-400/20 rounded-full mb-2" />
                      <div className="h-6 w-24 bg-gray-400/10 rounded-lg" />
                   </div>
                   <div className="h-48 bg-white/40 rounded-2xl border border-white/50 p-4">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg mb-3 flex items-center justify-center">
                         <Activity className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="space-y-2 mt-4">
                         <div className="h-2 w-full bg-gray-400/10 rounded-full" />
                         <div className="h-2 w-2/3 bg-gray-400/10 rounded-full" />
                         <div className="h-2 w-4/5 bg-gray-400/10 rounded-full" />
                      </div>
                   </div>
                </div>

                {/* Main Content */}
                <div className="col-span-2 space-y-4">
                   {/* Large Chart Area */}
                   <div className="h-48 bg-white/60 rounded-2xl border border-white/50 p-6 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-6">
                         <div className="text-xs text-gray-500 font-medium">TOTAL BALANCE</div>
                         <div className="text-3xl font-bold text-gray-800">¥1,250,400</div>
                         <div className="text-xs text-green-600 flex items-center gap-1 mt-1">
                            <Zap className="w-3 h-3" /> +12.5% this month
                         </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-24 flex items-end justify-between px-6 pb-4 gap-2">
                         {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
                            <div 
                              key={i} 
                              className="w-full bg-gray-900/5 rounded-t-sm hover:bg-gray-900/10 transition-colors"
                              style={{ height: `${h}%` }}
                            />
                         ))}
                      </div>
                   </div>

                   {/* Transaction Rows */}
                   <div className="h-32 bg-white/40 rounded-2xl border border-white/50 p-4 space-y-3">
                      {[1, 2].map((i) => (
                         <div key={i} className="flex items-center justify-between p-2 hover:bg-white/40 rounded-xl transition-colors">
                            <div className="flex items-center gap-3">
                               <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i === 1 ? 'bg-orange-100' : 'bg-blue-100'}`}>
                                  {i === 1 ? <Users className="w-4 h-4 text-orange-600" /> : <CreditCard className="w-4 h-4 text-blue-600" />}
                               </div>
                               <div>
                                  <div className="h-2 w-20 bg-gray-800/10 rounded-full mb-1" />
                                  <div className="h-1.5 w-12 bg-gray-800/5 rounded-full" />
                               </div>
                            </div>
                            <div className="h-2 w-16 bg-gray-800/10 rounded-full" />
                         </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-12 bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/60 w-48 z-20"
            >
               <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                     <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                     <p className="text-xs text-gray-500">Transfer Sent</p>
                     <p className="text-sm font-bold text-gray-800">¥50,000</p>
                  </div>
               </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-8 bottom-20 bg-gray-900 p-5 rounded-2xl shadow-2xl border border-gray-700 w-56 z-20 text-white"
            >
               <div className="flex justify-between items-start mb-6">
                  <CreditCard className="w-6 h-6 text-white/80" />
                  <span className="text-xs font-mono text-white/50">SENPAI</span>
               </div>
               <div className="space-y-1">
                  <div className="text-xs text-white/40">Balance</div>
                  <div className="text-xl font-bold tracking-tight">¥840,230</div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
