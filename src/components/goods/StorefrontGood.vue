<template>
  <div class="col-5 mt-4">
    <div class="card border-info text-info p-4"
         :class="[{'border-danger': !isEnoughFunds}, {'text-muted': !isEnoughFunds}]"
         :draggable="isEnoughFunds"
         :id="good.id"
         @dragstart="start"
         >

      <h3 class="card-title">
        {{ good.name }}
      </h3>
      <p class="card-text">{{ +good.price | currency }}</p>
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
      isEnoughFunds() {
        return this.good.price <= this.funds;
      }
    },
    methods: {
      start() {
        event.dataTransfer.setData("Number", event.target.id);
      }
    }
  }
</script>
