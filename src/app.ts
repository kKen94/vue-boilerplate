import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/hello-world/hello-world.vue';

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
