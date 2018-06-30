<template>
  <div>
    {{childComponent}}
  </div>
</template>


<script>

import Web3 from 'web3';

export default {
  name: 'EtherComponent',
  props: ['childComponent'],
  mounted() {
    // connected with the local block chain serv
    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));

    let authorAbi=[
      [{"constant":false,"inputs":[{"name":"to","type":"address"}],"name":"donate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}]
    ];
    const authorAddress = '0xe8af45e753b869347a7a1589c1a79b0993b3e5f7';
    web3.eth.defaultAccount = web3.eth.accounts[0];

    const authorContract = web3.eth.contract(authorAbi).at(authorAddress);

    const accountStore = [];

    web3.eth.accounts.forEach(
      (account) => {
        accountStore[account] = web3.eth.getBalance(account) / 1e18;
      });

    this.$store.commit('updateAuthorContract', authorContract);
    this.$store.commit('updateAccounts', accountStore);

  },
};
</script>
