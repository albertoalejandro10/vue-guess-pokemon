<template>
  <div class="pokemon-container">
    <img v-if="showPokemon" :src="getPokemon" class="fade-in" alt="pokemon" />
    <img v-else :src="getPokemon" class="hidden-pokemon" alt="pokemon" />
  </div>
</template>
<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    getPokemon() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    },
  },
}
</script>
<style scoped>
/* Pokemon Picture */
.pokemon-container {
  height: 200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
}

img {
  height: 200px;
  grid-area: 1/1;
  width: 100%;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>
