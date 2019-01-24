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
        "MENU_DOCUMENTATION": "Documentation",
        "MENU_PRICING": "Prix",
        "MENU_HELP": "Aide"

    },
    en: {
        "LOGIN": "Log in",
        "SIGNUP": "Sign up",
        
        "HOME_TITLE": "Let us do the hard work",
        "HOME_DESCRIPTION": "Backpulse lets you build you own website, without having to care about the content administration.",
        "GET_STARTED": "Get started!",

        "MENU_DOCUMENTATION": "Documentation",
        "MENU_PRICING": "Pricing",
        "MENU_HELP": "Help"
    }
};

export default strings[getLanguage()];