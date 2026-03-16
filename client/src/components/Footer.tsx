import {
  Mail,
  MapPin,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import { Link } from "wouter";

import logoImg from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="relative bg-black pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Top Light Flare Overlay - matching the inspiration image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-24 rounded-full"
     style={{ background: 'radial-gradient(circle, rgba(69,126,97,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Col 1: Logo & About */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
                <img
                  src={logoImg}
                  alt="MAdigitech"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Bold design meets high-performance code - we craft digital
              experiences that make modern brands stand out.
            </p>
            <p className="text-white/20 text-[10px] font-mono mt-4 uppercase tracking-widest">
              © {new Date().getFullYear()} MAdigitech. All rights reserved.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white mb-8 opacity-80">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Social Links */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white mb-8 opacity-80">
              Social Links
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61566334995334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm font-medium group"
                >
                  <Facebook
                    size={14}
                    className="opacity-40 group-hover:opacity-100 transition-opacity"
                  />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ma_digitech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm font-medium group"
                >
                  <Instagram
                    size={14}
                    className="opacity-40 group-hover:opacity-100 transition-opacity"
                  />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/MA_Digitech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm font-medium group"
                >
                  <Twitter
                    size={14}
                    className="opacity-40 group-hover:opacity-100 transition-opacity"
                  />
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/muhammad-anas-shamsi-2685a7372/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm font-medium group"
                >
                  <Linkedin
                    size={14}
                    className="opacity-40 group-hover:opacity-100 transition-opacity"
                  />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/madigitechofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm font-medium group"
                >
                  <Github
                    size={14}
                    className="opacity-40 group-hover:opacity-100 transition-opacity"
                  />
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Say Hello */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white mb-8 opacity-80">
              Say Hello
            </h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/5">
                  <Mail size={14} className="text-accent" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-white/30 mb-1 font-mono">
                    Email Us
                  </p>
                  <a
                    href="mailto:hello@madigitech.com"
                    className="text-sm text-white hover:text-accent transition-colors font-medium"
                  >
                    hello@madigitech.co
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/5">
                  <MessageSquare size={14} className="text-accent" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-white/30 mb-1 font-mono">
                    Start a Project
                  </p>
                  <Link
                    href="/contact"
                    className="text-sm text-white hover:text-accent transition-colors font-medium"
                  >
                    Contact Us
                  </Link>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/5">
                  <MapPin size={14} className="text-accent" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-white/30 mb-1 font-mono">
                    Our Studio
                  </p>
                  <p className="text-sm text-white font-medium leading-relaxed">
                    Fully Remote
                    <br />
                    Serving Clients Worldwide
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-[9px] uppercase tracking-widest text-white/20 hover:text-white transition-colors font-mono"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[9px] uppercase tracking-widest text-white/20 hover:text-white transition-colors font-mono"
            >
              Terms of Service
            </Link>
          </div>
          <p className="text-[9px] uppercase tracking-widest text-white/10 font-mono">
            Brutalist Excellence / High Performance
          </p>
        </div>
      </div>
    </footer>
  );
}
