import React from 'react';
import styles from './MapItem.module.css';
import { Link } from 'react-router-dom';

type Props = {
	title: string;
	link: string;
	image: string;
};

export const MapItem: React.FC<Props> = ({ title, link, image }) => {
	return (
		<Link to={link} className={styles.card}>
			<div className={styles.imageWrapper}>
				<img src={image} alt={title} />
			</div>

			<div className={styles.content}>
				<p className={styles.title}>{title}</p>
				<img src='images/map/icon.svg' alt='' />
			</div>
		</Link>
	);
};
