import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 13,
    cursor: 'pointer'
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

export default function Repository({ repository }) {
  return (
    <StyledTableRow>
      <StyledTableCell component='th' scope='row'>
        <a
          href={repository.html_url}
          target='_blank'
          rel='noreferrer'
        >
          <Typography variant='h6' component='h6'>
            {repository.name.toUpperCase()}
          </Typography>
          <span style={{ opacity: 0.5 }}>
            {repository.description}
          </span>
        </a>
      </StyledTableCell>
    </StyledTableRow>
  );
}

// ****** Props Validations ********
Repository.propTypes = {
  repository: PropTypes.object.isRequired
};
