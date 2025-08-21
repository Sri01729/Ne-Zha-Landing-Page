"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function Loading3D() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-card/50 to-background/50">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full mx-auto mb-4"
        />
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex items-center gap-2 text-muted-foreground"
        >
          <Sparkles className="h-4 w-4" />
          <span className="text-sm">Loading 3D Model...</span>
        </motion.div>
      </div>
    </div>
  )
}
