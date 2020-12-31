import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { messages, defaultLocale } from '@/i18n';
import App from './app.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

const i18n = createI18n({
  messages,
  legacy: true,
  silentTranslationWarn: true,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
});

createApp(App).use(store).use(router).use(i18n).mount('#app');
