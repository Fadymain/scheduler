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