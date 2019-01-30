import {
    getLanguage
} from 'utils';

const strings = {
    fr: {
        "LOGIN": "Connexion",
        "SIGNUP": "Créer un compte",

        "GET_STARTED": "S'inscrire !",
        "MENU_DOCUMENTATION": "Docs",
        "MENU_PRICING": "Prix",
        "MENU_HELP": "Aide",

        "FOOTER_FEATURES": "Fonctionnalitées",
        "FOOTER_REGISTER": "S'inscrire",
        "FOOTER_PRICING": "Prix",
        "FOOTER_ABOUT": "À propos",
        "FOOTER_TERMS": "Conditions d'Utilisation",
        "FOOTER_PRIVACY": "Politique de Confidentialité",
        "FOOTER_CONTACT": "Contact",

        "UNLIMITED_SITES": "Sites illimités",
        "API_ACCESS": "Accès à l'API non réstreint",
        "DARK_THEME": "Thème sombre",
        "FREE_STORAGE": "500 Mo par site",
        "PAID_STORAGE": "5 Go par site",
        "FREE_ACCOUNTS": "1 contributeur additionnel par site",
        "PAID_ACCOUNTS": "5 contributeurs par site",
        "PERSONAL": "Personnel",
        "PROFESSIONAL": "Professionel",
        "PER_MONTH": "par mois",
        "FEATURES": "Fonctionnalités",
        "WHAT_IS_BACKPULSE": "Qu'est-ce que Backpulse ?",
        "ABOUT_DESCRIPTION": "Backpulse est un API Based CMS. Vous gérez le contenu de votre site via l'interface Backpulse, puis vous l'affichez sur votre site grâce à notre API.\n\nÉpargnez des heures de développement grâce à l'approche Backpulse.",


        "WHY_BACKPULSE": "Pourquoi Backpulse ?",
        "REASON_SAVE_TIME": "Gagnez du temps",
        "REASON_SAVE_TIME_DESCRIPTION": "Épargnez des centaines d'heures de développement et concentrez vous sur ce qui vous est important.",

        "REASON_SITE_DESIGN": "Votre design",
        "REASON_SITE_DESIGN_DESCRIPTION": "Soyez libre de créer votre propre site, au lieu d'être coincé avec les modèles de CMS.",

        "REASON_SSL": "HTTPS",
        "REASON_SSL_DESCRIPTION": "Votre API sera automatiquement sécurisée avec un certificat TLS gratuit de Cloudflare.",

        "REASON_LANGUAGES": "Langages",
        "REASON_LANGUAGES_DESCRIPTION": "Rédigez votre contenu dans différentes langues pour atteindre une plus grande audience.",

        "REASON_HOSTING": "Hébergement",
        "REASON_HOSTING_DESCRIPTION": "Ne vous souciez ni de l'hébergement, ni de la sécurité de votre serveur. Nous nous en occupons.",

        "REASON_MODULES": "Modules",
        "REASON_MODULES_DESCRIPTION": "Il vous manque quelque chose ? Ajoutez simplement un module Backpulse à votre site qui convient à vos besoins.",

        "REASON_COLLAB": "Collaboration",
        "REASON_COLLAB_DESCRIPTION": "Vous avez besoin de travailler avec d'autre personnes ? Ajoutez les à votre site en tant que collaborateurs, en seulement quelques clicks !",

        "REASON_DARK_THEME": "Thème sombre",
        "REASON_DARK_THEME_DESCRIPTIONS": "L'interface Backpulse inclue un thème sombre, parfait pour les yeux des développeurs.",

        "REASON_SIMPLE": "Simplicité",
        "REASON_SIMPLE_DESCRIPTION": "L'interface Backpulse est agréablement simple à utiliser, l'API l'est encore plus."

    },
    en: {
        "LOGIN": "Log in",
        "SIGNUP": "Sign up",
        "GET_STARTED": "Get started!",

        "MENU_DOCUMENTATION": "Docs",
        "MENU_PRICING": "Pricing",
        "MENU_HELP": "Help",
        "FOOTER_FEATURES": "Features",
        "FOOTER_PRICING": "Pricing",
        "FOOTER_ABOUT": "About",
        "FOOTER_REGISTER": "Sign up",
        "FOOTER_TERMS": "Terms of Service",
        "FOOTER_PRIVACY": "Privacy Policy",
        "FOOTER_CONTACT": "Contact",
        "UNLIMITED_SITES": "Unlimited sites",
        "API_ACCESS": "Unrestricted API Access",
        "DARK_THEME": "Dark theme",
        "FREE_STORAGE": "500 MB per site",
        "PAID_STORAGE": "5 GB per site",
        "FREE_ACCOUNTS": "1 additional contributor per site",
        "PAID_ACCOUNTS": "5 additional contributors per site",
        "PERSONAL": "Personal",
        "PROFESSIONAL": "Professional",
        "PER_MONTH": "per month",
        "FEATURES": "Features",
        "WHAT_IS_BACKPULSE": "What's Backpulse?",
        "ABOUT_DESCRIPTION": "Backpulse is an API Based CMS. You manage your website content through Backpulse's interface and retrieve it with our API.\n\nSave countless of hours by using Backpulse's backend.",

        "WHY_BACKPULSE": "Why Backpulse?",

        "REASON_SAVE_TIME" : "Save precious time",
        "REASON_SAVE_TIME_DESCRIPTION": "Save countless hours of developpmenet and focus on what matters.",

        "REASON_SITE_DESIGN": "Your own design",
        "REASON_SITE_DESIGN_DESCRIPTION": "Be free to design your own website, instead of being stuck with CMS templates",

        "REASON_SSL": "HTTPS",
        "REASON_SSL_DESCRIPTION": "Your API endpoint will be automatically secured with a free TLS certificate from Cloudflare.",

        "REASON_LANGUAGES": "Languages",
        "REASON_LANGUAGES_DESCRIPTION": "Write your content in different languages to reach a larger audience.",

        "REASON_HOSTING": "Hosting",
        "REASON_HOSTING_DESCRIPTION": "Don't worry about your server's hosting or security. We've got it covered.",

        "REASON_MODULES": "Modules",
        "REASON_MODULES_DESCRIPTION": "Missing a functionnality? Simply add a Backpulse Module to your site that suits your needs.",
        
        "REASON_COLLAB": "Collaboration",
        "REASON_COLLAB_DESCRIPTION": "You need to work with other people on the same site? Add them as collaborators to your site in just a few clicks!",

        "REASON_SIMPLE": "Simplicity",
        "REASON_SIMPLE_DESCRIPTION": "Backpulse's interface is pleasantly simple to use, the API is even simplier.",

        "REASON_DARK_THEME": "Dark theme",
        "REASON_DARK_THEME_DESCRIPTIONS": "Backpulse's interface is developer's eyes friendly.",

    }
};

export default strings[getLanguage()];