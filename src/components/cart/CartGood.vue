<template>
  <div class="col-12 mt-4">
    <div class="card border-info text-info pt-4 pl-4 pr-4 pb-2">
      <h3 class="card-title">
        {{ good.name }}
      </h3>
      <p class="text-muted">${{ good.price * good.quantity }} ({{ good.quantity }} pcs.)</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['good']
  }
</script>
