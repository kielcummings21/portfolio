import React, { useRef, Suspense } from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

import '../../../materials/grain'

const GrainyPortrait = ({ img }) => {
  return (
    <Suspense fallback={null}>
      <Canvas>
        <Plain img={img}/>
      </Canvas>
    </Suspense>
  )
}

export default GrainyPortrait


const Plain = ({ img }) => {

  const tex = useTexture(img);
  const material = useRef();


  return (
    <mesh>
      <planeGeometry arg={[502, 502]} scale={10}/>
      <grainMaterial map={tex} delta={0} ref={material} />
    </mesh>
  );
}
