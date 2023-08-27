import React, {useRef, useState} from 'react'
import {Text,Sphere, useGLTF,Box,Scroll} from "@react-three/drei"
import * as THREE from "three";
import {LayerMaterial,Gradient} from "lamina"
import { useFrame, useThree } from '@react-three/fiber';
import {Results} from ".."



const Brain = ()=>{
  const brain = useGLTF("brain.glb")
  const brainRef = useRef();


  useFrame(()=>{
    brainRef.current.rotation.y += .01;
  })

  return (
    <group ref={brainRef}>
      <primitive scale={.008} object={brain.scene}/>
   
    </group>
  )
}

const Landing = () => {
    const sphereRef = useRef();
    const textRef = useRef();
    const textBottomRef = useRef();
    const {camera} = useThree();
    const [showResults,setShowResults] = useState(false)

    console.log(camera)

    useFrame(()=>{
        if(textRef.current.position.y < 2){
            textRef.current.position.y+=.02;
            camera.position.y+=.012;
            textBottomRef.current.position.y += .02;
        }
    })

  return (
    <>
      <Sphere ref={sphereRef} scale={20}>
    <LayerMaterial
         lighting="physical"
         transmission={.2}
         side={THREE.BackSide}>
         <Gradient colorA={"hsla(252, 100%, 67%, 1)"} colorB={"white"} axes={"y"} start={0} end={-.5}/>
        </LayerMaterial>    
    </Sphere>  
    <ambientLight intensity={1}/>
    <pointLight position={[0,-1,0]}/>
    <directionalLight position={[0,2,0]}/>
    <Brain/>
     <Text ref={textRef} fontSize={.4}>
        Brain Benchmark
    </Text> 
    <Text fontSize={.2} position={[0,-.3,0]} ref={textBottomRef} letterSpacing={.2}>
      Measure your skills
    </Text>
<Scroll html>
  <div className={showResults ? "scroll-landing-overlay slide" : "scroll-landing-overlay"}>
    <button onClick={()=>setShowResults(true)} className="results-btn">
  Click for Results
  </button>
  </div>
  <Results showResults={showResults}/>
</Scroll>
    </>
  )
}

export default Landing