import React, { memo } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-apollo";
import styled from "styled-components";

import Card from "../Card";
import { ListWrapper, StyledList, Container, Heading } from "../Global";
import { queries, routes } from "../../constants";

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  border: 0;
  background: 0;
  cursor: pointer;
`;

const Detail = ({
  match: {
    params: { name }
  },
  history: { push }
}) => {
  const { loading, error, data } = useQuery(queries.GET_POKEMON_DETAIL, {
    variables: { name }
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
        <FlexWrapper>
          <Heading>Pokemon</Heading>
          <Button type="button" onClick={() => push(routes.BASE)}>
            <i className="material-icons">arrow_back</i>
          </Button>
        </FlexWrapper>
        <Card pokemon={data.pokemon} disableClick large />
        {data.pokemon.evolutions && <Heading>Evolutions</Heading>}
      </Container>
      <ListWrapper>
        <StyledList>
          {data.pokemon.evolutions &&
            data.pokemon.evolutions.map(evolution => (
              <Card pokemon={evolution} key={evolution.id} />
            ))}
        </StyledList>
      </ListWrapper>
    </>
  );
};

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default memo(withRouter(Detail));
