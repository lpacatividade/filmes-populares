import React from 'react'
import { Link } from 'react-router-dom'
import RMDBLogo from '../../assets/images/react-movie-logo.svg'

import { Wrapper, Content, LogoImg } from './styles.js'

export default function Header() {
    return (<Wrapper>
        <Content>
            <Link to="/">
                <LogoImg src={RMDBLogo} alt="rmdb-logo" />
            </Link>
        </Content>
    </Wrapper>
    )
}