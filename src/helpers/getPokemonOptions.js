import pokemonAPI from "../API/PokemonAPI"

const getPokemons = () => {
  const pokemonsArr = Array.from(Array(493))
  return pokemonsArr.map((_, index) => index++)
}

const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
  const pokemons = await getPokemonsNames(mixedPokemons.splice(0, 4))
  return pokemons
}

const getPokemonsNames = async ([a, b, c, d] = []) => {
  const promiseArr = [
    pokemonAPI.get(`/${a}`),
    pokemonAPI.get(`/${b}`),
    pokemonAPI.get(`/${c}`),
    pokemonAPI.get(`/${d}`),
  ]

  const answers = await Promise.all(promiseArr)
  const [p1, p2, p3, p4] = answers
  return [
    { name: p1.data.name, id: p1.data.id },
    { name: p2.data.name, id: p2.data.id },
    { name: p3.data.name, id: p3.data.id },
    { name: p4.data.name, id: p4.data.id },
  ]
}

export default getPokemonOptions
