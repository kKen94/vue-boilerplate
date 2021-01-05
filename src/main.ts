import './core/workers/registerServiceWorker';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { defaultLocale, messages } from './shared/i18n';
import App from './app.vue';
import router from './core/router';
import store from './core/store';

const i18n = createI18n({
  messages,
  legacy: true,
  silentTranslationWarn: true,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
});

createApp(App).use(store).use(router).use(i18n).mount('#app');
