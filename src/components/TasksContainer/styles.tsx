import styled from 'styled-components';

export const NewTaskForm = styled.form`
  display: flex;
  margin-top: -1.68rem;
  gap: 0.5rem;

  @media (max-width: 768px) {
    max-width: 75vw;
  }
`;

export const NewTaskInput = styled.input`
  font-size: 1rem;
  width: 39.875rem;
  height: 3.375rem;
  padding: 1rem;

  background: var(--gray-500);
  border-radius: 8px;
  border: 1px solid var(--gray-700);
  transition: 0.2s;
  color: var(--gray-100);

  &:focus {
    outline: 1px solid var(--purple);
  }

  @media (max-width: 768px) {
    max-width: 70%;
  }
`;

export const CreateTaskButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: bold;
  gap: 0.5rem;
  width: 5.665rem;
  height: 3.375rem;

  background: var(--blue-dark);
  color: var(--gray-100);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    filter: brightness(1.2);
  }

  @media (max-width: 768px) {
    min-width: 30%;
  }
`;

export const CountersSession = styled.div`
  margin-top: 4rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  line-height: 1.26;

  font-size: 0.875rem;
  font-weight: 700;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export const CounterCreated = styled.p`
  color: var(--blue);
  align-self: center;
`;

export const CounterDone = styled.p`
  color: var(--purple);
  align-self: center;
`;

export const CounterSpan = styled.span`
  align-self: center;
  font-size: 0.75rem;
  color: var(--gray-200);
  background: var(--gray-400);
  margin-left: 0.5rem;
  padding: 0.125rem 0.5rem;
  border-radius: 50px;
`;

export const TasksSession = styled.div`
  display: flex;
  flex-direction: column;
  width: 46rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const NoTasks = styled.div`
  border-top: 2px solid var(--gray-400);
  margin-top: 1.5rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const NoTasksStrong = styled.strong`
  margin-top: 1rem;
  text-align: center;
`;

export const NoTasksParagraph = styled.p`
  text-align: center;
`;
