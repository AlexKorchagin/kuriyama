import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../router/routes';
import styles from './Header.module.css';
import { Logo } from '../logo/Logo';
import { OrangeButton } from './../orange_button/OrangeButton';

export const Header = () => {
	const location = useLocation();

	const getBreadcrumbs = () => {
		const pathnames = location.pathname.split('/').filter(Boolean);

		const breadcrumbs = [{ path: '/', title: 'Главная' }];

		let currentPath = '';

		pathnames.forEach((segment) => {
			currentPath += `/${segment}`;

			const match = routes.find((r) => r.path === currentPath);

			if (match) {
				breadcrumbs.push({
					path: match.path,
					title: match.title,
				});
			}
		});

		return breadcrumbs;
	};

	const breadcrumbs = getBreadcrumbs();

	return (
		<div>
			<header className={styles.header}>
				<Logo />
				<nav className={styles.navigation}>
					{routes.map((route) => (
						<Link className={styles.link} key={route.path} to={route.path}>
							{route.title}
						</Link>
					))}
				</nav>

				<OrangeButton title='Связаться' />
			</header>
			<div>
				{breadcrumbs.map((crumb, index) => (
					<span className={styles.breadcrumbs} key={crumb.path}>
						{index !== 0 && ' / '}
						<Link to={crumb.path}>{crumb.title}</Link>
					</span>
				))}
			</div>
		</div>
	);
};
