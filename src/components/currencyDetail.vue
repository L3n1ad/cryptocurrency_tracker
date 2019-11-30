<template lang="html">
  <tr>
    <td><img :src="currency.image" style="max-width: 70px"></td>
    <td>{{currency.name}}</td>
    <td>{{currency.symbol}}</td>
    <td>{{currency.current_price.toFixed(2)}}</td>
    <td>{{currency.price_change_percentage_24h_in_currency.toFixed(2)}}</td>
    <td>{{currency.price_change_percentage_7d_in_currency.toFixed(2)}}</td>
    <td>{{currency.price_change_percentage_30d_in_currency.toFixed(2)}}</td>
    <currency-diagram :currency='currency'></currency-diagram>

  </tr>
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
