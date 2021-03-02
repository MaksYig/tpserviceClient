import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  reviewSwiperContainer: {
    paddingBottom: 3,
    paddingTop: 3,
    paddingLeft: 2,
    paddingRight: 2,
  },
  media: {
    // height: '60%',
    paddingTop: '56.25%', // 16:9
  },
  SlideTextBox: {
    transform: 'translateX(-50%)',
  },
  Rating:{
    marginBottom:0,
  },
}));
