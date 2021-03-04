import React from 'react'
import makeStyles from './Styles'
import {
  Box,
  Grid,
  Paper,
  Card,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Chip
} from '@material-ui/core';
import {InfoOutlined} from '@material-ui/icons'
import ImageAvatar from '../../components/Avatar/Avatar'
import WorkOutlinedIcon from '@material-ui/icons/WorkOutlined';

export default function DatingCard() {
  const classes = makeStyles();
  return (
    <Grid item className={classes.Item}>
      <Paper
        className={classes.Paper}
        elevation={3}
        style={{
          backgroundImage:
            'url("https://im.indiatimes.in/content/itimes/photo/2014/Aug/13/1407871069-bhavana-beautiful-indian-girl-android-wallpapers-actress.jpg?w=1400&h=2100&cc=1")',
        }}
      >
        <CardMedia />
        <Box className={classes.infoBox}>
          <Accordion className={classes.Accordion}>
            <AccordionSummary
              expandIcon={<InfoOutlined />}
              aria-controls='accordion-content'
              id='accordion-content'
            >
              <Box
                display='flex'
                alignItems='center'
                className={classes.AccordionContent}
              >
                <Typography
                  className={classes.Name}
                  variant='h5'
                  component='span'
                >
                  Yigal&nbsp;
                </Typography>
                {/* <Typography
                  className={classes.Age}
                  variant='body1'
                  component='span'
                >
                  {' '} 
                  22
                </Typography> */}
              </Box>
              <Box
                display='flex'
                alignItems='center'
                style={{ margin: '0px auto' }}
              >
                <WorkOutlinedIcon style={{ width: '15px', height: '15px' }} />
                &nbsp;&nbsp;
                <Typography component='span' variant='body2'>
                  Microsoft
                </Typography>
              </Box>
              <Box
                display='flex'
                alignItems='center'
                style={{ margin: '0px auto' }}
              >
                <ImageAvatar
                  size='small'
                  src='https://tpservice.herokuapp.com/public/img/flags/israel.svg'
                />
              </Box>
            </AccordionSummary>
            <AccordionDetails className={classes.AccordionDetails}>
              <Box>
                <Typography
                  component='span'
                  style={{ fontWeight: 600, fontSize: 12 }}
                >
                  About:&nbsp;&nbsp;
                </Typography>
                <Typography
                  component='span'
                  className={classes.UserDescription}
                  variant='body2'
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
              <Box
                display='flex'
                // justifyContent='center'
                flexWrap='wrap'
                alignItems='center'
                mb={1}
                className={classes.Tags}
              >
                <Typography style={{ fontWeight: 600, fontSize: 12 }}>
                  Interests:
                </Typography>
                <Chip size='small' label='Travel' color='primary' />
                <Chip size='small' label='Sea' color='primary' />
                <Chip size='small' label='Reading' color='primary' />
                <Chip size='small' label='Party' color='primary' />
                <Chip size='small' label='Party' color='primary' />
                <Chip size='small' label='Party' color='primary' />
                <Chip size='small' label='Party' color='primary' />
              </Box>
              <Box
                display='flex'
                // justifyContent='center'
                flexWrap='wrap'
                alignItems='center'
                mb={1}
                className={classes.TagsLang}
              >
                <Typography style={{ fontWeight: 600, fontSize: 12 }}>
                  Languages:
                </Typography>
                <Chip size='small' label='English' color='secondary' />
                <Chip size='small' label='Hebrew' color='secondary' />
                <Chip size='small' label='Russian' color='secondary' />
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Paper>
    </Grid>
  );
}