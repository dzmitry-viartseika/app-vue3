<template>
  <div class="app__page">
      <div>
        Страницы {{ link }} не существует
      </div>
    <button class="app-button"
            @click="goToRoute">
            Перейти на главную
    </button>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  name: 'page404',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const link = ref(null);
    const { params: { pathMatch } } = route;
    const [url] = pathMatch;
    link.value = url;

    const goToRoute = () => {
      router.push('/');
    };

    return {
      link,
      goToRoute,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.app__page {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $color-white;
  width: 100%;
  height: 400px;
  font-size: 50px;
  flex-direction: column;

  button {
    margin-top: 20px;
  }
}
</style>
