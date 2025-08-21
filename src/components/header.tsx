"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

const navigation = [
  { name: "Legend", href: "#origin" },
  { name: "Spirit", href: "#saga" },
  { name: "Epic", href: "#theme" },
  { name: "Rebel", href: "#enter" },
  { name: "Experience", href: "#experience" }
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-transparent">
      <div className="container px-4 mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <span className="text-sm sm:text-base md:text-xl font-medium tracking-tight">NE ZHA — LOTUS PRINCE</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(item.href.replace('#', ''))}
                  className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-white border-2 border-black rounded-full text-black font-medium text-xs hover:bg-black hover:text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
                >
                  {item.name}
                </button>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white border-2 border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out shadow-md"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/20 md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Menu */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden bg-white border-t-2 border-black shadow-lg relative z-50"
              >
              <nav className="py-4 px-4">
                <div className="flex flex-col gap-3">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => scrollToSection(item.href.replace('#', ''))}
                        className="w-full text-left px-4 py-3 bg-white border-2 border-black rounded-lg text-black font-medium text-sm hover:bg-black hover:text-white transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
                      >
                        {item.name}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </nav>
            </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
