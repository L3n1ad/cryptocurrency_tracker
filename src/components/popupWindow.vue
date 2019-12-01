<template lang="html">
  <div id='app'>
    <button class="btn btn-primary" @click="showDetails">More Details</button>

    <stack-modal
      :show="show"
      :title="currency.name"
      @close="show=false"
    >
      <div v-if='currencyDetail'>
        <h1>{{currency.name}}</h1>
        <p>Coin Gecko rank: {{currencyDetail.coingecko_rank}}</p>
        <p>Coin Gecko score: {{currencyDetail.coingecko_score}}</p>
        <p>Facebook likes: {{currencyDetail.community_data.facebook_likes}}</p>
        <p>Twitter Followers: {{currencyDetail.community_data.twitter_followers}}</p>
        <p>Reddit Subscribers: {{currencyDetail.community_data.reddit_subscribers}}</p>
        <p>Avarage Reddit posts in the last 48H: {{currencyDetail.community_data.reddit_average_posts_48h}}</p>
        <p>Origin Country: {{currencyDetail.country_origin}}</p>
        <h3>Description</h3>
        <p>{{currencyDetail.description.en}}</p>
        <a :href='homePageUrl' target="_blank">Home page of {{currency.name}}</a>
        <hr>
        <currency-diagram :currency='currency'></currency-diagram>
      </div>
    </stack-modal>
  </div>
</template>

<script>
import StackModal from '@innologica/vue-stackable-modal'
import CurrencyDiagram from './currencyDiagram.vue'

export default {
  name: 'popup-window',
  props: ['currency'],
  components: {
    'stack-modal': StackModal,
    'currency-diagram': CurrencyDiagram,
  },
  data(){
    return {
      show: false,
      currencyDetail : null
    }
  },
  methods: {
    showDetails(){
      this.show = true
      fetch(`https://api.coingecko.com/api/v3/coins/${this.currency.id}`)
      .then(res => res.json())
      .then(data => this.currencyDetail = data)
    }
  },
  computed: {
    homePageUrl(){
      const url = this.currencyDetail.links.homepage[0]
      return url
    }
  }
}
</script>

<style>
    @import "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
</style>
