import React from "react"

// createStage function
import { createStage } from "../gameHelpers"
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris"

// Components
import Stage from "./Stage"
import Display from './Display'
import StartButton from './StartButton'
import ParticleBackground from "./ParticleBackground"

const Tetris = ({ callback }) => {
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
            <Stage stage={createStage()} />
            <aside>
                <div>
                    <Display text="Score" />
                    <Display text="Rows" />
                    <Display text="Level" />    
                </div>
                <StartButton />
            </aside>
            </StyledTetris>
            <ParticleBackground />
        </StyledTetrisWrapper>
    )
}

export default Tetris