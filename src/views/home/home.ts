import HelloWorld from '@/components/hello-world/hello-world.vue';
import { defaultLocale } from '@/i18n';
import { LOCALES } from '@/i18n/locales';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data: (): unknown => ({ LOCALES, defaultLocale }),
};
