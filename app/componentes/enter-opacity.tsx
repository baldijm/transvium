import React from 'react'
import * as motion from 'motion/react-client'
import type { MotionProps } from 'framer-motion'

type EnterOpacityProps = {
  children: React.ReactNode
  className?: string
} & MotionProps

export default function EnterOpacity({
  children,
  className = '',
  ...motionProps
}: EnterOpacityProps) {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.20 }}
      className={`w-full h-full ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}
