import React, {useEffect,useState} from 'react'
import "./Results.css"
import {Loader, MainCard} from ".."

const Results = ({showResults}) => {
        const [loader,setLoader] = useState(true)

    useEffect(()=>{
        if(!showResults)return;
            setTimeout(()=>{
                setLoader(false)
                console.log("setTimeout fired!")
            },2000)
    },[showResults])

    
  return (
    <div className={showResults ? `results-parent show` : 'results-parent'}>
    
      
        <Loader loader={loader}/>
        <MainCard loader={loader}/>

    </div>
  )
}

export default Results