import { createStore } from 'vuex';

export default createStore({
  state: {
    tasksList: [
      {
        id: 1,
        title: 'wertey',
        date: '20-12-2020',
        description: 'kwmekq wekqw ekq wekq wek qwke q',
      },
    ],
  },
  getters: {
    tasksList: (state) => state.tasksList,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
