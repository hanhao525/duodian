<template>
  <div id="app">
     <di></di>
     <router-view></router-view>
  </div>
</template>

<script>
import di from './pages/di'

export default {
  name: 'app',
  components: {
    di
  }
}
</script>

<style>
  
</style>
