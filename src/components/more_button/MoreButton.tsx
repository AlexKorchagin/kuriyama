import styles from './MoreButton.module.css';

interface MoreButtonProps {
	title: string;
}

export const MoreButton: React.FC<MoreButtonProps> = ({ title }) => {
	return (
		<button className={styles.button}>
			{title} <img src='icons/icon_arrow_white.svg' alt='' />
		</button>
	);
};
