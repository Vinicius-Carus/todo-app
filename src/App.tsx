import Button from "./components/Button";
import Header from "./components/Header";
import Plus from "./components/icons/Plus";
import Input from "./components/Input";
import Task from "./components/Task";
import styles from "./App.module.css";
import TaskVoid from "./components/TaskVoid";
import { useState } from "react";
import { TaskInterface } from "./types/task";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  const [content, setContent] = useState<string>("");

  function handleCreateTask() {
    if (content) {
      setTasks((value) => [
        { id: uuidv4(), content: content, resolved: false },
        ...value,
      ]);

      setContent("");
    }
  }

  function handleDelete(id: string) {
    const newTasksList = tasks.filter((value) => value.id !== id);

    setTasks(newTasksList);
  }

  function handleSelect(id: string) {
    const taskListWithStatusUpdated = tasks.map((value) => {
      const resolved: boolean =
        value.id === id ? !value.resolved : value.resolved;

      return {
        ...value,
        resolved,
      };
    });

    setTasks(taskListWithStatusUpdated);
  }

  return (
    <>
      <Header />
      <div className={styles.newTaskDiv}>
        <Input
          className={styles.newTaskInput}
          value={content}
          name="task-content"
          placeholder="Adicione uma nova tarefa"
          required
          onChange={(e) => setContent(e.target.value)}
        />
        <Button onClick={handleCreateTask}>
          Criar <Plus />
        </Button>
      </div>

      <div className={styles.taskListRoot}>
        <div className={styles.taskListContent}>
          <div className={styles.taskListHeader}>
            <p className={styles.countCreatedTasksText}>
              Tarefas criadas
              <span className={styles.countCreatedTasksNumber}>
                {tasks.length}
              </span>
            </p>
            <p className={styles.countDoneTasksText}>
              Concluidas
              <span className={styles.countCreatedTasksNumber}>
                {tasks.reduce(
                  (accumulator, value) =>
                    value.resolved ? accumulator + 1 : accumulator,
                  0
                )}{" "}
                de {tasks.length}
              </span>
            </p>
          </div>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Task
                handleDelete={handleDelete}
                handleSelect={handleSelect}
                key={task.id}
                task={task}
              />
            ))
          ) : (
            <TaskVoid />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
