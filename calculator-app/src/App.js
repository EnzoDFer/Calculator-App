import { useState } from 'react';
import './App.css';
import Screen from './Screen';
import DigitButton from './DigitButton';

const App = () => {
  const [digit,setDigit] = useState('');
  const [activeFunction,setActiveFunction] = useState('');

  return (
    <div className="container">
      <Screen activePhrase={activeFunction}/>
      <div className="interactables">
        <DigitButton onClick={(value)=>(value)} value={'1'}></DigitButton>
        <DigitButton onClick={(value)=>(value)} value={'2'}></DigitButton>
        <DigitButton onClick={(value)=>(value)} value={'3'}></DigitButton>
        <DigitButton onClick={(value)=>(value)} value={'('}></DigitButton>
        <DigitButton onClick={(value)=>(value)} value={')'}></DigitButton>
        <DigitButton onClick={(value)=>(value)} value={'*'}></DigitButton>
        <DigitButton onClick={(value)=>(value)} value={'-'}></DigitButton>
        <DigitButton onClick={(value)=>(value)} value={'1'}></DigitButton>
        <DigitButton onClick={(value)=>(value)} value={'2'}></DigitButton>
        <DigitButton onClick={(value)=>(value)} value={'3'}></DigitButton>
        <DigitButton onClick={(value)=>(value)} value={'+'}></DigitButton>
        <DigitButton onClick={(value)=>(value)} value={'5'}></DigitButton>
        <DigitButton onClick={(value)=>(value)} value={'6'}></DigitButton>
        <DigitButton onClick={(value)=>(value)} value={'7'}></DigitButton>
        <DigitButton onClick={(value)=>(value)} value={'/'}></DigitButton>
        <DigitButton onClick={(value)=>(value)} value={'9'}></DigitButton>
        <DigitButton onClick={(value)=>(value)} value={'10'}></DigitButton>
        <DigitButton onClick={(value)=>(value)} value={'11'}></DigitButton>
        <DigitButton onClick={(value)=>(value)} value={'12'}></DigitButton>
        <DigitButton onClick={(value)=>(value)} value={'13'}></DigitButton>
        <DigitButton onClick={(value)=>(value)} value={'14'}></DigitButton>
        <DigitButton onClick={(value)=>(value)} value={'15'}></DigitButton>
        <DigitButton onClick={(value)=>(value)} value={'16'}></DigitButton>
        <div className="digits">
          <DigitButton onClick={(value)=>(value)} value={'7'}></DigitButton>
          <DigitButton onClick={(value)=>(value)} value={'8'}></DigitButton>
          <DigitButton onClick={(value)=>(value)} value={'9'}></DigitButton>
          <DigitButton onClick={(value)=>(value)} value={'4'}></DigitButton>
          <DigitButton onClick={(value)=>(value)} value={'5'}></DigitButton>
          <DigitButton onClick={(value)=>(value)} value={'6'}></DigitButton>
          <DigitButton onClick={(value)=>(value)} value={'1'}></DigitButton>
          <DigitButton onClick={(value)=>(value)} value={'2'}></DigitButton>
          <DigitButton onClick={(value)=>(value)} value={'3'}></DigitButton>
          <DigitButton onClick={(value)=>(value)} value={'0'}></DigitButton>
          <DigitButton onClick={(value)=>(value)} value={'.'}></DigitButton>
          <DigitButton onClick={(value)=>(value)} value={'='}></DigitButton>
        </div>
      </div>
    </div>
  );
}

export default App;
