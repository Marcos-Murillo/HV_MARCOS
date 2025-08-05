"use server"

export async function sendContactEmail(prevState: { success: boolean; message: string } | null, formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Validación básica
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      message: "Por favor completa todos los campos requeridos.",
    }
  }

  // Simulate email sending delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Here you would integrate with your email service (SendGrid, Resend, etc.)
  console.log("Email data:", { name, email, subject, message })

  // For now, we'll just return success
  return {
    success: true,
    message: "¡Mensaje enviado exitosamente! Te responderé pronto.",
  }
}
