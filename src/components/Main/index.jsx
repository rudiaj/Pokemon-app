import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledMain = styled.main`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

const StyledContent = styled.div`
  overflow: hidden;
  background-color: rgb(56, 38, 78);
  display: flex;
  flex-direction: column;
  max-height: 812px;
  height: 100vh;
  max-width: 375px;
  width: 100%;
  border-radius: 2rem;
`;

const Main = ({ children }) => {
  return (
    <StyledMain>
      <StyledContent>{children}</StyledContent>
    </StyledMain>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired
};

export default Main;
