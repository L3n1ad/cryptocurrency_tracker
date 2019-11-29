<template lang="html">
  <option :value="currency">{{currency.name}}</option>
</template>

<script>
export default {
  name: 'currency-element',
  props: ['currency'],

}
</script>

<style lang="css" scoped>
</style>
