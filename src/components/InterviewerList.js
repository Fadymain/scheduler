import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss"

export default function InterviewerList(props) {
  const interviewers = props.interviewers.map(({id, name, avatar,}) => 
    <InterviewerListItem 
    key={id} 
    name={name} 
    avatar={avatar} 
    selected={id === props.interviewer} 
    setInterviewer={() => props.setInterviewer(id)}
    />
  )


  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  )

}