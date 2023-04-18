import { ClipboardText, PlusCircle } from 'phosphor-react';
import {
  CounterCreated,
  CounterDone,
  CounterSpan,
  CountersSession,
  CreateTaskButton,
  NewTaskForm,
  NewTaskInput,
  NoTasks,
  NoTasksParagraph,
  NoTasksStrong,
  TasksSession,
} from './styles';
import { Task } from '../Task/Task';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Task {
  id: number;
  description: string;
  done: boolean;
}

export function TasksContainer() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      description:
        'Aliqua eu officia culpa laboris Lorem enim sint non amet qui.',
      done: false,
    },
    {
      id: 2,
      description:
        'Occaecat mollit ipsum esse Lorem voluptate fugiat occaecat officia non laboris.',
      done: false,
    },
  ]);

  const [newTask, setNewTask] = useState<Task>({
    id: 0,
    description: '',
    done: false,
  });

  function renderTasks() {
    return tasks.map((task) => {
      return (
        <Task
          description={task.description}
          isDone={task.done}
          id={task.id}
          onDelete={handleDeleteTask}
        />
      );
    });
  }

  function handleDeleteTask(id: number) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  function handleCreateNewTask(event: FormEvent) {
    event?.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask({
      id: 0,
      description: '',
      done: false,
    });
  }

  function handleAddNewTask(event: ChangeEvent<HTMLInputElement>) {
    const description = event.target.value;
    event.target.setCustomValidity('');
    setNewTask({ id: tasks.length + 1, description: description, done: false });
  }

  const isNewTaskEmpty = newTask.description.length === 0 ? true : false;

  return (
    <>
      <NewTaskForm onSubmit={handleCreateNewTask}>
        <NewTaskInput
          type="text"
          onChange={handleAddNewTask}
          placeholder="Adicione uma nova tarefa"
          value={newTask.description}
        />
        <CreateTaskButton type="submit" disabled={isNewTaskEmpty}>
          Criar <PlusCircle size={20} />
        </CreateTaskButton>
      </NewTaskForm>
      <CountersSession>
        <CounterCreated>
          Tarefas criadas<CounterSpan>3</CounterSpan>
        </CounterCreated>
        <CounterDone>
          Concluídas<CounterSpan>3 de 10</CounterSpan>
        </CounterDone>
      </CountersSession>
      <TasksSession>
        {tasks.length !== 0 ? (
          renderTasks()
        ) : (
          <NoTasks>
            <ClipboardText size={70} style={{ color: 'var(--gray-400)' }} />
            <NoTasksStrong>
              Você ainda não tem tarefas cadastradas
            </NoTasksStrong>
            <NoTasksParagraph>
              Crie tarefas e organize seus itens a fazer
            </NoTasksParagraph>
          </NoTasks>
        )}
      </TasksSession>
    </>
  );
}
