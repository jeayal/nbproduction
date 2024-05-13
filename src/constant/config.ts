export const siteConfig = {
  // Titre des pages :
  title: 'NBProduction - Une vidéo pour tous vos besoins',
  description:
    "Emmenez votre marque à l'étape supérieure grâce à une vidéo de qualité professionnelle !",

  // URL finale pour lien accueil / logo etc :
  url: process.env.BASE_URL || 'http://localhost:3000',

  // Services proposés (apparait dans menu NavBar, ContactForm needChoice, Tabs en HomePage) :
  services: ['Mariage', 'Concerts', 'Publicité', 'Sport', 'Entreprise'],

  // Ajouter ici les vidéos à afficher en portfolio avec url (Vimeo) complète :
  portfolio: {
    first:
      'https://player.vimeo.com/video/870214438?h=4be2a58690&autoplay=1&title=0&byline=0&portrait=0',
    second:
      'https://player.vimeo.com/video/870214438?h=4be2a58690&autoplay=1&title=0&byline=0&portrait=0',
    third:
      'https://player.vimeo.com/video/870214438?h=4be2a58690&autoplay=1&title=0&byline=0&portrait=0',
  },
};
