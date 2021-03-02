import React from 'react'
import {Box,Grid,Card, CardMedia,Typography} from '@material-ui/core'
import ReviewCard from '../../components/ReviewCard/ReviewCard'

export default function MyReview() {
  return (
    <Grid container spacing={2}>
      <ReviewCard/>
    </Grid>
  );
}
