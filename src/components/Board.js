import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Tile from './Tile'

const Board = ({ restart }) => {
    const values = {1: [1, 2, 3, 4], 2: [1, 2, 3, 4], 3: [1, 2, 3, 4], 4: [1, 2, 3, 4]}
    const [tiles, setTiles] = useState({1: {1: 2, 2: 4, 3: 8}})
    useEffect(() => {
      setTiles({1: {1: 2, 2: 4}, 2: {3: 16}})
    }, [restart])
    
    return (
        <GameBoardContainer>
            {[...Array(4**2)].map((e, i) => {
                    return (<section key={i} className='cell'></section>)
                })}
            {Object.keys(tiles).map((row) => {
                return Object.keys(tiles[row]).map((column) => {
                    return <Tile key={`${row}, ${column}`} value={tiles[row][column]} 
                    gridRow = {`${parseInt(row) } / ${parseInt(row) + 1}`} 
                    gridColumn = {`${parseInt(column)}  / ${parseInt(column) + 1}`} />
                })
            })}
        </GameBoardContainer>
    )
}

const GameBoardContainer = styled.section`
    margin-top: 40px;
    position: relative;
    padding: 15px;
    background-color: #bbada0;
    border-radius: 6px;
    width: 500px;
    height: 500px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(4, 107px);
    grid-template-rows: repeat(4, 107px);
    grid-column-gap: 14.4px;
    grid-row-gap: 14.4px;
    .cell {
        line-height: 107px;
        background-color: rgba(238, 228, 218, 0.35);
        width: 107px;
        height: 107px;
        text-align: center;
        border-radius: 3px;
        font-weight: bold;
        font-size: 55px;
        z-index: 10;
    }
    p {
        grid-column: 1 / 2;
    }
`

export default Board