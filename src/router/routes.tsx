import { VisitPage } from '../pages/VisitPage/VisitPage';
import { BeePage } from '../pages/BeePage';

export interface AppRoute {
	path: string;
	element: React.ReactNode;
	title: string;
	children?: AppRoute[];
}

export const routes: AppRoute[] = [
	{
		path: '/',
		element: <VisitPage />,
		title: 'Агротуризм',
	},
	{
		path: '/beekeeping',
		element: <BeePage />,
		title: 'Пчеловодство',
	},
];
