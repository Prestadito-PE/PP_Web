import React from "react";
import styled, { keyframes } from "styled-components";

interface LoadingPopupProps {
  message?: string;
}

const LoadingPopup: React.FC<LoadingPopupProps> = ({ message = "Cargando..." }) => {
  return (
    <Overlay>
      <Container>
        <Spinner />
        <Message>{message}</Message>
      </Container>
    </Overlay>
  );
};

const overlayAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const containerAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${overlayAnimation} 0.3s ease-in-out;
  z-index: 9999; // Agregar z-index alto para que aparezca encima de todo
`;

const Container = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${containerAnimation} 0.3s ease-in-out;
`;

const Spinner = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Message = styled.p`
  margin-top: 10px;
`;

export default LoadingPopup;