<template>
  <div>
    <PokemonApp />
  </div>
</template>
<script>
import PokemonApp from "@/pages/PokemonApp.vue";
export default {
  components: {
    PokemonApp,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
