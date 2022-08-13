import styled from "styled-components";

const BackgroundImage = styled.div`
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  height: 100%;
`;

export default BackgroundImage;
