<template lang="html">
  <div class="diagram">
    <button class='btn btn-dark btn-sm'v-on:click="handleClick">See Diagram</button>
    <select class='btn btn-dark btn-sm'v-on:change="handleClick" v-model="timePeriod">
      <option value="1">Last 24 hours</option>
      <option value="7">Last 7 days</option>
      <option value="30">Last 30 days</option>
      <option value="170">Last 6 months</option>
      <option value="365">1 year</option>
      <option value="730">2 years</option>
    </select>
    <GChart
      type="AreaChart"
      :data="sortedData"
      :options="chartOptions"
    />
  </div>
</template>

<script>
import {GChart} from 'vue-google-charts'

export default {
  name: 'currency-diagram',
  props: ['currency'],
  data(){
    return {
      rawData: null,
      sortedData: null,
      timePeriod: "1",
      chartOptions: {
        width: 480,
        // curveType: 'function',
        colors: ['#5e6b77'],
        legend: {position: 'none'},
      }
    }
  },
  methods: {
    handleClick(){
      fetch(`https://api.coingecko.com/api/v3/coins/${this.currency.id}/market_chart?vs_currency=gbp&days=${this.timePeriod}`)
        .then(res => res.json())
        .then(data => this.rawData = data)
        .then(() => this.sortData())
    },
    sortData(){
      const result = this.rawData.prices
      for(let each of result){
        each[0] = new Date (each[0])
      }
      result.unshift(['Date', 'Prices'])
      this.sortedData = result
    }
  },
  components: {
    'GChart': GChart
  }
}
</script>

<style lang="css" scoped>
  .btn {
    margin: 6px;
  }
</style>
