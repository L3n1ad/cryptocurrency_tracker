<template lang="html">
  <table>
    <thead>
      <tr>
        <th>Icon</th>
        <th>Name</th>
        <th>Symbol</th>
        <th>Price</th>
        <th>24h</th>
        <th>7d</th>
        <th>30d</th>
        <th>See More</th>
      </tr>
    </thead>
    <tbody>
      <currency-detail v-if="selectedCurrency" :currency="selectedCurrency"></currency-detail>

      <!-- if I change the order of the if and else it will slow the app down drastically and it will probably break it WHY? -->

      <currency-detail v-else v-for="currency in filteredCurrency" :currency="currency"></currency-detail>

      <currency-detail v-if="noFilteredCurrency" v-for="currency in currencies" :currency="currency"></currency-detail>
    </tbody>
  </table>
</template>

<script>
import  CurrencyDetail from './currencyDetail.vue'

export default {
  name: 'currency-table',
  props: ['currencies', 'filteredCurrency', 'selectedCurrency', 'noFilteredCurrency'],
  components: {
    'currency-detail': CurrencyDetail
  }
}
</script>

<style lang="css" scoped>
</style>
