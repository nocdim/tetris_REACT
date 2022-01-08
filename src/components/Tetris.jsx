import React, { useState } from "react"
import { createStage } from "../gameHelpers"

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

const Tetris = () => {

    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false)

    const [player, updatePlayerPos, resetPlayer] = usePlayer();
    const [stage, setStage] = useStage(player)

    // function for moving a tetromino
    const movePlayer = dir => {
        updatePlayerPos({ x: dir, y: 0, collided: false})
    }
    // function that start the game
    const startGame = () => {
        // Reset everything
        setStage(createStage())
        resetPlayer()
    }
    // function that pushes player down
    const drop = () => {
        // NOTE: there's a bug that causes tetromino move 2 spaces instead of 1 on Y
        // SO INSTEAD OF 1 I PUT 0.5 AND SO ON
        updatePlayerPos({ x: 0, y: 0.5, collided: false })
    }

    const dropPlayer = () => {
        drop()
    }
    // function to binding movement keys
    const move = ({ keyCode }) => {
        if (!gameOver) {
            switch (keyCode) {
                // 37 is the key to the left arrow on a keyboard
                case 37:
                    // NOTE: there's a bug that causes tetromino move 2 spaces instead of 1 on X
                    // SO INSTEAD OF -1 I PUT -0.5 AND SO ON
                    movePlayer(-0.5);
                    break;
                // 39 is the key to the right arrow on a keyboard
                case 39:
                    movePlayer(0.5);
                    break;
                // 40 is the key to the down arrow on a keyboard
                case 40:
                    dropPlayer()
                    break;
            }
        }
    }

    return (
        // StyledTetrisWrapper is responsible for taking key inputs as it covers the whole web-page
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
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
                <StartButton callback={startGame}/>
            </aside>
            </StyledTetris>
            <ParticleBackground />
        </StyledTetrisWrapper>
    )
}

export default Tetris