<template>
  <h1 v-if="!pokemon">Espere por favor</h1>
  <div v-else>
    <h1>¿Quien es este Pokemon?</h1>
    <PokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonsArr" @selection-pokemon="checkAnswer" />
    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button type="button" @click="newGame">Nuevo juego</button>
    </template>
  </div>
</template>
<script>
import PokemonOptions from "@/components/PokemonOptions.vue"
import PokemonPicture from "@/components/PokemonPicture.vue"
import getPokemonOptions from "@/helpers/getPokemonOptions"

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      pokemonsArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    }
  },
  mounted() {
    this.mixPokemonArray()
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonsArr = await getPokemonOptions()
      const rndInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonsArr[rndInt]
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true
      this.showAnswer = true
      if (this.pokemon.id === pokemonId) {
        this.message = `Correcto, es ${this.pokemon.name}`
      } else {
        this.message = `Oops, era ${this.pokemon.name}`
      }
    },
    newGame() {
      this.showAnswer = false
      this.showPokemon = false
      this.pokemonArr = []
      this.pokemon = null
      this.mixPokemonArray()
    },
  },
}
</script>
