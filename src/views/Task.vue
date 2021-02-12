<template>
  <div class="app-task">
    <div class="app-task-info">
      <div class="app-task-info__title">
        {{ activeTask.title }}
      </div>
      <div class="app-task-info__status">
        Статус: {{ activeTask.status }}
      </div>
      <div class="app-task-info__date">
        Время сдачи: {{ activeTask.date }}
      </div>
      <div class="app-task-info__description">
        Описание: {{ activeTask.description }}
      </div>
      <div class="app-task-info__actions">
        <button class="app-button" @click="actionBtn('process')">Взять в работу</button>
        <button class="app-button"  @click="actionBtn('done')">Завершить</button>
        <button class="app-button"  @click="actionBtn('cancelled')">Отменить</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'Task',
  setup() {
    const route = useRoute();
    const store = useStore();
    const { params: { id } } = route;
    const allTasksList = computed(() => store.getters.tasksList);
    const task = allTasksList.value.find((item) => item.id === id);
    const activeTask = {
      ...task,
    };

    const actionBtn = (status) => {
      console.log('status', status);
      if (status === 'process') {
        activeTask.status = 'pending';
      } else if (status === 'done') {
        activeTask.status = 'done';
      } else if (status === 'cancelled') {
        activeTask.status = 'cancelled';
      }
      const test = allTasksList.value.findIndex((el) => el.id === activeTask.id);
      allTasksList.value.splice(test, 1, activeTask);
      store.dispatch('changedStatus', activeTask);
    };

    return {
      activeTask,
      actionBtn,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.app-task {
  background: $color-white;
  color: $color-black;
  margin-top: 10px;
  border-radius: 10px;

  &-info {
    color: $color-black;
    background: $color-white;
    width: 100%;
    padding: 40px 15px 10px;

    &__title {
      font-size: 40px;
      margin-bottom: 30px;
    }

    &__actions {

      button + button {
        margin-left: 15px;
      }
    }
  }
}

</style>
