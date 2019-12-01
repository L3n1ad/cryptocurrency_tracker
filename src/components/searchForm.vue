<template lang="html">
  <form class='form-group' v-on:submit.prevent>
    <label for="dropdown">Dropdown menu to select:</label>
    <currencies-list class='btn btn-sm':currencies='currencies'></currencies-list>
    <hr>
    <label for="searchbar">Type the name of a currency:</label>
    <input class="form-control" type='text' v-model='search' placeholder='search for country...' v-on:input='handleSearch'>
    <a class='btn btn-link' href="http://localhost:8080/">Refresh search</a>
  </form>
</template>

<script>
import CurrenciesList from './currencyList.vue';
import {eventBus} from '../main.js';

export default {
  name: 'search-form',
  props: ['currencies'],
  data(){
    return {
      search: ""
    }
  },
  mounted(){
    eventBus.$on('selected-currency', currency => this.search = currency.name)
  },
  computed: {
    filteredCurrency(){
      return this.currencies.filter(currency => {
        return currency.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods:{
    handleSearch(){
      eventBus.$emit('filtered-currency', this.filteredCurrency)
    }
  },
  components: {
    'currencies-list': CurrenciesList
  }
}
</script>

<style lang="css" scoped>
  .btn{
    margin-left: 10px;
  }
</style>
