<template>
  <div class="app-task">
    <div class="app-task__title">
      {{ activeTask.title }}
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default {
  name: 'Task',
  setup() {
    const route = useRoute();
    const store = useStore();
    const allTasksList = store.getters.tasksList;
    const { params: { id } } = route;
    const task = allTasksList.find((item) => item.id === id);
    const activeTask = {
      ...task,
    };

    return {
      activeTask,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.app-task {
  background: $color-white;
  color: $color-black;
}

</style>
