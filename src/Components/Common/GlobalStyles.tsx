import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyle = createGlobalStyle`
    ${reset};

    * {
        box-sizing:border-box;
    }
`;

export default globalStyle;
