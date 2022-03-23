import React from "react";
import DayListItem from "./DayListItem";


export default function DayList({days, day, setDay}) {
  const dListItem = days.map(({id, name, spots}) =>
    
    <DayListItem key={id} name={name} spots={spots} selected={name === day} setDay={setDay} />
  )

  return (
    <ul>{dListItem}</ul>
  )

}