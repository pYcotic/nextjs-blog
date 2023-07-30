import styles from '../styles/layout.module.css';

export default function Center({ children, home }: { children: React.ReactNode, home?: boolean }) {
	return (
		<div className={home ? styles.centerContainerHome : styles.centerContainer}>
			{children}
		</div>
	);
}