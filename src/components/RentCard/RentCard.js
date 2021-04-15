import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Paper,
  Grid,
  Box,
  Typography,
  CardActions,
  CardMedia,
  CardContent,
  Card,
  Button,
} from '@material-ui/core';
import {
  EuroOutlined,
  WifiOutlined,
  FlashOnRounded,
  OpacityRounded,
} from '@material-ui/icons';
import Chip from '@material-ui/core/Chip';

import makeStyles from './styles';

const RentCard = (props) => {
  const classes = makeStyles();




  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.image}
          image='https://i.pinimg.com/originals/40/91/5c/40915cb639023d77bfe8acaa9cd0f42e.jpg'
          title='Hello'
        >
          <Box className={classes.textBox}>
            <Paper>
              <Typography className={classes.textTitle}>
                Room in 3 rooms appartment
              </Typography>
            </Paper>
          </Box>
          <Box className={classes.priceBox}>
            <Typography className={classes.textPricePrimery}>350</Typography>
            <EuroOutlined className={classes.iconPrice} />
            <Typography className={classes.textPriceSecondary}>
              /month
            </Typography>
          </Box>
          <Box className={classes.fees}>
            <Paper>
              <Typography className={classes.feesText}>
                No agent fees
              </Typography>
            </Paper>
          </Box>
        </CardMedia>
        <CardContent>
          <Box className={classes.row}>
            <Box className={classes.descrBox}>
              <Typography className={classes.descrTitle}>Area:</Typography>
              <Typography className={classes.descrText}>
                Piraeus, Attika
              </Typography>
            </Box>
            <Box className={classes.descrBox}>
              <Typography className={classes.descrTitle}>Includes:</Typography>
              <Box className={classes.iconsRow}>
                <FlashOnRounded style={{ fontSize: 18 }} />
                <WifiOutlined style={{ fontSize: 18 }} />
                <OpacityRounded style={{ fontSize: 18 }} />
              </Box>
            </Box>
          </Box>
          <Box className={classes.row}>
            <Box className={classes.descrBox}>
              <Typography className={classes.descrTitle}>
                Avalible:
              </Typography>
              <Typography className={classes.descrText}>12/05/2021</Typography>
            </Box>
            <Box className={classes.descrBox}>
              <Typography className={classes.descrTitle}>Deposit:</Typography>
              <Typography className={classes.descrText}>
                1 month rent
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <CardActions>
          <NavLink
            to={{
              pathname: `/rent/hello`,
              // state: { id: tour._id },
            }}
          >
            <Button color='primary' fullWidth variant='contained'>
              <Typography>See Description</Typography>
            </Button>  
          </NavLink>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default RentCard;
