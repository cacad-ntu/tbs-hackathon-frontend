import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  accounts: {
    "address1": 1000.00,
    "address2": 1000.00,
  },
  post: {
    from: "address1",
    top_donator: [
      ["address3", 20.00],
      ["address4", 15.00],
      ["address5", 10.00],
    ],
  },
};

const getters = {
  getAccount(state, address) {
    return state.accounts[address];
  },
  getPost(state) {
    return state.post;
  }
};

const mutations = {
  donate(state, address, donation) {
    // Update top donator

  },
};

const actions = {
  donate(context, payload) {
    context.commit('donate', payload.address, payload.donation);
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
