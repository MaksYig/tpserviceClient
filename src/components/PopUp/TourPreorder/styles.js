import { makeStyles } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '10px 10px 35px 10px',
  },
  Container: {
    padding: '25px 10px',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  Stepper: {
    padding: 0,
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  success: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    fontWeight:600,
    color: green[600]
  },
}));