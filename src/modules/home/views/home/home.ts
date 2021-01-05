import { defaultLocale, LOCALES } from '@i18n';
import HelloWorld from '../../components/hello-world/hello-world.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data: (): unknown => ({ LOCALES, defaultLocale }),
};
