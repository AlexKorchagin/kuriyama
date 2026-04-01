import React from 'react';
import styles from './OptionButton.module.css';

interface OptionButtonProps {
	title: string;
	data_line: boolean;
	color: string;
}

export const OptionButton: React.FC<OptionButtonProps> = ({
	title,
	data_line,
	color,
}) => {
	return (
		<div className={styles.wrapper}>
			{/* вращающееся кольцо */}
			<div
				className={
					color === 'orange'
						? styles.rotatingCircle
						: styles.rotatingCircle_white
				}
			></div>

			{/* статичное кольцо */}
			<div
				className={
					color === 'orange' ? styles.outerCircle : styles.outerCircle_white
				}
			></div>

			{/* кнопка */}
			<button data-line={data_line ? '' : undefined} className={styles.button}>
				{title}
			</button>
		</div>
	);
};
