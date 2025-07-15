"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Briefcase, Sun, Moon, User, FolderOpen, Mail, Send, Home, Languages } from "lucide-react"
import { PinContainer } from "@/components/ui/3d-pin"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { FloatingDock } from "@/components/ui/floating-dock"
import { useTheme } from "@/lib/theme-context"
import { translations } from "@/lib/translations"
import { ThreeDMarquee } from "@/components/ui/3d-marquee"
import { useState } from "react"

export default function Portfolio() {
  const { theme, toggleTheme, language, toggleLanguage } = useTheme()
  const t = translations[language]
  const [state, setState] = useState<{ success: boolean; message: string } | null>(null)
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validación básica
    if (!name || !email || !subject || !message) {
      setState({
        success: false,
        message: "Por favor completa todos los campos requeridos.",
      })
      setIsPending(false)
      return
    }

    // Simular envío de email
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Aquí integrarías con tu servicio de email
    console.log("Email data:", { name, email, subject, message })

    setState({
      success: true,
      message: "¡Mensaje enviado exitosamente! Te responderé pronto.",
    })

    setIsPending(false)

    // Limpiar formulario
    e.currentTarget.reset()
  }

  const dockItems = [
    {
      title: t.home,
      icon: <Home className="h-full w-full" />,
      href: "#home",
    },
    {
      title: t.experience,
      icon: <Briefcase className="h-full w-full" />,
      href: "#experience",
    },
    {
      title: t.projects,
      icon: <FolderOpen className="h-full w-full" />,
      href: "#projects",
    },
    {
      title: t.about,
      icon: <User className="h-full w-full" />,
      href: "#about",
    },
    {
      title: t.contact,
      icon: <Mail className="h-full w-full" />,
      href: "#contact",
    },
    {
      title: "Theme",
      icon: theme === "light" ? <Sun className="h-full w-full" /> : <Moon className="h-full w-full" />,
      href: "#",
      onClick: toggleTheme,
    },
    {
      title: "Language",
      icon: <Languages className="h-full w-full" />,
      href: "#",
      onClick: toggleLanguage,
    },
  ]

  // Images for the 3D marquee
  const projectImages = [
    "/bitasis.png",
    "/bitcat.png",
    "/bitestad.png",
    "/bitresp.png",
    "/bitacoracas.png",
    "/candario.png",
    "/nomina.png",
    "/resumencas.png",
    "/birreg.png",
    "/bitasis.png",
    "/bitcat.png",
    "/bitestad.png",
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
    "/bitasis.png",
    "/bitestad.png",
    "/bitresp.png",
    "/bitacoracas.png",
    "/candario.png",
    "/nomina.png",
    "/resumencas.png",
    "/bitasis.png",
    "/birreg.png",
    "/bitasis.png",
    "/bitestad.png",
  ]

  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Floating Dock Navigation */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDock items={dockItems} />
      </div>

      {/* Hero Section with CardSpotlight */}
      <section id="home" className="text-center px-6 py-16 max-w-4xl mx-auto">
        <CardSpotlight className="w-full max-w-3xl mx-auto dark:bg-gray-950 dark:border-gray-950">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-lime-400 dark:text-lime-400 relative z-20">
            {t.title}
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-white relative z-20">
            {t.subtitle}
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-300 relative z-20">
            {t.description}
          </p>
          <div className="flex justify-center space-x-4 relative z-20">
            <Button
              className="bg-black hover:bg-gray-800 text-white dark:bg-lime-400 dark:text-black dark:hover:bg-lime-500 px-6 py-2 rounded-full"
              onClick={() => window.open("https://github.com", "_blank")}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-lime-400 dark:text-black dark:hover:bg-lime-500 px-6 py-2 rounded-full"
              onClick={() => window.open("https://linkedin.com", "_blank")}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </CardSpotlight>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="px-6 py-16 max-w-4xl mx-auto">
        <div className="flex items-center mb-12">
          <Briefcase className="w-6 h-6 mr-3 text-gray-700 dark:text-gray-300" />
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{t.workExperience}</h3>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 w-3 h-3 bg-lime-400 rounded-full"></div>
          <div className="absolute left-1.5 top-3 w-0.5 h-full bg-gray-200 dark:bg-gray-600"></div>

          <div className="ml-8">
            <p className="text-lime-400 text-sm font-medium mb-2">Junio 2024 – Presente</p>
            <Badge variant="secondary" className="mb-4 bg-gray-800 text-white hover:bg-gray-700">
              Área de Cultura – Universidad del Valle
            </Badge>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Durante mi experiencia en el área de Cultura de la Universidad del Valle, desarrollé e implementé un
              sistema de gestión de tareas y control de asistencia que optimizó los procesos internos, mejorando la
              eficiencia y el rendimiento del equipo al facilitar un seguimiento más organizado y efectivo de las
              actividades culturales, además de colaborar activamente con el equipo para identificar necesidades y
              adaptar soluciones tecnológicas alineadas con los objetivos institucionales.
            </p>
          </div>
        </div>
      </section>

      {/* My Projects Section */}
      <section id="projects" className="px-6 py-16 max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <FolderOpen className="w-6 h-6 mr-3 text-gray-700 dark:text-gray-300" />
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{t.myProjects}</h3>
        </div>

        {/* Main Projects with 3D Pin */}
        <div className="grid md:grid-cols-3 gap-8 h-[40rem] mb-16">
          <PinContainer title="Lab Suelos" href="https://lab-suelos.vercel.app/">
            <div className="flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] dark:bg-black">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-center text-lime-400 relative z-20">
                {t.projectLabSuelos}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal relative z-20">
                <span className="text-gray-600 dark:text-gray-300">{t.projectLabSuelosDesc}</span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 overflow-hidden relative z-20">
                <img
                  src="/labsuelos.png"
                  alt="Lab Suelos Dashboard"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </PinContainer>

          <PinContainer
            title="Finanzas Personales"
            href="https://finanzas-personales-marcos-projects-9b3f5b99.vercel.app/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] dark:bg-black">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-center text-lime-400 relative z-20">
                {t.projectFinanzas}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal relative z-20">
                <span className="text-gray-600 dark:text-gray-300">{t.projectFinanzasDesc}</span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 overflow-hidden relative z-20">
                <img
                  src="/finanzas.png"
                  alt="Finanzas Personales Dashboard"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </PinContainer>

          <PinContainer title="Dashboard Gestión" href="#">
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] dark:bg-black">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-center text-lime-400 relative z-20">
                {t.projectDashboard}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal relative z-20">
                <span className="text-gray-600 dark:text-gray-300">{t.projectDashboardDesc}</span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 overflow-hidden relative z-20">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Dashboard Gestión"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </PinContainer>
        </div>

        {/* Additional Projects Section with 3D Marquee */}
        <div className="mt-16">
          <div className="flex items-center justify-center mb-8">
            <h4 className="text-xl font-bold text-gray-800 dark:text-white">{t.moreProjects}</h4>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="dark:bg-black dark:border-gray-700">
              <CardContent className="p-6">
                <h5 className="text-lg font-bold text-lime-400 mb-3">{t.projectBitacora}</h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{t.projectBitacoraDesc}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    PostgreSQL
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-black dark:border-gray-700">
              <CardContent className="p-6">
                <h5 className="text-lg font-bold text-lime-400 mb-3">{t.projectNomina}</h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{t.projectNominaDesc}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Prisma
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <ThreeDMarquee images={projectImages} className="dark:bg-gray-900/50" />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="px-6 py-16 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <User className="w-6 h-6 mr-3 text-gray-700 dark:text-gray-300" />
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{t.aboutMe}</h3>
        </div>

        <div className="text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center text-black">
            <User className="w-16 h-16 text-white" />
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">{t.description}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-16 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Mail className="w-6 h-6 mr-3 text-gray-700 dark:text-gray-300" />
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{t.contactMe}</h3>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="dark:bg-black dark:border-gray-700">
            <CardContent className="p-8">
              <p className="text-gray-600 dark:text-gray-300 text-center mb-8">{t.contactDescription}</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium dark:text-gray-300 mb-2 text-lime-400">
                      {t.name}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={t.name}
                      className="w-full dark:bg-gray-700 dark:border-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium dark:text-gray-300 mb-2 text-lime-400">
                      {t.email}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="w-full dark:bg-gray-700 dark:border-gray-600"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium dark:text-gray-300 mb-2 text-lime-400">
                    {t.subject}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder={t.subject}
                    className="w-full dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium dark:text-gray-300 mb-2 text-lime-400">
                    {t.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows={5}
                    className="w-full dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                </div>

                <Button type="submit" disabled={isPending} className="w-full hover:bg-blue-700 text-white bg-lime-400">
                  <Send className="w-4 h-4 mr-2" />
                  {isPending ? "Enviando..." : t.sendMessage}
                </Button>
              </form>

              {state && (
                <div className={`mt-4 text-center ${state.success ? "text-green-600" : "text-red-600"}`}>
                  {state.message}
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600 text-center">
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
    </div>
  )
}
