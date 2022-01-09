import React, { useState } from "react";

import { createStage, checkCollision } from "../gameHelpers";

// style Components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris"

// Custom hooks
import { usePlayer } from "../hooks/usePlayer"
import { useStage } from "../hooks/useStage"
import { useInterval } from "../hooks/useInterval"

// Components
import Stage from "./Stage"
import Display from './Display'
import StartButton from './StartButton'
import ParticleBackground from "./ParticleBackground"

const Tetris = () => {

    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage] = useStage(player, resetPlayer);

    const movePlayer = (dir) => {
        if (!checkCollision(player, stage, { x: dir, y: 0 })) {
            updatePlayerPos({ x: dir, y: 0 })
        }
    }

    const startGame = () => {
        // Reset everything
        setStage(createStage());
        resetPlayer();
        setGameOver(false)
        setDropTime(1000)
    }

    const drop = () => {
        if (!checkCollision(player, stage, { x: 0, y: 1 })) {
            updatePlayerPos({ x: 0, y: 1, collided: false})
        } else {
            // Game Over
            if (player.pos.y < 1) {
                console.log("GAME OVER")
                setGameOver(true)
                setDropTime(null)
            }
            updatePlayerPos({ x: 0, y: 0, collided: true })
        }
    }
    // function that activates useInterval again when the down key is up
    const keyUp = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 40) {
                setDropTime(1000)
            }
        }
    }

    const dropPlayer = () => {
        setDropTime(null);
        drop();
    }

    const move = ({ keyCode }) => {
        if (!gameOver) {
            switch (keyCode) {
                // keyCode 37 is responsible for the LEFT arrow key on the keyboard
                // Moving player to the left
                case 37:
                    movePlayer(-1)
                    break
                // keyCode 39 is responsible for the RIGHT arrow key on the keyboard
                // Moving player to the right
                case 39:
                    movePlayer(1)
                    break
                // keyCode 40 is responsible for the DOWN arrow key on the keyboard
                // Moving player down
                case 40:
                    dropPlayer()
                    break
                // keyCode 81 is responsible for the Q arrow key on the keyboard
                // Rotating player ANTICLOCKWISE
                case 81:
                    playerRotate(stage, -1)
                    break
                // keyCode 69 is responsible for the E arrow key on the keyboard
                // Rotating player CLOCKWISE
                case 69:
                    playerRotate(stage, 1)
                    break
                default:
                    break   
            }
        }
    }

    // Creating movement of tetromino by itself
    useInterval(() => {
        drop();
    }, dropTime)

    return (
        // StyledTetrisWrapper is responsible for taking key inputs as it covers the whole web-page
        <StyledTetrisWrapper 
        role="button" 
        tabIndex="0" 
        onKeyDown={(e) => move(e)} 
        onKeyUp={keyUp}
        >
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