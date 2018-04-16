<template>
  <div class="container">
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand">Cart</a>
      <div class="nav-item">
        <span class="navbar-text my-2 mx-2">Your balance: ${{ funds }}</span>
        <button class="btn btn-outline-success my-2 mx-2">Top Up</button>
      </div>
      <a class="nav-link" href="#">Login</a>
      <a class="nav-link" href="#">Logout</a>
    </nav>
  </div>
</nav>
</template>

<script>
  export default {
    data: function() {
      return {
        funds: 100
      }
    }
  }
</script>
