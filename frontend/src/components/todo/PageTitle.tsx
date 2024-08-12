/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface PageTitleProps {
    title?: string;
}

const PageTitle = ({ title = 'ToDo' }: PageTitleProps) => {
    return <h1 css={titleCss}>{title}</h1>;
};

export default PageTitle;

const titleCss = css`
    font-size: 16px;
`;
