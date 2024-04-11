import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


export default function MaterialTable(props) {
  const [tableObject] = React.useState(props.tableData ?? []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {props.isObject &&
              Object.keys(tableObject).map((item) => {
                return <StyledTableCell>{item}</StyledTableCell>;
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.isObject &&
            Object.values(tableObject).map((row) => {
              return (
                <StyledTableCell component="th" scope="row">
                  {row}
                </StyledTableCell>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
