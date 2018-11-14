<template>
  <div id="app">
    <h1 class="alert">Traffic Lights</h1>
    <router-view class="screen"></router-view>
    <hr>
    <h5>Implementation of a test appfor the company "TrueConf".</h5>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
  #app {
      text-align: center;
      color: #2c3e50;
      font-weight: normal;
    }
    .alert{
      color: black;
    }
</style>

