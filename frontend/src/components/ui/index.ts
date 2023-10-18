import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #ccc;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 400px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Button = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #ccc;
  cursor: pointer;
`;

