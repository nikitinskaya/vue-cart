<template>
  <div class="row no-gutters">
    <div class="col-6">
      <app-storefront></app-storefront>
    </div>
    <div class="col-6">
      <app-cart></app-cart>
    </div>
  </div>
</template>

<script>
import Storefront from './goods/Storefront.vue';
import Cart from './cart/Cart.vue';

export default {
  components: {
    appStorefront: Storefront,
    appCart: Cart
  }
}
</script>
