import React, { useState } from 'react';
import { Grid } from '@material-ui/core'

import Form from './components/Form/Form';
import TimelineUI from './components/Timeline/Timeline'

interface ProfileI {
  sex: string,
  age: number,
  job: string
}


function App() {
  const [profile, setProfile] = useState<ProfileI>({
    sex: '',
    age: 0,
    job: ''
  })

  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Form profile={profile} setProfile={setProfile} />
        </Grid>
        <Grid item xs={12} md={7} >
          <TimelineUI profile={profile} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;



