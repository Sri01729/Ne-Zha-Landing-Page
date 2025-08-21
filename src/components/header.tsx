"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"
import { Menu, ShoppingCart, Sparkles } from "lucide-react"
import Link from "next/link"

const navigation = [
  { name: "Legend", href: "#origin" },
  { name: "Spirit", href: "#saga" },
  { name: "Epic", href: "#theme" },
  { name: "Rebel", href: "#enter" },
  { name: "Experience", href: "#experience" }
]

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
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
              <span className="text-xl font-medium tracking-tight">NE ZHA — LOTUS PRINCE</span>
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
                  className="px-4 py-1.5 bg-white border-2 border-black rounded-full text-black font-medium text-xs hover:bg-black hover:text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
                >
                  {item.name}
                </button>
              </motion.div>
            ))}
          </nav>

          {/* Cart & Mobile Menu */}

        </div>
      </div>
    </header>
  )
}
