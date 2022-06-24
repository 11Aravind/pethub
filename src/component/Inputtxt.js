import React from 'react'

export default function Inputtxt(props) {
  return (
<div className="single-input">
              <label htmlFor="Username">{props.label}</label>
              <input type={props.type} id="Username" />
              <small className={props.smallclass}>{props.small}  </small>
            </div>
  )
}

 