import gql from "graphql-tag";

const GET_POKEMON = gql`
  query GetPokemon($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      maxCP
      maxHP
      image
      types
    }
  }
`;

const GET_POKEMON_DETAIL = gql`
  query GetPokemonDetail($name: String!) {
    pokemon(name: $name) {
      id
      number
      name
      maxCP
      maxHP
      image
      types
      evolutions {
        id
        number
        name
        maxCP
        maxHP
        image
        types
      }
    }
  }
`;

export default { GET_POKEMON, GET_POKEMON_DETAIL };
