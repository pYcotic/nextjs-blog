import styles from "./index.module.css"

export default function FlexColumn() {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.item}></div>
				<div className={styles.item}></div>
				<div className={styles.item}></div>
				<div className={styles.item}></div>
			</div>
		</>
	)
}
