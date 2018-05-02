<template>
  <div class="col-5 mt-4">
    <div class="card border-info text-info p-4"
         :class="[{'border-danger': insufficientFunds}, {'text-muted': insufficientFunds}]">
      <h3 class="card-title">
        {{ good.name }}
      </h3>
      <p class="card-text">{{ +good.price | currency }}</p>
      <button href="#"
              class="btn btn-info"
              @click="order"
              :disabled="insufficientFunds"
              :class="{'btn-danger': insufficientFunds}"
              >
        Go
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['good'],
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
      insufficientFunds() {
        return this.good.price > this.funds;
      }
    },
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
