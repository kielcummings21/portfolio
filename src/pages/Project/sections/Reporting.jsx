import styled from 'styled-components'

import colors from '../../../utils/colors'

const Reporting = ({ description, image }) => {
  return (
    <Wrapper data-scroll-section>
      <Title>Enhanced Reporting</Title>
      <Description>{description}</Description>
      <Img src={image} alt="Case Study Image" />
    </Wrapper>
  )
}

export default Reporting

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;

  padding-left: 6.944vw;
  padding-right: 6.944vw;
`

const Title = styled.h3`
  font-family: Arras;
  font-style: normal;
  font-weight: normal;
  font-size: 6.667vw;
  line-height: 90%;
  letter-spacing: -0.02em;

  color: #AFB1B0;

  margin-bottom: 3.472vw;
`

const Description = styled.p`
  font-family: Lazzer TRIAL, sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 140%;
  letter-spacing: -0.01em;
  color: #AFB1B0;
  
  font-size: 1.667vw;
  margin-left: 21.875vw;
  width: 35vw;
  margin-bottom: 5.556vw;
`

const Img = styled.img`
  box-sizing: border: box;
  position: relative;
  
  width: 70.972vw;
  height: 44.722vw;
  align-self: flex-end;

  &[alt]::after {
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
