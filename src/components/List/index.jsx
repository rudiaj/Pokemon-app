import React from "react";
import { useQuery } from "react-apollo";

import { ListWrapper, StyledList, Container, Heading } from "../Global";
import Card from "../Card";

import { queries } from "../../constants";

const List = () => {
  const { loading, error, data } = useQuery(queries.GET_POKEMON, {
    variables: { first: 10 }
  });

  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>Error</p>;
  }

  return (
    <>
      <Container>
        <Heading>Pokemons</Heading>
      </Container>
      <ListWrapper>
        <StyledList>
          {data.pokemons.map(pokemon => {
            return <Card key={pokemon.id} pokemon={pokemon} />;
          })}
        </StyledList>
      </ListWrapper>
    </>
  );
};

export default List;
