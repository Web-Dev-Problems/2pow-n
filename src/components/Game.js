import React, { useState } from 'react'
import styled from "styled-components"
import Board from './Board'
import Header from './Header'

const Game = () => {
  const [restart, setRestart] = useState(false)
  return (
    <GameContainer>
        <Header restart={restart} setRestart={setRestart} />
        <Board restart={restart} setRestart={setRestart} />
    </GameContainer>
  )
}

const GameContainer = styled.section`
    width: 500px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
`
export default Game