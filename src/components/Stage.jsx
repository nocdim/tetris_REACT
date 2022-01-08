import React from "react";
import Cell from "./Cell"
import { StyledStage } from './styles/StyledStage'

const Stage = ({ stage }) => {
    return (
        <StyledStage width={stage[0].length} height={stage.length}>
            {/* for each cell rendering Cell component (mapping through stage (gameHelpers) and through rows) */}
            {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
        </StyledStage>
    )
}

export default Stage