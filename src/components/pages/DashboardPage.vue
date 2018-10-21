<template>
  <div class="header">
    <div></div>
    <span class="logo">
      <span class="logo-wrap">
        <img width="120px" height="105px" src="/static/images/logo.png">
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
    position: absolute;
    top: 50%;
    left: 50%;
    height: 525px;
    margin-top: -230px;
    margin-left: -220px;
    max-width: 600px;
    text-align: center;
    color: #a9a9a9;
    transform: translateY(-150px);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
     user-select: none;
    }
    .header h2 {
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 25px;
    }
</style>
