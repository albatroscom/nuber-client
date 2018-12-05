import { createGlobalStyle } from './typed-components';
import reset from 'styled-reset';

// tslint:disable-next-line
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Maven+Pro');
${reset}
* {
    box-sizing: border-box;
}
body{
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
}
* {
    color: inherit;
    text-decoration: none;
}
input,
button {
    &:focus,
    &:active{outline:none}
}
h1,h2,h3,h4,h5,h6{
    font-family:'Maven Pro', sans-serif;
}
`;

export default GlobalStyle;