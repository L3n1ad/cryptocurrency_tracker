<template lang="html">
  <select v-model="selectedCurrency">
    <currency-element v-for='(currency, index) in currencies' :kex='index' :currency='currency'></currency-element>
  </select>
</template>

<script>
import CurrencyElement from './currencyElement.vue'

export default {
  name: 'currencies-list',
  props: ['currencies'],
  data(){
    return{
      selectedCurrency: null
    }
  },
  components: {
    'currency-element': CurrencyElement
  }
}
</script>

<style lang="css" scoped>
</style>
