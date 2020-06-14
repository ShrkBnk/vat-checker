import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    
    html {
        height: 100%;
        width: 100%;
        //overflow-x:hidden;
    }

    *, input, select, textarea, option, button {
      outline: none!important;
    }

    body {
       overflow-x:hidden;
       min-width: 250px;
    }

`;
