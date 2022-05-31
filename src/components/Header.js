import React from 'react'
import styled from "styled-components"
import Options from './Options'
import Stats from './Stats'

const Header = () => {
  return (
    <HeaderContainer>
        <Stats />
        <Options />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.section`
    display: flex;
    flex-direction: column;
`

export default Header