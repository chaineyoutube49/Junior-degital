
import { Video, Palette, Image as ImageIcon, Bot, Globe, Zap, ShieldCheck, DollarSign, Headset, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

export const AGENCY_DATA = {
  name: "Junior Goat",
  founder: "Junior",
  phone: "+2250708105701",
  email: "Akaassafouajoseph@gmail.com",
  location: "Abidjan, Côte d'Ivoire",
  
  // 🧭 NAVIGATION
  nav: {
    links: [
      { name: 'Accueil', href: '#home' },
      { name: 'À propos', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Contact', href: '#contact' },
    ],
    cta: "CONTACT"
  },

  // 🏠 SECTION ACCUEIL (HERO)
  hero: {
    badge: "GOAT OF DIGITAL CREATION",
    title: {
      line1: "TRANSFORMER",
      line2: "L'IMPOSSIBLE EN",
      line3: "RÉALITÉ."
    },
    description: "Nous transformons vos idées en réalités visuelles percutantes. Montage vidéo, design graphique, miniatures et solutions IA sur mesure.",
    ctaPrimary: "LANCER LE PROJET",
    ctaSecondary: "NOS SERVICES"
  },

  // 👤 SECTION À PROPOS
  about: {
    founderName: "Junior",
    aka: "GOAT Junior",
    title: "L'Origine du GOAT Junior",
    bio: "Passionné par l'innovation technologique et la création visuelle, j'ai fondé cette agence pour offrir aux créateurs et entreprises des solutions digitales de haute qualité, alliant créativité et performance.",
    profileImage: {
      url: "video ia femme.mp4"
    },
    storyImage: {
      url: "coo.jpg"
    },
    
    story: "Tout a commencé avec une simple passion pour le montage et le design. Autodidacte et déterminé, j'ai passé des nuits entières à perfectionner mon art. Mon surnom, 'GOAT', vient de ma philosophie : transformer des idées complexes en visuels fluides, harmonieux et percutants.",
    mission: "Accompagner nos clients dans leur croissance digitale en fournissant des services créatifs d'excellence.",
    vision: "Devenir la référence de l'accompagnement créatif et technologique en Afrique de l'Ouest.",
  },
  services: [
    {
      id: "video",
      title: "Montage Vidéo",
      description: "Des montages dynamiques et professionnels pour vos réseaux sociaux, publicités ou contenus YouTube.",
      icon: Video,
      features: ["Colorimétrie avancée", "Sound Design", "Sous-titres dynamiques", "Format Réels/TikTok/Shorts"],
      whatsappMessage: "Bonjour, je suis intéressé par le montage vidéo",
      color: "blue",
      portfolio: [
        { type: 'video', url: 'montagevideo imo.mp4', title: 'Montage Publicitaire' },
        { type: 'video', url: 'autre.mp4', title: 'Vlog YouTube' },
        { type: 'video', url: 'video short.mp4', title: 'Short' },
      ],
      testimonials: [
        { name: "Marc K.", role: "YouTuber", text: "Un travail exceptionnel, mes vues ont doublé grâce à la qualité du montage !" },
        { name: "Sarah L.", role: "Social Media Manager", text: "Junior comprend parfaitement l'audience. Rapide et efficace." }
      ]
    },
    {
      id: "design",
      title: "Design Graphique",
      description: "Identité visuelle, logos et supports de communication qui marquent les esprits.",
      icon: Palette,
      features: ["Logotypes", "Chartes graphiques", "Affiches & Flyers", "Posts réseaux sociaux"],
      whatsappMessage: "Bonjour, je veux un design graphique",
      color: "emerald",
      portfolio: [
        { type: 'image', url: 'logo1.png', title: 'Logo Tech' },
        { type: 'image', url: 'carte.png', title: 'Charte Graphique' },
        { type: 'image', url: 'affiche.png', title: 'Affiche' },
      ],
      testimonials: [
        { name: "Jean M.", role: "CEO Startup", text: "Notre nouveau logo fait l'unanimité. Très pro." },
        { name: "Awa B.", role: "Entrepreneure", text: "Des designs qui sortent vraiment du lot. Je recommande !" }
      ]
    },
    {
      id: "thumbnails",
      title: "Création de Miniatures",
      description: "Miniatures YouTube haute performance conçues pour maximiser votre taux de clic (CTR).",
      icon: ImageIcon,
      features: ["Analyse de niche", "Design psychologique", "Retouche photo", "Tests A/B"],
      whatsappMessage: "Bonjour, je souhaite commander des miniatures",
      color: "amber",
      portfolio: [
        { type: 'image', url: 'youtube1.png', title: 'Miniature Youtube' },
        { type: 'image', url: 'miniaturebusiness.png', title: 'Miniature Business' },
        { type: 'image', url: 'cover.png', title: 'Cover' },
      ],
      testimonials: [
        { name: "Kevin G.", role: "Gamer", text: "Mon CTR est passé de 3% à 12% en une semaine !" },
        { name: "Inès T.", role: "Coach", text: "Le design est accrocheur et très pro. Merci Junior." }
      ]
    },
    {
      id: "ai",
      title: "Assistance IA",
      description: "Intégrez l'intelligence artificielle dans vos processus pour gagner en productivité.",
      icon: Bot,
      features: ["Automatisation", "Génération d'images IA", "Copywriting assisté", "Consulting IA"],
      whatsappMessage: "Bonjour, je suis intéressé par l'assistance IA",
      color: "purple",
      portfolio: [
        { type: 'image', url: 'ia image.png', title: 'Génération Image' },
        { type: 'video', url: 'videoIA.MP4', title: 'Video IA' },
        { type: 'image', url: 'chatbot.png', title: 'Chatbot Personnalisé' },
      ],
      testimonials: [
        { name: "Paul D.", role: "Directeur Marketing", text: "L'IA nous a fait gagner 10h par semaine sur nos tâches répétitives." },
        { name: "Léa V.", role: "Freelance", text: "Des conseils précieux pour utiliser les bons outils IA." }
      ]
    }
  ],
  advantages: [
    { title: "Rapidité", description: "Délais de livraison optimisés sans compromis sur la qualité.", icon: Zap },
    { title: "Qualité Premium", description: "Un rendu professionnel répondant aux standards internationaux.", icon: ShieldCheck },
    { title: "Prix Compétitifs", description: "Des tarifs adaptés à vos besoins et à votre budget.", icon: DollarSign },
    { title: "Support 24/7", description: "Une équipe à votre écoute pour vous accompagner à chaque étape.", icon: Headset }
  ],
  socials: [
    { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/2250000000000" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "Email", icon: Mail, url: "mailto:contact@juniordigital.ci" }
  ]
};
