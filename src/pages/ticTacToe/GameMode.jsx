import React, {useCallback} from 'react';
import {makeStyles} from '@mui/styles';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';


const useStyles = makeStyles({
  formControl: {
    marginBottom: '20px',
  },
});

/**
 * GameMode component handles the selection of game modes and updates the state accordingly.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.mode - The current game mode.
 * @param {Function} props.setMode - The function to update the game mode.
 *
 * @returns {JSX.Element} The rendered GameMode component.
 */

const GameMode = ({mode, setMode}) => {
  const classes = useStyles();
  const handleModeChange = useCallback(
    (e) => setMode(e.target.value),
    [setMode]
  );

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Modo de Juego</FormLabel>
      <RadioGroup row value={mode} onChange={handleModeChange}>
        <FormControlLabel
          value="player"
          control={<Radio />}
          label="Jugador vs Jugador"
        />
        <FormControlLabel
          value="computer"
          control={<Radio />}
          label="Jugador vs PC"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default GameMode;
