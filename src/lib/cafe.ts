export const WHATSAPP_NUMBER = "919999999999"; // placeholder Dehradun number

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;