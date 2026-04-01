import { useEffect, useRef, useState } from 'react';

type Point = {
	x: number;
	y: number;
};

export const GlobalLine = () => {
	const [points, setPoints] = useState<Point[]>([]);
	const pathRef = useRef<SVGPathElement | null>(null);
	const svgRef = useRef<SVGSVGElement | null>(null);

	// 📍 Собираем координаты элементов
	useEffect(() => {
		const updatePoints = () => {
			const elements = document.querySelectorAll('[data-line]');
			const newPoints: Point[] = Array.from(elements).map((el) => {
				const rect = el.getBoundingClientRect();
				return {
					x: rect.left + rect.width / 2,
					y: rect.top + rect.height / 2 + window.scrollY,
				};
			});

			setPoints(newPoints);
			console.log('points:', elements);
			// Обновляем SVG высоту под страницу
			if (svgRef.current) {
				svgRef.current.style.height = `${document.documentElement.scrollHeight}px`;
			}
		};

		updatePoints(); // при монтировании
		window.addEventListener('resize', updatePoints);
		window.addEventListener('scroll', updatePoints);

		return () => {
			window.removeEventListener('resize', updatePoints);
			window.removeEventListener('scroll', updatePoints);
		};
	}, []);

	// 🧩 Построение пути с углами 90°
	const path = points
		.map((p, i) => {
			if (i === 0) return `M ${p.x} ${p.y}`;
			const prev = points[i - 1];
			return `L ${p.x} ${prev.y} L ${p.x} ${p.y}`;
		})
		.join(' ');

	// 📏 Настройка длины линии и dashoffset
	useEffect(() => {
		if (!pathRef.current) return;
		const pathEl = pathRef.current;
		const length = pathEl.getTotalLength();

		pathEl.style.strokeDasharray = `${length}`;

		const updateOffset = () => {
			const scrollTop = window.scrollY;
			const docHeight =
				document.documentElement.scrollHeight - window.innerHeight*4;
			const scrollPercent = Math.min(1, Math.max(0, scrollTop / docHeight));
			pathEl.style.strokeDashoffset = `${length - length * scrollPercent}`;
		};

		updateOffset(); // сразу при монтировании
		window.addEventListener('scroll', updateOffset);
		window.addEventListener('resize', updateOffset);

		return () => {
			window.removeEventListener('scroll', updateOffset);
			window.removeEventListener('resize', updateOffset);
		};
	}, [points]);

	return (
		<svg
			ref={svgRef}
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				pointerEvents: 'none',
				zIndex: 10,
			}}
		>
			<path
				ref={pathRef}
				d={path}
				stroke='#c65533'
				fill='none'
				strokeWidth={2}
			/>
		</svg>
	);
};
