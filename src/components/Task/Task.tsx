import { Check, Trash } from 'phosphor-react';
import {
  CheckedButton,
  DeleteButton,
  TaskCard,
  TaskDescription,
  TaskDescriptionDone,
  UncheckedButton,
} from './styles';
import { useState } from 'react';

interface PropsType {
  id: number;
  description: string;
  isDone: boolean;
  onDelete: (id: number) => void;
}

export function Task({ id, description, isDone, onDelete }: PropsType) {
  const [done, setDone] = useState(isDone);

  function changeButtonState() {
    done ? setDone(false) : setDone(true);
  }

  function handleDelete() {
    onDelete(id);
  }

  return (
    <TaskCard>
      {done ? (
        <>
          <CheckedButton onClick={changeButtonState}>
            <Check
              size={12}
              weight="bold"
              style={{ color: 'var(--gray-200)' }}
            />
          </CheckedButton>
          <TaskDescriptionDone>{description}</TaskDescriptionDone>
        </>
      ) : (
        <>
          <UncheckedButton onClick={changeButtonState} />
          <TaskDescription>{description}</TaskDescription>
        </>
      )}

      <DeleteButton onClick={handleDelete}>
        <Trash size={24} />
      </DeleteButton>
    </TaskCard>
  );
}
