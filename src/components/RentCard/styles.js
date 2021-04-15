import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  root: {
    maxWidth: 350,
  },
  image: {
    height: 200,
    position: 'relative',
  },
  textBox: {
    position: 'absolute',
    width: '100%',
    opacity: 0.5,
    padding: '0px 10px',
    top: 10,
  },
  textTitle: {
    padding: '5px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  priceBox: {
    position: 'absolute',
    bottom: 5,
    right: 10,
    display: 'flex',
  },
  textPricePrimery: {
    fontWeight: 'bold',
    fontSize: 28,
    color: 'white',
    textShadow: '-1px 1px 10px rgba(0,0,0,0.90)',
  },
  textPriceSecondary: {
    fontWeight: 'bold',
    fontSize: 13,
    color: 'white',
    textShadow: '-1px 1px 10px rgba(0,0,0,0.90)',
    // alignSelf:'flex-end'
    // alignSelf:'flex-start'
  },
  iconPrice: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
  fees: {
    position: 'absolute',
    bottom: -10,
    right: '4%',
  },
  feesText: {
    fontSize: 11,
    fontWeight: 600,
    color: 'red',
    padding: '0px 5px',
  },
  row: {
    padding: '2px 0px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  descrBox: {
    display: 'flex',
    alignItems: 'center',
  },
  descrTitle: {
    fontWeight: 'bold',
    marginRight: 7,
    fontSize: 13,
    color: '#888',
  },
  descrText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  iconsRow: {
    display: 'flex',
    alignItems: 'center',
  },
}));
