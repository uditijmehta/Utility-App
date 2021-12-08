import React, { useState } from 'react'
import Navbar from './News/Navbar'
import News from './News/News'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LoadingBar from "react-top-loading-bar"

const NewsApp = ()=>{
  const pageSize = 6
  const apiKey= "3b9bd2d9deec40548561c6e9d8d7ccd6"

  const [progressBar, setProgressBar] = useState(0)
  const setProgress = (progress)=>{
    setProgressBar(progress)
  }
    return (
      <>
       
      </>
    )
}

export default NewsApp
