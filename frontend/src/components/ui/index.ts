import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--side-foreground-color);
  padding: 1rem;
  gap: 1rem;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 6px 1px rgba(0,0,0,.2);
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
    max-width: 40rem;
  }
`;

export const Tag = styled.span`
  padding: 0.25rem;
  border-radius: 0.25rem;
  border: 1px solid var(--side-foreground-color);
  font-size: 0.75rem;
  font-weight: 600;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
`;

export const Button = styled.button`
  padding: 0.5rem;
  border: none;
  cursor: pointer;
`;

