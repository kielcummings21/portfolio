import styled from 'styled-components'

import colors from '../../../utils/colors'

const Hero = ({ title, type, image }) => {
  return (
    <Wrapper data-scroll-section>
      <SideTitle>{title}</SideTitle>
      <Type>
        <span>Project Type:&nbsp;</span>
        <p>{type}</p>
      </Type>
      <Title>{title}</Title>
      <Img src={image} alt="Case Study Image"/>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-top: 13.472vw;
  padding-left: 6.944vw;
  padding-right: 6.944vw;
  padding-bottom: 6.25vw;
`

const Type = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: Lazzer TRIAL, sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 90%;
  letter-spacing: -0.01em;
  
  font-size: 1.667vw;
  margin-bottom: 2.083vw;

  span {
    color: ${colors.green};
  }

  p {
    color: ${colors.lightGray};
  }
`

const Title = styled.h1`
  font-family: Arras;
  font-style: normal;
  font-weight: normal;
  line-height: 90%;
  letter-spacing: -0.02em;
  background: linear-gradient(to bottom, #DAD9D1, #000000);
	-webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 12.5vw;
  margin-bottom: 2.639vw;
`

const Img = styled.img`
  position: relative;
  width: 100%;
  height: 44.722vw;
  border: none;

  &[alt]::after {
    display: block;
    position: absolute;
    background-color: #292929;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;


    font-family: Coanda TRIAL, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 1.667vw;
    line-height: 90%;
    letter-spacing: -0.01em;
  
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    content: attr(alt);
  
    color: #91F14A;
  }
`

const SideTitle = styled.h2`
  position: absolute;
  z-index: -1;
  left: -50vw;
  top: 48vw;
  transform: rotate(90deg);

  -webkit-text-stroke: 1px transparent;
	background: linear-gradient(to bottom, #AEB0AF, #000000);
  color: black;
  -webkit-background-clip: text;

  font-family: Arras;
  font-style: normal;
  font-weight: normal;
  font-size: 41.667vw;
  line-height: 90%;  
  letter-spacing: -0.02em;
`
