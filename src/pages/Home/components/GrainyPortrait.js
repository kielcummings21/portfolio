import React, { useRef, Suspense } from 'react'
import styled from 'styled-components'

import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { useTexture } from '@react-three/drei'

import '../../../materials/grain'

const GrainyPortrait = ({ img }) => {
  return (
    <StyledCanvas orthographic dpr={2} resize={{scroll: false}}>
      <Suspense fallback={<></>}>
        <Plain img={img}/>
      </Suspense>
    </StyledCanvas>
  )
}

export default GrainyPortrait


const Plain = ({ img }) => {
  const { viewport, gl } = useThree();

  let composer = new EffectComposer(gl)

  const getSize = (contDim, imgDim) => {
    const size = viewport.width * (imgDim / contDim)
    return size
  }

  const texture = useTexture(img);
  const material = useRef();

  const size = getSize(502, 502)

  

  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[size, size]} scale={1}/>
      <grainMaterial 
        map={texture} 
        ref={material} 
      />
    </mesh>
  );
}

const StyledCanvas = styled(Canvas)`
  overflow: hidden;
  height: 100%;
  width: 100%;
`