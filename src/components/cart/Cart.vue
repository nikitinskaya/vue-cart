<template>
  <div class="row">
    <div class="card w-100 px-5 border-white"
         ondragover="event.preventDefault()"
         @drop="order($event)"
         >
      <div class="w-75 mx-auto pt-5">
        <img class="card-img" src="/static/shopping-bag.svg" alt="Card image">
      </div>
      <div class="card-img-overlay">
        <app-good v-for="good in cartGoods"
                  :good="good"
                  :key="good.id"
                  :id="good.id">
        </app-good>
      </div>
    </div>
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
    },
    methods: {
      order(event) {
        event.preventDefault();
        const order = {
          goodId: event.dataTransfer.getData("Number")
        };
        this.$store.dispatch('orderGood', order);
      }
    }
  }

</script>
