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
        "FOOTER_PRICING": "Prix",
        "FOOTER_ABOUT": "A propos",
        "FOOTER_TERMS": "Conditions d'Utilisation",
        "FOOTER_PRIVACY": "Politique de Confidentialité",
        "FOOTER_CONTACT": "Contact"

    },
    en: {
        "LOGIN": "Log in",
        "SIGNUP": "Sign up",
        
        "HOME_TITLE": "Let us do the hard work",
        "HOME_DESCRIPTION": "Backpulse lets you build you own website, without having to care about the content administration.",
        "GET_STARTED": "Get started!",

        "MENU_DOCUMENTATION": "Docs",
        "MENU_PRICING": "Pricing",
        "MENU_HELP": "Help",
        "FOOTER_FEATURES": "Features",
        "FOOTER_PRICING": "Pricing",
        "FOOTER_ABOUT": "About",
        "FOOTER_TERMS": "Terms of Service",
        "FOOTER_PRIVACY": "Privacy Policy",
        "FOOTER_CONTACT": "Contact"
    }
};

export default strings[getLanguage()];