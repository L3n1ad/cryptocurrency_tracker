<template lang="html">
  <div class="main-container">

    <h1>Cryptocurrency Tracker</h1>

    <search-form :currencies="currencies"></search-form>

    <currency-detail v-if="selectedCurrency" :currency="selectedCurrency"></currency-detail>

    <currency-detail v-if="filteredCurrency.length !== 0> 0" v-for="currency in filteredCurrency" :currency="currency"></currency-detail>

    <currency-detail v-for="currency in currencies" :currency="currency"></currency-detail>

  </div>
</template>

<script>
import CurrencyDetail from './components/currencyDetail.vue'
import {eventBus} from './main.js';
import SearchForm from './components/searchForm.vue'

export default {
  name: 'app',
  data(){
    return {
      selectedCurrency: null,
      filteredCurrency: [],
      currencies: []
    }
  },
  mounted(){
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d%2C30d')
    .then(response => response.json())
    .then(data => this.currencies = data)
    .then(() => this.sortDataByName())

    eventBus.$on('selected-currency', (currency) => {this.selectedCurrency = currency;})

    eventBus.$on('filtered-currency', currencies => this.filteredCurrency = currencies)
  },
  methods:{
    sortDataByName(){
      this.currencies = this.currencies.sort((dataA, dataB) => (dataA.name > dataB.name) ? 1 : (dataB.name > dataA.name) ? -1: 0)
    }
  },
  components: {
    'currency-detail': CurrencyDetail,
    'search-form': SearchForm
  }
}
</script>

<style lang="css" scoped>
</style>
