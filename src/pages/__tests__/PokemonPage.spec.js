import { describe, expect, it, beforeEach } from "vitest"
import PokemonPage from "@/pages/PokemonApp.vue"
import { shallowMount } from "@vue/test-utils"
import { vitest } from "vitest"
import { pokemons as pokemonsArr } from "@/components/__tests__/mocks/pokemons.mock"

describe("PokemonPage Page", () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonsArr,
          pokemon: pokemonsArr[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
        }
      },
    })
  })
  it("Debe hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  it("Debe de llamar al metodo mixPokemonArray al montar", () => {
    const mixPokemonArraySpy = vitest.spyOn(
      PokemonPage.methods,
      "mixPokemonArray"
    )
    shallowMount(PokemonPage)
    expect(mixPokemonArraySpy).toHaveBeenCalled()
  })
  it("Debe de hacer match con el snapshot cuando cargan los pokemons", () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  it("Debe de mostrar los componentes de PokemonPicture y PokemonOptions", () => {
    const pokemonPicture = wrapper.find("pokemon-picture-stub")
    const pokemonOptions = wrapper.find("pokemon-options-stub")
    expect(pokemonPicture.exists()).toBeTruthy()
    expect(pokemonOptions.exists()).toBeTruthy()

    expect(pokemonPicture.attributes("pokemonid")).toBe("1")
    expect(pokemonOptions.attributes("pokemons")).toBeTruthy()
  })
  it("Pruebas sobre checkAnswer", async () => {
    await wrapper.vm.checkAnswer(1)
    expect(wrapper.find("h2").exists()).toBeTruthy()
    expect(wrapper.vm.showPokemon).toBeTruthy()
    expect(wrapper.vm.message).toBe(`Correcto, es ${pokemonsArr[0].name}`)
    await wrapper.vm.checkAnswer(20)
    expect(wrapper.vm.message).toBe(`Oops, era ${pokemonsArr[0].name}`)
  })
})
