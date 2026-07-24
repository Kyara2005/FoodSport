export type SocialLink = {
  id: string;
  label: string;
  href: string;
  description?: string;
};

/**
 * Edita aquí las redes de Food Sport.
 * Deja href vacío ("") para ocultar una red hasta tener el link.
 */
export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/foodsport_restaurante/",
    description: "@foodsport_restaurante",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/FoodSport07/",
    description: "Food Sport Restaurante",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "",
    description: "@foodsport",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/593992509765",
    description: "099 250 9765",
  },
  {
    id: "maps",
    label: "Google Maps",
    href: "https://maps.app.goo.gl/F5D7B7uYNxNNqiZn9",
    description: "Avenida Cristóbal Vaca de Castro y Pedro Freile, Quito",
  },
  {
    id: "website",
    label: "Sitio web",
    href: "/",
    description: "Menú y visita Food Sport",
  },
];

export function getActiveSocialLinks() {
  return socialLinks.filter((link) => link.href.trim().length > 0);
}
