"use client"

import { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import Image from 'next/image'

interface AnimatedCardProps {
  image: string
  alt: string
  chapter: string
  title: string
  description: string
}

export function AnimatedCard({ image, alt, chapter, title, description }: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const titleY = useMotionValue(0)
  const descriptionY = useMotionValue(50)
  const descriptionOpacity = useMotionValue(0)

  const titleTransform = useTransform(titleY, [0, -180], [0, -180])
  const descriptionTransform = useTransform(descriptionY, [50, 0], [50, 0])

  useEffect(() => {
    if (isHovered) {
      // Animate title to top
      animate(titleY, -180, { duration: 0.5, ease: "easeOut" })
      // Animate description from bottom
      animate(descriptionY, 0, { duration: 0.5, ease: "easeOut" })
      animate(descriptionOpacity, 1, { duration: 0.5, ease: "easeOut" })
    } else {
      // Reset animations
      animate(titleY, 0, { duration: 0.5, ease: "easeOut" })
      animate(descriptionY, 50, { duration: 0.5, ease: "easeOut" })
      animate(descriptionOpacity, 0, { duration: 0.3, ease: "easeOut" })
    }
  }, [isHovered, titleY, descriptionY, descriptionOpacity])

  return (
    <div
      className="card-container group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="inner-container">
        <div className="main-card">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
          />
          <div className="content-container">
            <div className="content-top">
              <div className="scrollbar-glass">
                {chapter}
              </div>
            </div>

            <div className="content-bottom">
              <motion.p
                className="title"
                style={{ y: titleTransform }}
              >
                {title}
              </motion.p>

              <motion.p
                className="description"
                style={{
                  y: descriptionTransform,
                  opacity: descriptionOpacity
                }}
              >
                {description}
              </motion.p>
            </div>
          </div>
        </div>

        <div className="border-effect-container">
          <div className="electric-border"></div>
          <div className="glow-layer-1"></div>
          <div className="glow-layer-2"></div>
        </div>
      </div>
      <div className="background-glow"></div>
    </div>
  )
}
