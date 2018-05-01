<template>
  <div class="container">
    <app-header></app-header>
    <div class="mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  components: {
    appHeader: Header
  }
}
</script>
