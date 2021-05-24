import React, { useState } from 'react';
import { Grid } from '@material-ui/core'

import DetailForm from './DetailForm';
import DetailTimeline from './DetailTimeline';

const Form:React.FC =() => {
  const [profile, setProfile] = useState({
    sex: '',
    age: 0,
    job: ''
  })

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item xs={12}>
        <DetailForm />
      </Grid>
      <Grid item xs={12}>
        <DetailTimeline />
      </Grid>
    </Grid>
  )
}


export default Form;