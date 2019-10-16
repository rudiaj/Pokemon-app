import React, { memo } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Article = styled.article`
  width: ${props => (props.large ? "80%" : "initial")};
  margin: ${props => (props.large ? "auto" : "initial")};
`;

const Content = styled.div`
  cursor: pointer;
  padding: 15px;
  position: relative;
  display: flex;
  text-decoration: none;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.875rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const ImageRealativeWrapper = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div`
  width: ${props => (props.large ? "110px" : "80px")};
  height: ${props => (props.large ? "110px" : "80px")};
  border-radius: 50%;
  overflow: hidden;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const Image = styled.img`
  height: 56%;
  width: auto;
`;

const Name = styled.span`
  font-size: 0.875rem;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Id = styled.span`
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.3);
  margin-bottom: 5px;
`;

const Table = styled.table`
  font-size: 0.625rem;
  text-align: left;
  border-collapse: collapse;
  width: 100%;
`;

const StyledTh = styled.th`
  color: rgba(255, 255, 255, 0.3);
  font-weight: 600;
  padding: 2px 10px 2px 0;
`;

const StyledTd = styled.td`
  text-align: right;
`;

const Number = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.5rem;
  border-radius: 0.875rem;
  padding: 2px 4px;
  background-color: rgba(56, 38, 78, 0.9);
`;

const StyledTdWithBorder = styled(StyledTd)`
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const StyledThWithBorder = styled(StyledTh)`
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const PillslWrapper = styled.div`
  margin-bottom: 15px;
`;

const Pill = styled.span`
  padding: 4px 8px;
  font-size: 0.625rem;
  background-color: rgba(56, 38, 78, 0.9);
  border-radius: 0.875rem;
  margin-right: 5px;
  &:last-of-type {
    margin-right: 0;
  }
`;

const Card = ({
  pokemon: { name, image, id, maxCP, maxHP, types, number },
  history: { push },
  large
}) => {
  return (
    <Article large={large}>
      <Content onClick={large ? null : () => push(`/pokemon/${name}`)}>
        <ImageRealativeWrapper>
          <ImageWrapper large={large}>
            <Number>{number}</Number>
            <Image src={image} alt={name} />
          </ImageWrapper>
        </ImageRealativeWrapper>
        <Name>{name}</Name>
        <Id>{id}</Id>
        <PillslWrapper>
          {types.map(type => (
            <Pill key={type}>{type}</Pill>
          ))}
        </PillslWrapper>
        <Info>
          <Table>
            <tbody>
              <tr>
                <StyledThWithBorder>max CP</StyledThWithBorder>
                <StyledTdWithBorder>{maxCP}</StyledTdWithBorder>
              </tr>
              <tr>
                <StyledTh>max HP</StyledTh>
                <StyledTd>{maxHP}</StyledTd>
              </tr>
            </tbody>
          </Table>
        </Info>
      </Content>
    </Article>
  );
};

Card.defaultProps = {
  large: false
};

Card.propTypes = {
  large: PropTypes.bool,
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    maxCP: PropTypes.number.isRequired,
    maxHP: PropTypes.number.isRequired,
    number: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default memo(withRouter(Card));
