import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LetterInput from './letterInput';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={1}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={1}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={1}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={1}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={1}>
        <Item>Item</Item>
      </Grid>
    </React.Fragment>
  );
}

export default function GameGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0.5}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
      <LetterInput/>
    </Box>
  );
}
