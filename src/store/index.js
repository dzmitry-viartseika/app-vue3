import { createStore } from 'vuex';
import * as types from '@/store/mutations-types';

export default createStore({
  state: {
    tasksList: [
      {
        id: '123477133606',
        title: 'Записать решение второй курсовой',
        date: '20-12-2020',
        description: 'kwmekq wekqw ekq wekq wek qwke q',
        status: 'active',
      },
      {
        id: '345777133606',
        title: 'Записать 3ю курсовую',
        date: '20-12-2021',
        description: '',
        status: 'cancelled',
      },
    ],
  },
  getters: {
    tasksList: (state) => state.tasksList,
  },
  mutations: {
    [types.ADD_NEW_TASK](getters, data) {
      getters.tasksList.push(data);
    },
    [types.CHANGED_STATUS](getters, data) {
      const { id } = data;
      const task = getters.tasksList.findIndex((el) => el.id === id);
      getters.tasksList.splice(task, 1, data);
    },
  },
  actions: {
    addNewTask({ commit }, data) {
      commit(types.ADD_NEW_TASK, data);
    },
    changedStatus({ commit }, data) {
      commit(types.CHANGED_STATUS, data);
    },
  },
  modules: {
  },
});
