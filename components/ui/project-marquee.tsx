"use client"
import { Marquee } from "@/components/magicui/marquee"

interface Project {
  name: string
  img: string
}

const projects: Project[] = [
  {
    name: "Lab Suelos",
    img: "/bitacora2.png",
  },
  {
    name: "Finanzas Personales",
    img: "/bitacora3.png",
  },
  {
    name: "Sistema Bitácora",
    img: "/nomina1.png",
  },
  {
    name: "Sistema Nómina",
    img: "/nomina2.png",
  },
  {
    name: "Cultura Eventos",
    img: "/nomina3.png",
  },
  {
    name: "Cultura Eventos",
    img: "/stock1.png",
  },
  {
    name: "Cultura Eventos",
    img: "/stock2.png",
  },
  {
    name: "Cultura Eventos",
    img: "/stock3.png",
  },
  {
    name: "Cultura Eventos",
    img: "/stock4.png",
  },
]

const firstRow = projects.slice(0, projects.length / 2)
const secondRow = projects.slice(projects.length / 2)

const ProjectCard = ({ img, name, onClick }: { img: string; name: string; onClick?: () => void }) => {
  return (
    <div
      className="relative cursor-pointer overflow-hidden rounded-xl transition-all duration-200 hover:scale-105"
      onClick={onClick}
    >
      <img className="h-48 w-80 object-cover" alt={name} src={img || "/placeholder.svg"} />
      <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-200" />
    </div>
  )
}

interface ProjectMarqueeProps {
  onImageClick?: (imageSrc: string) => void
}

export default function ProjectMarquee({ onImageClick }: ProjectMarqueeProps) {
  const handleProjectClick = (project: { img: string; name: string }) => {
    if (onImageClick) {
      onImageClick(project.img)
    }
  }

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((project) => (
          <ProjectCard key={project.name} {...project} onClick={() => handleProjectClick(project)} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((project) => (
          <ProjectCard key={project.name} {...project} onClick={() => handleProjectClick(project)} />
        ))}
      </Marquee>
    </div>
  )
}
