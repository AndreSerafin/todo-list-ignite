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

export interface Task {
  id: number;
  description: string;
  done: boolean;
}

export function TasksContainer() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [newTask, setNewTask] = useState<Task>({
    id: 0,
    description: '',
    done: false,
  });

  const finishedTasks = tasks.reduce((sum, task) => {
    if (task.done === true) {
      return sum + 1;
    } else {
      return sum;
    }
  }, 0);

  const isNewTaskEmpty = newTask.description.length === 0 ? true : false;
  const createdTasks = tasks.length;

  function handleDeleteTask(taskToDelete: Task) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task !== taskToDelete;
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

  function handleFinishTask(id: number) {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            done: !task.done,
          }
        : task
    );

    setTasks(updatedTasks);
  }

  function renderTasks() {
    return tasks.map((task) => {
      return (
        <Task
          key={task.id}
          task={task}
          onDelete={handleDeleteTask}
          onCheck={handleFinishTask}
        />
      );
    });
  }

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
          Tarefas criadas<CounterSpan>{createdTasks}</CounterSpan>
        </CounterCreated>
        <CounterDone>
          Concluídas
          <CounterSpan>
            {' '}
            {finishedTasks} de {createdTasks}
          </CounterSpan>
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
