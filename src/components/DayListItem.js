import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  console.log("props", props);
  const {name, spots, selected, setDay} = props;
  let dayClass = classNames("day-list__item", {
    "day-list__item--selected ": selected,
    "day-list__item--full": spots === 0
 });

 const formatSpots = function (spots) {
   if (spots === 0) {
      return "no spots remaining";
   }

   if (spots === 1) {
     return "1 spot remaining";
   }
   return `${spots} spots remaining`;
 }


  return (
    <li data-testid={name} className={dayClass} onClick={() => setDay(name)}>
      <h2 className="text--regular">{name}</h2> 
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  );
}