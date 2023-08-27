import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import {Landing} from "./components"
import { OrbitControls, ScrollControls } from '@react-three/drei'

function App() {

  return (
    <div className="app">
      <Canvas style={{height:"100vh"}}>
        <ScrollControls pages={0}>
        <OrbitControls
          enableZoom={false}
          minAzimuthAngle={-Math.PI / 6}
          maxAzimuthAngle={Math.PI / 6}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI - Math.PI / 4}
        />
        <color attach="background" args={["gray"]}/>
        <Landing/>
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App
