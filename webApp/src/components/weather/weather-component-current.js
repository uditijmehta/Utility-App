import React from 'react'
import './weather.css'

const weather = (props) => {
  return (
    <div>
      <div className='current'>
        <div className='cards'>
          <h1>{props.city}</h1>
          <i className={`wi ${props.favicon} display-1`}></i>
          <h4>
            {props.cel ? <h1 className='py-2'>{props.cel}&deg;</h1> : null}
          </h4>
          {minmaxtemp(props.min, props.max)}
          <h4 className='py-3'>{props.description}</h4>
        </div>
      </div>
    </div>
  )
}

function minmaxtemp(min, max) {
  if (min && max) {
    return (
      <h4>
        <span className='px-4'>{min}&deg;</span>
        <span className='px-4'>{max}&deg;</span>
      </h4>
    )
  }
}

export default weather;
