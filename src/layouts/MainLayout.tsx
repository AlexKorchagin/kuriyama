import { Outlet } from 'react-router-dom';
import { Header } from '../components/header/Header';
import styles from './MainLayout.module.css';
import { GlobalLine } from './../components/global_line/GlobalLine';

export const MainLayout = () => {
	return (
		<div className={styles.mainLayout}>
			<GlobalLine />
			<div className={styles.main_container}>
				<Header />
			</div>
			<main>
				<Outlet />
			</main>
		</div>
	);
};
