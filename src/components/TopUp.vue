<template>
  <div class="row no-gutters justify-content-center">
    <form>
      <div class="form-group">
        <label for="amount" class="col-form-label">Amount</label>
        <input type="number"
               class="form-control"
               id="amount"
               v-model="amount">
      </div>
      <button type="submit"
              class="btn btn-info"
              @click.prevent="topUp"
              :disabled="wrongAmount">
        Add to balance
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: ''
    }
  },
  computed: {
    wrongAmount() {
      return +this.amount <= 0;
    }
  },
  methods: {
    topUp() {
      this.$store.commit('TOP_UP_FUNDS', {
        amount: +this.amount
      });
      this.amount = '';
      this.$router.push('/');
    }
  }
}
</script>
