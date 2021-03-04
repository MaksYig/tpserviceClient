import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  Item: {
    maxWidth: 340,
    width: '100%',
    // marginTop: '4%',
    // marginBottom: '5%',
    margin:'4% auto 5% auto'
  },

  Paper: {
    width: '100%',
    height: '70vh',
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    position: 'relative',
  },
  infoBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  Accordion: {
    backgroundColor: 'rgba(245,245,245,0.6)',
  },

  AccordionContent: {},
  AccordionDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  Name: { fontWeight: 600 },
  Age: { alignItems: 'center' },
  Tags: {
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  TagsLang: {
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));
