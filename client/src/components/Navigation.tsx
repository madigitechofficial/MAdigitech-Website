import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

import logoImg from "@/assets/big logo bg removed.png"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 transition-all duration-300",
          isScrolled ? "bg-background/80 backdrop-blur-md py-2 md:py-3" : "bg-transparent"
        )}
      >
        <Link href="/" className="group flex items-center z-50">
          <motion.div 
            className={cn(
              "flex items-center justify-center overflow-hidden transition-all duration-300",
              isScrolled ? "w-16 h-16" : "w-24 h-24"
            )}
            whileHover={{ scale: 1.1 }}
          >
            <img 
              src={logoImg} 
              alt="MAdigitech" 
              className="w-full h-full object-contain" 
            />
          </motion.div>
        </Link>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="z-50 p-2 hover:bg-white/10 rounded-full transition-colors mix-blend-difference text-white"
          data-cursor="hover"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-center items-center p-8"
          >
            <nav className="flex flex-col gap-8 items-center">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                >
                  <Link 
                    href={item.href}
                    className="text-5xl md:text-7xl font-display font-bold text-transparent text-outline hover:text-white transition-all duration-300 hover:tracking-widest"
                    data-cursor="hover"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 left-0 right-0 text-center text-muted-foreground font-mono text-xs tracking-widest uppercase"
            >
              <p>Strategy • Design • Development</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
