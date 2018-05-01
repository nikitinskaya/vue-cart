<template>
  <div class="row">
    <app-good v-for="good in goods"></app-good>
  </div>
</template>

<script>
import Good from './StorefrontGood.vue';

export default {
  data() {
    return {
      goods: [
      { id: 1, name: 'One', price: '100'},
      { id: 2, name: 'Two', price: '200'},
      { id: 3, name: 'Three', price: '300'},
      { id: 4, name: 'Four', price: '400'},
      ]
    }
  },
  components: {
    appGood: Good
  }
}
</script>
