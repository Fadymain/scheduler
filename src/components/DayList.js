import React from "react";
import DayListItem from "./DayListItem";


export default function DayList(props) {
  const dListItem = props.days.map((dayL) =>
    
    <DayListItem name={dayL.name} spots={dayL.spots}/>
  )

  return (
    <ul>{dListItem}</ul>
  )

}