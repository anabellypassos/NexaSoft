import { StrictMode, Suspense } from 'react'; // Adicionado o Suspense aqui
import { createRoot } from 'react-dom/client';
import AppRoutes from './routes'; // O build system achará o .jsx automaticamente
import './index.css';
import './i18n/i18n';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* O Suspense é necessário porque o i18next baixa os arquivos .json de forma assíncrona */}
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}>Carregando...</div>}>
      <AppRoutes />
    </Suspense>
  </StrictMode>
);