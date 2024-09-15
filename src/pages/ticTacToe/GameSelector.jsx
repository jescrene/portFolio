import React, {useCallback} from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
  formControl: {
    marginBottom: '20px',
  },
});

/**
 * GameSelector component allows players to choose their game symbol (X or O).
 *
 * @param {Object} props - Component properties.
 * @param {string} props.playerSymbol - The current symbol selected by the player.
 * @param {function} props.setPlayerSymbol - Function to set the player's symbol.
 *
 * @returns {JSX.Element} The JSX code for rendering the symbol selection UI.
 */

const GameSelector = ({playerSymbol, setPlayerSymbol}) => {
  const classes = useStyles();
  const handleSymbolChange = useCallback(
    (e) => setPlayerSymbol(e.target.value),
    [setPlayerSymbol]
  );

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Elige tu símbolo</FormLabel>
      <RadioGroup row value={playerSymbol} onChange={handleSymbolChange}>
        <FormControlLabel value="X" control={<Radio />} label="X" />
        <FormControlLabel value="O" control={<Radio />} label="O" />
      </RadioGroup>
    </FormControl>
  );
};

export default GameSelector;
