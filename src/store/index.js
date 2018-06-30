import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  // store first 2 accounts from the block-chain network
  accounts: {
    address1: 1000.00,
    address2: 1000.00,
  },
  post: {
    address1: {
      list_donator: {
      },
    },
  },
  authorContract: {},
};

const getters = {
  getAccount(state, address) {
    return state.accounts[address];
  },
  getPost(state) {
    return state.post;
  },
  getAuthorContract(state) {
    return state.authorContract;
  },
};

const mutations = {
  updateAuthorContract: (state, authorContract) => {
    state.authorContract = authorContract;
  },

  updateAccounts: (state, accounts) => {
    state.accounts = accounts;
  },

  donate: (state, toAccount, fromAccount, value) => {
    if (state.authorContract) {
      state.authorContract.donate(toAccount, { from: fromAccount, value });
      if (!state.post[toAccount].list_donator[fromAccount]) {
        state.post[toAccount].list_donator[fromAccount] = 0;
      }
      state.post[toAccount].list_donator[fromAccount] += value;
    }
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
