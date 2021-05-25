import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { Timeline, TimelineOppositeContent, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@material-ui/lab'
import { deleteEventTimeline, getTimeline } from '../../store/libs/storeSlice'
import CloseIcon from '@material-ui/icons/Close';
import { Grid } from '@material-ui/core'
import { TimeLineStyled, TimelineDate } from './styles';

interface Props {
  profile: {
    sex: string,
    age: number,
    job: string
  }
}

const TimelineUI = (props: Props): JSX.Element => {
  const { sex, age, job } = props.profile
  const timelines = useSelector(getTimeline)  
  const dispatch = useDispatch()
  const handleDeleteEvent = (timeline: any, time: any) => {
    const sendToReducer = {
      date: timeline.date,
      event: time
    }
    dispatch(deleteEventTimeline(sendToReducer))
  }

  return (
    <TimeLineStyled>
      <div className="title">
        <h1>Timeline</h1>
        <Grid container justify="center">
          <Grid item xs={10} md={6} lg={6} className="title-detail">
            <h3>ผู้ป่วย { sex ? sex : "-" } อายุ { age } ปี</h3>
            <p>อาชีพ { job }</p>
          </Grid>
        </Grid>
      </div>
      <Timeline>
        {
          timelines.map((timeline: any) => {
            return (
              <TimelineItem key={timeline.date}>
                <TimelineOppositeContent style={{ flex: 0.2 }}>
                  <span className="date">{moment(timeline.date).format('DD/MM/YYYY')}</span>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <TimelineDate style={{ width: '100%', padding: '15px' }}>
                    {
                      timeline.events.map((event: any) => {
                        return (
                          <div className="event" key={event.created}>
                            <p><span>{event.time}</span>{event.event}</p>
                            <CloseIcon style={{ fontSize: 30, fontWeight: 400 }} className="icon" fontSize="small" onClick={() => handleDeleteEvent(timeline, event)} />
                          </div>
                        )
                      })
                    }
                  </TimelineDate>
                </TimelineContent>
              </TimelineItem>
            )
          })
        }
      </Timeline>
    </TimeLineStyled>
  )
}

export default TimelineUI;