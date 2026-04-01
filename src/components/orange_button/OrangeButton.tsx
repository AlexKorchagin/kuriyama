import React from 'react';
import styles from './OrangeButton.module.css';

interface OrangeButtonProps {
	title: string;
}

export const OrangeButton: React.FC<OrangeButtonProps> = ({ title }) => {
	return <button className={styles.orange_button}>{title}</button>;
};
