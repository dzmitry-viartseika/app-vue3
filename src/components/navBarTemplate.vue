<template>
  <header class="app-header">
    <div class="app-header__logo" @click="proceedTo('/')">
      Freelance
    </div>
    <nav class="app-header__nav">
      <a class="app-header__link"
         v-for="link in navList"
         :key="link.id"
         @click.prevent="proceedTo(link.route)">
        {{ link.text }}
      </a>
    </nav>
  </header>
</template>

<script>
import navList from '@/constants/navList';
import { useRouter } from 'vue-router';

export default {
  name: 'navBarTemplate',
  setup() {
    const router = useRouter();

    const proceedTo = (route) => {
      router.push(`${route}`);
    };
    return {
      proceedTo,
      navList,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.app-header {
  min-height: 50px;
  background: $color-white;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo {
    font-size: 20px;
    cursor: pointer;
    transition: opacity .15s ease-in;

    &:hover {
      opacity: .8;
    }
  }

  &__nav {

    a {
      cursor: pointer;
      transition: opacity .15s ease-in;

      &:hover {
        opacity: .8;
      }
    }
  }

  &__link + .app-header__link {
    margin-left: 10px;
  }
}

</style>
