import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 48px;
`;

const Title = styled.div`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  letter-spacing: 2px;
  font-weight: 300;
`;

const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <div>{children}</div>
    </Wrapper>
  );
};

export default Section;
