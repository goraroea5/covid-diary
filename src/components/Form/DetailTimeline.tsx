import React from 'react';
import {Grid, TextField, Button} from '@material-ui/core'
import {Add} from '@material-ui/icons';

import { FromTimeLine } from './styles';

const detailTimeLine = () => {
  return (
    <FromTimeLine>
      <div className="container">
        <h3>ข้อมูลไทมไลน์</h3>
        <Grid spacing={4}  container>
          <Grid item xs={12} >
            <label>วันเวลา</label>
            <TextField
              fullWidth
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <label>รายละเอียดเพิ่มเติม</label>
            <TextField
              fullWidth
              multiline
              rows={6}
              rowsMax={20}
            />
          </Grid>
        </Grid>
      </div>
      <Button variant="contained" startIcon={<Add />} >เพิ่มข้อมูล</Button>
    </FromTimeLine>
  )
}

export default detailTimeLine;