<template>
  <div class="app-home">
      <h1 class="app__title">
        Всего активных задач: {{ activeTasks.length }}
      </h1>
    <div class="app-home__item" v-for="task in allTaskList" :key="task.id">
      <div class="app-home__item-header">
        <h2>
          {{ task.title }}
        </h2>
        <appStatus :type="task.status"/>
      </div>
      <div class="app-home__item-date">
        {{ task.date }}
      </div>
      <div class="app-home__item-desciption">
        {{ task.desciption }}
      </div>
      <button class="app-button" @click="goToRoute(task.id)"> Посмотреть </button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import appStatus from '@/components/appStatus.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Home',
  components: {
    appStatus,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const allTaskList = store.getters.tasksList;
    const activeTasks = computed(() => allTaskList.filter((task) => task.status === 'active'));

    const goToRoute = (id) => {
      console.log('id', id);
      router.push({
        name: 'Task',
        params: {
          id,
        },
      });
    };

    return {
      allTaskList,
      activeTasks,
      goToRoute,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.app-home {
  height: 100%;

  &__item {
    background: $color-white;
    padding: 30px 10px 10px;
    margin-bottom: 15px;
    border-radius: 10px;

    &-header {
      display: flex;
      justify-content: space-between;
      padding-bottom: 5px;
      border-bottom: 1px solid $colorBorder;
    }

    h2 {
      font-size: 30px;
      font-weight: bold;
    }

    &-date {
      padding: 30px 0;
      padding-bottom: 15px;
      font-size: 16px;
      font-weight: 700;
    }
  }
}
</style>
