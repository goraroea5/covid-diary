import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { Timeline ,TimelineOppositeContent, TimelineItem,TimelineSeparator,TimelineDot,TimelineConnector ,TimelineContent } from '@material-ui/lab'
import { deleteEventTimeline, getTimeline } from '../../store/libs/storeSlice'
import CloseIcon from '@material-ui/icons/Close';
import { TimeLineStyled, TimelineDate } from './styles';

const TimelineUI:React.FC = () => {
  const timelines = useSelector(getTimeline)
  const dispatch = useDispatch()
  console.log('timelines',timelines);
  
  const handleDeleteEvent= (timeline:any, time:any) => {
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
        <div className="title-detail">
          <h3>ผู้ป่วยหญิง อายุ 23 ปี</h3> 
          <p>อาชีพ ค้าขาย</p>
        </div>
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
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <TimelineDate style={{ width: '100%', padding: '15px'}}>
                  {
                    timeline.events.map((event: any) => {
                      return (
                        <div className="event" key={event.created}>
                          <p><span>{event.time}</span>{event.event}</p>
                          <CloseIcon className="icon" fontSize="small" onClick={() => handleDeleteEvent(timeline, event)} />
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