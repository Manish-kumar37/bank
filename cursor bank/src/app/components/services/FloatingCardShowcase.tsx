import { motion } from 'motion/react';
import { CreditCard, Lock, Shield, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

interface FloatingCardShowcaseProps {
  onApply: () => void;
}

export function FloatingCardShowcase({ onApply }: FloatingCardShowcaseProps) {
  return (
    <div className="relative h-[600px] w-full flex items-center justify-center perspective-1000 overflow-hidden bg-gray-50 py-20">
      
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-purple-200/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6">
        
        {/* Text Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
             <Zap className="w-4 h-4 fill-current" />
             <span>New Gen Payments</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
             Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Future of Cards</span>
          </h2>
          <p className="text-lg text-gray-600">
             Seamlessly integrated with your lifestyle. Tap, swipe, or fly through payments with our next-gen contactless cards.
          </p>
          <div className="space-y-3">
             {['Zero Forex Markup', 'Global Airport Lounge Access', 'Instant Virtual Card Issuance'].map((feat, i) => (
                <div key={i} className="flex items-center gap-3">
                   <CheckCircle2 className="w-5 h-5 text-green-500" />
                   <span className="text-gray-700 font-medium">{feat}</span>
                </div>
             ))}
          </div>
          <button 
             onClick={onApply}
             className="mt-4 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold shadow-lg hover:bg-gray-800 transition-all hover:scale-105 flex items-center gap-2"
          >
             Apply Now <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* 3D Floating Cards */}
        <div className="relative h-[400px] w-full flex items-center justify-center">
           {/* Card 1: Back (Ghost/Reflection) */}
           <motion.div 
              initial={{ rotateY: 15, rotateX: 5, z: -50, x: 40 }}
              animate={{ rotateY: [15, 25, 15], rotateX: [5, 10, 5], y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-64 h-96 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 shadow-2xl transform-gpu"
              style={{ zIndex: 1 }}
           >
              {/* Back Design */}
              <div className="w-full h-full relative p-6 flex flex-col justify-between opacity-90">
                 <div className="w-full h-12 bg-black/50 rounded-lg border border-white/10 mt-4" />
                 <div className="space-y-2">
                    <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                    <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                 </div>
                 <div className="flex justify-between items-center">
                    <div className="text-xs text-white/40 font-mono">CVV 888</div>
                    <div className="w-10 h-6 bg-white/20 rounded" />
                 </div>
              </div>
           </motion.div>

           {/* Card 2: Front (Main Hero) */}
           <motion.div 
              initial={{ rotateY: -15, rotateX: 5, z: 50, x: -40 }}
              animate={{ rotateY: [-15, -25, -15], rotateX: [5, 0, 5], y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-64 h-96 rounded-2xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 shadow-2xl border border-white/20 backdrop-blur-md transform-gpu"
              style={{ zIndex: 2 }}
           >
              {/* Front Design */}
              <div className="w-full h-full p-6 flex flex-col justify-between relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
                 
                 <div className="flex justify-between items-start">
                    <Zap className="w-8 h-8 text-white" />
                    <span className="text-white/80 font-mono tracking-widest">SENPAI</span>
                 </div>

                 <div className="space-y-4">
                    <div className="w-12 h-8 bg-yellow-400/80 rounded-md shadow-sm" />
                    <div className="text-2xl text-white font-mono tracking-wider drop-shadow-md">
                       •••• 4829
                    </div>
                 </div>

                 <div className="flex justify-between items-end">
                    <div>
                       <p className="text-[10px] text-white/60 uppercase tracking-widest">Card Holder</p>
                       <p className="text-sm text-white font-medium tracking-wide">ALEX MORGAN</p>
                    </div>
                    <div className="flex flex-col items-end">
                       <p className="text-[10px] text-white/60 uppercase tracking-widest">Expires</p>
                       <p className="text-sm text-white font-mono">12/28</p>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
}
