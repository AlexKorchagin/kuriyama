import { useState, useEffect, useRef } from 'react';
import styles from './SeasonSection.module.css';
import { MainTitle } from '../main_title/MainTitle';
import { MoreButton } from '../more_button/MoreButton';

type SeasonData = {
	symbol: string;
	name: string;
	sub: string;
	leftText: string;
	rightText: string;
	leftImg: string;
	rightImg: string;
	rightImg_bg: string;
	circle: string;
	bg: string;
};

const seasons: SeasonData[] = [
	{
		symbol: '/images/seasons/summer_sign.png',
		name: 'Лето',
		sub: '(natsu)',
		leftText: 'Описание, подробнее раскрывающее заголовок',
		rightText: 'Описание, подробнее раскрывающее заголовок',
		leftImg: '/images/seasons/summer_left.png',
		rightImg: '/images/seasons/summer_right.png',
		rightImg_bg: '/images/seasons/right.png',
		circle: '/images/seasons/summer_circle.png',
		bg: '/images/seasons/summer_bg.png',
	},
	{
		symbol: '/images/seasons/outum_sign.png',
		name: 'Осень',
		sub: '(aki)',
		leftText: 'Описание, подробнее раскрывающее заголовок',
		rightText: 'Описание, подробнее раскрывающее заголовок',
		leftImg: '/images/seasons/outum_left.png',
		rightImg: '/images/seasons/outum_right.png',
		rightImg_bg: '/images/seasons/right.png',
		circle: '/images/seasons/outum_circle.png',
		bg: '/images/seasons/outum_bg.png',
	},
];

export const SeasonSection = () => {
	const [active, setActive] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	const sectionRef = useRef<HTMLElement | null>(null);

	const data = seasons[active];

	useEffect(() => {
		let ticking = false;

		const handleScroll = () => {
			if (!sectionRef.current || ticking) return;

			ticking = true;

			requestAnimationFrame(() => {
				const rect = sectionRef.current!.getBoundingClientRect();
				const windowHeight = window.innerHeight;

				const start = windowHeight;
				const end = -rect.height;

				const progress = (start - rect.top) / (start - end);
				const clamped = Math.min(1, Math.max(0, progress));

				const index = Math.min(
					seasons.length - 1,
					Math.floor(clamped * seasons.length),
				);

				setActive((prev) => {
					if (prev !== index) {
						setIsAnimating(true);

						setTimeout(() => {
							setIsAnimating(false);
						}, 300);

						return index;
					}
					return prev;
				});

				ticking = false;
			});
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const animClass = isAnimating ? styles.fadeOut : styles.fadeIn;

	return (
		<section ref={sectionRef} className={styles.section}>
			<MainTitle title='СЕЗОННЫЕ ЗАНЯТИЯ' />

			{/* ЛЕВО */}
			<div className={`${styles.left_top} ${animClass}`}>
				<h3>Заголовок</h3>
				<p>{data.leftText}</p>
			</div>

			<div className={`${styles.left_bottom} ${animClass}`}>
				<h3>Заголовок</h3>
				<p>{data.leftText}</p>
			</div>

			{/* ЦЕНТР */}
			<div className={`${styles.center} ${animClass}`}>
				<img className={styles.symbol} src={data.symbol} />
				<div className={styles.sub}>{data.sub}</div>
				<div className={styles.name}>{data.name}</div>
			</div>

			<div className={styles.season_btn}>
				<MoreButton title='Подробнее' />
			</div>

			<img
				src={data.circle}
				className={`${styles.circle} ${animClass}`}
				alt=''
			/>

			{/* ПРАВО */}
			<div className={`${styles.right} ${animClass}`}>
				<h3>Заголовок</h3>
				<p>{data.rightText}</p>
			</div>

			{/* КАРТИНКИ */}
			<img className={`${styles.imgLeft} ${animClass}`} src={data.leftImg} />
			<img className={`${styles.imgRight} ${animClass}`} src={data.rightImg} />
			<img className={styles.imgRight_bg} src={data.rightImg_bg} />

			{/* ДЕКОР */}
			<img className={styles.bg} src={data.bg} />
			<div className={styles.flower} />
		</section>
	);
};
