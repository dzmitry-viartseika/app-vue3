<template>
  <div class="app-create">
    <div class="app-create-form">
      <div class="app-create-form__title">
        Создать новую задачу task
      </div>
      <div class="app-create-form__field">
        <div class="app-create-form__field-label">Название</div>
        <input type="text" v-model="task.title" class="app-create-form__field-input">
      </div>
      <div class="app-create-form__field">
        <div class="app-create-form__field-label">Дата сдачи</div>
        <input type="date" v-model="task.date" class="app-create-form__field-input">
      </div>
      <div class="app-create-form__field">
        <div class="app-create-form__field-label">Описание</div>
        <textarea name="" v-model="task.description" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'createTask',
  setup() {
    const store = useStore();
    const task = reactive({
      title: '',
      date: '',
      description: '',
    });

    console.log('store', store.getters.tasksList);

    return {
      task,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.app-create {

  &-form {
    color: $color-white;
   }
}

</style>
