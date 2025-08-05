"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Send } from "lucide-react"
import { ImageModal } from "@/components/ui/image-modal"
import { MinimalHeader } from "@/components/ui/minimal-header"
import { MinimalProjectCard } from "@/components/ui/minimal-project-card"
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text"
import { IconCloud } from "@/components/magicui/icon-cloud"
import ProjectMarquee from "@/components/ui/project-marquee"
import { useTheme } from "@/lib/theme-context"
import { translations } from "@/lib/translations"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "firebase",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "tailwindcss",
  "python",
  "mongodb",
  "express",
  "framer",
]

export default function Portfolio() {
  const { language, theme } = useTheme()
  const t = translations[language]
  const [state, setState] = useState<{ success: boolean; message: string } | null>(null)
  const [isPending, setIsPending] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    if (!name || !email || !subject || !message) {
      setState({
        success: false,
        message: "Por favor completa todos los campos requeridos.",
      })
      setIsPending(false)
      return
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Email data:", { name, email, subject, message })

    setState({
      success: true,
      message: "¡Mensaje enviado exitosamente! Te responderé pronto.",
    })

    setIsPending(false)
    e.currentTarget.reset()
  }

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const mainProjects = [
    {
      title: t.projectLabSuelos,
      description: t.projectLabSuelosDesc,
      image: "/lab.png",
      technologies: ["React", "TypeScript", "Tailwind"],
      href: "https://lab-suelos.vercel.app/",
    },
    {
      title: t.projectFinanzas,
      description: t.projectFinanzasDesc,
      image: "/finanzas.png",
      technologies: ["Next.js", "React", "Neon"],
      href: "https://finanzas-personales-marcos-projects-9b3f5b99.vercel.app/",
    },
    {
      title: t.projectDashboard,
      description: t.projectDashboardDesc,
      image: "/catalogo.png",
      technologies: ["React", "Next.js", "Firebase"],
      href: "https://catalogo-eta-ten.vercel.app/",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <ImageModal isOpen={!!selectedImage} imageSrc={selectedImage || ""} onClose={closeModal} />
      <MinimalHeader />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        {/* Hero Section */}
        <section id="about" className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Profile Info */}
            <div>
              <div className="flex items-center space-x-6 mb-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{t.title}</h1>
                  <AnimatedShinyText className="mt-2 text-lg">
                    <span className="inline-block px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-400">
                      {t.subtitle}
                    </span>
                  </AnimatedShinyText>
                </div>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">{t.description}</p>

              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("https://github.com", "_blank")}
                  className="border-gray-300 dark:border-gray-700"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("https://linkedin.com", "_blank")}
                  className="border-gray-300 dark:border-gray-700"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>

            {/* Right Side - Icon Cloud */}
            <div className="flex justify-center">
              <div className="relative size-full max-w-lg">
                <IconCloud iconSlugs={slugs} theme={theme} />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">I love building things</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            Here are some of my favorite projects I've worked on.
          </p>

          {/* Main Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {mainProjects.map((project, index) => (
              <MinimalProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                href={project.href}
              />
            ))}
          </div>

          {/* Project Marquee - Solo Imágenes */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">{t.moreProjects}</h3>
            <ProjectMarquee onImageClick={handleImageClick} />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Sharing knowledge as I learn</h2>

          <div className="space-y-8">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t.workExperience}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Durante mi experiencia en el área de Cultura de la Universidad del Valle, desarrollé e implementé un
                  sistema de gestión de tareas y control de asistencia que optimizó los procesos internos...
                </p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-500 ml-4 whitespace-nowrap">
                Junio 2024 – Presente
              </span>
            </div>

            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t.projectBitacora}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t.projectBitacoraDesc}</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-500 ml-4 whitespace-nowrap">Sep 15, 2023</span>
            </div>

            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t.projectNomina}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t.projectNominaDesc}</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-500 ml-4 whitespace-nowrap">Jan 15, 2024</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">{t.contactMe}</h2>

          <div className="max-w-2xl">
            <Card className="border-gray-200 dark:border-gray-800 shadow-sm">
              <CardContent className="p-8">
                <p className="text-gray-600 dark:text-gray-400 mb-8">{t.contactDescription}</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t.name}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder={t.name}
                        className="border-gray-300 dark:border-gray-700"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        {t.email}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="border-gray-300 dark:border-gray-700"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {t.subject}
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder={t.subject}
                      className="border-gray-300 dark:border-gray-700"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {t.message}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Cuéntame sobre tu proyecto..."
                      rows={5}
                      className="border-gray-300 dark:border-gray-700"
                      required
                    />
                  </div>

                  <Button type="submit" disabled={isPending} className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    {isPending ? "Enviando..." : t.sendMessage}
                  </Button>
                </form>

                {state && (
                  <div className={`mt-4 text-center ${state.success ? "text-green-600" : "text-red-600"}`}>
                    {state.message}
                  </div>
                )}

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.directEmail}{" "}
                    <a
                      href="mailto:marcos.murillo@correounivalle.edu.co"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      marcos.murillo@correounivalle.edu.co
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
