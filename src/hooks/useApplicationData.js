import axios from "axios";
import { useState, useEffect } from "react";


export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8001/api/days"),
      axios.get("http://localhost:8001/api/appointments"),
      axios.get("http://localhost:8001/api/interviewers"),
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }))
    })
  }, []);

  const setDay = day => setState({ ...state, day });


  function availableSpots(appointmentId, booked) {
    return state.days.map((day) => {
      const newDay = {...day}
      if (newDay.appointments.includes(appointmentId)) {
        let currentSpots = newDay.spots

        if (booked) {
          currentSpots -= 1;
        } else {
          currentSpots += 1;
        }
    
        newDay.spots = currentSpots
      }
      return newDay;
    })

    // let currentSpots = dayAppointment.spots

    // if (booked) {
    //   currentSpots -= 1;
    // } else {
    //   currentSpots += 1;
    // }

    // dayAppointment.spots = currentSpots

    // // setState(prev => ({...prev, days: [...state.days, dayAppointment]}))
    // return dayAppointment;
  }

  function cancelInterview(id) {


    const appointment = state.appointments[id];

    appointment.interview = null;

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = availableSpots(id, false);
    
    return axios.delete(`/api/appointments/${id}`)
      .then((response) => {
        setState({
          ...state,
          appointments,
          days
        });
      })
    




  }

  function bookInterview(id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = availableSpots(id, true);

    return axios.put(`/api/appointments/${id}`, { interview })
      .then((response) => {
        setState({
          ...state,
          appointments,
          days
        });
      })
    // .catch((err) => console.log("err", err))
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }
}

