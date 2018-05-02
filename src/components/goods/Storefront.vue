<template>
  <div class="row">
    <app-good v-for="good in goods" :good="good" :key="good.id"></app-good>
  </div>
</template>

<script>
import Good from './StorefrontGood.vue';

export default {
  components: {
    appGood: Good
  },
  computed: {
    goods() {
      return this.$store.getters.goods;
    }
  }
}
</script>
