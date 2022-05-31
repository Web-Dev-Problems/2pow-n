import React from 'react'
import styled from 'styled-components'

const Score = ({ data }) => {
  return (
    <ScoreContainer>
        <span>{data}</span>
        <p>980</p>
    </ScoreContainer>
  )
}

const ScoreContainer = styled.section`
    padding: 0px 20px;
    font-size: 25px;
    background-color: #bbada0;
    width: max-content;
    margin-left: 6px;
    margin-top: 8px;
    color: white;
    text-align: center;
    border-radius: 3px;
    line-height: 47px;
    font-weight: bold;
    letter-spacing: 0.05em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span{
        position: relative;
        top: 10px;
        font-size: 13px;
        left: 0px;
        color: #eee4da;
        text-transform: uppercase;
        line-height: 13px;
        width: 100%;
        margin-bottom: 4px;
    }
`

export default Score