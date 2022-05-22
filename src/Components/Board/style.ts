import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: start;
  justify-content: center;

  height: 100vh;
`;

export const New = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  width: 25%;

  h1 {
    margin-top: 1rem;
  }
`;

export const ToDo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  //height: fit-content;
  width: 25%;

  h1 {
    margin-top: 1rem;
    color: orange;
  }
`;

export const Doing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 25%;

  h1 {
    margin-top: 1rem;
    color: yellow;
  }
`;

export const Done = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 25%;

  h1 {
    margin-top: 1rem;
    color: greenyellow;
  }
`;
