import DigitButton from "./DigitButton";

const Interactables = () => {
  return (
    <div className="interactables">
        <DigitButton onClick={(value)=>alert(value)} value={'1'}></DigitButton>
        <DigitButton onClick={(value)=>alert(value)} value={'2'}></DigitButton>
        <DigitButton onClick={(value)=>alert(value)} value={'3'}></DigitButton>
        <DigitButton onClick={(value)=>alert(value)} value={'('}></DigitButton>
        <DigitButton onClick={(value)=>alert(value)} value={')'}></DigitButton>
        <DigitButton onClick={(value)=>alert(value)} value={'*'}></DigitButton>
        <DigitButton onClick={(value)=>alert(value)} value={'-'}></DigitButton>
        <DigitButton onClick={(value)=>alert(value)} value={'1'}></DigitButton>
        <DigitButton onClick={(value)=>alert(value)} value={'2'}></DigitButton>
        <DigitButton onClick={(value)=>alert(value)} value={'3'}></DigitButton>
        <DigitButton onClick={(value)=>alert(value)} value={'4'}></DigitButton>
        <DigitButton onClick={(value)=>alert(value)} value={'5'}></DigitButton>
        <DigitButton onClick={(value)=>alert(value)} value={'6'}></DigitButton>
        <DigitButton onClick={(value)=>alert(value)} value={'7'}></DigitButton>
        <DigitButton onClick={(value)=>alert(value)} value={'/'}></DigitButton>
        <DigitButton onClick={(value)=>alert(value)} value={'9'}></DigitButton>
        <DigitButton onClick={(value)=>alert(value)} value={'10'}></DigitButton>
        <DigitButton onClick={(value)=>alert(value)} value={'11'}></DigitButton>
        <DigitButton onClick={(value)=>alert(value)} value={'12'}></DigitButton>
        <DigitButton onClick={(value)=>alert(value)} value={'13'}></DigitButton>
        <DigitButton onClick={(value)=>alert(value)} value={'14'}></DigitButton>
        <DigitButton onClick={(value)=>alert(value)} value={'15'}></DigitButton>
        <DigitButton onClick={(value)=>alert(value)} value={'16'}></DigitButton>
        <div className="digits">
          <DigitButton onClick={(value)=>alert(value)} value={'7'}></DigitButton>
          <DigitButton onClick={(value)=>alert(value)} value={'8'}></DigitButton>
          <DigitButton onClick={(value)=>alert(value)} value={'9'}></DigitButton>
          <DigitButton onClick={(value)=>alert(value)} value={'4'}></DigitButton>
          <DigitButton onClick={(value)=>alert(value)} value={'5'}></DigitButton>
          <DigitButton onClick={(value)=>alert(value)} value={'6'}></DigitButton>
          <DigitButton onClick={(value)=>alert(value)} value={'1'}></DigitButton>
          <DigitButton onClick={(value)=>alert(value)} value={'2'}></DigitButton>
          <DigitButton onClick={(value)=>alert(value)} value={'3'}></DigitButton>
          <DigitButton onClick={(value)=>alert(value)} value={'0'}></DigitButton>
          <DigitButton onClick={(value)=>alert(value)} value={'.'}></DigitButton>
          <DigitButton onClick={(value)=>alert(value)} value={'='}></DigitButton>
        </div>
      </div>
  );
}

export default Interactables;
