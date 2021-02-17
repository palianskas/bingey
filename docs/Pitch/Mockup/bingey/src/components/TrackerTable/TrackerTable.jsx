import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { InfoDialog } from '../InfoDialog/InfoDialog'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableHeaderCell: {
    fontWeight: 'bold',
  }
});

function createData(title, directors, upcoming, releaseDate) {
  return { title, directors, upcoming, releaseDate };
}

const rows = [
  createData('Billions ', 'Mickey Down, Konrad Kay', "Season 5 episode 8", 'Unannounced'),
  createData('Mad Men', 'Matthew Weiner', 'Series finished', '-'),
  createData('Industry', 'Kate Herron', 'Season 2', 'May 2021'),
  createData('The Expanse', 'Daniel Abraham, Mark Fergus, Ty Franck ', 'Season 6', 'Unannounced'),
  createData('Loki', 'Kate Herron', 'Season 1', 'May 2021'),
  createData('The Wheel of Time', 'Rafe Judkins', 'Season 1', 'Unannounced'),
  createData('Hawkeye', 'Rhys Thomas', 'Season 1', '2021'),
];

export const TrackerTable = () => {
  const classes = useStyles();

  const [isDialogOpen, setIsDialogOpen ] = useState(false);

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="tracker table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell} >Title</TableCell>
              <TableCell className={classes.tableHeaderCell} align="left">Directed by</TableCell>
              <TableCell className={classes.tableHeaderCell} align="left">Upcoming</TableCell>
              <TableCell className={classes.tableHeaderCell} align="right">Release date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} onClick={() => setIsDialogOpen(true)}>
                <TableCell component="thead" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="left">{row.directors}</TableCell>
                <TableCell align="left">{row.upcoming}</TableCell>
                <TableCell align="right">{row.releaseDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <InfoDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        titleObj={
          {
            title: 'Billions',
            year: '2016',
            genre: 'Drama',
            directors: 'Brian Koppelman, David Levien, Andrew Ross Sorkin',
            plot: 'U.S. Attorney Chuck Rhoades goes after hedge fund king Bobby "Axe" Axelrod in a battle between two powerful New York figures.'
          }}
      />
    </>
  );
}
