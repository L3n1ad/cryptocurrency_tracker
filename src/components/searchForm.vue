<template lang="html">
  <form v-on:submit.prevent>
    <currencies-list :currencies='currencies'></currencies-list>
    <input type='text' v-model='search' placeholder='search for country...' v-on:keyup='handleSearch'>
  </form>
</template>

<script>
import CurrenciesList from './currencyList.vue';
import {eventBus} from '../main.js';

export default {
  name: 'search-form',
  data(){
    return {
      currencies: [],
      search: ""
    }
  },
  mounted(){
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d%2C30d')
    .then(response => response.json())
    .then(data => this.currencies = data)
    .then(() => this.sortDataByName())


  },
  computed: {
    filteredCurrency(){
      return this.currencies.filter(currency => {
        return currency.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods:{
    sortDataByName(){
      this.currencies = this.currencies.sort((dataA, dataB) => (dataA.name > dataB.name) ? 1 : (dataB.name > dataA.name) ? -1: 0)
    },
    handleSearch(){
      eventBus.$emit('filtered-currency', this.filteredCurrency)
    }
  },
  components: {
    'currencies-list': CurrenciesList
  }
}
</script>

<style lang="css" scoped>
</style>
