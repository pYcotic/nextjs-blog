import styles from "./index.module.css"

export default function FlexColumn() {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.item1}>1</div>
				<div className={styles.item2}>2</div>
				<div className={styles.item3}>3</div>
				<div className={styles.item4}>Some content to justify</div>
			</div>
		</>
	)
}
