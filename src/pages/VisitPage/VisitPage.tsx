import styles from './VisitPage.module.css';
import { MainTitle } from '../../components/main_title/MainTitle';
import { OptionButton } from './../../components/option_button/OptionButton';
import { MapItem } from './../../components/map_item/MapItem';
import { MoreButton } from './../../components/more_button/MoreButton';
import { SeasonSection } from '../../components/season_seaction/SeasonSection';

export const VisitPage = () => {
	return (
		<div className={styles.div_container}>
			<div
				data-line
				style={{ position: 'absolute', opacity: 0, top: '50px', right: 0 }}
			/>

			<div className={styles.main_container}>
				<section className={styles.visit_page_container_hero}>
					<div className={styles.visit_page_colum_hero}>
						<MainTitle title='ПОСЕЩЕНИЕ КУРИЯМЫ' />
						<p className={styles.visit_desqr}>
							Посетите пасеку Курияма - прогулки, отдых, знакомство с пчелами
						</p>
						<div className={styles.option_container}>
							<OptionButton
								color='orange'
								data_line={true}
								title='Выбрать тариф'
							/>
							<button className={styles.more_button}>
								<div
									data-line
									style={{
										position: 'absolute',
										opacity: 0,
										top: '50%',
										left: 0,
									}}
								/>
								Посмотреть все активности
							</button>
							<div
								data-line
								style={{
									position: 'absolute',
									opacity: 0,
									left: 0,
								}}
							/>
						</div>
					</div>
					<div className={styles.visit_page_colum_img_hero}></div>
				</section>
				<section className={styles.visit_page_container_about}>
					<div className={styles.visit_page_colum_img_about}>
						<div
							data-line
							style={{
								position: 'absolute',
								opacity: 0,
								left: '43%',
							}}
						/>
					</div>
					<div className={styles.visit_page_colum_about}>
						<MainTitle title='ЧТО ЭТО ЗА МЕСТО?' />
						<div className={styles.about_description_block}>
							<div className={styles.about_description_block_column}>
								<p>
									Курияма — это уголок спокойствия, спрятанный в лесах Тульской
									области. Здесь, на границе Московской области, мы создали
									уникальное пространство, где философия созерцания и природная
									мудрость встречаются с русским раздольем.
								</p>
								<div className={styles.about_description_block_img_left}></div>
							</div>
							<div className={styles.about_description_block_img}></div>
						</div>
					</div>
					<div
						data-line
						style={{
							position: 'absolute',
							opacity: 0,
							left: '17%',
							bottom: 0,
						}}
					/>
				</section>
			</div>

			<section className={styles.plan_section}>
				<div
					data-line
					style={{
						position: 'absolute',
						opacity: 0,
						left: '30px',
						top: '100%',
						zIndex: 0,
					}}
				/>
				<div className={styles.main_container}>
					<MainTitle title='ПЛАН КУРИЯМЫ' />
					<div className={styles.plan_section_text_block}>
						<div className={styles.plan_section_text_row_1}>
							<p>
								Описание в две строчки о том, что есть на Курияме.
								<br />
								Про возможность выбрать и поробнее узнать
								<br /> про активность по клику
							</p>
						</div>
						<div className={styles.map_item}>
							<MapItem
								title='Апи-домики'
								link='/'
								image='images/map/map_item_1.png'
							/>
						</div>
						<div className={styles.map_item}>
							<MapItem
								title='Апи-домики'
								link='/'
								image='images/map/map_item_2.png'
							/>
						</div>
						<div className={styles.map_item}>
							<MapItem
								title='Апи-домики'
								link='/'
								image='images/map/map_item_3.png'
							/>
						</div>
						<div className={styles.map_item}>
							<MapItem
								title='Апи-домики'
								link='/'
								image='images/map/map_item_4.png'
							/>
						</div>
						<div className={styles.map_item}>
							<MapItem
								title='Апи-домики'
								link='/'
								image='images/map/map_item_5.png'
							/>
						</div>

						<div className={styles.plan_section_text_row_2}>
							<p>
								Описание в две строчки о том, что есть на Курияме.
								<br />
								Про возможность выбрать и поробнее узнать
								<br /> про активность по клику
							</p>
						</div>
					</div>
				</div>
			</section>

			<div
				data-line
				style={{
					opacity: 0,
					zIndex: 0,
				}}
			/>

			<div className={styles.main_container}>
				<section className={styles.dayPass_section}>
					<div className={styles.dayPass_title_block}>
						<div className={styles.dayPass_title_colum}>
							<MainTitle title='DAY PASS' />
							<p>
								Описание, чуть подробнее раскрывающее заголовок.
								<br />
								Про активности и атмосферу.
							</p>
						</div>
						<div className={styles.dayPass_title_colum}>
							<p>
								Описание, чуть подробнее раскрывающее заголовок.
								<br />
								Про активности и атмосферу.
							</p>
							<MainTitle title='ЯПОНИЯ' />
						</div>
					</div>

					<div className={styles.dayPass_block}>
						<div className={styles.dayPass_block_colum}>
							<img src='images/dayPass/daypass_1.png' alt='' />
							<h2>Лесная прогулка</h2>
							<div className={styles.dayPass_block_desqr}>
								<p>
									Описание, чуть подробнее раскрывающее заголовок. Про
									активности и атмосферу.
								</p>
								<MoreButton title='Подробнее' />
							</div>
						</div>

						<div className={styles.dayPass_block_colum}>
							<div className={styles.dayPass_block_rock}>
								<img
									data-line
									src='images/dayPass/icon.svg'
									className={styles.dayPass_block_icon}
									alt=''
								/>
								<div className={styles.dayPass_block_colum}>
									<img src='images/dayPass/daypass_2.png' alt='' />
									<h2>Сад камней</h2>
									<div className={styles.dayPass_block_desqr}>
										<p>Описание, чуть подробнее раскрывающее заголовок</p>
										<MoreButton title='Подробнее' />
									</div>
								</div>
							</div>
							<div className={styles.dayPass_block_colum}>
								<img src='images/dayPass/daypass_3.png' alt='' />
								<h2>Фотосессия в японском тематике</h2>
								<div className={styles.dayPass_block_desqr}>
									<p>Описание, чуть подробнее</p>
									<MoreButton title='Подробнее' />
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className={styles.products_section}>
					<img
						className={styles.products_img}
						src='images/products/product_1.png'
						alt=''
					/>
					<img
						className={styles.products_img}
						src='images/products/product_2.png'
						alt=''
					/>
					<div className={styles.products_text_block}>
						<MainTitle title='ПРОДУКЦИЯ' />
						<p>Описание, чуть подробнее раскрывающее заголовок</p>
						<MoreButton title='Подробнее' />
					</div>
					<img
						className={styles.products_img}
						src='images/products/product_3.png'
						alt=''
					/>
					<img
						className={styles.products_img}
						src='images/products/product_4.png'
						alt=''
					/>
					<img
						className={styles.products_img}
						src='images/products/product_5.png'
						alt=''
					/>
				</section>
			</div>
			<section className={styles.dailyPass_section}>
				<div className={styles.main_container}>
					<div className={styles.dailyPass_container}>
						<div className={styles.dailyPass_text_block}>
							<MainTitle
								title='DAILY PASS.
							ЯПОНИЯ'
							/>
							<p>Пропуск на посещение на день со всеми активностями</p>
						</div>
						<OptionButton
							color='white'
							data_line={false}
							title='Выбрать тариф'
						/>
					</div>
				</div>
			</section>

			<section className={styles.process}>
				<div className={styles.main_container}>
					<div className={styles.process_grid}>
						<MainTitle title='ПРОЦЕСС ПОСЕЩЕНИЯ' />
						<div className={styles.process_step}>
							<div className={styles.process_number}>1</div>
							<h3>Выберите тариф</h3>
							<p>Описание, подробнее раскрывающее заголовок</p>
						</div>

						<div className={styles.process_step}>
							<div className={styles.process_number}>2</div>
							<h3>Назначьте дату</h3>
							<p>Описание, подробнее раскрывающее заголовок</p>
						</div>

						<div className={`${styles.process_step} ${styles.process_stepBig}`}>
							<div className={styles.process_number}>3</div>
							<h3>Мы вас встретим</h3>
							<p>Описание, подробнее раскрывающее заголовок</p>
						</div>
					</div>
				</div>
			</section>
			<div className={styles.main_container}>
				<SeasonSection />
			</div>
		</div>
	);
};
