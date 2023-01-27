import { describe, expect, it } from "vitest"
import getPokemonOptions, {
  getPokemons,
  getPokemonsNames,
} from "../getPokemonOptions"
import { pokemons as pokemonsArr } from "@/components/__tests__/mocks/pokemons.mock"

describe("getPokemonOptions helpers", () => {
  it("Debe regresar un arreglo de numeros", () => {
    const pokemons = getPokemons()
    expect(pokemons.length).toBe(493)
    for (const element of pokemons) {
      expect(element).toBeTypeOf("number")
    }
  })
  it("Debe retornar un arreglo de 4 elementos con nombres de pokemons", async () => {
    const pokemons = await getPokemonsNames([1, 2, 3, 4])
    expect(pokemons).toBeTypeOf("object")
    expect(pokemons).toStrictEqual(pokemonsArr)
  })

  it("getPokemonOptions debe de retornar un arreglo mezclado", async () => {
    const pokemons = await getPokemonOptions()
    expect(pokemons.length).toBe(4)
    const expectedData = [
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
    ]
    expect(pokemons).toEqual(expectedData)
  })
})
