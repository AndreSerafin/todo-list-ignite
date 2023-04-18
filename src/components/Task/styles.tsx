import styled from 'styled-components';

export const TaskCard = styled.div`
  margin-top: 1.5625rem;
  min-height: 4.5rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--gray-500);
  border: 2px solid var(--gray-400);
  border-radius: 8px;
  gap: 1rem;
  & + & {
    margin-top: 0.75rem;
  }

  @media (max-width: 768px) {
    width: 80vw;
    align-self: center;
  }
`;

export const CheckedButton = styled.button`
  flex-basis: 1.2rem;
  padding-top: 1px;
  height: 1.2rem;
  background: var(--purpledark);
  border: 2px solid var(--blue);
  border-radius: 50px;

  transition: 0.3s;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;
export const UncheckedButton = styled.button`
  flex-basis: 1.2rem;
  height: 1.2rem;
  background: transparent;
  border: 2px solid var(--blue);
  border-radius: 50px;

  transition: 0.3s;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const TaskDescription = styled.p`
  flex-basis: 4rem;
  flex-grow: 10;
`;

export const TaskDescriptionDone = styled.p`
  flex-basis: 4rem;
  flex-grow: 10;
  text-decoration: line-through;
`;

export const DeleteButton = styled.button`
  flex-basis: 1rem;
  flex-grow: 0.5;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--gray-300);
  transition: 0.3s;

  &:hover {
    color: var(--danger);
  }
`;
