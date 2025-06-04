import clsx from 'clsx';
import { CSSProperties, StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { Article } from './components/article/Article';
import { defaultArticleState } from './constants/articleProps';
import styles from './styles/index.module.scss';
import './styles/index.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);


const App = () => {
	const [appliedArticleState, setAppliedArticleState] = useState(defaultArticleState);
	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': appliedArticleState.fontFamilyOption.value,
					'--font-size': appliedArticleState.fontSizeOption.value,
					'--font-color': appliedArticleState.fontColor.value,
					'--container-width': appliedArticleState.contentWidth.value,
					'--bg-color': appliedArticleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm onChange={(articleState) => {
				setAppliedArticleState(articleState);
			}} />
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
