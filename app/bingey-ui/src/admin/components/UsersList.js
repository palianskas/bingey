import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { withRouter } from 'react-router-dom';

const columns = [
  { id: 'id', label: 'ID', minWidth: 80 },
  {
    id: 'name',
    label: 'User Name',
    minWidth: 80,
    align: 'right',
  },
  {
    id: 'titleCount',
    label: 'Titles in Watchlist',
    minWidth: 50,
    align: 'right',
  },
  {
    id: 'registerDate',
    label: 'Registration Date',
    minWidth: 60,
    align: 'right',
  },
];

function createData(id, name, titleCount, registerDate) {
  return { id, name, titleCount, registerDate };
}

const rows = [
  createData('dsfisandfoin', 'Melvin', 5, '2020-01-01'),
  createData('sadfff1554', 'Gloria', 15, '2019-03-14'),
  createData('awersdfasdf1455', 'Rokko', 120, '2019-05-18'),
  createData('asdfsadfeer1447', 'Robert', 30, '2016-08-11'),
  createData('asdfeee-7415', 'Kowalski', 6, '2018-06-10'),
  createData('seeddd358752', 'Skipper', 7, '2021-01-01'),
  createData('889-qqwwwee-7', 'Ronald', 4, '2020-03-10'),
];

const useStyles = makeStyles({
  root: {
    margin: 40,
  },
  container: {
    maxHeight: 800,
  },
});

const UsersList = withRouter(({ history }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        onClick={() => {
                          history.push(`${window.location.pathname}/${value}`);
                        }}
                      >
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
});

export default UsersList;
