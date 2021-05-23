import React from 'react';
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Timeline ,TimelineOppositeContent, TimelineItem,TimelineSeparator,TimelineDot,TimelineConnector ,TimelineContent } from '@material-ui/lab'
import { deleteEventTimeline, getTimeline } from '../../store/libs/storeSlice'
import CloseIcon from '@material-ui/icons/Close';
import { TimeLineStyled, TimelineDate } from './styles';

const TimelineUI = () => {
  const timelines = useSelector(getTimeline)
  console.log('timelines',timelines);

  interface timeline {
    
  }

  const deleteEventTimeline = (timeline:any, time:any) => {
    console.log(timeline,time);
    const sendToReducer = {
      date: timeline.date,
      time: time.time
    }
    console.log('sendToReducer',sendToReducer);
    
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
                        <div className="event">
                          <p><span>{event.time}</span>{event.event}</p>
                          <CloseIcon fontSize="small" onClick={() => deleteEventTimeline(timeline, event)} />
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