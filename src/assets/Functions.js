import moment from 'moment'

// formats date to store in database
// dateState: Date object (example: 1928-03-25T13:40:00)
// hour: int (example: 24)
// minute: int (example: 60)
export const dbDateFormat = (dateState, hour, minute) => {
   return moment(dateState).format(`YYYY-MM-DDT${hour}:${minute}`)
}

// formats date
// dateState: Date object (example: 1928-03-25T13:40:00)
// formatMethod: string (example: MMMM Do YYYY)
export const dateFormat = (dateState, formatMethod) => {
   return moment(dateState).format(formatMethod)
}

// loops from 0 to specified int to create values and returns as an object
// PARAMS time: int (example: 60)
export const createTimes = (time) => {
   const timeList = [];

   for(var i = 0; i < time; i++) {
      var timeObj = {};

      if (i < 10) {
         timeObj['value'] = `0${i}`;
      } else {
         timeObj['value'] = i;
      }
      timeList.push(timeObj);
   }
   return timeList
}
