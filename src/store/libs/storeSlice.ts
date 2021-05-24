import moment from 'moment'
import { createSlice, current } from '@reduxjs/toolkit';


export interface DateType {
  date: String,
  events: EventType[]
}
interface EventType {
  time: String,
  event: String,
  created: String
}

const initialState: DateType[] = [];

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
            event: action.payload.event,
            created: moment().format()
          }]
        }]
        const pre = [...preData, ...timelines]
        const sortDate = pre.sort((a,b) => (moment(a.date).format('YYYYMMDD') as any) - <any>moment(b.date).format('YYYYMMDD'))
        return [...sortDate]
        
      }
      else {
        const event = {
          time: addTime,
          event: action.payload.event,
          created: moment().format()
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
      const payload = action.payload
      const timelines = current(state)
      const filterDay =  timelines.filter(timeline => timeline.date !== payload.date)
      const checkDate = timelines.find((timeline) => timeline.date === payload.date)
      if (checkDate) {
        const checkTime = checkDate.events.filter(event =>  event.created !== payload.event.created || event.time !== payload.event.time )
        console.log('checkTime', checkTime);
        if (checkTime.length > 0) {
          const newData = {events : [...checkTime]}
          const result = {
            ...checkDate,
            events: [...newData.events]
          }
          const dataReturn = [...filterDay, result]
          return [...dataReturn]
        }
        else {
          console.log('filterDay',filterDay);
          return [...filterDay]
        }
      }
      return [...state]
    }
  }
})

export const { addEventTimeline, deleteEventTimeline } = timeLineSlice.actions
export const getTimeline = (state:any) => state.Timelines; 

export default timeLineSlice.reducer;