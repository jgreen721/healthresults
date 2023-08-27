import React from 'react'
import "./Loader.css"

const Loader = ({loader}) => {
  return (
    <div className={loader ? "loader-parent" : "loader-parent hide"}>
      <div className="loader-div">
        <div className="spinner spinner-one"></div>
        <div className="spinner spinner-two"></div>
        <div className="spinner spinner-three"></div>
        <h2>Loading...</h2>
      </div>
    </div>
  )
}

export default Loader