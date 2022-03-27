//1) find  the day within our state
//2) get the value of appointment key in the day object
//3) loop array to check if id exist in appointment object, then push to array

export function getAppointmentsForDay(state, dayName) {
  const appForDay = [];

  const foundDay = state.days.find(({name}) => {
    return name === dayName
  })

  if (!foundDay) {
    return appForDay
  }

  foundDay.appointments.forEach(appointmentId => {
    if (state.appointments[appointmentId]) {
      appForDay.push(state.appointments[appointmentId])
    }
  })
  return appForDay
}

export function getInterview(state, interview) {
  
  if(!interview) {
    return null;
  }

  const interviewerId = interview.interviewer
  const obj = {
    student: interview.student,
    interviewer: state.interviewers[interviewerId]
  }
  return obj;
}

export function getInterviewersForDay(state, dayName) {
  const appForInterviewer = [];

  const foundDay = state.days.find(({name}) => {
    return name === dayName
  })

  if (!foundDay) {
    return appForInterviewer
  }

  foundDay.interviewers.forEach(interviewersId => {
    if (state.interviewers[interviewersId]) {
      appForInterviewer.push(state.interviewers[interviewersId])
    }
  })
  return appForInterviewer
}