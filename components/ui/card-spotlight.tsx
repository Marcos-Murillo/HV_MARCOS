"use client"
import { useMotionValue, motion, useMotionTemplate } from "framer-motion"
import type React from "react"
import { type MouseEvent as ReactMouseEvent, useState } from "react"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { useTheme } from "@/lib/theme-context"
import { cn } from "@/lib/utils"

export const CardSpotlight = ({
  children,
  radius = 350,
  color,
  className,
  ...props
}: {
  radius?: number
  color?: string
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) => {
  const { theme } = useTheme()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Ajustar el color según el tema para el efecto de spotlight
  const spotlightColor = color || (theme === "light" ? "#ffffff" : "#262626")

  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }
  const [isHovering, setIsHovering] = useState(false)
  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)
  return (
    <div
      className={cn(
        "group/spotlight p-10 rounded-md relative border dark:border-neutral-800 bg-white dark:bg-black border-transparent",
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className={cn(
          "pointer-events-none absolute z-0 -inset-px rounded-md transition duration-300",
          theme === "light"
            ? "opacity-0 group-hover/spotlight:opacity-20" // Opacidad más baja en modo claro
            : "opacity-0 group-hover/spotlight:opacity-100", // Opacidad original en modo oscuro
        )}
        style={{
          backgroundColor: spotlightColor,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={
              theme === "light"
                ? [
                    [59, 130, 246],
                    [139, 92, 246],
                  ] // Colores aún más suaves para modo claro
                : [
                    [59, 130, 246],
                    [139, 92, 246],
                  ] // Colores originales para modo oscuro
            }
            dotSize={3}
          />
        )}
      </motion.div>
      {children}
    </div>
  )
}
