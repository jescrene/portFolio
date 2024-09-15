import {useState, useEffect} from 'react';

/**
 * Custom hook to manage the state and logic of a Tic-Tac-Toe game.
 *
 * @returns {Object} An object containing the state variables and functions to interact with the game.
 * @property {Array} board - The current state of the game board, represented as an array of 9 elements.
 * @property {string} playerSymbol - The symbol ('X' or 'O') representing the player.
 * @property {Function} setPlayerSymbol - Function to set the player's symbol.
 * @property {Function} handleClick - Function to handle a player's move when a board cell is clicked, given the cell index.
 * @property {Function} resetGame - Function to reset the game state to the initial configuration.
 * @property {string} mode - The current game mode, either 'player' for human vs. human or 'computer' for human vs. computer.
 * @property {Function} setMode - Function to set the game mode.
 * @property {string|null} winner - The symbol of the winning player, or null if there is no winner yet.
 * @property {string} currentTurn - The symbol of the player whose turn it is to play ('X' or 'O').
 */

const useTicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerSymbol, setPlayerSymbol] = useState('X');
  const [winner, setWinner] = useState(null);
  const [mode, setMode] = useState('player');
  const [currentTurn, setCurrentTurn] = useState('X');

  useEffect(() => {
    if (mode === 'computer' && currentTurn === 'O' && !winner) {
      makeComputerMove();
    }
  }, [currentTurn, mode, winner]);

  const handleClick = (index) => {
    if (board[index] !== null || winner !== null) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentTurn;
    setBoard(newBoard);

    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setCurrentTurn(currentTurn === 'X' ? 'O' : 'X');
    }
  };

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const makeComputerMove = () => {
    let availableMoves = board
      .map((value, index) => (value === null ? index : null))
      .filter((val) => val !== null);

    if (availableMoves.length === 0) {
      return;
    }

    const randomMove =
      availableMoves[Math.floor(Math.random() * availableMoves.length)];

    if (board[randomMove] === null) {
      handleClick(randomMove);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setCurrentTurn('X');
  };

  return {
    board,
    playerSymbol,
    setPlayerSymbol,
    handleClick,
    resetGame,
    mode,
    setMode,
    winner,
    currentTurn,
  };
};

export default useTicTacToe;
