import React from 'react'
import styled from "styled-components"
import Board from './Board'
import Header from './Header'

const Game = () => {
  return (
    <GameContainer>
        <Header />
        <Board />
    </GameContainer>
  )
}

const GameContainer = styled.section`
    width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`
export default Game