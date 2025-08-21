"use client"

import { motion } from 'framer-motion'

interface MenuButtonProps {
  label: string
  onClick?: () => void
  delay?: number
}

function MenuButton({ label, onClick, delay = 0 }: MenuButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="px-8 py-3 bg-white border-2 border-black rounded-full text-black font-medium text-lg hover:bg-black hover:text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg relative"
    >
      {label}
    </motion.button>
  )
}

export function MenuButtons() {
  const handleLegend = () => {
    // Scroll to legend section
    console.log('Legend clicked')
  }

  const handleSpirit = () => {
    // Scroll to spirit section
    console.log('Spirit clicked')
  }

  const handleEpic = () => {
    // Scroll to epic section
    console.log('Epic clicked')
  }

  const handleExperience = () => {
    // Enter the experience
    console.log('Experience clicked')
  }

  return (
    <motion.div
      className="flex flex-wrap gap-6 justify-center items-center py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <MenuButton label="Legend" onClick={handleLegend} delay={0.1} />
      <MenuButton label="Spirit" onClick={handleSpirit} delay={0.2} />
      <MenuButton label="Epic" onClick={handleEpic} delay={0.3} />
      <MenuButton label="Experience" onClick={handleExperience} delay={0.4} />
    </motion.div>
  )
}
