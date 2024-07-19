import styles from "./index.module.css"

export default function FlexRow() {
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
