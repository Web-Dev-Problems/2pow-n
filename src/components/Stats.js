import React from 'react'
import styled from "styled-components"
import Score from './Score'

const Stats = () => {
  return (
    <StatsContainer>
        <section className='title'>2048</section>
        <section className='scores-container'>
            <Score data="score" />
            <Score data="best" />
        </section>
    </StatsContainer>
  )
}

const StatsContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    .title {
        font-size: 80px;
        font-weight: bold;
        margin: 0;
        display: block;
        float: left;
        color: #776e65;
    }
    .scores-container {
        display: flex;
        flex-direction: row;
        padding-bottom: 35px;
    }
`

export default Stats