import { default as Grid } from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import * as React from 'react';
import { Cell } from './backend/Cell';

const ItemDark = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ItemLight = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CellLight: React.FC<{ size: number }> = ({ size }) => {
  return (
    <Grid xs={size}>
      <ItemLight>Cell</ItemLight>
    </Grid>
  );
};

const CellDark: React.FC<{ size: number }> = ({ size }): JSX.Element => {
  return (
    <Grid xs={size}>
      <ItemDark>Cell</ItemDark>
    </Grid>
  );
};

const Row: React.FC<{ size: number; cells: Cell[] }> = ({
  size,
  cells,
}): JSX.Element => {
  const cellsArray = cells.map((c: { alive: boolean; x: number; y: number }) =>
    c.alive ? <CellLight size={size} /> : <CellDark size={size} />
  );
  return <>{cellsArray}</>;
};

const MyGrid: React.FC<{ size: number; cells: Cell[] }> = ({ size, cells }) => {
  // console.log(
  //   'my grid',
  //   cells[6],
  //   cells[7],
  //   cells[8],
  //   cells[9],
  //   cells[10],
  //   cells[11],
  //   cells[12],
  //   cells[13],
  //   cells[14],
  //   cells[15],
  //   cells[16],
  //   cells[17],
  //   cells[18],
  //   cells[19],
  //   cells[20],

  //   cells
  // );
  return (
    <Box
      sx={{
        width: 218,
        height: 180,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
        flexGlow: 1,
      }}
    >
      <Grid container spacing={0}>
        <Row size={size} cells={cells.splice(0, 6)} />
        <Row size={size} cells={cells.splice(0, 6)} />
        <Row size={size} cells={cells.splice(0, 6)} />
        <Row size={size} cells={cells.splice(0, 6)} />
        <Row size={size} cells={cells.splice(0, 6)} />
      </Grid>
    </Box>
  );
};

export default MyGrid;
