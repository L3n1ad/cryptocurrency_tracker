<template lang="html">
  <div class="main-container">

    <h1>Cryptocurrency Tracker</h1>

    <search-form :currencies="currencies"></search-form>

    <!-- <currency-detail v-if="selectedCurrency" :currency="selectedCurrency"></currency-detail>

    if I change the order of the if and else it will slow the app down drastically and it will probably break it WHY?

    <currency-detail v-else v-for="currency in filteredCurrency" :currency="currency"></currency-detail>

    <currency-detail v-if="noFilteredCurrency" v-for="currency in currencies" :currency="currency"></currency-detail> -->

    <currency-table :currencies='currencies' :filteredCurrency='filteredCurrency' :selectedCurrency='selectedCurrency' :noFilteredCurrency='noFilteredCurrency'></currency-table>

  </div>
</template>

<script>
import CurrencyDetail from './components/currencyDetail.vue'
import {eventBus} from './main.js';
import SearchForm from './components/searchForm.vue'
import CurrencyTable from './components/tableCurrency.vue'

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
    .then(() => this.sortDataByName());

    eventBus.$on('selected-currency', (currency) => {this.selectedCurrency = currency;})

    eventBus.$on('filtered-currency', currencies => this.filteredCurrency = currencies)
  },
  computed: {
    noFilteredCurrency(){
      return this.filteredCurrency.length === 0
    }
  },
  methods:{
    sortDataByName(){
      this.currencies = this.currencies.sort((dataA, dataB) => (dataA.name > dataB.name) ? 1 : (dataB.name > dataA.name) ? -1: 0)
    }
  },
  components: {
    'currency-detail': CurrencyDetail,
    'search-form': SearchForm,
    'currency-table': CurrencyTable
  }
}
</script>

<style lang="css" scoped>
</style>
