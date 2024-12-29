import styles from "./TaskVoid.module.css";
import Clipboard from "./icons/Clipboard";

export default function TaskVoid() {
  return (
    <div className={styles.taskVoidListBody}>
      <Clipboard />
      <p>
        Você ainda não tem tarefas cadastradas
        <br /> <span>Crie tarefas e organize seus itens a fazer</span>
      </p>
    </div>
  );
}
