import React from 'react';
import { Timeline,TimelineOppositeContent, TimelineItem,TimelineSeparator,TimelineDot,TimelineConnector ,TimelineContent} from '@material-ui/lab'
import CloseIcon from '@material-ui/icons/Close';
import { TimeLineStyled, TimelineDate } from './styles';

const TimelineUI = () => {
  return (
    <TimeLineStyled>
      <div className="title">
        <h1>Timeline</h1>
        <div className="title-detail">
          <span>ผู้ป่วยหญิง อายุ 23 ปี</span> 
          <p>อาชีพ ค้าขาย</p>
        </div>
      </div>
      <Timeline >
        <TimelineItem>
          <TimelineOppositeContent style={{ flex: 0.1}}>
            <span className="date">01/03/2564</span>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot   />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineDate style={{ width: '100%', padding: '15px'}}>
              <div className="event">
                <p><span>16:00</span>สวดมนต์ข้ามคืนสวดมนต์ข้ามคืนสวดมนต์ข้ามคืนสวดมนต์ข้ามคืนสวดมนต์ข้ามคืนสวดมนต์ข้ามคืนสวดมนต์ข้ามคืนสวดมนต์ข้ามคืนสวดมนต์ข้ามคืน</p>
                <CloseIcon fontSize="small" />
              </div>
              <div className="event">
                <p><span>16:00</span>สวดมนต์ข้ามคืนสวดมนต์ข้ามคืนสวดมนต์ข้ามคืนสวดมนต์ข้ามคืนสวดมนต์ข้ามคืนสวดมนต์ข้ามคืนสวดมนต์ข้ามคืนสวดมนต์ข้ามคืนสวดมนต์ข้ามคืน</p>
                <CloseIcon fontSize="small" />
              </div>
              <p><span className="time">16:00</span>สวดมนต์ข้ามคืน</p>
              <p><span>16:00</span>สวดมนต์ข้ามคืน</p>
              <p><span>16:00</span>สวดมนต์ข้ามคืน</p>
              <p><span>16:00</span>สวดมนต์ข้ามคืน</p>
              <p><span>16:00</span>สวดมนต์ข้ามคืน</p>
            </TimelineDate>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </TimeLineStyled>
  )
}

export default TimelineUI;