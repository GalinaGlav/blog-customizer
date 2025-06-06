import clsx from "clsx";
import { useState, CSSProperties } from "react";
import { defaultArticleState } from "src/constants/articleProps";
import { Article } from "../article";
import { ArticleParamsForm } from "../article-params-form";
import styles from '../../styles/index.module.scss';

export const App = () => {
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