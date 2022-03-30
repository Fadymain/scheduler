import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss"
import PropTypes from 'prop-types';

export default function InterviewerList(props) {

  InterviewerList.propTypes = {
    interviewers: PropTypes.array.isRequired
  };

  const interviewers = props.interviewers.map(({id, name, avatar,}) => 
    <InterviewerListItem 
    key={id} 
    name={name} 
    avatar={avatar} 
    selected={id === props.value} 
    setInterviewer={() => props.onChange(id)}
    />
  )


  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  )

}