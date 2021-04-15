import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  MainPrice: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    textShadow: '-1px 1px 10px rgba(0,0,0,0.90)',
  },
  SecondaryPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textShadow: '-1px 1px 10px rgba(0,0,0,0.90)',
  },
  sectionTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 15,
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1px 5px',
  },
  infoBox: {
    display: 'flex',
    alignItems: 'center',
  },
  infoTitle: {
    color: '#888',
    fontWeight: 500,
    marginRight: 5,
    fontSize: 14,
  },
  infoText: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  mapContainer: {
    width: '100%',
    height: '100%',
  },
  map: {
    height: '100%',
  },
  NavControl: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  infoBoxContacts: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon:{
    width:40,
    height:40,
  }
}));
