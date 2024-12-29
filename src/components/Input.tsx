import { ComponentProps } from "react";
import styles from "./Input.module.css";

export default function Input({
  className,
  ...props
}: ComponentProps<"input">) {
  return (
    <input className={styles.input + " " + className} type="text" {...props} />
  );
}
