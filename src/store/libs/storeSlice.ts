import moment, {Moment} from 'moment'
import { createSlice, current } from '@reduxjs/toolkit';
import { time } from 'console';


export interface DateType {
  date: String,
  events: EventType[]
}
interface EventType {
  time: String,
  event: String
}

const initialState: DateType[] = [
  {
    date: moment().format('L'),
    events: [{
      time: '16:00',
      event: 'Test'
    }]
  }

]

const timeLineSlice = createSlice({
  name: 'Timelines',
  initialState,
  reducers:{
    addEventTimeline: (state = initialState , action)  => {
      const timelines = current(state)
      const addDate = action.payload.date
      const addTime = action.payload.time
      const checkDate = timelines.find(timeline => timeline.date === addDate)
      if (!checkDate) {
        const preData = [{
          date: addDate,
          events: [{
            time: addTime,
            event: action.payload.event
          }]
        }]
        const pre = [...preData, ...timelines]
        const sortDate = pre.sort((a,b) => <any>moment(a.date).format('YYYYMMDD') - <any>moment(b.date).format('YYYYMMDD'))
        return [...sortDate]
        
      }
      else {
        const event = {
          time: addTime,
          event: action.payload.event
        }
        const data ={
          events: [...checkDate.events, event]
        }
        const sortTime =  {events: data.events.sort((a,b) => a.time.localeCompare(b.time))}
        const d = [{
          ...checkDate,
          ...sortTime
        }]
        const result = timelines.map(time => d.find(o => o.date === time.date)|| time)
        return result
      }
    },
    deleteEventTimeline: (state, action) => {
      console.log('action', action);
      
      return [...state]
    }
  }
})

export const { addEventTimeline, deleteEventTimeline } = timeLineSlice.actions
export const getTimeline = (state:any) => state.Timelines; 

export default timeLineSlice.reducer;