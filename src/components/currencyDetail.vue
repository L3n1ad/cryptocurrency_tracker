<template lang="html">
  <div class="currency-detail">
    <h3>Name: {{currency.name}}</h3>
    <p>Cyrrency id: {{currency.id}}</p>
    <p>Price change in the last 24h: {{currency.price_change_percentage_24h}}</p>
  </div>
</template>

<script>
export default {
  name: 'currency-detail',
  props: ['currency']
}
</script>

<style lang="css" scoped>
</style>
