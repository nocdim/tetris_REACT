import React from "react";
import Cell from "./Cell"

const Stage = ({ stage }) => {
    return (
        <div>
            {/* for each cell rendering Cell component (mapping through stage (gameHelpers) and through rows) */}
            {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
        </div>
    )
}

export default Stage