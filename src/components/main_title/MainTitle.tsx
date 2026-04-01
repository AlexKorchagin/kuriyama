import React from 'react';
import styles from './MainTitle.module.css';

interface MainTitleProps {
	title: string;
	props: any;
}

export const MainTitle = ({ title, ...props }: any) => {
	return (
		<h1 {...props} className={styles.title}>
			{title}
		</h1>
	);
};
