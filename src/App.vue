<template lang="html">
  <div class="main-container">
    <div class="jumbotron">
      <h1 class='display-4'>Cryptocurrency Tracker</h1>
      <hr>
      <search-form :currencies="currencies"></search-form>
    </div>


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
