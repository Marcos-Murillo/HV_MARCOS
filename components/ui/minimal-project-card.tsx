"use client"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface MinimalProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  href?: string
  onClick?: () => void
}

export const MinimalProjectCard = ({
  title,
  description,
  technologies,
  image,
  href,
  onClick,
}: MinimalProjectCardProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (href) {
      window.open(href, "_blank")
    }
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group cursor-pointer"
      onClick={handleClick}
    >
      {/* Project Image */}
      <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-6 mb-4 aspect-[4/3] flex items-center justify-center overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Project Info */}
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1 pt-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
