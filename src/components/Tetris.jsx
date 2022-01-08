import React, { useState } from "react"

// style Components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris"

// Custom hooks
import { usePlayer } from '../hooks/usePlayer'
import { useStage } from "../hooks/useStage"

// Components
import Stage from "./Stage"
import Display from './Display'
import StartButton from './StartButton'
import ParticleBackground from "./ParticleBackground"

const Tetris = ({ callback }) => {

    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false)

    const [player] = usePlayer();
    const [stage, setStage] = useStage(player)

    return (
        <StyledTetrisWrapper>
            <StyledTetris>
            <Stage stage={stage} />
            <aside>
                {gameOver ? (
                    <Display gameOver={gameOver} text="Game Over" />
                ) : (
                <div>
                    <Display text="Score" />
                    <Display text="Rows" />
                    <Display text="Level" />    
                </div>
                )}
                <StartButton />
            </aside>
            </StyledTetris>
            <ParticleBackground />
        </StyledTetrisWrapper>
    )
}

export default Tetris