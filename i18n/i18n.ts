import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './lang/en.json';
import ua from './lang/ua.json';

i18n.use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        resources: {
            en,
            ua
        },
        fallbackLng: 'ua'
    });

export default { i18n }