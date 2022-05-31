import React from 'react'
import styled from "styled-components"
import Options from './Options'
import Stats from './Stats'

const Header = ({ restart, setRestart }) => {
  return (
    <HeaderContainer>
        <Stats />
        <Options restart={restart} setRestart={setRestart} />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`

export default Header