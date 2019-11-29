<template lang="html">
  <div class="currency-detail">
    <h3>Name: {{currency.name}}</h3>
    <img :src="currency.image" style="max-width: 70px">
    <p>Cyrrency symbol: {{currency.symbol}}</p>
    <p>Currency price: GBP {{currency.current_price}}</p>
    <p>Price change in the last 24 hours: {{currency.price_change_percentage_24h_in_currency.toFixed(2)}}</p>
    <p>Price change in the last 7 days: {{currency.price_change_percentage_7d_in_currency.toFixed(2)}}</p>
    <p>Price change in the last 30 days: {{currency.price_change_percentage_30d_in_currency.toFixed(2)}}</p>
    <currency-diagram :currency='currency'></currency-diagram>
  </div>
</template>

<script>
import CurrencyDiagram from './currencyDiagram.vue'

export default {
  name: 'currency-detail',
  props: ['currency'],
  computed: {
    fetchedData(){
      return this.rawData
    }
  },
  components: {
    'currency-diagram': CurrencyDiagram
  }
}
</script>

<style lang="css" scoped>
</style>
