<template>
  <div class="row no-gutters">
    <div class="col-6">
      <app-storefront></app-storefront>
    </div>
  </div>
</template>

<script>
import Storefront from './goods/Storefront.vue';

export default {
  components: {
    appStorefront: Storefront
  }
}
</script>
