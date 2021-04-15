import React, { Component, useState, useEffect } from 'react';
import { Container,Paper, Grid } from '@material-ui/core';
import {} from '@material-ui/icons';
import RentCard from '../../components/RentCard/RentCard'
import makeStyles from './styles';

const RentsPage = () => {
  const classes = makeStyles();
  return (
    <Container className={classes.root}>
      <Grid container justify='space-between' alignItems='stretch' spacing={3}>
      <RentCard/>
      <RentCard/>
      <RentCard/>
      </Grid>
    </Container>
  );
};

export default RentsPage;