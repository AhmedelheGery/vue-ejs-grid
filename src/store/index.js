import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    users: [],
  },
  actions: {
    fetchUsers({ commit }) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          let users = res.data;
          commit("setUsers", users);
        })
        .catch((err) => console.log(err));
    },
    editUser({ commit }, id, data) {
      axios
        .put(
          `https://jsonplaceholder.typicode.com/users/${id}`,
          JSON.stringify(data)
        )
        .then((res) => {
          let users = res.data;
        })
        .catch((err) => console.log(err));
    },
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
  },
});
