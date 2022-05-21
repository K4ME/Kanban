import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border: 1rem;
  width: 14rem;
  height: 12rem;
  background-color: #757575;
  border-radius: 0.313rem;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 0;
  border-radius: 0.313rem;
  margin: 0.313rem;
  width: 12.5rem;
  height: 1.5rem;
  background-color: #ecf1f8;
  color: #282c34;
`;

export const TextArea = styled.textarea`
  resize: none;
  border: 0;
  border-radius: 0.313rem;
  width: 12.5rem;
  height: 6rem;
  /* margin: 0.313rem; */
  padding: 0.313rem; 
  background-color: #ecf1f8;
  color: #282c34;
`;


export const PlusButton = styled.button`
  border: 0;
  border-radius: 0;
  margin-top: 0.313rem;
  background-color: transparent;
  color: #ecf1f8;

  &:hover {
      color: #f1c40f;
      transition: 0.2s;
    }
`;