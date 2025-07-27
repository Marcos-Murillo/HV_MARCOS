"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Send } from "lucide-react"
import { PinContainer } from "@/components/ui/3d-pin"
import { ThreeDMarquee } from "@/components/ui/3d-marquee"
import { ImageModal } from "@/components/ui/image-modal"
import { MinimalHeader } from "@/components/ui/minimal-header"
import { MinimalProjectCard } from "@/components/ui/minimal-project-card"
import { useTheme } from "@/lib/theme-context"
import { translations } from "@/lib/translations"
import { useState } from "react"

export default function Portfolio() {
  const { language } = useTheme()
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

// Images for the 3D marquee
  const projectImages = [
    "/bitasis.png",
    "/bitcat.png",
    "/bitestad.png",
    "/bitresp.png",
    "/invent.png",
    "/bitacoracas.png",
    "/candario.png",
    "/invent-prestamos.png",
    "/nomina.png",
    "/resumencas.png",
    "/birreg.png",
    "/bitasis.png",
    "/bitcat.png",
    "/bitestad.png",
    "/invent.png",
    "/bitresp.png",
    "/bitacoracas.png",
    "/nomina.png",
    "/resumencas.png",
    "/birreg.png",
    "/bitasis.png",
    "/bitcat.png",
    "/bitestad.png",
    "/bitresp.png",
    "/bitacoracas.png",
    "/candario.png",
    "/nomina.png",
    "/resumencas.png",
    "/bitasis.png",
    "/birreg.png",
    "/invent-est.png",
    "/bitasis.png",
    "/bitestad.png",
    "/bitresp.png",
    "/bitacoracas.png",
    "/candario.png",
    "/nomina.png",
    "/resumencas.png",
    "/invent-prestamos.png",
    "/bitasis.png",
    "/invent-est.png",
    "/birreg.png",
    "/bitasis.png",
    "/invent-est.png",
    "/bitestad.png",
    "/invent-prestamos.png",
  ]

  const mainProjects = [
    {
      title: t.projectLabSuelos,
      description: t.projectLabSuelosDesc,
      image: "/labsuelos.png",
      technologies: ["React", "TypeScript", "Tailwind"],
      href: "https://lab-suelos.vercel.app/",
    },
    {
      title: t.projectFinanzas,
      description: t.projectFinanzasDesc,
      image: "/finanzas.png",
      technologies: ["Next.js", "React", "Firebase"],
      href: "https://finanzas-personales-marcos-projects-9b3f5b99.vercel.app/",
    },
    {
      title: t.projectDashboard,
      description: t.projectDashboardDesc,
      image: "/fragancias.png",
      technologies: ["React", "Next.js", "Firebase"],
      href: "https://fragrancias-stock.vercel.app/",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <ImageModal isOpen={!!selectedImage} imageSrc={selectedImage || ""} onClose={closeModal} />
      <MinimalHeader />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        {/* Hero Section */}
        <section id="about" className="mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{t.title}</h1>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-400">
              {t.subtitle}
            </span>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-2xl">{t.description}</p>

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
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t.M}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">{t.Worck}</p>

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

          {/* 3D Marquee */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">{t.moreProjects}</h3>
            <ThreeDMarquee images={projectImages} className="dark:bg-gray-900/50" onImageClick={handleImageClick} />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">{t.Sharing}</h2>

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
              <span className="text-sm text-gray-500 dark:text-gray-500 ml-4 whitespace-nowrap">Sep 15, 2024</span>
            </div>

            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t.projectNomina}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t.projectNominaDesc}</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-500 ml-4 whitespace-nowrap">Feb 15, 2024</span>
            </div>

          <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t.projectStock}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t. projectStockDesc}</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-500 ml-4 whitespace-nowrap">Jun 15, 2025</span>
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
