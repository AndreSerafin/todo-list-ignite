import { Check, Trash } from 'phosphor-react';
import {
  CheckedButton,
  DeleteButton,
  TaskCard,
  TaskDescription,
  TaskDescriptionDone,
  UncheckedButton,
} from './styles';
import { Task as TaskType } from '../TasksContainer/TasksContainer';

interface PropsType {
  task: TaskType;
  onDelete: (task: TaskType) => void;
  onCheck: (id: number) => void;
}

export function Task({ task, onDelete, onCheck }: PropsType) {
  function handleDelete() {
    onDelete(task);
  }

  function handleCheck() {
    onCheck(task.id);
  }

  return (
    <TaskCard>
      {task.done ? (
        <>
          <CheckedButton onClick={handleCheck}>
            <Check
              size={12}
              weight="bold"
              style={{ color: 'var(--gray-200)' }}
            />
          </CheckedButton>
          <TaskDescriptionDone>{task.description}</TaskDescriptionDone>
        </>
      ) : (
        <>
          <UncheckedButton onClick={handleCheck} />
          <TaskDescription>{task.description}</TaskDescription>
        </>
      )}

      <DeleteButton onClick={handleDelete}>
        <Trash size={24} />
      </DeleteButton>
    </TaskCard>
  );
}
