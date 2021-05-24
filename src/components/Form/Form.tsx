import React, { useState } from 'react';
import { Grid } from '@material-ui/core'

import DetailForm from './DetailForm';
import DetailTimeline from './DetailTimeline';

const Form = (props: any): JSX.Element => {

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item xs={12}>
        <DetailForm profile={props.profile} />
      </Grid>
      <Grid item xs={12}>
        <DetailTimeline />
      </Grid>
    </Grid>
  )
}


export default Form;