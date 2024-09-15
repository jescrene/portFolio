import React from 'react';
import {makeStyles} from '@mui/styles';
import useTicTacToe from '../ticTacToe/useTicTacToe';
import GameSelector from './GameSelector';
import GameMode from './GameMode';
import {Button, Grid, Typography} from '@mui/material';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black',
    height: '100px', // Asegura que sea cuadrado
    width: '100px', // Asegura que sea cuadrado
    borderRadius: '10px',
    margin: '5px', // Añade separación entre cuadros
  },
  button: {
    width: '100%',
    height: '100%',
    borderRadius: '10px', // Bordes redondeados para el botón también
  },
});

/**
 * TicTacToe is a functional component for rendering and managing
 * a Tic Tac Toe game interface using React.
 *
 * It utilizes state management and custom hooks to handle the game board,
 * player symbols, game mode, and determining the winner. Players can
 * select their symbol, choose the game mode, and interact with the game board
 * through buttons representing each cell on the board. The game can be reset
 * using the reset button.
 *
 * Variables and functions used within TicTacToe:
 * - board: An array representing the game board.
 * - playerSymbol: The symbol chosen by the current player ('X' or 'O').
 * - mode: The current game mode, determining if the game is against another player or a computer.
 * - winner: The symbol of the winning player, or 'Empate' if the game is a draw.
 * - setPlayerSymbol: A function to set the player's symbol.
 * - setMode: A function to set the game mode.
 * - handleClick: A function to handle clicks on the game board cells.
 * - resetGame: A function to reset the game.
 *
 * Return:
 * - The JSX elements to render the game interface.
 */

const TicTacToe = () => {
  const classes = useStyles();
  const {
    board,
    playerSymbol,
    mode,
    winner,
    setPlayerSymbol,
    setMode,
    handleClick,
    resetGame,
  } = useTicTacToe();

  return (
    <div className={classes.container}>
      <GameSelector
        playerSymbol={playerSymbol}
        setPlayerSymbol={setPlayerSymbol}
      />
      <GameMode mode={mode} setMode={setMode} />
      <Grid container justifyContent="center">
        {board.map((cell, index) => (
          <Grid
            item
            key={index}
            xs={3}
            sm={3}
            md={3}
            lg={3}
            className={classes.gridItem}
          >
            <Button
              variant="outlined"
              onClick={() => handleClick(index)}
              className={classes.button}
            >
              {cell}
            </Button>
          </Grid>
        ))}
      </Grid>
      {winner && (
        <Typography variant="h5" gutterBottom>
          {winner === 'Empate'
            ? 'La partida queda empatada'
            : `Ganan las ${winner}`}
        </Typography>
      )}
      <Button variant="contained" color="primary" onClick={resetGame}>
        Reiniciar Juego
      </Button>
    </div>
  );
};

export default TicTacToe;
