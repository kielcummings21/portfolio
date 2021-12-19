import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import styled from 'styled-components'

import colors from '../utils/colors'

const InkBlob = () => {
  const dots = useRef([])
  const wrapperRef = useRef(null)

  class Dot {
    constructor(index = 0, width) {
      this.index = index;
      this.anglespeed = 0.05;
      this.x = 0;
      this.y = 0;
      this.scale = 1 - 0.05 * index;
      this.range = width / 2 - width / 2 * this.scale + 2;
      this.limit = width * 0.75 * this.scale;
      this.element = document.createElement("span");
      gsap.set(this.element, {scale: this.scale});
      wrapperRef.current.appendChild(this.element);
    }
  
    lock() {
      this.lockX = this.x;
      this.lockY = this.y;
      this.angleX = Math.PI * 2 * Math.random();
      this.angleY = Math.PI * 2 * Math.random();
    }
  
    draw() {
      if (!idle.current || this.index <= sineDots) {
        gsap.set(this.element, {x: this.x, y: this.y});
      } else {
        this.angleX += this.anglespeed;
        this.angleY += this.anglespeed;
        this.y = this.lockY + Math.sin(this.angleY) * this.range;
        this.x = this.lockX + Math.sin(this.angleX) * this.range;
        gsap.set(this.element, {x: this.x, y: this.y});
      }
    }
  }

  const mousePosition = useRef({x: 0, y: 0})
  const lastFrame = useRef(0)
  const idle = useRef(false)
  const [amount] = useState(20)
  const [width] = useState(45)
  const [sineDots] = useState(Math.floor(amount * 0.3))

  useEffect(() => {
    buildDots(amount, width)
    render()
    idle.current = true;
    for (let dot of dots.current) {
      dot.lock();
    }
  }, [])

  const buildDots = (amount, width) => {
    let newDots = []

    for (let i = 0; i < amount; i++) {
      let dot = new Dot(i, width);
      newDots.push(dot);
    }

    dots.current = newDots
  }

  const positionCursor = (delta) => {
    let x = mousePosition.current.x;
    let y = mousePosition.current.y;

    dots.current.forEach((dot, index, dots) => {
      let nextDot = dots[index + 1] || dots[0];
      dot.x = x;
      dot.y = y;
      dot.draw(delta);

      if (!idle.current || index <= sineDots) {
        const dx = (nextDot.x - dot.x) * 0.35;
        const dy = (nextDot.y - dot.y) * 0.35;
        x += dx;
        y += dy;
      }
    });
  };

  const render = timestamp => {
    const delta = timestamp - lastFrame.current;
    positionCursor(delta);
    lastFrame.current = timestamp;
    window.requestAnimationFrame(render);
  };

  return (
    <>
      <SVG xmlns="http://www.w3.org/2000/svg" version="1.1" width="800">
        <defs>
          <radialGradient id="paint0_radial_17_2731" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(63 63) rotate(90) scale(63)">
            <stop stopColor="#91F14A"/>
            <stop offset="0.11525" stopColor="#91F14A" stopOpacity="0.991615"/>
            <stop offset="0.204008" stopColor="#91F14A" stopOpacity="0.967585"/>
            <stop offset="0.270787" stopColor="#91F14A" stopOpacity="0.9296"/>
            <stop offset="0.320097" stopColor="#91F14A" stopOpacity="0.879348"/>
            <stop offset="0.356451" stopColor="#91F14A" stopOpacity="0.818519"/>
            <stop offset="0.38436" stopColor="#91F14A" stopOpacity="0.7488"/>
            <stop offset="0.408337" stopColor="#91F14A" stopOpacity="0.671881"/>
            <stop offset="0.432893" stopColor="#91F14A" stopOpacity="0.589452"/>
            <stop offset="0.462541" stopColor="#91F14A" stopOpacity="0.5032"/>
            <stop offset="0.501791" stopColor="#91F14A" stopOpacity="0.414815"/>
            <stop offset="0.555156" stopColor="#91F14A" stopOpacity="0.325985"/>
            <stop offset="0.627147" stopColor="#91F14A" stopOpacity="0.2384"/>
            <stop offset="0.722277" stopColor="#91F14A" stopOpacity="0.153748"/>
            <stop offset="0.845058" stopColor="#91F14A" stopOpacity="0.0737185"/>
            <stop offset="1" stopColor="#91F14A" stopOpacity="0"/>
          </radialGradient>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
        </defs>
      </SVG>
      <Wrapper ref={wrapperRef}>

      </Wrapper>
    </>
  )
}

export default InkBlob

const SVG = styled.svg`
  position: absolute;
`

const Wrapper = styled.div`
  pointer-events: none;
  position: absolute;
  display: flex;
  border-radius: 0;
  transform-origin: center center;
  top: 99vw;
  right: 32vw;
  z-index: 1000;
  filter: url("#goo");

  p {
    position: absolute;
    color: black;
  }

  span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13.333vw;
    height: 13.333vw;
    border-radius: 50%;
    background-color: ${colors.green};
    transform-origin: center center;
    transform: translate(-50%, -50%);
    font-family: Arras;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 14px;
    

    color: #000000;
  }
`
