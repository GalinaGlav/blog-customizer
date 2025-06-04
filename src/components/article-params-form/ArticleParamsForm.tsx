import { useRef, useState } from 'react';
import { ArticleStateType, backgroundColors, contentWidthArr, defaultArticleState, fontColors, fontFamilyOptions, fontSizeOptions } from 'src/constants/articleProps';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { RadioGroup } from 'src/ui/radio-group';
import { Select } from 'src/ui/select';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';
import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = (props: { onChange: (selected: ArticleStateType) => void }) => {
	const [isOpen, setOpen] = useState<boolean>(false);
	const [articleState, setArticleState] = useState(defaultArticleState);
	const formRef = useRef(null);

	useOutsideClickClose({
		isOpen: isOpen,
		onChange: (newState) => { setOpen(newState) },
		rootRef: formRef
	})

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={() => { setOpen(!isOpen) }} />

			<aside className={isOpen ? `${styles.container} ${styles.container_open}` : styles.container}>
				<form className={styles.form} ref={formRef} >
					<Text as='h2' size={31} weight={800} align='left' uppercase>
						Задайте параметры
					</Text>

					<Select selected={articleState.fontFamilyOption} options={fontFamilyOptions} title={'шрифт'} onChange={(selected) => setArticleState({ ...articleState, fontFamilyOption: selected })} />
					<RadioGroup name={''} options={fontSizeOptions} selected={articleState.fontSizeOption} title={'Размер шрифта'} onChange={(selected) => setArticleState({ ...articleState, fontSizeOption: selected })} />
					<Select selected={articleState.fontColor} options={fontColors} title={'Цвет шрифта'} onChange={(selected) => setArticleState({ ...articleState, fontColor: selected })} />
					<Separator/>
					<Select selected={articleState.backgroundColor} options={backgroundColors} title={'Цвет фона'} onChange={(selected) => setArticleState({ ...articleState, backgroundColor: selected })} />
					<Select selected={articleState.contentWidth} options={contentWidthArr} title={'Ширина контента'} onChange={(selected) => setArticleState({ ...articleState, contentWidth: selected })} />
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' onClick={() => {
							setArticleState(defaultArticleState);
							props.onChange(defaultArticleState);
						}}/>
						<Button title='Применить' htmlType='submit' type='apply' onClick={() => {
							setOpen(!isOpen);
							props.onChange(articleState);
						}}/>
					</div>
				</form>
			</aside>
		</>
	);
};
