import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'
import {memoryIcon,reactionIcon,verbalIcon,visualIcon} from "../../const"
import gsap from "gsap"
import CountUp from "react-countup"
import "./MainCard.css"



const MainCard = ({loader}) => {
    const [showStats,setShowStats] = useState(false);
    const data=[
        {id:1,title:"Reaction",icon:reactionIcon,grade:80,color:"red"},
        {id:2,title:"Memory",icon:memoryIcon,grade:92,color:"yellow"},
        {id:3,title:"Verbal",icon:verbalIcon,grade:61,color:"green"},
        {id:4,title:"Visual",icon:visualIcon,grade:72,color:"blue"},
      ]
      const tl = useRef();

      useEffect(()=>{
        if(loader)return;
        setTimeout(()=>setShowStats(true),1500)
      },[loader])



      useLayoutEffect(()=>{
          tl.current = gsap.timeline();
if(!loader){
           tl.current.to(".summary-item",{x:0,stagger:.2})
           tl.current.to(".summary-grade",{y:0,stagger:.2,ease:"Bounce.easeOut"})
}
      },[loader])
  return (
    <div className={loader ? "main-card-parent" : "main-card-parent rise"}>
    <section className="main-card">
      <div className="card-column">
<h4 className="results-h4 muted">Your Results</h4>
<div className="grade-circle">
  <div className="grade-circle-content">
    <h1>{showStats ? <CountUp end="76" duration="2"/> : "??"}</h1>
    <p className="muted">of 100</p>
  </div>
</div>

<h3 className={showStats ? "results-status" : "hide-results"}>Great</h3>
<p className={showStats ? "muted bold results-summary" : "muted bold hide-summary"}>You scored higher than 65% of the people who have taken these tasks.</p>

      </div>
      <div className="card-column">
<div className="summary-container">
  <h3 className="summary-h5">Summary</h3>
  <ul className="summary-list">
    {data.map(d=>(
      <li className={`summary-item`} key={d.id}>
        <div className={`item-overlay bg-${d.color}`}></div>
        <div className="item-content">
        <div className="summary-item-column">
        <div className="logo-div">
          <img src={d.icon} alt="" />
        </div>
        <h5 className={`summary-title text-${d.color}`}>{d.title}</h5>
        </div>
        {/* <div className="summary-item-column"> */}
          <h4 className="summary-grade"> <span>{showStats ? <CountUp end={d.grade} duration="2"/>  : "??"} </span><span className="muted"> / 100</span> </h4>
        {/* </div> */}
        </div>
      </li>
    ))}
  </ul>
  <button className="continue-btn btn">{showStats ? "Continue" : "Show My Stats"}</button>
</div>
      </div>
    </section>
    </div>
  )
}

export default MainCard