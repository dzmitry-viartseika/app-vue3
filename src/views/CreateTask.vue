<template>
  <div class="app-create">
    <div class="app-create-form">
      <div class="app-create-form__title">
        Создать новую задачу isNotValid={{ isNotValid }}
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
      <button class="app-button"
              :class="{'app-button_disabled': !isNotValid}"
              @click="addNewTask">
        Создать
      </button>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import getUniqueId from '@/mixins/uniqueId';

export default {
  name: 'createTask',
  mixins: [
    getUniqueId,
  ],
  setup() {
    const store = useStore();
    const router = useRouter();
    const test = store.getters.tasksList;
    const task = reactive({
      id: JSON.stringify(getUniqueId()),
      title: '',
      date: '',
      description: '',
      status: 'active',
    });

    const isNotValid = computed(() => task.title !== '' && task.date !== ''
      && task.description !== '');

    const addNewTask = () => {
      store.dispatch('addNewTask', task);
      router.push('/');
    };

    return {
      task,
      addNewTask,
      test,
      isNotValid,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.app-create {
  display: flex;
  justify-content: center;
  margin-top: 10px;

  &-form {
    color: $color-black;
    background: $color-white;
    width: 100%;
    padding: 40px 15px 10px;
    border-radius: 10px;

    &__title {
      font-size: 40px;
      margin-bottom: 30px;
    }

    &__field {
      width: 100%;
      margin-bottom: 15px;

      &-label {
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: bold;
      }

      input, textarea {
        width: 100%;
      }

      input {
        height: 40px;
        padding: 5px;
      }

      textarea {
        resize: none;
        padding: 5px;
      }
    }
   }
}

</style>
