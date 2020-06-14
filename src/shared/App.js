import React, {Component} from 'react';

import './fonts/fonts.css'
import FrontPage from './components/FrontPage/FrontPage'
import GlobalStyles from '../GlobalStyles'
import * as S from './AppStyle'

class App extends Component {

    render() {
        return (
            <S.Container>
                <GlobalStyles/>
                <FrontPage/>
            </S.Container>
        );
    }
}

export default App;
