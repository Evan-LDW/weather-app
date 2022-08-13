import styled from "styled-components";

const Container = styled.div`
  margin-top: 1rem;
  color: white;
  font-size: 2.5rem;
  font-weight: 500;

  &::after {
    content: "";
    display: block;
    margin-top: 0.5rem;
    height: 2px;
    background: white;
    border-radius: 2px;
    width: 50%;
    transform: translateX(50%);
  }
`;

const CityName = ({ name }) => {
  return <Container>{name}</Container>;
};

export default CityName;
