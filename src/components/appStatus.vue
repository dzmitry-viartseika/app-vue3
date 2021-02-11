<template>
  <span class="app__status" :class="`app__status_${className}`">
    {{ text }}
  </span>
</template>

<script>
import { watch, ref } from 'vue';

export default {
  props: {
    type: {
      type: String,
      validator(value) {
        return ['active', 'done', 'pending', 'cancelled'].includes(value);
      },
    },
  },
  setup(props) {
    const classesMap = {
      active: 'active',
      cancelled: 'cancelled',
      done: 'done',
      pending: 'pending',
    };

    const textMap = {
      active: 'Активен',
      cancelled: 'Отменен',
      done: 'Завершен',
      pending: 'Выполняется',
    };

    const className = ref(classesMap[props.type]);
    const text = ref(textMap[props.type]);

    watch(props, (val) => {
      className.value = classesMap[val.type];
      text.value = textMap[val.type];
    });

    return {
      className,
      text,
    };
  },
};
</script>

<style scoped lang="scss">

.app__status {
  padding: 0 5px;
  border: 1px solid;
  display: flex;
  align-items: center;
  border-radius: 10px;
  min-height: 22px;

  &_active {
    color: green;
    border-color: green;
  }

  &_cancelled {
    color: red;
    border-color: red;
  }

  &_done {
    color: #e20cea;
    border-color: #e20cea;
  }

  &_pending {
    color: cornflowerblue;
    border-color: cornflowerblue;
  }
}

</style>
