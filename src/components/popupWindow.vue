<template lang="html">
  <div id='app'>
    <button class="btn btn-sm btn-dark" @click="showDetails">More Details</button>

    <stack-modal
      :show="show"
      :title="currency.name"
      @close="show=false"
    >
      <div v-if='currencyDetail'>
        <img class='img-thumbnail rounded' :src="currency.image" style="max-width: 100px">
        <p><strong>Coin Gecko rank:</strong> {{currencyDetail.coingecko_rank}}</p>
        <p> <strong> Coin Gecko score:</strong>{{currencyDetail.coingecko_score}}</p>
        <p><strong>Facebook likes:</strong> {{currencyDetail.community_data.facebook_likes}}</p>
        <p><strong>Twitter Followers:</strong> {{currencyDetail.community_data.twitter_followers}}</p>
        <p><strong>Reddit Subscribers:</strong> {{currencyDetail.community_data.reddit_subscribers}}</p>
        <p><strong>Avarage Reddit posts in the last 48H:</strong> {{currencyDetail.community_data.reddit_average_posts_48h}}</p>
        <p><strong>Origin Country:</strong> {{currencyDetail.country_origin}}</p>
        <h3>Description</h3>
        <p>{{currencyDetail.description.en}}</p>
        <a class='btn btn-dark btn-sm':href='homePageUrl' target="_blank">Home page of {{currency.name}}</a>
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
    .img-thumbnail {
      margin-bottom: 20px;
    }

  .btn-primary {
        display: none;
      }

</style>
