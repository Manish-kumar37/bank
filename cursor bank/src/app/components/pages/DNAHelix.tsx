import { motion } from 'motion/react';
import { CreditCard, DollarSign, Shield, Lock, Briefcase, Globe } from 'lucide-react';

const DNA_ITEMS = [
  { icon: CreditCard, color: 'bg-blue-500' },
  { icon: DollarSign, color: 'bg-green-500' },
  { icon: Shield, color: 'bg-purple-500' },
  { icon: Lock, color: 'bg-red-500' },
  { icon: Briefcase, color: 'bg-orange-500' },
  { icon: Globe, color: 'bg-cyan-500' },
];

export function DNAHelixAnimation() {
  return (
    <div className="relative h-[400px] w-full flex items-center justify-center overflow-hidden bg-white/50 rounded-2xl border border-gray-100 shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50" />
      
      {/* Container for the Helix */}
      <div className="relative w-full max-w-lg h-64 flex items-center justify-center">
        {/* Strand 1 */}
        {DNA_ITEMS.map((item, i) => (
           <DNAStrand key={`strand1-${i}`} item={item} index={i} total={DNA_ITEMS.length} offset={0} />
        ))}
         {/* Strand 2 (Offset by PI) */}
        {DNA_ITEMS.map((item, i) => (
           <DNAStrand key={`strand2-${i}`} item={item} index={i} total={DNA_ITEMS.length} offset={Math.PI} />
        ))}
      </div>
    </div>
  );
}

function DNAStrand({ item, index, total, offset }: any) {
  const Icon = item.icon;
  
  return (
    <motion.div
      className="absolute"
      animate={{
        x: [0, 0], // Placeholder, calculated below
        y: [0, 0], 
        scale: [1, 1],
        zIndex: [1, 1]
      }}
    >
       <motion.div
         className={`w-12 h-12 rounded-xl ${item.color} shadow-lg flex items-center justify-center text-white`}
         style={{
            position: 'absolute',
         }}
         animate={{
            x: Array.from({ length: 100 }, (_, t) => {
                const angle = (t / 100) * Math.PI * 2 + (index / total) * Math.PI * 2 + offset;
                return Math.sin(angle) * 120; // Width of helix
            }),
            y: Array.from({ length: 100 }, (_, t) => {
               // Vertical movement creates "rolling" effect
               return (t / 100) * 40 + (index * 40) - 100; // Simplified vertical spread
            }),
            scale: Array.from({ length: 100 }, (_, t) => {
               const angle = (t / 100) * Math.PI * 2 + (index / total) * Math.PI * 2 + offset;
               return Math.cos(angle) > 0 ? 1.2 : 0.8; // Perspective scale
            }),
            zIndex: Array.from({ length: 100 }, (_, t) => {
               const angle = (t / 100) * Math.PI * 2 + (index / total) * Math.PI * 2 + offset;
               return Math.cos(angle) > 0 ? 20 : 1; // Z-index sorting
            }),
            opacity: Array.from({ length: 100 }, (_, t) => {
               const angle = (t / 100) * Math.PI * 2 + (index / total) * Math.PI * 2 + offset;
               return Math.cos(angle) > 0 ? 1 : 0.6; // Fade background items
            })
         }}
         transition={{
            duration: 8,
            ease: "linear",
            repeat: Infinity,
         }}
       >
         <Icon className="w-6 h-6" />
       </motion.div>
    </motion.div>
  );
}

// Simplified version for better performance and reliability using purely CSS-ish motion
export function DNAHelixSimple() {
   return (
      <div className="relative h-[400px] w-full flex items-center justify-center bg-slate-50 overflow-hidden rounded-xl">
         <div className="relative w-64 h-full flex flex-col items-center justify-center gap-8 perspective-500">
            {[...Array(8)].map((_, i) => (
               <motion.div
                  key={i}
                  className="w-full flex items-center justify-between"
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 5, ease: "linear", repeat: Infinity, delay: -i * 0.5 }}
                  style={{ transformStyle: 'preserve-3d' }}
               >
                  <div className="w-10 h-10 bg-blue-500 rounded-full shadow-lg flex items-center justify-center text-white backface-visible" style={{ transform: 'translateZ(60px)' }}>
                     <CreditCard size={16} />
                  </div>
                  <div className="h-0.5 bg-blue-200/50 w-full" />
                  <div className="w-10 h-10 bg-purple-500 rounded-full shadow-lg flex items-center justify-center text-white backface-visible" style={{ transform: 'translateZ(-60px)' }}>
                     <Shield size={16} />
                  </div>
               </motion.div>
            ))}
         </div>
      </div>
   )
}
