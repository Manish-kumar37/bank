import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Shield, TrendingUp, Wallet, Wifi } from 'lucide-react';

export function InteractiveHeroCard() {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    
    const xPct = mouseXFromCenter / width;
    const yPct = mouseYFromCenter / height;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
      className="w-full h-[400px] flex items-center justify-center relative z-10"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-md aspect-[4/3] bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-xl rounded-3xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] flex items-center justify-center"
      >
        {/* Background Pastel Blobs */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute top-0 left-0 w-48 h-48 bg-purple-300 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-300 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-pink-300 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Floating Elements with Parallax */}
        
        {/* Decorative Circle Ring */}
        <motion.div
            style={{ translateZ: 20 }}
            className="absolute w-72 h-72 border-2 border-white/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
            style={{ translateZ: 30 }}
            className="absolute w-96 h-96 border border-white/10 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        {/* Main Card */}
        <motion.div 
          style={{ translateZ: 50 }}
          className="bg-gradient-to-br from-indigo-500/90 to-purple-600/90 w-72 h-44 rounded-2xl shadow-2xl p-6 flex flex-col justify-between text-white relative z-20 backdrop-blur-md border border-white/20"
        >
          <div className="flex justify-between items-start">
            <Wifi className="w-8 h-8 rotate-90 text-white/50" />
            <div className="text-xs font-mono font-bold tracking-widest opacity-80">SENPAI BANK</div>
          </div>
          <div>
            <div className="text-xl font-mono tracking-widest mb-2 shadow-black drop-shadow-md">•••• •••• •••• 8888</div>
            <div className="flex justify-between items-center">
              <div className="text-sm opacity-90 font-medium">PREMIUM MEMBER</div>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-red-500/80"></div>
                <div className="w-8 h-8 rounded-full bg-yellow-500/80"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Icon 1 - Shield */}
        <motion.div
          style={{ translateZ: 80, x: -100, y: -80 }}
          className="absolute bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50"
          animate={{ y: [-80, -90, -80] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Shield className="w-8 h-8 text-emerald-500" />
        </motion.div>

        {/* Floating Icon 2 - Trending Up */}
        <motion.div
          style={{ translateZ: 60, x: 120, y: -50 }}
          className="absolute bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/50"
          animate={{ y: [-50, -40, -50] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <TrendingUp className="w-6 h-6 text-blue-500" />
        </motion.div>

        {/* Floating Icon 3 - Wallet */}
        <motion.div
          style={{ translateZ: 70, x: 90, y: 100 }}
          className="absolute bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50"
          animate={{ y: [100, 110, 100] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Wallet className="w-8 h-8 text-purple-500" />
        </motion.div>
        
        {/* Stats Pill */}
        <motion.div
            style={{ translateZ: 40, x: -80, y: 100 }}
             className="absolute bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/50 flex items-center gap-2"
             animate={{ y: [100, 90, 100] }}
             transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-bold text-gray-600">Secure & Safe</span>
        </motion.div>

      </motion.div>
    </motion.div>
  );
}
