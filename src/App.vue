<template>
  <div class="app">
    <navBarTemplate :activeRoute="activeRoute"/>
    <div class="app__container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import navBarTemplate from '@/components/navBarTemplate.vue';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  components: {
    navBarTemplate,
  },
  setup() {
    const route = useRoute();
    const activeRoute = ref(null);

    onBeforeMount(() => {
      const { path } = route;
      activeRoute.value = `/${path}`;
    });

    return {
      activeRoute,
    };
  },
};
</script>

<style lang="scss">

@font-face {
  font-family: 'Ubuntu';
  font-display: swap;
  src: url('./assets/fonts/ubuntu/ubuntu.woff') format('woff');
  font-style: normal;
}

@font-face {
  font-family: 'Ubuntu-medium';
  src: url('./assets/fonts/ubuntu/ubuntumedium.woff') format('woff');
  font-style: normal;
}

@font-face {
  font-family: 'Ubuntu-bold';
  src: url('./assets/fonts/ubuntu/ubuntubold.woff') format('woff');
  font-style: normal;
}
</style>
