import { useReducer } from 'react';
import './App.css';
import Screen from './Screen';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';

function reducer(state,action) {
  switch (action.type) {
    case 'add_digit':
      return {
        ...state, 
        activeNum: `${state.activeNum || ''}${action.payload}`
      }
    case 'all_clear':
      return {
        ...state,
        activeNum: "",
        inactiveNum: "",
      }
      case 'clear_entry':
        return {
          ...state,
          activeNum: '',
        }
      case 'operation':
        return {
          ...state,
          inactiveNum: `${state.activeNum}${action.payload}`,
          activeNum: '',
        }
  }
}

const initialState = {
  activeNum:'',
  inactiveNum:'',
  operation:'',
};

const App = () => {
  const [{activeNum,inactiveNum,operation},dispatch] = useReducer(reducer,initialState);

  return (
    <div className="container">
      <Screen active={activeNum} inactive={inactiveNum} operation={operation}/>
      <div className="interactables">
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'1'})} value={'1'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'2'})} value={'2'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'3'})} value={'3'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'('})} value={'('}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:')'})} value={')'}/>
        <OperationButton onClick={()=>dispatch({type: 'operation', payload:'*'})} operation={'*'}/>
        <OperationButton onClick={()=>dispatch({type: 'add_digit', payload:'-'})} operation={'-'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'1'})} value={'1'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'2'})} value={'2'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'3'})} value={'3'}/>
        <OperationButton onClick={()=>dispatch({type: 'add_digit', payload:'+'})} operation={'+'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'5'})} value={'5'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'6'})} value={'6'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'7'})} value={'7'}/>
        <OperationButton onClick={()=>dispatch({type: 'add_digit', payload:'/'})} operation={'/'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'9'})} value={'9'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'10'})} value={'10'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'11'})} value={'11'}/>
        <DigitButton onClick={()=>dispatch({type: 'all_clear', payload:'AC'})} value={'AC'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'13'})} value={'13'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'14'})} value={'14'}/>
        <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'15'})} value={'15'}/>
        <DigitButton onClick={()=>dispatch({type: 'clear_entry', payload:'CE'})} value={'CE'}/>
        <div className="digits">
          <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'7'})} value={'7'}/>
          <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'8'})} value={'8'}/>
          <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'9'})} value={'9'}/>
          <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'4'})} value={'4'}/>
          <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'5'})} value={'5'}/>
          <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'6'})} value={'6'}/>
          <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'1'})} value={'1'}/>
          <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'2'})} value={'2'}/>
          <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'3'})} value={'3'}/>
          <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'0'})} value={'0'}/>
          <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'.'})} value={'.'}/>
          <DigitButton onClick={()=>dispatch({type: 'add_digit', payload:'='})} value={'='}/>
        </div>
      </div>
    </div>
  );
}

export default App;