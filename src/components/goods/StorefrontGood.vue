<template>
  <div class="col-5 mt-4">
    <div class="card border-info text-info p-4">
      <h3 class="card-title">
        {{ good.name }}
      </h3>
      <p class="card-text">
        ${{ good.price }}
      </p>
      <button href="#"
              class="btn btn-info"
              @click="order">
        Go
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['good'],
    methods: {
      order() {
        const order = {
          goodId: this.good.id,
          goodPrice: this.good.price,
          quantity: 1
        };
        this.$store.dispatch('orderGood', order)
      }
    }
  }
</script>
