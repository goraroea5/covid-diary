import React, {useState, FormEvent} from 'react';
import { useDispatch } from 'react-redux'
import moment, {Moment} from 'moment'
import { addEventTimeline } from '../../store/libs/storeSlice'
import {Grid, Button} from '@material-ui/core';
import {Add} from '@material-ui/icons';

import { FromTimeLine, StyledTextField, StyledDatepicker } from './styles';

const DetailTimeLine = () :JSX.Element=> {
  const dispatch = useDispatch()
  const [date, setDate] = useState<Moment | null>(moment())
  const [event, setEvent] = useState<String>('')
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setEvent('')
    const payload = {
      date: date?.format('L'),
      time: date?.format('HH:mm'),
      event: event
    }
    dispatch(addEventTimeline(payload))
  }

  return (
    <FromTimeLine>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <Grid spacing={2} justify="space-between" container >
            <Grid item xs={12}>
              <h3>ข้อมูลไทมไลน์</h3>
            </Grid>
            <Grid item xs={12} >
              <label>วันเวลา</label>
              <StyledDatepicker
                fullWidth
                name="date"
                ampm={false}
                value={date}
                onChange={(newValue) => setDate(newValue)}
                onError={console.log}
                format="DD/MM/yyyy HH:mm"
              />
            </Grid>
            <Grid item xs={12}>
              <label>รายละเอียดเพิ่มเติม</label>
              <StyledTextField
                fullWidth
                multiline
                rows={11}
                rowsMax={25}
                name="event"
                value={event}
                onChange={(e) => setEvent(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} >
              <Button type="submit" variant="contained" color="primary" fullWidth startIcon={<Add />}>เพิ่มข้อมูล</Button>
            </Grid>
          </Grid>
        </div>
      </form>
    </FromTimeLine>
  )
}

export default DetailTimeLine;