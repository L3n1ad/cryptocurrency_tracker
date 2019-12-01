<template lang="html">
  <table class='table table-bordered table-hover'>
    <thead class='thead-dark'>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Icon</th>
        <th scope="col">Symbol</th>
        <th scope="col">Price</th>
        <th scope="col">24h</th>
        <th scope="col">7d</th>
        <th scope="col">30d</th>
        <th scope="col">See More</th>
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
