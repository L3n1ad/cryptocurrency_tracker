<template lang="html">
  <div class="main-container">
    <h1>Cryptocurrency Tracker</h1>
    <currencies-list :currencies="currencies"></currencies-list>
  </div>
</template>

<script>
import CurrenciesList from './components/currencyList.vue'

export default {
  name: 'app',
  data(){
    return {
      currencies: null
    }
  },
  mounted(){
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d%2C30d')
  .then(response => response.json())
  .then(data => this.currencies = data)
  .then(() => this.sortDataByName())
},
methods:{
  sortDataByName(){
    this.currencies = this.currencies.sort((dataA, dataB) => (dataA.name > dataB.name) ? 1 : (dataB.name > dataA.name) ? -1: 0)
  }
},
components: {
  'currencies-list': CurrenciesList
}
}
</script>

<style lang="css" scoped>
</style>
