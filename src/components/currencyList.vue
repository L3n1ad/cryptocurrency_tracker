<template lang="html">
  <select v-model="selectedCurrency" v-on:change="handleSelected">
    <currency-element v-for='(currency, index) in currencies' :kex='index' :currency='currency'></currency-element>
  </select>
</template>

<script>
import CurrencyElement from './currencyElement.vue';
import {eventBus} from '../main.js'

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
  },
  methods: {
    handleSelected(){
      eventBus.$emit('selected-currency', this.selectedCurrency)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
