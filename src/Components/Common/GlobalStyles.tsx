import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyle = createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Sans+KR&display=swap');
    * {
        box-sizing:border-box;
    }
    html, body{
        font-family: 'Noto Sans', sans-serif;
        font-family: 'Noto Sans KR', sans-serif;
    }
`;

export default globalStyle;
