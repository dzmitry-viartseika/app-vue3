<template>
  <div class="app-task">
    <div class="app-task-info">
      <div class="app-task-info__title">
        {{ activeTask.title }}
      </div>
      <div class="app-task-info__field app-task-info__field_between">
        <div class="app__subtitle">
          Статус:
        </div>
        <appStatus :type="activeTask.status" />
      </div>
      <div  class="app-task-info__field">
        <div class="app__subtitle">
          Время сдачи:
        </div>
        <div class="app-task-info__field-text">
          {{ activeTask.date }}
        </div>
      </div>
      <div  class="app-task-info__field">
        <div class="app__subtitle">
          Описание:
        </div>
        <div class="app-task-info__field-text">
          {{ activeTask.description }}
        </div>
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
import { computed, reactive } from 'vue';
import appStatus from '@/components/appStatus.vue';

export default {
  name: 'Task',
  components: {
    appStatus,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const { params: { id } } = route;
    const allTasksList = computed(() => store.getters.tasksList);
    const task = allTasksList.value.find((item) => item.id === id);
    const activeTask = reactive({
      ...task,
    });

    const actionBtn = (status) => {
      if (status === 'process') {
        activeTask.status = 'pending';
      } else if (status === 'done') {
        activeTask.status = 'done';
      } else if (status === 'cancelled') {
        activeTask.status = 'cancelled';
      }
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
    border-radius: 10px;

    &__field {
      display: flex;
      align-items: center;
      margin-bottom: 15px;

      &-text {
        margin-left: 20px;
        font-size: 18px;
        color: $color-logo;
      }

      &_between {
        justify-content: space-between;
      }
    }

    &__title {
      font-size: 40px;
      margin-bottom: 30px;
    }

    &__status {
      display: flex;
      justify-content: space-between;
    }

    &__actions {
      margin-top: 20px;

      button + button {
        margin-left: 15px;
      }
    }
  }
}

</style>
