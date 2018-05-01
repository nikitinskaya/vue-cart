<template>
  <div class="row">
    <app-good v-for="good in cartGoods" :good="good"></app-good>
  </div>
</template>

<script>
  import Good from './CartGood.vue';

  export default {
    computed: {
      cartGoods() {
        return this.$store.getters.cartGoods;
      }
    },
    components: {
      appGood: Good
    }
  }
</script>
