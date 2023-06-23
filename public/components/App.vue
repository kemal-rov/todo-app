<template>
    <div id="app">
      <UpperDiv />
      <MiddleDiv />
      <LowerDiv />
    </div>
  </template>
  
  <script>
  import UpperDiv from './components/UpperDiv.vue';
  import MiddleDiv from './components/MiddleDiv.vue';
  import LowerDiv from './components/LowerDiv.vue';
  
  export default {
    name: 'App',
    components: {
      UpperDiv,
      MiddleDiv,
      LowerDiv
    }
  }
  </script>
  
  <style scoped>
  #app {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  </style>