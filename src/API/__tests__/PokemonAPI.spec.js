import { describe, expect, it } from "vitest"
import pokemonAPI from "../PokemonAPI"

describe("PokeAPI", () => {
  it("Axios should be setup to PokeAPI", () => {
    expect(pokemonAPI.defaults.baseURL === "https://pokeapi.co/api/v2/pokemon")
  })
})
