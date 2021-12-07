import React from 'react'
import './weather.css'

const Form = (props) => {
  return (
    <div className='container'>
      <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadweatherdetails}>
      <h1>Search another city</h1>
        <div className='row'>
          <div className='col-md-3'>
            <input
              type='text'
              className='form-control'
              name='city'
              autoComplete='off'
              placeholder='Enter City'
            ></input>
          </div>
          <div className='col-md-3 mt-md-0 text-md-left'></div>
          <button className='btn btn-primary'>Get Weather!</button>
        </div>
      </form>
    </div>
  )
}
function error() {
  return (
    <div className='alert alert-danger mx-5' role='alert'>
      Enter Valid City Name
    </div>
  )
}

export default Form;
