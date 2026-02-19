import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa os arquivos que você acabou de criar/renomear
import brJson from './br.json';
import enJson from './en.json';
import esJson from './es.json';

i18n
  .use(initReactI18next)
  .init({ 
    resources: {
      br: { translation: brJson },
      en: { translation: enJson },
      es: { translation: esJson }
    },
    lng: 'br', // FAZ A PÁGINA CARREGAR SEMPRE EM "BR" POR PADRÃO
    fallbackLng: 'br', 
    interpolation: { escapeValue: false } 
  });

export default i18n;