import React from 'react';
import { Grid } from '@material-ui/core'

import Form from './components/Form/Form';
import TimelineUI from './components/Timeline/Timeline'
import './App.css';

function App() {
  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12} md={5} >
          <Form />
        </Grid>
        <Grid item xs={12} md={7} >
          <TimelineUI />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
