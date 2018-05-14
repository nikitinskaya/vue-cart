<template>
  <div class="col-12 mb-4">
    <div class="card border-info text-info pt-4 px-4 pb-2">
      <button aria-hidden="true"
              class="close"
              style="position: absolute; right: 1em;"
              @click.prevent="deleteGood(good.id)">
        &times;
      </button>
      <h3 class="card-title">
        {{ good.name }}
      </h3>
      <p class="text-muted">{{ good.price * good.quantity | currency }} ({{ good.quantity }} pcs.)</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['good'],
    methods: {
      deleteGood(id) {
        this.$store.dispatch('deleteGood', id);
      }
    }
  }
</script>
