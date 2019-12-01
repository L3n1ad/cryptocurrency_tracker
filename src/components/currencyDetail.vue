<template lang="html">
  <tr>
    <td><img :src="currency.image" style="max-width: 30px"></td>
    <td>{{currency.name}}</td>
    <td>{{currency.symbol}}</td>
    <td>GBP {{currency.current_price.toFixed(2)}}</td>
    <td>{{currency.price_change_percentage_24h_in_currency.toFixed(2)}}</td>
    <td>{{currency.price_change_percentage_7d_in_currency.toFixed(2)}}</td>
    <td>{{currency.price_change_percentage_30d_in_currency.toFixed(2)}}</td>
    <popup-window :currency='currency'></popup-window>

  </tr>
</template>

<script>
import CurrencyDiagram from './currencyDiagram.vue'
import  PopupWindow from './popupWindow.vue'

export default {
  name: 'currency-detail',
  props: ['currency'],
  computed: {
    fetchedData(){
      return this.rawData
    }
  },
  components: {
    'currency-diagram': CurrencyDiagram,
    'popup-window': PopupWindow
  }
}
</script>

<style lang="css" scoped>
</style>
