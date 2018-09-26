<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

@font-face {
  font-family: 'Roboto';
  src: url('./assets/fonts/Roboto-Regular.ttf');
  font-weight: normal;
  font-style: normal;
}

body{
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background: #f6f8f9;
}
</style>
