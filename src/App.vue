<template lang="html">
  <div class="main-container">
    <h1>Cryptocurrency Tracker</h1>
    <search-form></search-form>
    <currency-detail v-for="currency in filteredCurrency" :currency="currency"></currency-detail>
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
      filteredCurrency: []
    }
  },
  mounted(){
  eventBus.$on('selected-currency', (currency) => {this.selectedCurrency = currency;})
  eventBus.$on('filtered-currency', currencies => this.filteredCurrency = currencies)
  },
  components: {
    'currency-detail': CurrencyDetail,
    'search-form': SearchForm
  }
}
</script>

<style lang="css" scoped>
</style>
