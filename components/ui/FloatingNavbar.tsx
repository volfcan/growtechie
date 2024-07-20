// Use this directive in the parent component of FloatingNavbar.tsx

"use client";

// Your parent component code here
// components/ui/FloatingNavbar.js
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";


export const FloatingNav = ({
  navItems,
  className,
  
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
  
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  

  
  


  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });


   
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-full fixed z-[5000] top-0 left-0 px-8 py-4 border border-black/[0.1] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-between bg-[rgba(17,25,40,0.75)]",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.5)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <Link href="/" className="text-white font-bold text-xl ml-4">
          Growtechie
        </Link>

        <div className="flex-1 flex items-center justify-center">
          <div className="flex space-x-8">
            {navItems.map((navItem, idx) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="text-lg cursor-pointer">{navItem.name}</span>
              </Link>
            ))}

            
              <div className="flex space-x-4 justify-end ">
                <Link href="/login">
                  <button style={{
    width: '55px',
    height: '24px',
    top: '71px',
    left: '1126px',
    gap: '0px',
    opacity: '0px',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '24.2px',
    textAlign: 'left',
    color: '#C1C2D3',
  }} className="text-background: #C1C2D3 px-4 py-2 rounded-md underline ">
                    Login
                  </button>
                </Link>
                <Link href="/register">
                  <button  style={{
                      width: '130px',
                      height: '51px',
          
                      background: '#CBACF9',
                      borderRadius: '20px',
                      fontFamily: 'Inter',
                      fontSize: '20px',
                      fontWeight: 600,
                      lineHeight: '24.2px',
                      textAlign: 'center',
                      color: '#04071D',
                      border: 'none', 
                     position:'absolute',
                     right:'120px',
                     bottom:'5px',
                    }}className="text-black  px-4 py-2 rounded-md hover:bg-lavender-600">
                    Register
                  </button>
                </Link>
              </div>
            
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
