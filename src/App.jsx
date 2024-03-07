import React, { useState } from 'react'
import styled, {css} from 'styled-components';

export default function App() {

  // for 1st Bulb 
  let [btnText, setbtnText] = useState('OFF')
  let [bulbColor, setbulbColor] = useState('lightOn')

  // for 2nd Bulb 
  let [btnText2, setbtnText2] = useState('ON')
  let [bulbColor2, setbulbColor2] = useState('lightOff')

  const bulbToggle = ()=>{
  
    if (btnText === 'OFF') {
      setbtnText('ON');
      setbulbColor('lightOff')
    }else{
      setbtnText('OFF');
      setbulbColor('lightOn')
    }
  }

  const bulbToggle2 = ()=>{
  
    if (btnText2 === 'ON') {
      setbtnText2('OFF');
      setbulbColor2('lightOn')
    }else{
      setbtnText2('ON');
      setbulbColor2('lightOff')
    }
  }

  return (
    <>
      
      <Outerdiv>
        <div>
          <Newdiv variant={bulbColor}/>
          <Mybtn onClick={bulbToggle}>{btnText}</Mybtn>
        </div>
        <Innerdiv>
          <Newdiv variant={bulbColor2}/>
          <Mybtn onClick={bulbToggle2}>{btnText2}</Mybtn>
        </Innerdiv>
      </Outerdiv>

    </>
  )
}

const Outerdiv = styled.div`
    width: 415px;
    height: 500px;
    margin-left: 35%;
    margin-top: 90px;
    border: 2px solid black;
    padding: 30px;
    display: flex;
`;

const Innerdiv = styled.div`
  position: relative;
  right: -150px;
`;

const Newdiv = styled.div`
    border-radius: 50%;
    width: 130px;
    height: 130px;
    border: 1px solid ;
    
    ${(props)=>
    props.variant === "lightOn" &&
    css`
     background-color: #ffff00de; 
    `}

    ${(props)=>
    props.variant === "lightOff" &&
    css`
     background-color: none; 
    `}
`;

const Mybtn = styled.button`
    width: 90px;
    height: 30px;
    margin-top: 200px;
    margin-left: 12px;
`;