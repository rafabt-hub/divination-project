import styles from "./style.module.css"

type Props = React.ComponentProps<"input">

export function Input({ ...res }: Props) {
  return <input type="text" className={styles.input} {...res} />
}