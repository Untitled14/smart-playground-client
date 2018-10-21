<template>
  <div class="header">
    <div></div>
    <span class="logo">
      <span class="logo-wrap">
        <img width="120px" height="105px" src="@static/images/logo.png">
    </span>
    </span>
    <h1 class="title">Vilniaus miesto viešosios sporto aikštelės</h1>
    <div></div>
    <h2>Patogus būdas surasti sporto aikšteles aktyviam poilsiui!</h2>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .logo-wrap {
    margin-top: 60px;
    transform: rotate(-2.5deg) translateZ(0);
  }
  .title {
    color: #676767;
    font-weight: 400;
    font-size: 43px;
    margin-bottom: 30px;
  }
  .logo {
    margin-bottom: 40px;
    position: relative;
    left: 5px;
    width: 50px;
    height: 50px;
  }
  .header {
    margin: 2rem auto 2rem;
    max-width: 600px;
    text-align: center;
    color: #a9a9a9;
  }
  .header h2 {
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 25px;
  }
</style>
