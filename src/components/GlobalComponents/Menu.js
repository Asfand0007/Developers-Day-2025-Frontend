"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Competitions", href: "/competitions" },
  // { name: "Team", href: "/team" },
  // { name: "Sponsors", href: "/sponsors" },
  { name: "Contact", href: "/contact-us" },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-18 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center my-2 gap-3">
              <Image src="/logo.png" alt="Logo" width={60} height={60} className="rounded-full" />
              <span className="text-xl md:text-2xl font-bold text-white hidden sm:block">
                Developers Day 2026
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-red-500 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden pb-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-gray-300 hover:text-red-500 transition-colors duration-300 font-medium border-t border-gray-800"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
}
