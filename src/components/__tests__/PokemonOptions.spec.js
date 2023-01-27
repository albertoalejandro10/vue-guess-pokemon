import PokemonOptions from "@/components/PokemonOptions.vue"
import { shallowMount } from "@vue/test-utils"
import { beforeEach, describe, expect, it } from "vitest"
import { pokemons } from "../__tests__/mocks/pokemons.mock"

describe("PokemonOption component", () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons,
      },
    })
  })
  it("Debe hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it("Debe mostrar las cuatro opciones correctamente", () => {
    const listItems = wrapper.findAll("li")
    expect(listItems.length).toBe(4)
    expect(listItems[0].text()).toBe("bulbasaur")
    expect(listItems[1].text()).toBe("ivysaur")
    expect(listItems[2].text()).toBe("venusaur")
    expect(listItems[3].text()).toBe("charmander")
  })

  it("Debe de emitir 'selection' con sus respectivos parametros valores al hacer click", () => {
    const [l1, l2, l3, l4] = wrapper.findAll("li")
    l1.trigger("click")
    l2.trigger("click")
    l3.trigger("click")
    l4.trigger("click")
    // console.log(wrapper.emitted("selectionPokemon"))
    expect(wrapper.emitted("selectionPokemon").length).toBe(4)
    expect(wrapper.emitted("selectionPokemon")[0]).toStrictEqual([1])
    expect(wrapper.emitted("selectionPokemon")[1]).toStrictEqual([2])
    expect(wrapper.emitted("selectionPokemon")[2]).toStrictEqual([3])
    expect(wrapper.emitted("selectionPokemon")[3]).toStrictEqual([4])
  })
})
