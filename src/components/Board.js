import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Tile from './Tile'

const Board = ({ restart, setRestart }) => {
    const [tiles, setTiles] = useState(JSON.parse(localStorage.getItem("data")))
    useEffect(() => {
        if (restart) {
            localStorage.setItem("data", JSON.stringify({1: {1: 2, 2: 4}, 2: {1: 16, 3: 16}}))
            console.log(JSON.parse(localStorage.getItem("data")))
            setTiles(JSON.parse(localStorage.getItem("data")))   
            setRestart(false)
        }
    }, [restart])
    
    const handleKeyDown = (event) => {
        var newTiles = tiles
        event.preventDefault()
        switch (event.key) {
            case 'ArrowLeft':
                Object.keys(newTiles).map((row) => {
                    Object.keys(newTiles[row]).map((col) => {
                        var newCol = parseInt(col)
                        while (!Object.keys(newTiles[row]).includes(`${newCol - 1}`) && newCol !== 1) {
                            newCol = newCol - 1
                        }
                        var multip = 1
                        if (newCol !== 1) {
                            if (newTiles[row][newCol - 1] == newTiles[row][col]) {
                                multip = 2
                            }
                        }
                        var {[col]: _, ...newRow} = newTiles[row]
                        newTiles[row] = {...newRow, [multip > 1 ? newCol - 1  : newCol ]: (newTiles[row][col] * multip)}
                    })
                })
                break;
            case 'ArrowUp':
                break;
            case 'ArrowDown':
                break;
            case 'ArrowRight':
                Object.keys(newTiles).map((row) => {
                    Object.keys(newTiles[row]).map((col) => {
                        var newCol = parseInt(col)
                        while (!Object.keys(newTiles[row]).includes(`${newCol - 1}`) && newCol !== 1) {
                            newCol = newCol - 1
                        }
                        var multip = 1
                        if (newCol !== 1) {
                            if (newTiles[row][newCol - 1] == newTiles[row][col]) {
                                multip = 2
                            }
                        }
                        var {[col]: _, ...newRow} = newTiles[row]
                        newTiles[row] = {...newRow, [multip > 1 ? newCol - 1  : newCol ]: (newTiles[row][col] * multip)}
                    })
                })
                break;
            default:
                console.log(event.key)
        }
        localStorage.setItem("data", JSON.stringify(newTiles))
        return setTiles(JSON.parse(localStorage.getItem("data")))
    }
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
    }, [])
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
        /* position: absolute; */
    }
    p {
        grid-column: 1 / 2;
    }
`

export default Board