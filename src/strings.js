import {
    getLanguage
} from 'utils';

const strings = {
    fr: {
        "LOGIN": "Connexion",
        "SIGNUP": "Créer un compte",

        "HOME_TITLE": "Laissez nous faire le reste",
        "HOME_DESCRIPTION": "Backpulse vous permet de créer des sites web, sans avoir à se soucier de la partie administration.",
        "GET_STARTED": "S'inscrire !",
        "MENU_DOCUMENTATION": "Docs",
        "MENU_PRICING": "Prix",
        "MENU_HELP": "Aide",

        "FOOTER_FEATURES": "Fonctionnalitées",
        "FOOTER_REGISTER": "S'inscrire",
        "FOOTER_PRICING": "Prix",
        "FOOTER_ABOUT": "À propos",
        "FOOTER_TERMS": "C.G.U",
        "FOOTER_PRIVACY": "Confidentialité",
        "FOOTER_CONTACT": "Contact",

        "UNLIMITED_SITES": "Sites illimités",
        "API_ACCESS": "Accès à l'API non réstreint",
        "DARK_THEME": "Thème sombre",
        "FREE_STORAGE": "500 Mo /site",
        "PAID_STORAGE": "10 Go /site",
        "FREE_ACCOUNTS": "1 compte par site",
        "PAID_ACCOUNTS": "5 comptes par site",
        "PERSONAL": "Personnel",
        "PROFESSIONAL": "Professionel",
        "PER_MONTH": "par mois"

    },
    en: {
        "LOGIN": "Log in",
        "SIGNUP": "Sign up",
        
        "HOME_TITLE": "Let us do the hard work",
        "HOME_DESCRIPTION": "Backpulse lets you build you own website, without worrying about the content administration.",
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
        "FREE_STORAGE": "500 Mb /site",
        "PAID_STORAGE": "10 Gb /site",
        "FREE_ACCOUNTS": "1 account per site",
        "PAID_ACCOUNTS": "5 accounts per site",
        "PERSONAL": "Personal",
        "PROFESSIONAL": "Professional",
        "PER_MONTH": "per month"

    }
};

export default strings[getLanguage()];