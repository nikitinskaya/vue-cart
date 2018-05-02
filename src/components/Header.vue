<template>
  <nav class="navbar navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Cart</router-link>
    <div class="nav-item">
      <span class="navbar-text my-2 mx-2">Your balance: ${{ funds }}</span>
      <router-link to="topup" class="btn btn-outline-success my-2 mx-2">Top Up</router-link>
    </div>
  </nav>
</template>

<script>
  export default {
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    }
  }
</script>
