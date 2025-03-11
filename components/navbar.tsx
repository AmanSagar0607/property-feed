"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, LogIn, Home, Search, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useSession, signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      className={cn(
        "fixed sm:ml-4 sm:mr-4 lg:ml-14 lg:mr-14 xl:ml-20 xl:mr-20 xl:rounded-xl lg:rounded-lg sm:rounded-s-none lg:top-4 xl:top-4 sm:top-0 left-0 right-0 z-50 transition-all duration-300 border border-transparent",
        isScrolled
          ? "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg shadow-lg border-gray-300 dark:border-gray-700"
          : "bg-transparent border-transparent rotate-0"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo with Animated Shimmer Effect */}
          <Link href="/" className="flex items-center gap-2">
            <span
              className="text-3xl font-bold shimmer-text"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Mansio*
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-300 text-lg font-light">
            {[
              { href: "/", label: "Home" },
              { href: "/properties", label: "Properties" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" }
            ].map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-gray-500">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full hover:scale-110 transition-transform"
            >
              {theme === "dark" ? <Sun className="h-6 w-6 text-[#996830]" /> : <Moon className="h-6 w-6 text-[#996830]" />}
            </button>

            {/* <Link href="/search" className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <Search className="h-5 w-5" />
            </Link> */}

            {session ? (
              <>
                <Link href="/dashboard">
                  <Button variant="outline" size="sm" className="hidden md:flex">
                    Dashboard
                  </Button>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => signOut()}>
                  <User className="h-5 w-5" />
                </Button>
              </>
            ) : (
              <>
                {/* <Link href="/login">
                  <Button variant="outline" size="sm">Log In</Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm">Sign Up</Button>
                </Link> */}
              </>
            )}

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden flex h-9 w-9 items-center justify-center rounded-full">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-neutral-900 border-t dark:border-neutral-800"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-4">
                {[
                  { href: "/", label: "Home" },
                  { href: "/properties", label: "Properties" },
                  { href: "/services", label: "Services" },
                  { href: "/about", label: "About" },
                  { href: "/contact", label: "Contact" }
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="flex items-center gap-2 py-2 text-sm font-medium">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shimmer Animation for Text */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200%; }
          100% { background-position: 200%; }
        }

        .shimmer-text {
          display: inline-block;
          background: linear-gradient(
            to right,
            #996830 20%,
            #d4a373 50%,
            #996830 80%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 2.5s infinite linear;
        }
      `}</style>
    </header>
  );
}
