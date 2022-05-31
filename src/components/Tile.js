import React, { useEffect } from 'react'
import styled from "styled-components"

const Tile = ({ value, gridRow, gridColumn }) => {
    var colorMap = {0: "rgba(238, 228, 218, 0.35)", 2: "#eee4da", 4: "#eee1c9", 8: "#f3b27a", 16: "#f69664", 32: "#f77c5f"}
    
    return (
        <TileContainer style={{gridRow: gridRow, 
            gridColumn: gridColumn, 
            backgroundColor: colorMap[value], 
            color: (value >= 8 ? "#f9f6f2" : "#776e65")}}>{value}</TileContainer>
    )
}

const TileContainer = styled.section`
    position: absolute;
    line-height: 107px;
    width: 107px;
    height: 107px;
    text-align: center;
    border-radius: 3px;
    font-weight: bold;
    font-size: 55px;
    z-index: 10;
`
export default Tile