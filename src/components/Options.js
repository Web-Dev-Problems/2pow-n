import React from 'react'
import styled from "styled-components"

const Options = ({ restart, setRestart }) => {
  return (
    <OptionsContainer>
        <p className='desc'>Join the tiles, get to <strong>2048!</strong></p>
        <button className='restart' onClick={() => {setRestart(true)}}>New Game</button>
    </OptionsContainer>
  )
}

const OptionsContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .desc {
        line-height: 1.2;
        font-size: 18px;
        color: #776e65;
        margin: 0px 10px 0px 0px;
    }
    .restart {
        background-color: #8f7a66;
        border-radius: 3px;
        padding: 0 20px;
        text-decoration: none;
        color: #f9f6f2;
        height: 40px;
        line-height: 42px;
        cursor: pointer;
        text-align: center;
        font-weight: bold;
        font-size: 18px;
        border: none;
    }
`

export default Options