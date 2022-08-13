import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1920px;
`;

const Bounce = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;

  div {
    width: 25px;
    height: 25px;
    background: #0077ff;
    border-radius: 50%;
    animation: bouncing 0.5s cubic-bezier(0.19, 0.57, 0.3, 0.98) infinite
      alternate;
  }
  div:nth-child(2) {
    animation-delay: 0.1s;
    opacity: 0.8;
  }

  div:nth-child(3) {
    animation-delay: 0.2s;
    opacity: 0.6;
  }

  div:nth-child(4) {
    animation-delay: 0.3s;
    opacity: 0.4;
  }
  @keyframes bouncing {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(-100px);
    }
  }
`;
export default function Loading(props) {
  const { height = "25vh", width = "37vh" } = props;
  return (
    <LoadingContainer style={{ height, width }}>
      <Bounce>
        <div />
        <div />
        <div />
        <div />
      </Bounce>
    </LoadingContainer>
  );
}
