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
  console.log(cells);
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
        <Row
          size={size}
          cells={[cells[0], cells[1], cells[2], cells[3], cells[4]]}
        />
        <Row
          size={size}
          cells={[cells[0], cells[1], cells[2], cells[3], cells[2]]}
        />
        <Row
          size={size}
          cells={[cells[0], cells[1], cells[2], cells[3], cells[2]]}
        />
        <Row
          size={size}
          cells={[cells[0], cells[1], cells[2], cells[3], cells[2]]}
        />
        <Row
          size={size}
          cells={[cells[0], cells[1], cells[2], cells[3], cells[2]]}
        />
      </Grid>
    </Box>
  );
};

export default MyGrid;
