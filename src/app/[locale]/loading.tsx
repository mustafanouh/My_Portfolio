"use client";
import { motion } from "framer-motion";

const ringVariants = [
  {
    duration: 1.8,
    borderTopColor: "#a78bfa",
    borderRightColor: "#a78bfa22",
    inset: 0,
    dir: 1,
  },
  {
    duration: 1.4,
    borderTopColor: "#38bdf8",
    borderLeftColor: "#38bdf822",
    inset: 10,
    dir: -1,
  },
  {
    duration: 2.2,
    borderTopColor: "#f0abfc",
    borderBottomColor: "#f0abfc22",
    inset: 20,
    dir: 1,
  },
];

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0a0a0f]">
      <div className="flex flex-col items-center gap-7">

       
        <div className="relative w-22 h-22" style={{ width: 88, height: 88 }}>
          {ringVariants.map((ring, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full"
              style={{
                inset: ring.inset,
                border: "1.5px solid transparent",
                borderTopColor: ring.borderTopColor,
                ...(ring.borderRightColor && { borderRightColor: ring.borderRightColor }),
                ...(ring.borderLeftColor && { borderLeftColor: ring.borderLeftColor }),
                ...(ring.borderBottomColor && { borderBottomColor: ring.borderBottomColor }),
              }}
              animate={{ rotate: ring.dir === 1 ? 360 : -360 }}
              transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}
            />
          ))}

          <motion.div
            className="absolute rounded-full"
            style={{ inset: 32, background: "#a78bfa18" }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

    
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[13px] font-medium tracking-[0.2em] uppercase text-slate-200">
            Loading
          </span>

          <div className="flex gap-[5px] items-center">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1 h-1 rounded-full bg-violet-400"
                animate={{ opacity: [0.15, 1, 0.15] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}